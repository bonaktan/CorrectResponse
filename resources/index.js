$(document).ready(function() {

  // Global Constants/Variables
  const inputregex = /(^[0-9]+$)|((^[0-9]+)-([0-9]+$))/g;
  const template = ['<div>', "", '.</div><div id="Display', "", '"></div>'];
  var items = Math.floor(24/2); /* TODO: Modifiable at ui level */;


  $('.Count').hide();
  for (i=1; i<=items; i++) {
    var cache = template;
    cache[1] = i; cache[3] = i;
    $(".Display").append(cache.join(''));
    cache[1] = i+items; cache[3] = i+items;
    $(".Display").append(cache.join(''));
    document.querySelector("#Display"+i).innerHTML = "0"; j = i+items;
    document.querySelector("#Display"+j).innerHTML = "0";
  }

  $("#NumberSubmit").click(function() {
     
  });
});


