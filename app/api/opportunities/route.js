export default function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate database query
    const opportunities = [
      {
        id: 1,
        title: 'Digital Citizen Services Platform',
        agency: 'Department of Immigration and Emigration',
        budget: '50,000,000',
        deadline: '2025-08-15',
        description: 'Develop a comprehensive digital platform for citizen services including passport applications, visa processing, and document verification.',
        requirements: ['React/Next.js frontend', 'Node.js backend', 'PostgreSQL database', 'Government security compliance'],
        status: 'open',
        createdAt: '2025-07-01'
      },
      {
        id: 2,
        title: 'Tax Management System Modernization',
        agency: 'Inland Revenue Department',
        budget: '75,000,000',
        deadline: '2025-09-01',
        description: 'Modernize the existing tax management system with real-time processing, mobile app integration, and advanced analytics.',
        requirements: ['Java/Spring Boot', 'Mobile app development', 'Data analytics', 'API integration'],
        status: 'open',
        createdAt: '2025-06-28'
      },
      {
        id: 3,
        title: 'Smart Agriculture Monitoring System',
        agency: 'Ministry of Agriculture',
        budget: '35,000,000',
        deadline: '2025-07-30',
        description: 'IoT-based system for monitoring crop conditions, weather data, and providing recommendations to farmers.',
        requirements: ['IoT integration', 'Machine learning', 'Mobile applications', 'Data visualization'],
        status: 'open',
        createdAt: '2025-06-25'
      },
      {
        id: 4,
        title: 'Healthcare Management System',
        agency: 'Ministry of Health',
        budget: '90,000,000',
        deadline: '2025-08-30',
        description: 'Comprehensive healthcare management system for hospitals and clinics with patient records, appointment scheduling, and billing.',
        requirements: ['HIPAA compliance', 'React/Angular frontend', 'Microservices architecture', 'Real-time notifications'],
        status: 'open',
        createdAt: '2025-06-20'
      },
      {
        id: 5,
        title: 'Education Portal Development',
        agency: 'Ministry of Education',
        budget: '45,000,000',
        deadline: '2025-09-15',
        description: 'Online learning platform for schools with course management, assessment tools, and student tracking.',
        requirements: ['Learning Management System', 'Mobile responsive', 'Video streaming', 'Analytics dashboard'],
        status: 'open',
        createdAt: '2025-06-15'
      }
    ];
    
    res.status(200).json(opportunities);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}