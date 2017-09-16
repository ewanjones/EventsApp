var express = require('express');
var router = express.Router();

// Get eventlist
router.get('/eventlist', function(request, response) {
    var db = request.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        response.json(docs);
    });
});


module.exports = router;
