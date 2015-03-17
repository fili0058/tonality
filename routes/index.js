var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tonality' });
});


/*usercollection*/
    
router.get('/ajax', function(req, res) {
    var db = req.db;
    var collection = db.get('grid');
    
   
       collection.find({},{},function(e,docs){
           var doc = { usercollection : docs };
           //console.log(docs)
          
           //res.render('ajax', {docs: JSON.stringify(docs), title: 'Test'});
    res.send(doc);
      /* res.render('ajax', {
            "ajax" : docs
        });*/
         
           
   });
});

router.get('/left', function(req, res) {
      var db = req.db;
    var collection = db.get('testdatabase');

  /*var document = {username:"David", email:"About MongoDB"};
collection.insert(document, {w: 1}, function(err, records){
  //console.log("Record added as "+records[0]._id);
});*/
  
    
    collection.update(
        { username: "David" },
            {
            username: "David",
            rating: 1,
            score: 1
            },
   { upsert: true }
    )
    
    
    //collection.update(criteria, update[[, options], callback]);
   // db.inventory.find( { username: "David" } )
    
    
    res.send("left server")
});


router.get('/newgrid', function(req, res) {
      var db = req.db;
    var collection = db.get('grid');
    
    /*var document = {username:"David", email:"About MongoDB"};
collection.insert(document, {w: 1}, function(err, records){
  //console.log("Record added as "+records[0]._id);
});*/
    
   for( var f=1; f<31; f++ ){
    
        for(var i=1; i<31; i++ ){
            
           collection.ensureIndex({"_id":1}),
                collection.insert(
                    {row: f, col: i, hue: 196, lum: 50 }   
                )
           
        }
    }
    res.send("new grid")
});


//router.post('/send', function(req, res) {
   
    
   router.post('/send', function (req, res){
var newvalue = req.body['field1'];
       Math.floor(newvalue);
       var newnew = 9;
       newnew += 10;
   //console.log(req.body);
   //console.log('req received');
    var newstring = newnew.toString();
   res.send(newstring);

       
       //req.body['field1']
});

    
    //{ some: JSON.stringify({response:'json'}) }

    


/*console.log("hello");
    setInterval(function()
    {
        console.log("table update");
    }, 200);*/
    

    
/*     document.keydown(function(e)
    {
         if (e.keyCode == 37) { console.log("left"); }   // left arrow
         if (e.keyCode == 38) { console.log("up"); }   // up arrow
         if (e.keyCode == 39) { console.log("right"); }   // right arrow
         if (e.keyCode == 40) { console.log("down"); }   // down arrow   
     });*/
    




module.exports = router;
