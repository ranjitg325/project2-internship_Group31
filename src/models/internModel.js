const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const internmodel = new mongoose.Schema( {

name : {
    type : String,
    required : true,
    trim : true
},

email: {
    required:true,
    unique:true,
    type:String,
    trim : true
 

mobile : {
    required : true,
    type : Number,
    trim : true,
    unique : true,
    match : [/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'please provide valid mobile number'],
 
},
collegeId : {
    type : ObjectId,
    ref : " collegeModel"
},
isDeleted :{
    type : Boolean,
    default : false
}
}, { timestamps: true });

module.exports = mongoose.model('project2intern', internmodel)
