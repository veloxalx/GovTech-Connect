"use client"
import { useState, useEffect } from 'react';
import { BellIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'John Doe', company: 'TechCorp Solutions' });
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    totalApplications: 0,
    pending: 0,
    approved: 0,
    completed: 0
  });

  useEffect(() => {
    // Simulate data loading
    setApplications([
      {
        id: 1,
        title: 'Digital Citizen Services Platform',
        agency: 'Department of Immigration',
        status: 'pending',
        submittedDate: '2025-07-10',
        budget: '50,000,000'
      },
      {
        id: 2,
        title: 'Tax Management System',
        agency: 'Inland Revenue Department',
        status: 'approved',
        submittedDate: '2025-07-05',
        budget: '75,000,000'
      }
    ]);

    setStats({
      totalApplications: 12,
      pending: 5,
      approved: 3,
      completed: 4
    });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">Welcome back, {user.name} from {user.company}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { name: 'Total Applications', value: stats.totalApplications, icon: ChartBarIcon, color: 'indigo' },
            { name: 'Pending Review', value: stats.pending, icon: ClockIcon, color: 'yellow' },
            { name: 'Approved', value: stats.approved, icon: CheckCircleIcon, color: 'green' },
            { name: 'Completed', value: stats.completed, icon: CheckCircleIcon, color: 'blue' },
          ].map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="text-lg font-medium text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Applications</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Track the status of your government contract applications
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {applications.map((application) => (
              <li key={application.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {application.title}
                        </p>
                        <p className="text-sm text-gray-500">
                        Submitted: {new Date(application.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              <div className="mt-3 space-y-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Browse New Opportunities
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <div className="mt-3 space-y-2">
                <div className="text-sm text-gray-600">New opportunity matching your skills</div>
                <div className="text-sm text-gray-600">Application status updated</div>
                <div className="text-sm text-gray-600">Payment processed successfully</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
