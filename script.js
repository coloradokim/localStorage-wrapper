var storage = function() {
    return {
        'create': function(key, value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        'read': function(key) {
            return localStorage.getItem(key)
        },
        'destroy': function(key) {
          localStorage.removeItem(key)
        }
    }
};

var ls = storage();

console.log(ls.create('firstName', 'kim'));
