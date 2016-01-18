angular.module('BirdApp').controller('BirdsController', BirdsController);

BirdsController.$inject = ['$http'];

function BirdsController(){
    var birds = this;

    birds.all = [];

    birds.add = function(){
      console.log('clicked', birds.new);
      var bird = {name: birds.new};
      $http
        .post('/birds', bird)
        .then(function(response){
          console.log(response.data);
          birds.all.push(bird);
        })
      birds.new = "";
    }

    birds.fetch = function(){
      $http
        .get('/birds')
        .then(function(response){
          birds.all = response.data;
      })
    }

    birds.fetch();
}