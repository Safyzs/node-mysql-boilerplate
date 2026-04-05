const express = require('express');
const pool = require('./config/db');
const app = express();

app.use(express.json());
app.get('/test',(req,res)=>{res.send("server is running!");});

app.get('/tasks',async(req,res)=>{
    try{
        const [rows]=await pool.query("select * from task");
        res.json(rows);
    } catch(err){
        console.error(err);
        res.status(500).json({error:"database query failed"});
    }
});

const port= 5000;
app.listen(port,()=>{
    console.log(`server is sprinting on http://localhost:${port}`);
});