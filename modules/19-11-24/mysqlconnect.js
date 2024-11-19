const mysql =require('mysql2')

const connection  =mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'db1'
    }
)
connection.connect((err)=>{
    if(err){
        console.log('Error chech the connect',err)
    }
    else{
        console.log('connected successfully')
    }
})

const document  = {
    name:'jacob',age:'21',place:'calicut'
} 
// const sql='INSERT INTO students(name,age,place) values (?,?,?)'
// connection.query(sql,[document.name,document.age,document.place],(err,data)=>{

// if(err){
//     return
// }

// else{
//     console.log('data inserted.',data.insertId )
// }})

const select ='SELECT * from students'
connection.query(select,(err,data)=>{
    if(err){
        console.log('Error')
    }
    else{
        console.log('data readed',data)
    }
})

connection.end()