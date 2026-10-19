const express = require('express');
const app = express();
app.use(express.json());



app.post('/api/plan',(req,res)=>{
    const {role,company} = req.body;
    if(!role||!company){
        return res.status(400).json({
            error: "Need role and company both",
        })
    }

    res.status(201).json({
        status:"Plan generated Succesfully",
        company,
        role,
        subject

    })
})

app.listen(3000);