const mongoose = require('mongoose');
const Job = mongoose.model('job');

module.exports =  (app)=>{
    const isNullOrUndefined = (val)=> val === null || val === undefined || val === '';
    app.post("/Job", async (req,res)=>{
            const Joby = req.body;
            
            
            const newJob = new Job(Joby); 
            await newJob.save();
            res.status(200).send({
                newJob});
        
    });
    app.get("/getJob",async(req,res)=>{
        const JobDetail =  await Job.find({});
        
        if(isNullOrUndefined(JobDetail)){
            res.status(401).send({err:"No Job Found"});
        }else{
            
            res.status(200).send({JobDetail});
        }
        
    })
    app.get("/",(req,res)=>{
        res.send("Server Work");
    })
    
    
    

}
