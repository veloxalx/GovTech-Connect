export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, phone, services, experience, portfolio } = req.body;
    
    // Validate required fields
    if (!name || !email || !company || !phone || !services.length || !experience) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Simulate database save
    const user = {
      id: Date.now(),
      name,
      email,
      company,
      phone,
      services,
      experience,
      portfolio,
      status: 'pending_verification',
      createdAt: new Date().toISOString()
    };
    
    // In a real app, save to database here
    console.log('New user registered:', user);
    
    res.status(201).json({ 
      message: 'Registration successful', 
      user: { id: user.id, name: user.name, status: user.status }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}