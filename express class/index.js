// const express = require("express");

// const app = express();

// const users = [{
//     name:"Prat",
//     kidneys: [{
//         healthy: true
//     }]
// }]

// app.use(express.json());

// app.get("/",function(req,res){
//     const kidneys = users[0].kidneys;
//     const noofkidneys = kidneys.length;
//     let healthyKidneys = 0;
//     for(let i =0;i<noofkidneys;++i){
//         if(kidneys[i].healthy){
//             healthyKidneys+=1;
//         }
//     }
//     const unhealthyKidneys =  noofkidneys-healthyKidneys;
//     res.json({
//         noofkidneys,
//         healthyKidneys,
//         unhealthyKidneys
//     })
// })

// app.post("/",function (req,res){
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg:"DONE!"
//     })
// })

// app.put("/",function(req,res){
//     if(isThereUnhealthyKidney()){
//     for(let i=0;i<users[0].kidneys.length;++i){
//         users[0].kidneys[i].healthy=true;
//     }
    
//     res.json({
//         msg:"again Done"
//     });
// }
// else{
//     res.status(411).json({
//         msg:"No bad kidneys"
//     });
// }
// })

// app.delete("/",function(req,res){
//     if(isThereUnhealthyKidney()){
//     const newKidneys = [];
//     for(let i=0;i<users[0].kidneys.length;++i){
//         if(users[0].kidneys[i].healthy){
//             newKidneys.push({
//                 healthy: true
//             })
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//         msg:"delete done"
//     })
// }
// else{
//     res.status(411).json({
//         msg:"No bad kidneys"
//     });
// }
// })

// function isThereUnhealthyKidney(){
//     let con = false;
//     for(let i=0;i<users[0].kidneys.length;++i){
//         if(!users[0].kidneys[i].healthy){
//             con = true;
//             break;
//         }
//     }
//     return con;
// }

// app.listen(3000);

// const express = require("express");

// const app = express();

// function usernameMidleware(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username !="prat" || password!="pass"){
//         res.status(400).json({msg:"Somethings up with your inputs"})
//     }else{
//         next();
//     }
// }

// function kidneyMidleware(req,res,next){
//     const kidneyId = req.query.kidneyId
//     if(kidneyId !=1 && kidneyId !=2){
//         res.json({
//             msg: "Your Kidney is Fine!"
//         })
//     }else{
//         next();
//     }
// }

// app.get("/heath-checkup",usernameMidleware,kidneyMidleware,function(req,res){
//     // const username = req.headers.username;
//     // const password = req.headers.password;
//     // const kidneyId = req.query.kidneyId

//     // if(username !="prat" || password!="pass"){
//     //     res.status(400).json({msg:"Somethings up with your inputs"})
//     // }

//     // if(kidneyId !=1 && kidneyId !=2){
//     //     res.json({
//     //         msg: "Your Kidney is Fine!"
//     //     })
//     // }

//     res.json({
//         msg: "Your kidney is fine"
//     })

// });

// app.listen(3000);


// const express = require("express");

// const app = express();

// app.use(express.json());

// app.post("/health-center",function(req,res){
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send("Your current no'of kidneys is " + kidneyLength)
// })

// app.use(function(err,req,res,next){
//     res.json({
//         msg: "sorry something is up with the server"
//     })
// })

// app.listen(3000);

const express = require("express");
const z = require("zod")
const app = express();

const schema = z.array(z.number());

/*

const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

*/



// app.use(express.json())

// app.post("/health-checkup",function(req,res){
//     const kidneys = req.body.kidneys;

//     const response = schema.safeParse(kidneys);
//     if(!response.success){
//         res.status(411).json({
//             msg :"stucked"
//         })
//         return;
//     }
//     res.send({
//         response
//     })
// })

// app.listen(3000)


