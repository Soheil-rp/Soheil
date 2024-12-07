document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge:"right"
  });
});


 console.log(1);
 new Promise((resolve , reject) => {
  console.log(2)
  resolve("ok")
 },1000)
  then(function(response){
    console.log(response)
    console.log(3)
  });