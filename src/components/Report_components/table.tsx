import React from 'react';
import { useNavigate } from 'react-router-dom';

type ReportRow = {
  id: string;
  facility: string;
  taggedAreas: string;
  totalTag: string;
  samples: string;
  incidents: string;
  reviewer: string;
  status: 'Pending' | 'Approved' | 'Declined';
  date: string;
};

const data: ReportRow[] = [
  {
    id: '1',
    facility: 'Comodor',
    taggedAreas: '08',
    totalTag: '74',
    samples: '67',
    incidents: '07',
    reviewer: 'Sarah Swatti',
    status: 'Pending',
    date: '23/06/2025',
  },
  {
    id: '2',
    facility: 'Kampview',
    taggedAreas: '08',
    totalTag: '74',
    samples: '67',
    incidents: '07',
    reviewer: 'Hank looper',
    status: 'Approved',
    date: '23/06/2025',
  },
  {
    id: '3',
    facility: 'Comodor',
    taggedAreas: '08',
    totalTag: '74',
    samples: '67',
    incidents: '07',
    reviewer: 'Greenman Fill',
    status: 'Declined',
    date: '23/06/2025',
  },
  {
    id: '4',
    facility: 'Kampview',
    taggedAreas: '08',
    totalTag: '74',
    samples: '67',
    incidents: '07',
    reviewer: 'Hank looper',
    status: 'Approved',
    date: '23/06/2025',
  },
];

function StatusPill({ status }: { status: ReportRow['status'] }) {
  const styles = {
    Pending: 'text-yellow-500',
    Approved: 'text-green-500',
    Declined: 'text-red-500',
  }[status];
  return <span className={styles}>{status}</span>;
}

