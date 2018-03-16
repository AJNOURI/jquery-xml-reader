
$(document).ready(function() {
  loadData();
});

function loadData() {

  $.ajax({
    url: "mycombos.xml",
    dataType: "xml",
    success: function(data) {
      $data.find("mycase").each(function() {
        var mycase = $(this);
        $("#container").append(" Casename:- " + mycase.find("casename").text() + "<br />");
        $("#container").append(" Really ");
      });
  }
});
}