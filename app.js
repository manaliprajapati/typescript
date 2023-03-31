var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("test function works");
    };
    return App;
}());
var a1 = new App();
a1.test();
