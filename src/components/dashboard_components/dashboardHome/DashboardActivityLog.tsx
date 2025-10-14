import React, { useState, ChangeEvent } from 'react';
import {
  Search,
  Calendar,
  Download,
  Printer,
  MoreHorizontal,
  ChevronDown,
} from 'lucide-react';

interface ActivityItem {
  tagId: string;
  type: 'Incident' | 'Sample';
  facility: string;
  source: string;
  extent: string;
  status: 'Positive' | 'Negative' | 'Unresolved' | 'Unidentified' | string;
  tagger: string;
  date: string; // Format: DD/MM/YYYY or similar
}

const DashboardActivitiesLog: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<'All' | 'Incident' | 'Sample'>('All');

  const staticData: ActivityItem[] = [
    {
      tagId: 'I-0125',
      type: 'Incident',
      facility: 'Captain Nudge',
      source: 'Chemical',
      extent: '10%',
      status: 'Unresolved',
      tagger: 'Shola Green',
      date: '2025-09-03',
    },
    {
      tagId: 'S-0225',
      type: 'Sample',
      facility: 'Fruit Lab',
      source: 'Surface',
      extent: '10CFU/cm2',
      status: 'Positive',
      tagger: 'Marvel Stone',
      date: '2025-09-03',
    },
    {
      tagId: 'S-0325',
      type: 'Sample',
      facility: 'Beeb Flow',
      source: 'Surface',
      extent: '50CFU/cm2',
      status: 'Negative',
      tagger: 'Bluey Pink',
      date: '2025-09-04',
    },
    {
      tagId: 'I-0425',
      type: 'Incident',
      facility: 'Situ Site',
      source: 'Structural',
      extent: '50%',
      status: 'Negative',
      tagger: 'Tamara Now',
      date: '2025-09-04',
    },
    {
      tagId: 'I-0525',
      type: 'Incident',
      facility: 'Neon Bacter',
      source: 'Environmental',
      extent: '88%',
      status: 'Unidentified',
      tagger: 'Salty Areem',
      date: '2025-09-04',
    },
    {
      tagId: 'S-0625',
      type: 'Sample',
      facility: 'Situ Site',
      source: 'Water',
      extent: '66CFU/cm2',
      status: 'Negative',
      tagger: 'Merlin Cyrus',
      date: '2025-09-04',
    },
  ];

  // Handle Select All / Individual
  const handleSelectAll = (checked: boolean): void => {
    if (checked) setSelectedItems(staticData.map((item) => item.tagId));
    else setSelectedItems([]);
  };

  const handleSelectItem = (tagId: string, checked: boolean): void => {
    if (checked) setSelectedItems((prev) => [...prev, tagId]);
    else setSelectedItems((prev) => prev.filter((id) => id !== tagId));
  };

  // Status Color
  const getStatusColor = (status: ActivityItem['status']): string => {
    switch (status) {
      case 'Positive':
        return 'text-green-600 bg-green-50';
      case 'Negative':
        return 'text-gray-600 bg-gray-50';
      case 'Unresolved':
        return 'text-yellow-600 bg-yellow-50';
      case 'Unidentified':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type: ActivityItem['type']): string => {
    return type === 'Incident'
      ? 'text-red-600 bg-red-50'
      : 'text-blue-600 bg-blue-50';
  };

  // Filtering Logic
  const filteredData = staticData.filter((item) => {
    const matchesSearch =
      item.facility.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tagger.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === 'All' ? true : item.type === selectedType;

    const matchesMonth =
      selectedMonth === 'All'
        ? true
        : new Date(item.date).getMonth() === parseInt(selectedMonth);

    const itemDate = new Date(item.date);
    const matchesDateRange =
      (!startDate || itemDate >= new Date(startDate)) &&
      (!endDate || itemDate <= new Date(endDate));

    return matchesSearch && matchesType && matchesMonth && matchesDateRange;
  });

  return (
    <div className="w-full bg-white py-6">
      {/* Header Filters */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Activities Log</h1>

        <div className="flex items-center space-x-2">
          {/* Start Date */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="date"
              value={startDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setStartDate(e.target.value)
              }
              className="text-sm text-gray-700 bg-transparent outline-none"
            />
          </div>

          {/* End Date */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="date"
              value={endDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEndDate(e.target.value)
              }
              className="text-sm text-gray-700 bg-transparent outline-none"
            />
          </div>

          {/* Monthly Dropdown */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <select
              value={selectedMonth}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedMonth(e.target.value)
              }
              className="text-sm text-gray-700 bg-transparent outline-none"
            >
              <option value="All">Months</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i.toString()}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
          </div>

          {/* Type Filter */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <select
              value={selectedType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedType(e.target.value as 'All' | 'Incident' | 'Sample')
              }
              className="text-sm text-gray-700 bg-transparent outline-none"
            >
              <option value="All">All Types</option>
              <option value="Incident">Incident</option>
              <option value="Sample">Sample</option>
            </select>
            <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex items-end justify-end p-6">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, status, class..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Printer className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#331C4A] text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 rounded border-purple-300"
                    checked={selectedItems.length === filteredData.length}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSelectAll(e.target.checked)
                    }
                  />
                  Tag ID
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium">Type</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Facility</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Source</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Extent</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Tagger</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.tagId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded border-gray-300"
                      checked={selectedItems.includes(item.tagId)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleSelectItem(item.tagId, e.target.checked)
                      }
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {item.tagId}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                      item.type
                    )}`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.facility}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.extent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.tagger}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="px-6 py-4 text-center text-gray-500 text-sm"
                >
                  No records found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end p-6 border-t border-gray-200">
        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
          See All
        </button>
      </div>
    </div>
  );
};

export default DashboardActivitiesLog;
