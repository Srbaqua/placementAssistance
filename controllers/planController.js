function createPlan(req,res){
     const {company,role} = req.body;
    if(!company || !role){
        return res.status(400).json({
            error:"Fill both company and role"
        })
    }
    const subject = ["DSA","OS","CN","OOPS"];
    res.status(201).json({
        status:"Task Completed",
        company,
        role,
        subject
    })

}
module.exports = {createPlan};