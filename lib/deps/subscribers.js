var _req = require("./req.js");
var querystring = require("querystring");


module.exports = function(api_key) {

    return {
    
        list: function(data, cb) {

            if (arguments.length === 2) {
            
                data["api_key"] = api_key;

                _req("GET", "/subscribers?" + querystring.stringify(data), cb);
            
            } else {
            
                var cb = data;

                _req("GET", "/subscribers?api_key=" + api_key, cb);
            
            }

        },


        get: function(id, cb) {

            _req("GET", "/subscribers/" + id + "?api_key=" + api_key, cb);

        }
    
    };

};
