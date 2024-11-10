import { useState } from 'react';
import { ChartBarIcon, UsersIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    { icon: ChartBarIcon, label: 'Views', value: '12.5K', change: '+15%' },
    { icon: UsersIcon, label: 'New Followers', value: '845', change: '+8%' },
    { icon: HeartIcon, label: 'Likes', value: '3.2K', change: '+12%' },
    { icon: ShareIcon, label: 'Shares', value: '1.1K', change: '+5%' }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=1',
      title: 'Traditional Dance Performance',
      views: '5.2K',
      likes: '1.2K',
      date: '2 days ago'
    },
    {
      id: 2,
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=2',
      title: 'Cooking Tutorial',
      views: '3.8K',
      likes: '956',
      date: '4 days ago'
    },
    {
      id: 3,
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=3',
      title: 'Music Performance',
      views: '2.9K',
      likes: '734',
      date: '1 week ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-white">Overview</h2>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:border-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-white">{stat.value}</span>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-lg font-medium text-white mb-4">Top Performing Videos</h2>
        <div className="space-y-4">
          {videos.map((video) => (
            <div key={video.id} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">{video.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{video.views} views</span>
                  <span className="text-sm text-gray-400">{video.likes} likes</span>
                  <span className="text-sm text-gray-400">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}