const mongoose = require("mongoose"); 

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (e) {
    console.log(`Went Wrong: ${e.message}`);
    process.exit(1); 
  } 
};