import React, { useState } from 'react';
import { Search, Calendar, Filter, Download, Printer, MoreHorizontal, ChevronDown } from 'lucide-react';

const DashboardActivitiesLog = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const staticData = [
    {
      tagId: 'I-0125',
      type: 'Incident',
      facility: 'Captain Nudge',
      source: 'Chemical',
      extent: '10%',
      status: 'Unresolved',
      tagger: 'Shola Green',
      date: '3/9/2025'
    },
    {
      tagId: 'S-0225',
      type: 'Sample',
      facility: 'Fruit Lab',
      source: 'Surface',
      extent: '10CFU/cm2',
      status: 'Positive',
      tagger: 'Marvel Stone',
      date: '3/9/2025'
    },
    {
      tagId: 'S-0325',
      type: 'Sample',
      facility: 'Beeb Flow',
      source: 'Surface',
      extent: '50CFU/cm2',
      status: 'Negative',
      tagger: 'Bluey Pink',
      date: '4/9/2025'
    },
    {
      tagId: 'I-0425',
      type: 'Incident',
      facility: 'Situ Site',
      source: 'Structural',
      extent: '50%',
      status: 'Negative',
      tagger: 'Tamara Now',
      date: '4/9/2025'
    },
    {
      tagId: 'I-0525',
      type: 'Incident',
      facility: 'Neon Bacter',
      source: 'Environmental',
      extent: '88%',
      status: 'Unidentified',
      tagger: 'Salty Areem',
      date: '4/9/2025'
    },
    {
      tagId: 'S-0625',
      type: 'Sample',
      facility: 'Situ Site',
      source: 'Water',
      extent: '66CFU/cm2',
      status: 'Negative',
      tagger: 'Merlin Cyrus',
      date: '4/9/2025'
    }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(staticData.map(item => item.tagId));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (tagId, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, tagId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== tagId));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Positive': return 'text-green-600 bg-green-50';
      case 'Negative': return 'text-gray-600 bg-gray-50';
      case 'Unresolved': return 'text-yellow-600 bg-yellow-50';
      case 'Unidentified': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type) => {
    return type === 'Incident' ? 'text-red-600 bg-red-50' : 'text-blue-600 bg-blue-50';
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Activities Log</h1>
        
        <div className="flex items-center space-x-3">
          {/* Date filters */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
              <Calendar className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Start Date</span>
              <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
              <Calendar className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">End Date</span>
              <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
              <span className="text-sm text-gray-600">Monthly</span>
              <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
            </div>
            
            <div className="flex items-center bg-purple-600 text-white rounded-md px-3 py-2">
              <span className="text-sm font-medium">All</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, status, class..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3 ml-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Search className="h-5 w-5" />
          </button>
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
          <thead className="bg-purple-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3 rounded border-purple-300"
                    checked={selectedItems.length === staticData.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
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
            {staticData.map((item, index) => (
              <tr key={item.tagId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded border-gray-300"
                      checked={selectedItems.includes(item.tagId)}
                      onChange={(e) => handleSelectItem(item.tagId, e.target.checked)}
                    />
                    <span className="text-sm font-medium text-gray-900">{item.tagId}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.facility}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.source}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.extent}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.tagger}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
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