var _ = require('underscore');

var Customer = function() {
    
    var customers = [
            {id: 1, name: "John Doe", phone: "555-555-5555"},
            {id: 2, name: "Jane Smith", phone: "805-444-7777"},
            {id: 3, name: "Joe Flanigan", phone: "408-909-8999"}
    ]; 
    
    return {
        getAll: function() {
            return customers;
        },
        add: function(customer) {
            customer.id = this.getAll().length + 1;
            customers.push(customer);
        },
        get: function(id) {
            return _.findWhere(customers, {id: parseInt(id)});
        },
        update: function(customer) {
            var cust = this.get(customer.id);
            
            cust.name = customer.name;
            cust.phone = customer.phone;
            
        }
        
        
    }
};

module.exports = new Customer();