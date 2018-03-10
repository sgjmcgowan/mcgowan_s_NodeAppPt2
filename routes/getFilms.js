var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

// Basic entry page
router.get('/', (req, res) => {
  connect.query('SELECT * FROM tbl_movies', (err, result) => { 
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

     res.render('landing', {
         title: 'Roku Entrance',
         message : "Welcome, Please Select Your Access Level",
         landing : true,
         films : true,
         kids : false,
         parents : false,
         trailer : false
       });
    }
  });
});

// Get the parents film page
router.get('/films', (req, res) => {
  connect.query('SELECT * FROM tbl_movies', (err, actionFilms) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(actionFilms);

     res.render('films', {
         title: 'Parent Films',
         message : "Welcome, Parental Unit",
         genre1 : actionFilms,
         landing : false,
         films : true,
         kids : false,
         parents : true,
         trailer : false
       });
    }
  });


});

// Get Kids Page
router.get('/kids', (req, res) => {
  connect.query('SELECT * FROM tbl_movies WHERE movie_isKids = "Yes"', (err, result) => { // add WHERE movies_demo = kids
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);


     res.render('main_kids', {
         title: 'Kids Films',
         message : "Welcome, Child Unit",
         genre1 : result,
         landing : false,
         films : true,
         kids : true,
         parents : false,
         trailer : false
       });
    }
  });
});

// GET Specific movie trailer
router.get('/trailer/:id', (req, res) => {
  connect.query(`SELECT * FROM tbl_movies WHERE movie_id = "${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

     res.render('trailer', {
         title: 'Now Playing',
         message : JSON.stringify(result),
         filmData : result,
         landing : false,
         films : true,
         trailer : true
       });
    }
  });
});

// filter films by genre
router.get('/filter/:id', (req, res) => {
  connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_movie_genre mg WHERE m.movie_id = mg.movie_id AND g.genre_id = mg.movie_genre AND g.genre_name LIKE "${req.params.id}"`, (err, actionFilms) => {  // this is a line that selects only movies of the chosen genre
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(actionFilms);

     res.render('films', {
         title: 'Filtered Films',
         message : "Welcome, Parental Unit",
         genre1 : actionFilms,
         landing : false,
         films : true,
         kids : false,
         parents : true,
         trailer : false
       });
    }
  });


});

// res.json(result); instead of res.render to see sql results displayed as JSON Object.

module.exports = router;
