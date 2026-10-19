const express = require("express");
const app = express();
const planRoutes = require('./routes/planRoutes');
app.use(express.json());
app.use('/api',planRoutes);


// const candidate = {
//     "name":"Saurabh",
//     "age":23,
//     "companies":["Google","Microsoft","Amazon","Facebook"],
//     "role":"Software Engineer",
//     "questionSolved":150,
//     "skill":["Javascript","C++","Python","Node","SQL","DSA"],
// }
// const subject = ["OS","CN","OOPS","DBMS"];

// app.get('/',(req,res)=>{
//     res.send("Welcome to Placement Portal Assistant");
// })

// app.get('/about',(req,res)=>{
//     res.send("This platform help students preparing for interview !!");
// })
// app.get('/api/companies',(req,res)=>{
//     res.json(candidate.companies);
// })

// app.get('/api/questions/:company',(req,res)=>{
//     const company = req.params.company;
//     res.json({
//         company:company,
//         questions:["Array","Graph","Tree"]
//     });
// });


// app.post('/api/plan',(req,res)=>{
//     const {role,company} = req.body;
//     if(!role||!company){
//         return res.status(400).json({
//             error: "Need role and company both",
//         })
//     }
    
//     res.status(201).json({
//         status:"Plan generated Succesfully",
//         company,
//         role,
//         subject

//     })
// })

// app.get('/api/plan',(req,res)=>{
//     const {role,company} = req.query;
//     const subject = ["DSA","OS","CN","OOPS"];
//     res.json({
//         company,
//         role,subject
//     }
//     )
// })

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`App is running on localhost:${PORT}`)
});