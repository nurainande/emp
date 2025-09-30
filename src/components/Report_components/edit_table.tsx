import React from 'react';
import { Link } from 'react-router-dom';

const EditReportTable: React.FC = () => {
    const [query, setQuery] = React.useState<string>('');
    // Derive approval from current header state (static for now)
    const isApproved = true;
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const guarded = {
        onFocus: () => {
            if (isApproved) setShowModal(true);
        },
        onMouseDown: (e: React.MouseEvent) => {
            if (isApproved) {
                e.preventDefault();
                setShowModal(true);
            }
        },
    } as const;
    return (
        <section className="w-full mb-10">
            {/* Header */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                {/* Top row: title and ID */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Link to="/dashboard/edit-incident">
                            <h2 className="fs-24 font-semibold text-[#2D1B3D]">Incident Tag Report Details</h2>
                        </Link>
                        <p className="text-[16px] text-gray-600">Here's a detailed Look at your tag report.</p>
                        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-[10px]">Report Approved</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-[url('https://i.pravatar.cc/60')] bg-cover bg-center shadow-sm" />
                        <div className="text-base font-semibold text-black">ID I-01225</div>
                    </div>
                </div>

                {/* Bottom row: search and actions aligned right */}
             
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
            </div>

            {/* Purple Section Header */}
            <div className="rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
                <div className="text-sm font-semibold">Tag Details</div>
                <div className="text-[14px] text-white/80">What did you find?</div>
            </div>

            {/* Form Card */}
            <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Tag Type</label>
                        <div className="relative">
                            <select aria-disabled={isApproved} tabIndex={isApproved ? -1 : 0} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                                <option>Incident</option>
                                <option>Inspection</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Source</label>
                        <div className="relative">
                            <select aria-disabled={isApproved} tabIndex={isApproved ? -1 : 0} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                                <option>Environmental</option>
                                <option>Operational</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="mb-2 block text-xs text-gray-500 fs-16">Describe source (i.e the actual / speculated cause of the damage)</label>
                    <textarea readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="h-28 w-full resize-none rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none" defaultValue="The walls are cracked as a result of the swampiness of the environment" />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Extent of Damage</label>
                        <div className="relative">
                            <select aria-disabled={isApproved} tabIndex={isApproved ? -1 : 0} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                                <option>Minor</option>
                                <option>Moderate</option>
                                <option>Severe</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Any Previous Report?</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none" placeholder="Click To Link" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Risk Level</label>
                        <div className="relative">
                            <select aria-disabled={isApproved} tabIndex={isApproved ? -1 : 0} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none">
                                <option>Choose Risk Level</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Attachments */}
                <div className="mt-6">
                    <div className="mb-3 text-sm font-semibold text-gray-800">Attachments</div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="relative h-56 overflow-hidden rounded-xl border border-gray-200 bg-white">
                            <img className="h-full w-full object-cover" src="/src/assets/Added Media.png" alt="attachment" />
                            <button onMouseDown={(e) => { if (isApproved) { e.preventDefault(); setShowModal(true); } }} className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-xs text-white shadow-sm">Delete</button>
                            <span className="absolute bottom-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white">•</span>
                        </div>
                        <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"><TargetIcon /></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="mt-6 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
                <div className="text-sm font-semibold">Location <span className="text-white/70 text-xs">(Auto fills)</span></div>
                <div className="text-xs text-white/80">Where did tagging take place?</div>
            </div>
            <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Facility</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Comodore" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Room</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Main Laboratory" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Asset</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Sink" />
                    </div>
                </div>
            </div>

            {/* Personnel */}
            <div className="mt-6 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
                <div className="text-sm font-semibold">Personnel <span className="text-white/70 text-xs">(Auto fills)</span></div>
                <div className="text-xs text-white/80">Who worked on this?</div>
            </div>
            <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Tagged by</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Olatunji Chinedu Shehu" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Date</label>
                        <div className="relative">
                            <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} type="text" className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="22nd August, 2025" />
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><CalendarIcon /></span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Reviewed by</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Mari Lee Shua" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Date</label>
                        <div className="relative">
                            <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} type="text" className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-10 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="2nd September, 2025" />
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><CalendarIcon /></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Report Status */}
            <div className="mt-20 rounded-t-xl bg-[#331C4A] px-4 py-3 text-white">
                <div className="text-sm font-semibold">Report Status <span className="text-white/70 text-xs">(Reviewer Use)</span></div>
                <div className="text-xs text-white/80">What stage is the report at?</div>
            </div>
            <div className="rounded-b-xl border border-t-0 border-gray-200 bg-white p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Report Status</label>
                        <input readOnly aria-disabled className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700" defaultValue="Approved" />
                    </div>
                    <div>
                        <label className="mb-2 block text-xs text-gray-500">Issues Assigned To</label>
                        <input readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#4B2A6A] focus:outline-none" defaultValue="Maintenance Team" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-xs text-gray-500">Reviewer's Comment</label>
                    <textarea readOnly={isApproved} aria-disabled={isApproved} {...guarded} className="h-36 w-full resize-none rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#4B2A6A] focus:outline-none" placeholder="What your reviewer thinks about your review" />
                </div>
            </div>
            {/* Lock modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
                    <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">Sorry!</h3>
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                            <img src="/src/assets/x-circle.png" alt="x" className="h-20 w-20" />
                        </div>
                        <p className="mb-6 text-sm text-gray-600">Your report has been reviewed and cannot be edited.</p>
                        <button onClick={() => setShowModal(false)} className="mx-auto rounded-full bg-white px-4 py-2 text-sm font-medium text-green-600 hover:underline">Okay, thank you.</button>
                    </div>
                </div>
            )}
        </section>
    );
};

function SearchIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
            <circle cx="11" cy="11" r="7" className="stroke-current" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" className="stroke-current" />
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

// Removed unused UserIcon, SettingsIcon, UploadIcon

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

function DownloadIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
            <path d="M12 3v12" />
            <path d="M7 10l5 5 5-5" />
            <path d="M5 21h14" />
        </svg>
    );
}

export default EditReportTable;


