const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require(`body-parser`);
const path = require('path');
const mysql = require('mysql2');
const requestIp = require('request-ip');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestIp.mw());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.use(express.static(path.join(__dirname, 'assets')));

// GET Requests
app.get('/', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Landing Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/signup/rentee', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Parking Owner Sign Up Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'signup-rentee.html'));
});

app.get('/signup/renter', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Driver Sign Up Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'signup-renter.html'));
});

app.get('/success', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// POST Requests
app.post('/signup/rentee', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Parking Owner Sign Up Successful'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    query = 'INSERT INTO registration (ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?)';
    params = [req.clientIp, req.body.name, req.body.birthdate, req.body.email, req.body.contact, 'Parking Owner'];
    connection.execute(query, params, function (err, results) {
        res.redirect('/success');
    });
});

app.post('/signup/renter', function (req, res) {
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Driver Sign Up Successful'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    query = 'INSERT INTO registration (ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?)';
    params = [req.clientIp, req.body.name, req.body.birthdate, req.body.email, req.body.contact, 'Driver'];
    connection.execute(query, params, function (err, results) {
        res.redirect('/success');
    });
});

let listener = app.listen(process.env.PORT || 3000, function () {
    console.log(`Server running at port ${listener.address().port}`);
});
