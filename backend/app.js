//import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
//import api
const axios = require('axios');




//import bcrypt module
const bcrypt = require("bcrypt")
//
const { ObjectId } = require("mongodb")

//create express application
const app = express();
// Configure Body-parser

// Send JSON responses

app.use(bodyParser.json());


//connect app with data base
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');


// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});

//importer multer o path
const path = require('path');
const multer = require('multer');

// upload files config
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',

}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});



//Models Importation
const Match = require("./models/match");
const Team = require("./models/team");

const Player = require("./models/player");
const User = require("./models/user");
const team = require("./models/team");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");
const { log } = require("console");





//matches Tab simulation
let matches = [
    { id: 1, scoreOne: 0, scoreTwo: 1, teamOne: "EST", teamTwo: "CSS" },
    { id: 2, scoreOne: 2, scoreTwo: 1, teamOne: "CIT", teamTwo: "WHU" },
    { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "LIV", teamTwo: "FULL" },
];

let teams = [
    { id: 1, Name: "Real Madrid", owner: "med Mohamed", foundation: "1920" },
    { id: 1, Name: "Barcelone", owner: "Ali", foundation: "1910" }
];


let users = [
    { id: 1, firstName: "med", lastName: "mohamed", email: "med@gmail.com", pwd: "123456", role: "admin" },
    { id: 1, firstName: "ali", lastName: "ben", email: "ali@m", pwd: "123456", role: "admin" },
    { id: 1, firstName: "alia", lastName: "alia", email: "alia@m", pwd: "123456", role: "admin" },
];




function checkEmail(email, usersTab) {
    let exist = false;
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email) {
            exist = true;
            break;

        }

    }
    return exist;

}


//Business Logic:Get all matches
app.get("/matches", (req, res) => {
    console.log("here into BL: get all matches")
    Match.find().then((docs) => {

        res.json({ matchesArray: docs, message: "Done" })
    })


});


//Business Logic:Get all teams
app.get("/teams", (req, res) => {
    console.log("here into BL:get all teams")
    Team.find().then((docs) => {
        res.json({ teamsArray: docs, message: "DONE" })
    })

});



//Business Logic:Get all matches By Id
app.get("/matches/:id", (req, res) => {
    console.log("here into BL:get match by id")
    //recuperation l id from path
    let id = req.params.id
    Match.findOne({ _id: id }).then((doc) => {

        res.json({ match: doc });
    })

})




//Business Logic:Search Match
app.post("/matches/search", (req, res) => {
    console.log("here into bl: search matches", req.body);
    let search = req.body
    let findedMatch = matches.filter((obj) => { return obj.scoreOne == search.scoreOne || obj.scoreTwo == search.scoreTwo })
})




//Business Logic:Signup
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("here into BL:Signup", req.body)
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("crypted pwd", cryptedPwd)
        let url = req.protocol + "://" + req.get("host")
        let imgPath=req.file
        ? url + "/images"+req.file.filename
        :url+"/images/avatar.png"
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: cryptedPwd,
            role: req.body.role,
            tel: req.body.tel,
            img: imgPath,
        })
        user.save((err, doc) => {
            console.log("here error", err)
            console.log("here doc", doc);
            if (err) {
                res.json({ message: false })


            } else {
                res.json({ message: true })
            }
        });

    });


});


//Business logic:login
app.post("/users/login", (req, res) => {
    console.log("here into BL: login", req.body)
    let user = req.body;
    let userToSend;
    User.findOne({ email: user.Email }).then(
        (response) => {

            if (!response) {
                res.json({ message: "0" })
            }
            userToSend = response;

            return bcrypt.compare(user.pwd, response.pwd)

        }).then(
            (pwdResponse) => {
                console.log("here pwdResponse", pwdResponse)
                if (!pwdResponse) {
                    res.json({ message: "1" })

                } else {
                    //object {fName, lName, id, role}
                    let userObj = {
                        id: userToSend._id,
                        fName: userToSend.firstName,
                        role: userToSend.role,

                    }
                    res.json({ message: "2", user: userObj })
                }
            });
})





