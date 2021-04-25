const mongoose = require('mongoose')

module.exports=  async function startConnection() {
    await mongoose.connect('mongodb://localhost/assignment2',{
        useNewUrlParser: true,
        useFindAndModify: false ,
        useUnifiedTopology: true,
        useCreateIndex: true 
    });
    console.log('Database is connected');
}