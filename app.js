//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('public'));

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];


app.get('/', (req, res) => {
    let day = date.getDate();

    res.render('list', {
        listTitle: day,
        NewItems: items
    });


    app.post('/', (req, res) => {

        let item = req.body.newItem;
        if (req.body.list === 'Work List') {
            workItems.push(item);
            res.redirect('/work');
        }
        else {
            let item = req.body.newItem;
            items.push(item);
            res.redirect('/');
        }

    })

});



app.get('/work', (req, res) => {
    res.render('list', {
        listTitle: "Work List",
        NewItems: workItems
    });
})
app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(8080, () => {
    console.log("Server is running on port 3000")
})
