import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;
app.get('/',(req,res)=>{
    console.log("This message is from server but with a new Update");
    res.send('Hello from server');
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})