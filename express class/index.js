const express = require("express");

const app = express();

const users = [{
    name:"Prat",
    kidneys: [{
        healthy: true
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
    const kidneys = users[0].kidneys;
    const noofkidneys = kidneys.length;
    let healthyKidneys = 0;
    for(let i =0;i<noofkidneys;++i){
        if(kidneys[i].healthy){
            healthyKidneys+=1;
        }
    }
    const unhealthyKidneys =  noofkidneys-healthyKidneys;
    res.json({
        noofkidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post("/",function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"DONE!"
    })
})

app.put("/",function(req,res){
    if(isThereUnhealthyKidney()){
    for(let i=0;i<users[0].kidneys.length;++i){
        users[0].kidneys[i].healthy=true;
    }
    
    res.json({
        msg:"again Done"
    });
}
else{
    res.status(411).json({
        msg:"No bad kidneys"
    });
}
})

app.delete("/",function(req,res){
    if(isThereUnhealthyKidney()){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;++i){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg:"delete done"
    })
}
else{
    res.status(411).json({
        msg:"No bad kidneys"
    });
}
})

function isThereUnhealthyKidney(){
    let con = false;
    for(let i=0;i<users[0].kidneys.length;++i){
        if(!users[0].kidneys[i].healthy){
            con = true;
            break;
        }
    }
    return con;
}

app.listen(3000);