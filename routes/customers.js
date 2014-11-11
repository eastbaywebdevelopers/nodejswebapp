var express = require('express');
var router = express.Router();

var Customer = require('../models/Customer');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('customers/index', {customers: Customer.getAll()});
});

router.get('/add', function(req, res) {
    res.locals.csrf = "some csrf value";
    res.render('customers/add');
});

router.post('/add', function(req, res) {
   
   Customer.add({name: req.body.name, phone: req.body.phone});
   
   req.session.flash = {
     type: 'success',
     intro: 'Customer added!',
     message: 'A new customer has been added.'
   };
   
   res.redirect(303, '/customers/');
    
});

router.get('/edit/:id', function(req, res) {
    
    var customer = Customer.get(req.params.id);
    
    res.locals.csrf = "some csrf value";
    
    res.render('customers/edit', customer);
});

router.post('/edit/:id', function(req, res) {
    
    var customer = {id: req.params.id, name: req.body.name, phone: req.body.phone};
    
    Customer.update(customer);
    
    req.session.flash = {
         type: 'success',
         intro: 'Customer updated!',
         message: 'A new customer has been updated.'
     };
    
    res.redirect(303, '/customers/');
    
});

module.exports = router;
