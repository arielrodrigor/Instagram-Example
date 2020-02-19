

app.controller("MainController", function($scope, $http){
   
    $http.get('http://localhost:3000/users').then(successCallback, errorCallback);
      
    function successCallback(response) {                   
        
            $scope.list = response.data.entry_data.TagPage[0].graphql.hashtag.edge_hashtag_to_top_posts.edges           

            response.data.entry_data.TagPage[0].graphql.hashtag.edge_hashtag_to_media.edges.forEach(element => {
                $scope.list.push(element)
            });

            console.log($scope.list)
            
            
    }
    function errorCallback(response) {
            
        console.log(Response)
        $scope.list = response        
    }    

    $scope.addItem = function(){
        $scope.list.push($scope.addToDo)
    }


});