//Business Logic:Get team By Id
app.get("/teams/:id", (req, res) => {
    console.log("here into BL:get team by id")
    let id = req.params.id
    Team.findOne({ _id: illlld }).then((docs) => {
        res.json({ team: docs })
    })


})

//Business Logic: search weather
app.post("/weather", (req, res) => {
    const country = req.body.city;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        country +
        "&appid=" +
        apiKey + "&units=metric";
    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            const weather = response.data.main;
            console.log('Here weather main', weather);
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity,
                feels_like: weather.feels_like,
                icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
            }
            res.status(200).json({
                result: result
            })
        });
});





//Business Logic: Get user by ID
app.get("/users/:id", (req, res) => {
    console.log("here into BL:get user by id", req.params.id)

    User.findOne({ _id: req.params.id }).then((docs) => {
        res.json({ user: docs })
    })
})



//Business Logic:delete match by id
app.delete("/matches/:x", (req, res) => {
    console.log("here into BL:delete match by id")
    let id = req.params.x;
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true })

        } else {
            res.json({ isDeleted: false })
        }
    })


})




//Business Logic:delete team
app.delete("/teams", (req, res) => {
    console.log("here into BL:delete team by id")
    let id = req.params.x;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].id == id) {
            teams.splice(i, 1)
            break;

        }

    }
    res.json({ isDeleted: true })

})

//Business Logic:add match
app.post("/matches", (req, res) => {
    console.log("here into bl:add match")
    //get object from request
    let match = new Match(req.body)
    match.save();
    res.json({ message: "added with success" })

})


//Business Logic:add team
app.post("/teams", (req, res) => {
    console.log("here into BL:add match")
    let team = new Team(req.body)
    team.save();

    res.json({ message: "added with success" })

})

//Business Logic:add reclamation
app.post("/reclamations", (req, res) => {
    let reclamation = new Reclamation(req.body)
    reclamation.save((err, doc) => {
        if (err) {
            console.log("here error", err)
            res.json({ isAdded: false })
        } else {
            res.json({ isAdded: true })
        }
    })



})


//Business Logic:add comment
app.post("/matches/comment", (req, res) => {
    console.log("here comment", req.body)
    let comment = new Comment({
        content: req.body.content,
        userId: ObjectId(req.body.userId),
        matchId: ObjectId(req.body.matchId),
    });
    comment.save((err,doc)=>{
        if (err) {
            res.json({isAdded:false})
            
        }else{
            res.json({isAdded:true})
        }
    })

})


//Business Logic:get all matches with theyr comments
app.get("/matches/comments/getAll", (req, res) => {
    console.log("here to get all matches with comments")
    Match.aggregate(
        [
            {
                $lookup: {
                    from: "comments", // collection to join
                    localField: "_id", //field from the input documents
                    foreignField: "matchId", //field from the documents of the "from" collection
                    as: "comments", // output array field
                },
            },
        ],
        (error, docs) => {
            res.status(200).json({
                matches: docs,
            });
        }
    );
})





//Business Logic:get all user reclamations
app.get("/reclamations/:id", (req, res) => {
    Reclamation.find({ userId: req.params.id }).then((docs) => {
        res.json({ reclamations: docs })
    })

})

//Business Logic:add player
app.post("/players", (req, res) => {
    console.log("here into BL:add match")
    let player = new Player(req.body)
    player.save();

    res.json({ message: "added with success" })

})

//Business logic
app.post("/players", (req, res) => {
    console.log("here into bl:add player")
    let player = new player(req.body)
    player.save()
    res.json({ message: "added with success" })
})



//Business Logic:edit match
app.put("/matches", (req, res) => {
    console.log("here into BL:edit match");
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then(
        (response) => {
            console.log("here response after update", response)
            if (response.nModified == 1) {
                res.json({ isUpdated: true })

            } else {
                res.json({ isUpdated: false });
            }

        })



})


//Business Logic:edit team
app.put("/teams", (req, res) => {

})

function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;

        for (var i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;

            }
        }
    }
    return max + 1;



}






//make app importable
module.exports = app;


