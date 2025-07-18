"use client"
import { useState, useEffect } from 'react';
import { CalendarIcon, CurrencyDollarIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOpportunities([
        {
          id: 1,
          title: 'Digital Citizen Services Platform',
          agency: 'Department of Immigration and Emigration',
          budget: '50,000,000',
          deadline: '2025-08-15',
          description: 'Develop a comprehensive digital platform for citizen services including passport applications, visa processing, and document verification.',
          requirements: ['React/Next.js frontend', 'Node.js backend', 'PostgreSQL database', 'Government security compliance'],
          status: 'open'
        },
        {
          id: 2,
          title: 'Tax Management System Modernization',
          agency: 'Inland Revenue Department',
          budget: '75,000,000',
          deadline: '2025-09-01',
          description: 'Modernize the existing tax management system with real-time processing, mobile app integration, and advanced analytics.',
          requirements: ['Java/Spring Boot', 'Mobile app development', 'Data analytics', 'API integration'],
          status: 'open'
        },
        {
          id: 3,
          title: 'Smart Agriculture Monitoring System',
          agency: 'Ministry of Agriculture',
          budget: '35,000,000',
          deadline: '2025-07-30',
          description: 'IoT-based system for monitoring crop conditions, weather data, and providing recommendations to farmers.',
          requirements: ['IoT integration', 'Machine learning', 'Mobile applications', 'Data visualization'],
          status: 'open'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Government Opportunities</h1>
          <p className="mt-2 text-gray-600">Browse and apply for government procurement opportunities</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid gap-6">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{opportunity.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {opportunity.status}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <BuildingOffice2Icon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {opportunity.agency}
                  </div>
                  
                  <p className="mt-3 text-gray-600">{opportunity.description}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        LKR {parseInt(opportunity.budget).toLocaleString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        Due: {new Date(opportunity.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Apply Now
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.requirements.map((req, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}