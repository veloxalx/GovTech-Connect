export default function handler(req, res) {
  if (req.method === 'POST') {
    const { opportunityId, proposal, timeline, budget, userId } = req.body;
    
    if (!opportunityId || !proposal || !timeline || !budget || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Simulate database save
    const application = {
      id: Date.now(),
      opportunityId,
      userId,
      proposal,
      timeline,
      budget,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    
    console.log('New application submitted:', application);
    
    res.status(201).json({ 
      message: 'Application submitted successfully', 
      application: { id: application.id, status: application.status }
    });
  } else if (req.method === 'GET') {
    // Get user applications
    const { userId } = req.query;
    
    // Simulate database query
    const applications = [
      {
        id: 1,
        opportunityId: 1,
        title: 'Digital Citizen Services Platform',
        agency: 'Department of Immigration',
        status: 'pending',
        submittedDate: '2025-07-10',
        budget: '50,000,000'
      },
      {
        id: 2,
        opportunityId: 2,
        title: 'Tax Management System',
        agency: 'Inland Revenue Department',
        status: 'approved',
        submittedDate: '2025-07-05',
        budget: '75,000,000'
      }
    ];
    
    res.status(200).json(applications);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}