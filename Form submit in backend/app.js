const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/school");

// yhe nhi likuga to boday ko exis nhi kr pavuga
app.use(express.json());

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});
const Student = mongoose.model("Student", userSchema)

app.get("/", (req, res) => {
    res.send("")
})


app.post("/signin", async (req, res) => {
    // jo bhi request ayi ha us ke body se email nikalo
    const e = req.body.email;
    console.log(e)
    const p = req.body.password;
    console.log(p)
    const xz = await Student.find({ email: e })
    if (xz) {
        console.log(xz)
        return res.send("user email allredy exist")
    } else {
        const user = new Student({ e, p });
        user.save();
        return res.send("Succesfully deta was add");

    }


    // const ab = await Student.insertMany({ user, email })
    // res.send("Succesfully deta was add");
})

app.listen(PORT, () => {
    console.log(`App is Listen at port ${PORT}`)
})