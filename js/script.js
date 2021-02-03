const URL = "https://covid19.mathdro.id/api"
let app = angular.module("Myapp", []);

app.controller("Myctrl", ($scope, $http) => {
    // controller here......
    $scope.title= "Stay Home Stay Safe Stay Healty";

    // On change Function.........
    // $scope.changevalue= () => {
    //     $scope.title= " Bye People";
    // }
    $http.get(URL).then(
        (response)=>{
            console.log("API LOADED")
            // console.log(response.data);

            $scope.all_data = response.data;
        },
        (error) => {
            // console.log(error);
        }
    );
   //get_country_data
   $scope.get_country_data = () => {
       let country = $scope.c; 
       if(country == ""){
           $scope.c_data= undefined;
           return;
       }

       $http.get(`${URL}/countries/${country}`).then(
           (response)=> {
            //    console.log(response.data);
               $scope.c_data = response.data;
           },
           (error) => {
            //    console.log(error);
           }
       );
   };

})