const ReportsTable: React.FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = React.useState<string>('');
    const [startDate, setStartDate] = React.useState<string>(''); // YYYY-MM-DD
    const [endDate, setEndDate] = React.useState<string>(''); // YYYY-MM-DD
    const startRef = React.useRef<HTMLInputElement>(null);
    const endRef = React.useRef<HTMLInputElement>(null);
    const monthRef = React.useRef<HTMLInputElement>(null);
    const [selectedMonth, setSelectedMonth] = React.useState<string>(''); // YYYY-MM

    function parseDisplayDateToDate(input: string): Date | null {
        // input like '23/06/2025' -> Date
        const parts = input.split('/');
        if (parts.length !== 3) return null;
        const [dd, mm, yyyy] = parts.map((p) => parseInt(p, 10));
        if (!dd || !mm || !yyyy) return null;
        const d = new Date(yyyy, mm - 1, dd);
        return isNaN(d.getTime()) ? null : d;
    }

    function parseIsoToDisplay(iso: string): string {
        // 'YYYY-MM-DD' -> 'DD/MM/YYYY'
        if (!iso) return '';
        const [y, m, d] = iso.split('-');
        if (!y || !m || !d) return '';
        return `${d}/${m}/${y}`;
    }

    function formatMonthLabel(ym: string): string {
        // 'YYYY-MM' -> 'Mon YYYY'
        if (!ym) return '';
        const [y, m] = ym.split('-');
        const date = new Date(parseInt(y, 10), parseInt(m, 10) - 1, 1);
        return date.toLocaleString(undefined, { month: 'short', year: 'numeric' });
    }

    const filteredData = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        const month = selectedMonth ? selectedMonth : '';
        return data.filter((row) => {
            // keyword match
            const haystack = [
                row.facility,
                row.reviewer,
                row.status,
                row.date,
                row.taggedAreas,
                row.totalTag,
                row.samples,
                row.incidents,
            ]
                .join(' ')
                .toLowerCase();
            const matchesKeyword = q ? haystack.includes(q) : true;

            // date range match
            const rowDate = parseDisplayDateToDate(row.date);
            const matchesStart = start && rowDate ? rowDate >= start : true;
            const matchesEnd = end && rowDate ? rowDate <= end : true;
            const matchesMonth = month && rowDate
                ? (rowDate.getFullYear() === parseInt(month.slice(0, 4), 10) && (rowDate.getMonth() + 1) === parseInt(month.slice(5, 7), 10))
                : true;

            return matchesKeyword && matchesStart && matchesEnd && matchesMonth;
        });
    }, [query, startDate, endDate, selectedMonth]);

    const [showAll, setShowAll] = React.useState<boolean>(false);
    const visibleData = React.useMemo(() => {
        return showAll ? filteredData : filteredData.slice(0, 4);
    }, [filteredData, showAll]);

  return (
    <section className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
        <h2 className="text-base font-semibold text-black fs-24">Reports</h2>
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          {/* Date pickers */}
                  <button
                      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 fs-16 text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm"
                      onClick={() => {
                          if (startRef.current && (startRef.current as any).showPicker) {
                              (startRef.current as any).showPicker();
                          } else {
                              startRef.current?.click();
                          }
                      }}
                  >
            <CalendarIcon />
                      <span>{startDate ? parseIsoToDisplay(startDate) : 'Start Date'}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
                  <input
                      ref={startRef}
                      type="date"
                      className="absolute h-0 w-0 opacity-0"
                      value={startDate}
                      max={endDate || undefined}
                      onChange={(e) => setStartDate(e.target.value)}
                  />
                  <button
                      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm"
                      onClick={() => {
                          if (endRef.current && (endRef.current as any).showPicker) {
                              (endRef.current as any).showPicker();
                          } else {
                              endRef.current?.click();
                          }
                      }}
                  >
            <CalendarIcon />
                      <span>{endDate ? parseIsoToDisplay(endDate) : 'End Date'}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
                  <input
                      ref={endRef}
                      type="date"
                      className="absolute h-0 w-0 opacity-0"
                      value={endDate}
                      min={startDate || undefined}
                      onChange={(e) => setEndDate(e.target.value)}
                  />
                  {/* Month filter */}
                  <button
                      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm"
                      onClick={() => {
                          if (monthRef.current && (monthRef.current as any).showPicker) {
                              (monthRef.current as any).showPicker();
                          } else {
                              monthRef.current?.click();
                          }
                      }}
                  >
                      <span>{selectedMonth ? formatMonthLabel(selectedMonth) : 'Monthly'}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
                  <input
                      ref={monthRef}
                      type="month"
                      className="absolute h-0 w-0 opacity-0"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                  />
          {/* All filter */}
          <button className="inline-flex items-center gap-2 rounded-full bg-[#4B2A6A] px-4 py-2 text-xs text-white sm:text-sm">
            <span>All</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
      </div>



          <div className="mb-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
              <div className="relative w-full sm:w-6/12">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search by name, status, class...."
                      className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-14 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:border-[#4B2A6A] focus:outline-none"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
          />
                  {/* Circular search icon button on the right edge */}
                  <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                      aria-label="Search"
                      tabIndex={-1}
                  >
                      <SearchIcon />
                  </button>
              </div>
              {/* Print and Download circular buttons */}
              <div className="flex items-center gap-2">
                  <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                      aria-label="Print"
                  >
                      <PrintIcon />
                  </button>
                  <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                      aria-label="Download"
                  >
                      <DownloadIcon />
                  </button>
        </div>
      </div>



      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-[900px] w-full table-fixed md:min-w-full">
          <thead>
            <tr className="bg-[#331C4A] text-left text-xs text-white sm:text-sm">
              <th className="w-10 px-4 py-3 font-medium">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </th>
              <th className="px-4 py-3 font-medium fs-16">Facility</th>
              <th className="px-4 py-3 font-medium fs-16">Tagged Areas</th>
              <th className="px-4 py-3 font-medium fs-16">Total Tag</th>
              <th className="px-4 py-3 font-medium fs-16">Samples</th>
              <th className="px-4 py-3 font-medium fs-16">Incidents</th>
              <th className="px-4 py-3 font-medium fs-16">Reviewer</th>
              <th className="px-4 py-3 font-medium fs-16">Status</th>
              <th className="px-4 py-3 font-medium fs-16">Date</th>
              <th className="px-4 py-3 font-medium fs-16">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-xs sm:text-sm">
                      {visibleData.map((row) => (
                          <tr
                              key={row.id}
                              className="text-gray-800 hover:bg-gray-50 cursor-pointer"
                              onClick={() => navigate(`/dashboard/reports/${row.id}`)}
                          >
                              <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                </td>
                <td className="px-4 py-4 fs-16">{row.facility}</td>
                <td className="px-4 py-4 fs-16">{row.taggedAreas}</td>
                <td className="px-4 py-4 fs-16">{row.totalTag}</td>
                <td className="px-4 py-4 fs-16">{row.samples}</td>
                <td className="px-4 py-4 fs-16">{row.incidents}</td>
                <td className="px-4 py-4 fs-16">{row.reviewer}</td>
                <td className="px-4 py-4 fs-16"><StatusPill status={row.status} /></td>
                <td className="px-4 py-4 fs-16">{row.date}</td>
                              <td className="px-4 py-4 fs-16" onClick={(e) => e.stopPropagation()}>
                                  <button className="rounded p-1 hover:bg-gray-100 cursor-pointer">
                    <DotsVerticalIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
              {filteredData.length >= 4 && (
                  <div className="flex items-center cursor-pointer justify-end bg-white px-4 py-3 fs-16">
                      <button
                          className="text-sm cursor-pointer font-medium text-[#7D3CE0] hover:underline"
                          onClick={() => setShowAll((v) => !v)}
                      >
                          {showAll ? 'See Less' : 'See All'}
                      </button>
                  </div>
              )}
      </div>
    </section>
  );
};

function ChevronDownIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function CalendarIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className="stroke-current" />
      <line x1="16" y1="2" x2="16" y2="6" className="stroke-current" />
      <line x1="8" y1="2" x2="8" y2="6" className="stroke-current" />
      <line x1="3" y1="10" x2="21" y2="10" className="stroke-current" />
    </svg>
  );
}

function SearchIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="11" cy="11" r="7" className="stroke-current" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" className="stroke-current" />
    </svg>
  );
}


function DotsVerticalIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
      <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
          <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </svg>
  );
}

function PrintIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
            <path d="M6 9V4h12v5" />
            <rect x="6" y="13" width="12" height="8" rx="2" />
            <path d="M6 17h12" />
        </svg>
    );
}

function DownloadIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
            <path d="M12 3v12" />
            <path d="M7 10l5 5 5-5" />
            <path d="M5 21h14" />
        </svg>
    );
}

export default ReportsTable;


