const express = require("express");
const mongoose =  require("mongoose");
const cors = require("cors");

require("./model/Job");

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "https://cuvette.herokuapp.com"
}));
app.set('trust proxy',1);


const port =  process.env.PORT||8080;

mongoose.connect("mongodb+srv://Cuvette:0@Devporwal@cuvette.gkaxe.mongodb.net/Cuvette?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./routes/JobRoute')(app);


app.listen(port,()=>{
    console.log(`Server are running on port no ${port}`);
});