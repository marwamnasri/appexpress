const express= require('express')
const app= express()

app.use(date=(req,res,next)=>{
    let time=new Date()
    let hours= time.getHours()
    if ((hours<8)||(hours>11)){
     return res.send('our office is not open now')
    } 
    next()
})  

    

app.use(express.static(__dirname+'/public'))

app.listen(4000, (err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running in port 4000")
})
