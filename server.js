const  express = require('express');
const mysql = require('mysql'); 
const myconn =  require('express-myconnection') 
///instale un paquete cors
const cors = require('cors'); 

const jwt = require('jsonwebtoken');

const routes = require('./routes');

const app = express()

app.set('port', process.env.PORT || 9000 )
const dbOptions = { 
host: '173.201.185.36',
user: 'adminProyection2',
password: 'Entrada2021.',
database: 'proyection2'} 

///hice una lista de dominos autorizados para cors
const whiteList = ['https://react.proyection.net','https://proyection.net']
///agregue el cors con la lista blanca a mi appp
app.use(cors({origin:whiteList}))

//midelware---------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())



/////routes
app.get('/',(req,res)=>{res.send('Welcome to my api')})
app.use('/api',routes)

////server running
app.listen(app.get('port'), ()=>{
    console.log('server running on http://localhost:'+ app.get('port'))
})