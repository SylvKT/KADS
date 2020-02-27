//Expose Methods
var _eval = (0, eval);
var _global = function(name) {
    return (function(){return this[[name]];})();
};

//Exposed Variables
var _document = _global("document");
var window = _global("window");

//Global Variables
var canvas = _document.getElementById("output-canvas");

//Global Methods
// Expose sessionStorage API
var sessionStorage = window.sessionStorage;

//Global Objects
/** sessionStorage API
 * 
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * 
**/
var storage = {
    get: function(i) {
        return sessionStorage.getItem(i);
    },
    set: function(i, v) {
        return sessionStorage.setItem(i, v);
    },
    remove: function(i) {
        return sessionStorage.removeItem(i);
    },
};

var KADS = {
  storage: storage,
  onKA: window.location.hostname === "khanacademy.org"
};
