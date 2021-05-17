const mongoose = require('mongoose');

const {Schema} = mongoose;
const Job = new Schema({
    title:{type:String},
    location:{type:String},
    skill: {type: String},
    mode: {type: String},
    stipend: {type: String},
    date: {type :String},
    duration: {type: String},
    description: {type: String},
    
    
    
});
mongoose.model('job',Job);