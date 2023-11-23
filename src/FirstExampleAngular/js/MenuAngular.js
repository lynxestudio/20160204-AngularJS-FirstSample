(function()
{
    var data = {
    "Session": { "Menus" : [{
    "Name" : "English Philosophers",
    "Children" : [
    { "Name" : "John Locke" },
    { "Name" : "David Hume" },
    { "Name" : "George Berkeley" },
    { "Name": "Thomas Hobbes"}]
    },
    {
      "Name" : "Frech Philosophers",
      "Children" : [
    { "Name" : "Rene Descartes" },
    { "Name" : "Michel Foucault" },
    { "Name": "Henri Bergson"    },
    { "Name" : "Jean Paul Sartre" }]
    },
    {
      "Name" : "German Philosophers",
      "Children" : [
      { "Name" : "Immanuel Kant" },
      { "Name" : "Georg W. Hegel" },
      { "Name" : "Arthur Schopenhauer" },
      { "Name": "Martin Heidegger" }
        ]}]
        }
     };
        var App = angular.module('App', []);
        App.controller('SimpleCtrl', function ($scope) {
        $scope.session = data.Session;
        $scope.menus = data.Session.Menus;
    });
})();