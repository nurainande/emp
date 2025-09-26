import React, { useState } from 'react';
import { Calendar, ChevronDown, Search, Download, MoreHorizontal } from 'lucide-react';

interface TagLogEntry {
  id: string;
  totalTags: string;
  tagger: string;
  taggedAreas: string;
  samples: string;
  incidents: string;
  reviewer: string;
  date: string;
  status: 'Pending' | 'Declined' | 'Approved';
}

const tagLogData: TagLogEntry[] = [
  {
    id: '1',
    totalTags: '74',
    tagger: 'Arab Shawn',
    taggedAreas: '08',
    samples: '67',
    incidents: '07',
    reviewer: 'Sarah Swatti',
    date: '23/3/2025',
    status: 'Pending'
  },
  {
    id: '2',
    totalTags: '74',
    tagger: 'Runyi Bells',
    taggedAreas: '08',
    samples: '67',
    incidents: '07',
    reviewer: 'Kardi Blusela',
    date: '23/3/2025',
    status: 'Declined'
  },
  {
    id: '3',
    totalTags: '74',
    tagger: 'Cynthia Han',
    taggedAreas: '08',
    samples: '67',
    incidents: '07',
    reviewer: 'Pebble Vanis',
    date: '23/3/2025',
    status: 'Approved'
  }
];

const TagLog: React.FC = () => {
  const [startDate, setStartDate] = useState('Start Date');
  const [endDate, setEndDate] = useState('End Date');
  const [period, setPeriod] = useState('Monthly');
  const [filterAll, setFilterAll] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'Declined':
        return 'text-red-600 bg-red-50';
      case 'Approved':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getIncidentDot = (incidents: string) => {
    if (incidents === '07') {
      return 'bg-red-500';
    }
    return 'bg-gray-400';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Tag Log</h2>
          
          {/* Filter Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-gray-700">{startDate}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <Calendar size={16} className="text-gray-500" />
              <span className="text-gray-700">{endDate}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <span className="text-gray-700">{period}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            
            <div className="bg-purple-600 text-white rounded-lg px-3 py-2 text-sm font-medium">
              {filterAll}
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mt-4 flex items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Facility, Status, Locat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <Download size={16} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <Download size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-purple-700">
            <tr>
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                />
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Total Tags</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Tagger</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Tagged Areas</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Samples</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Incidents</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Reviewer</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tagLogData.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.totalTags}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.tagger}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.taggedAreas}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.samples}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getIncidentDot(entry.incidents)}`}></div>
                    <span className="text-sm text-gray-900">{entry.incidents}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.reviewer}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
        <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
          See All
        </button>
      </div>
    </div>
  );
};

export default TagLog;