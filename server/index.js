const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const GolfModel = require("./models/GolfData");

app.use(express.json());
app.use(cors());

/*Connect to MongoDB database
/*Database name: people 
/*Collection name: peoples */
mongoose.connect("mongodb+srv://golfcrud:Drosetiger100@golfcrud.hdfzs.mongodb.net/golfstats?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

/**/
app.post("/insert",async(req,res) => {

    const fullName = req.body.fullName;
    const date = req.body.date;
    const coursePlayed = req.body.coursePlayed;
    const score = req.body.score;
    const userNotes = req.body.userNotes;

    const recordOne = new GolfModel ({fullName:fullName,
                                      date:date,
                                      coursePlayed:coursePlayed,
                                      score:score,
                                      userNotes:userNotes});

    try {
        await recordOne.save();
        res.send("inserted new row of data");
    } catch (err){
        console.log(err);
    }
});

/*Read List Of Golf Records  */
app.get("/read" , async(req,res) => {
    GolfModel.find({},(err,result) =>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});

/*Delete a Person on refresh of page,person will be deleted */
app.delete("/delete/:id" , async(req,res) => {
    const id  = req.params.id;
    //Use mongoose function that finds obj by id and removes it
    await GolfModel.findByIdAndRemove(id).exec();
    res.send("deleted person")//Show in console that obj was deleted successfully
});

/**Back end server port 3001 used for functionality of site */
app.listen(3001,() => {
    console.log("App running on host 3001");
});
