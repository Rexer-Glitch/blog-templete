const mongoose = require("mongoose");

class Database{
    static connect(path){
        mongoose.connect(path)
            .then(()=> console.log("mongodb successfully connected"))
            .catch((err)=> console.error("error connecting to database"));
    }
}

module.exports = Database;