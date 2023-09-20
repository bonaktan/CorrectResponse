$( document ).ready(function() {
  $('.Count').hide()
  // TODO: Adjustable Counter
  const template = ['<div>', "", '.</div><div id="Display', "", '"></div>']
  for (i=1; i<=25; i++) {
    var cache = template;
    template[1] = i; template[3] = i;
    $(".Display").append(template.join(''));
    template[1] = i+25; template[3] = i+25;
    $(".Display").append(template.join(''));
    document.querySelector("#Display"+i).innerHTML = "0"; j = i+25
    document.querySelector("#Display"+j).innerHTML = "0"; i 

  }
});