const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://Abonini:${process.env.PASS_MONGO}@cluster0.ldcfv.mongodb.net/?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log(err));