const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()

app.use(bodyParser.json())

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  console.log('Login request received:', { username, password }) // 添加日志
  const query = 'SELECT * FROM test_table WHERE name = ? AND password = ?'
  db.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Database query error:', error)
      res.status(500).json({ success: false, message: 'An error occurred. Please try again.' })
      return
    }
    console.log('Database query results:', results) // 添加日志
    if (results.length > 0) {
      res.json({ success: true })
    } else {
      res.json({ success: false, message: 'Invalid username or password' })
    }
  })
})

app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM test_table', (error, results) => {
    if (error) {
      console.error('Database query error:', error)
      res.status(500).json({ success: false, message: 'An error occurred. Please try again.' })
      return
    }
    res.json(results)
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
