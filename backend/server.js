require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false // INSECURE - for development only!
  }
});
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

pool.query('SELECT NOW()')
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch(err => console.error('❌ PostgreSQL connection failed:', err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Helper function to execute queries
async function query(text, params) {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

// JWT generation
// function generateToken(user) {
//   return jwt.sign(
//     { id: user.id, email: user.email },
//     process.env.JWT_SECRET,
//     { expiresIn: '1h' }
//   );
// }

// Routes
app.post('/api/auth/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Store plain password (for development only)
    await pool.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
      [firstName, lastName, email, password]
    );

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error during login' });
  }
});

// Protected route example
app.get('/api/auth/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await query('SELECT id, first_name, last_name, email FROM users WHERE id = $1', [decoded.id]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});