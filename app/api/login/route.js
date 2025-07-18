export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Simulate authentication
    if (email === 'demo@example.com' && password === 'password') {
      const user = {
        id: 1,
        name: 'John Doe',
        email: 'demo@example.com',
        company: 'TechCorp Solutions'
      };
      
      res.status(200).json({ 
        message: 'Login successful', 
        user,
        token: 'mock-jwt-token'
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
