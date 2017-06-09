 var studentsData = [{
  name: 'A',
  score: 80,
  attendance: 0.7
}, {
  name: 'B',
  score: 60,
  attendance: 0.9
}, {
  name: 'C',
  score: 61,
  attendance: 0.76
}, {
  name: 'D',
  score: 70,
  attendance: 0.2
}, {
  name: 'E',
  score: 16,
  attendance: 0.1
}, {
  name: 'F',
  score: 89,
  attendance: 0.89
}, {
  name: 'G',
  score: 50,
  attendance: 0.5
}, {
  name: 'H',
  score: 88,
  attendance: 0.7
}, {
  name: 'I',
  score: 75,
  attendance: 0.2
}, {
  name: 'J',
  score: 46,
  attendance: 0.3
}, {
  name: 'K',
  score: 53,
  attendance: 0.7
}];
    angular.module('ExampleApp', ['ngDraggable']).
      controller('MainCtrl', function ($scope) {
        $scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
        $scope.data =  [
          _.chain(studentsData).sortBy('score').reverse().take(10).value(),
          _.chain(studentsData).sortBy('score').take(10).value(),
          _.chain(studentsData).sortBy('attendance').reverse().take(10).value(),
          _.chain(studentsData).sortBy('attendance').take(10).value()
        ];
        $scope.IsHidden = [];
         $scope.textModel=[];
        $scope.ShowHide = function (index) {
                $scope.IsHidden[index] = !$scope.IsHidden[index];
                $scope.$watch('textModel', function(){
                    alert('hey, this is changed!');
                });
                $scope.textModel[index]=null;
            };



              $scope.title = ['Top 10 Students by score','Bottom 10 Students by score','Top 10 Students by Attendance','Bottom 10 Students by Attendance'];

          $scope.save = function(name, index){
              $scope.title[index] = name;
          }



        $scope.droppedObjects1 = [];
        $scope.onDropComplete1=function(data,evt) {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1)
            $scope.droppedObjects1.push(data);
        }
      });
