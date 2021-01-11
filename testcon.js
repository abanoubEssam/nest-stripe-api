const  mongoose = require("mongoose");



(async () => {
    
    const connectDB = async () => {
        try {
            await mongoose.connect("mongodb://localhost:27017/courier_dev-db" , {useNewUrlParser: true , useUnifiedTopology: true})
            console.log("connected")
        } catch (error) {
            console.log(error)
        }
    }
    
    await connectDB()
    
    
    const getUsers = async() => {
        const userSchema = new mongoose.Schema({
            name: {
                type: String
            }
        })
        const userModel = await mongoose.connection.db.collection("cou-users")
        const users =  await userModel.find({}).toArray()
        console.log("🚀 ~ file: testcon.js ~ line 20 ~ getUsers ~ users", users)
    
    }
    
   await getUsers()


   mongoose.disconnect()

})().catch(err => {
    console.error(err);
});
