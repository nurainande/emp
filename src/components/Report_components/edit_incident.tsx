import React from 'react';

const EditIncident: React.FC = () => {
  const [query, setQuery] = React.useState<string>('');

  return (
    <section className="w-full mb-10">
      {/* Page header */}
          {/* <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#2D1B3D]">Report</h1>
        <div className="flex items-center gap-3 text-gray-600">
          <RoundIcon><SearchIcon /></RoundIcon>
          <RoundIcon><ClockIcon /></RoundIcon>
          <RoundIcon><BellIcon /></RoundIcon>
        </div>
      </div> */}

      {/* Main card */}
          <div className="bg-white p-4 pt-8">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="fs-24 sm:text-[18px] font-semibold text-[#2D1B3D]">Incident Tag Report Details</h2>
            <p className="fs-16 text-gray-600 mt-1">We’re excited to know what you found.</p>
          </div>
          <div className="text-[14px] sm:text-base font-semibold text-black">ID I-01225</div>
        </div>

        {/* Search + actions */}
        <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <div className="mb-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                      <div className="relative w-full sm:flex-1">
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
                              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center text-gray-600"
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
                              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                              aria-label="Print"
                          >
                              <PrintIcon />
                          </button>
                          <button
                              type="button"
                              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                              aria-label="Download"
                          >
                              <DownloadIcon />
                          </button>
                      </div>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-md bg-[#3C1C59] px-6 py-2 text-[16px] font-medium text-white cursor-pointer">Save</button>
        </div>
      </div>

      {/* Tag Details header */}
      <div className="mt-5 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
        <div className="text-[24] font-semibold ">Tag Details</div>
        <div className="text-[14px] text-white/80">What did you find?</div>
      </div>

      {/* Form card */}
      <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs text-gray-500">Tag Type</label>
            <div className="relative">
              <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                <option>Choose Tag Type</option>
                <option>Incident</option>
                <option>Inspection</option>
                          </select>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Source <span className="text-gray-400 text-[10px]">(Learn More)</span></label>
            <div className="relative">
              <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                <option>Choose Source</option>
                <option>Environmental</option>
                <option>Operational</option>
                          </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-xs text-gray-500">Describe source <span className="text-gray-400">(i.e the actual / speculated cause of the damage)</span></label>
          <textarea className="h-28 w-full resize-none rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none" placeholder="Tell us how the source caused the damage you saw" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs text-gray-500">Extent of Damage <span className="text-gray-400 text-[10px]">(Learn More)</span></label>
            <div className="relative">
              <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                <option>Minor</option>
                <option>Moderate</option>
                <option>Severe</option>
                          </select>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Any Previous Report?</label>
            <div className="relative">
              <input className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none" placeholder="Click To Link" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Risk Level</label>
            <div className="relative">
              <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                <option>Choose Risk Level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                          </select>
            </div>
          </div>
        </div>
      </div>

      {/* Attachments */}
          <div className="mt-6 w-90">
        <div className="mb-3 fs-24 font-semibold text-[#696969]">Attachments</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative h-56 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1470&auto=format&fit=crop" alt="attachment" />
                      <button className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-xs text-white shadow-sm cursor-pointer">Delete</button>
            <span className="absolute bottom-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white">•</span>
          </div>
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"><TargetIcon /></span>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-6 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
        <div className="text-[16px] font-semibold">Location <span className="text-white/70 text-xs">(Auto fills)</span></div>
        <div className="text-[14px] text-white/80">Where did tagging take place?</div>
      </div>
      <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs text-gray-500">Facility</label>
            <input className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Comodore" />
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Room</label>
            <input className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Main Laboratory" />
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Asset</label>
            <input className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Sink" />
          </div>
        </div>
      </div>

      {/* Personnel */}
      <div className="mt-6 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
        <div className="text-[16px] font-semibold">Personnel <span className="text-white/70 text-xs">(Auto fills)</span></div>
        <div className="text-[14px] text-white/80">Who worked on this?</div>
      </div>
      <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs text-gray-500">Tagged by</label>
            <input className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Olatunji Chinedu Shehu" />
          </div>
          <div>
            <label className="mb-2 block text-xs text-gray-500">Date</label>
            <div className="relative">
              <input type="text" className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="22nd August, 2025" />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><CalendarIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function RoundIcon({ children, size = 'md' }: { children: React.ReactNode; size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  return (
    <span className={`inline-flex ${cls} items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm`}>
      {children}
    </span>
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

function UserIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  );
}

function ClockIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
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

function DownloadIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function TargetIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CalendarIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className="stroke-current" />
      <line x1="16" y1="2" x2="16" y2="6" className="stroke-current" />
      <line x1="8" y1="2" x2="8" y2="6" className="stroke-current" />
      <line x1="3" y1="10" x2="21" y2="10" className="stroke-current" />
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

export default EditIncident;


