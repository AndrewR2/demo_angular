'use strict';

(function() {
var app = angular.module('demo', []);

var gemas = [
  {
    nombre: 'Diamante',
    precio: 5,
  },
  {
    nombre: 'Gema',
    precio: 4,
  }
];

app.controller('ProductosCtrl', function(){
  this.productos = gemas;
});

app.controller('PanelCtrl', function() {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isTab = function(checkTab) {
    return this.tab === checkTab;
  };
});

})();
