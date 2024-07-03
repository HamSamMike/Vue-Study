let mysql = require('mysql')
// 配置链接数据库的参数
let db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  port: '3306',
  password: 'QIN780413', // 密码
  database: 'test' // 数据库名字
})

module.exports = db
