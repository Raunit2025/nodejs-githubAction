import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;
app.get('/',(req,res)=>{
    console.log("This message is from server side");
    res.send('Hello from server My self Raunit Raj v2');
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})