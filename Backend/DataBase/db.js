const mysql= require ('mysql2')
const pool=mysql.createPool({
    host:'localhost',
    user:'sanket',
    password:'manager',
    database:'hackathon'

})

module.exports =pool
