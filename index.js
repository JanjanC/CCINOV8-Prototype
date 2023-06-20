const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const bodyParser = require(`body-parser`);
const path = require('path');
const mysql = require('mysql2');
const requestIp = require('request-ip');
const crypto = require('crypto');
const mysqlStore = require('express-mysql-session')(session);

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);
const sessionStore = new mysqlStore({} /* session store options */, connection);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(requestIp.mw());
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1 * 60 * 60 * 1000,
        },
    })
);
app.use(express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
console.log(path.join(__dirname, 'views'));

// Landing Page
app.get('/', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Landing Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Driver Signup
app.get('/signup/renter', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Driver Sign Up Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'signup-renter.html'));
});

app.post('/signup/renter', function (req, res) {
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Driver Sign Up Successful'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    query = 'INSERT INTO registration (user_id, ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const UUID = crypto.randomUUID();
    params = [UUID, req.clientIp, req.body.name, req.body.birthdate, req.body.email, req.body.contact, 'Driver'];
    connection.execute(query, params, function (err, results) {
        req.session.user_id = UUID;
        res.redirect('/success');
    });
});

//Parking Owner Sign Up
app.get('/signup/rentee', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Parking Owner Sign Up Page'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    res.sendFile(path.join(__dirname, 'views', 'signup-rentee.html'));
});

app.post('/signup/rentee', function (req, res) {
    // save user event
    let query = 'INSERT INTO logs (ip_address, event) VALUES (?, ?)';
    let params = [req.clientIp, 'Parking Owner Sign Up Successful'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
    });

    query = 'INSERT INTO registration (user_id, ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const UUID = crypto.randomUUID();
    params = [UUID, req.clientIp, req.body.name, req.body.birthdate, req.body.email, req.body.contact, 'Parking Owner'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
        req.session.user_id = UUID;
        res.redirect('/signup/rentee/parking/');
    });
});

app.get('/signup/rentee/parking', function (req, res) {
    const percent = [3, 5, 7];
    console.log('SESSION ID');
    console.log(req.session.user_id);
    console.log(req.session.user_id.slice(-1));
    index = parseInt(req.session.user_id.slice(-1), 16) % 3;

    res.render('signup-parking-space', { percent: percent[index] });
});

app.post('/signup/rentee/parking', function (req, res) {
    console.log(req.body);
    query = 'INSERT INTO parking_info (user_id, ip_address, number, location, time_start, time_end, price) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const UUID = crypto.randomUUID();
    params = [UUID, req.clientIp, req.body.name, req.body.birthdate, req.body.email, req.body.contact, 'Parking Owner'];
    connection.execute(query, params, function (err, results) {
        console.log(results);
        req.session.user_id = UUID;
        res.redirect('/success');
    });
});

//Sucess and Error Pages
app.get('/success', function (req, res) {
    if (req.session.user_id) {
        req.session.destroy();
        res.sendFile(path.join(__dirname, 'views', 'success.html'));
    } else {
        res.redirect('/error');
    }
});

app.get('/error', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.get('*', function (req, res) {
    res.redirect('/error');
});

let listener = app.listen(process.env.PORT || 3000, function () {
    console.log(`Server running at port ${listener.address().port}`);
});
