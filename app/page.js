"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, UserGroupIcon, BuildingOffice2Icon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [stats, setStats] = useState({
    activeProviders: 0,
    totalProjects: 0,
    totalValue: 0
  });

  useEffect(() => {
    // Simulate fetching stats
    setStats({
      activeProviders: 156,
      totalProjects: 23,
      totalValue: 450000000 // LKR
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">GovTech Connect</h1>
                <p className="text-sm text-gray-500">Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Connect Innovation with
              <span className="text-indigo-600"> Government</span>
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Bridge the gap between Sri Lanka's young innovators and government procurement opportunities. 
              Sell your services and software solutions directly to government agencies.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/opportunities" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center">
                Browse Opportunities
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/register" className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-3 rounded-md text-lg font-medium border border-indigo-600">
                Join as Provider
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Empowering Digital Transformation
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Connecting government agencies with innovative solutions
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  <UserGroupIcon className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  Registered Providers
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  {stats.activeProviders}+
                </dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  <BuildingOffice2Icon className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  Active Projects
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  {stats.totalProjects}
                </dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  <CurrencyDollarIcon className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
                  Total Value (LKR)
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  {(stats.totalValue / 1000000).toFixed(0)}M
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Platform Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'Direct Government Access',
                    description: 'Connect directly with government agencies and ministries looking for innovative solutions.',
                  },
                  {
                    name: 'Transparent Bidding',
                    description: 'Fair and transparent procurement process with clear evaluation criteria.',
                  },
                  {
                    name: 'Secure Payments',
                    description: 'Guaranteed payments through secure government payment systems.',
                  },
                  {
                    name: 'Technical Support',
                    description: '24/7 platform support and guidance throughout the procurement process.',
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-700">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              <span className="block">Ready to start selling to the government?</span>
              <span className="block text-indigo-300">Join the platform today.</span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <Link href="/register" className="flex items-center justify-center bg-white border border-transparent rounded-md shadow-md px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-base text-gray-400">
              © 2025 GovTech Connect Sri Lanka. Empowering digital transformation through innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}