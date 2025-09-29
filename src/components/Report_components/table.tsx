import React from 'react';

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
  return (
    <section className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
        <h2 className="text-base font-semibold text-black sm:text-lg">Reports</h2>
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          {/* Date pickers */}
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm">
            <CalendarIcon />
            <span>Start Date</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm">
            <CalendarIcon />
            <span>End Date</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {/* Frequency */}
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-sm hover:bg-gray-50 sm:text-sm">
            <span>Monthly</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {/* All filter */}
          <button className="inline-flex items-center gap-2 rounded-full bg-[#4B2A6A] px-4 py-2 text-xs text-white sm:text-sm">
            <span>All</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mb-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search by name, status, class...."
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-20 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none"
          />
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 text-gray-500">
            <span className="h-4 w-4"><BellIcon /></span>
            <span className="h-4 w-4"><FilterIcon /></span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-[900px] w-full table-fixed md:min-w-full">
          <thead>
            <tr className="bg-[#331C4A] text-left text-xs text-white sm:text-sm">
              <th className="w-10 px-4 py-3 font-medium">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </th>
              <th className="px-4 py-3 font-medium">Facility</th>
              <th className="px-4 py-3 font-medium">Tagged Areas</th>
              <th className="px-4 py-3 font-medium">Total Tag</th>
              <th className="px-4 py-3 font-medium">Samples</th>
              <th className="px-4 py-3 font-medium">Incidents</th>
              <th className="px-4 py-3 font-medium">Reviewer</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-xs sm:text-sm">
            {data.map((row) => (
              <tr key={row.id} className="text-gray-800">
                <td className="px-4 py-4">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                </td>
                <td className="px-4 py-4">{row.facility}</td>
                <td className="px-4 py-4">{row.taggedAreas}</td>
                <td className="px-4 py-4">{row.totalTag}</td>
                <td className="px-4 py-4">{row.samples}</td>
                <td className="px-4 py-4">{row.incidents}</td>
                <td className="px-4 py-4">{row.reviewer}</td>
                <td className="px-4 py-4"><StatusPill status={row.status} /></td>
                <td className="px-4 py-4">{row.date}</td>
                <td className="px-4 py-4">
                  <button className="rounded p-1 hover:bg-gray-100">
                    <DotsVerticalIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end bg-white px-4 py-3">
          <button className="text-sm font-medium text-[#7D3CE0] hover:underline">See All</button>
        </div>
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

function BellIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function FilterIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 5h18M6 12h12M10 19h4" />
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

export default ReportsTable;


