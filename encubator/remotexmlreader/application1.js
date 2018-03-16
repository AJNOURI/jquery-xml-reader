
$(document).ready(function() {
  loadData();
});


function loadData() {

  $.ajax({
    url: "mycombos.xml",
    dataType: "xml",
    success: function(data) {
      $("u1").children().remove();


    $(data).find("mycase").each(function() {
            var mycase = $(this);
            $("#container").append(" Casename:- " + mycase.find("casename").text() + "<br />");
            $("#container").append(" topofile:- " + mycase.find("topo").text() + "<br />");
            $("#container").append(" Case id:- " + mycase.attr("id") + "<br />");
        mycase.find("testrun").each(function() {
                  var testrun = $(this);
                  $("#container").append("--- testrun id:- " + testrun.attr("id") + "<br />");
            testrun.children("router").each(function() {
                        var router = $(this);
                        $("#container").append("------ router id:- " + router.attr("id") + "<br />");
                router.find("command").each(function() {
                              var command = $(this);
                              $("#container").append("--------- cmdname:- " + command.find("cmdname").text() + ", cmdfile:- " + command.find("cmdfile").text() + "<br />");

                });

            });

        });

    });


  }
});
}