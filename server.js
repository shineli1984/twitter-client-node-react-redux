
const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const twit = require('twit');
const T = new twit({
       consumer_key: 'mBxOmlMvasXLTsxQSwtPw1bYq'
    , consumer_secret: 'JYKdDmDePlqPtf0J0LQ2Qbaq7ctER1Ar4t2pMRaHX71j1INYtD'
    , access_token: '1133946725134000128-K8lB1hXSRvq6kiSVqm2StUgH6U56As'
    , access_token_secret: 'f7yWHRrKhIDBwjO8mUL8GmQaXceb7bTabESghtWenKK1b'
    , timeout_ms: 60 * 1000,
})
app.use(cors("*"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/tweets/search/:search', function (req, res) {
    T.get('search/tweets', {
        q: req.params.search
        , count: 5
    }, function (err, data, ) {
        res.json(data);
    })
})
app.get('/tweets/:screen_name', function (req, res) {
    T.get('statuses/user_timeline', {
        q: req.params.screen_name
        , count: 5
    }, function (err, data, ) {
        res.json(data);

    })
});

app.get('/tweets/favorites/list/:screen_name', function (req, res) {
    T.get('favorites/list', {
        q: req.params.screen_name
        , count: 200
    }, function (err, data, ) {
        res.json(data);
        console.log(data)
    })
});
app.post('/tweets/favorites/create/:id', function (req, res) {
    T.post('/favorites/create', {
        id: req.params.id
    }, function (err, data, ) {
        res.json(data);
    })
});

app.post('/tweets/favorites/destroy/:id', function (req, res) {
    T.post('/favorites/destroy', {
        id: req.params.id
    }, function (err, data, ) {
        res.json(data);
    })
});


app.post('/comment/', function (req, res) {
    console.log(req.body.comment);
    T.post('statuses/update', {
        status: req.body.comment
    }, function (err, data, ) {
        res.json(data)
    })
});


const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));