const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('./home.html.twig', {title: 'Home', pageJS: 'home.js'});
});


module.exports = router;
