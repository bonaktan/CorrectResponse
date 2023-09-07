var DisplayCells = '<div>?.</div><div id="Display?"></div>'
$( document ).ready(function() {
  $('.Count').hide()
  // TODO: Adjustable Counter
  for (i=1; i<=25; i++) {
    $(".Display").append(DisplayCells.replace("?", i))
    $(".Display").append(DisplayCells.replace("?", i+25))
  }
});