const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// const { pool } = require('./db/pool');

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.supabaseUrl;
const supabaseKey = process.env.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/contacts', async (req, res) => {
  const { data, error } = await supabase
    .from('contacts')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// app.get('/api/projects', async (req, res) => {
//   try {
//     console.log('/api/projects')
//     const result = await pool.query('SELECT * FROM projects');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });