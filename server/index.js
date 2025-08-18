const express= require("express");
const cors= require ("cors");
const dotenv= require("dotenv");
const connectDB = require("./config/db")
const userRoute= require("./routes/users");

dotenv.config();

const app= express();

app.use(cors());
app.use(express.json());

   
 
app.get("/", (req,res)=>{
    res.send("Express Backend");
});
app.use("/api/users", userRoute);


const PORT = process.env.PORT || 5170;



// Connect to DB, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server active on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });