const mysql=require('mysql')

const con=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"dat130299",
    database:'traveloka',
    port:3306
})

module.exports=con
