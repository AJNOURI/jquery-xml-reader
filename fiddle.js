var xml='<?xml version="1.0" ?><lab><mycase id="1"><casename>Case name</casename><topo>file.jpg</topo><testrun id="1"><router id="R1"><command><cmdname>cmd111</cmdname><cmdfile>file111</cmdfile></command><command><cmdname>cmd112</cmdname><cmdfile>file112</cmdfile></command></router><router id="R2"><command><cmdname>cmd121</cmdname><cmdfile>file121</cmdfile></command></router></testrun><testrun id="2"><router id="R1"><command><cmdname>cmd211</cmdname><cmdfile>file211</cmdfile></command><command><cmdname>cmd212</cmdname><cmdfile>file212</cmdfile></command></router><router id="R2"><command><cmdname>cmd221</cmdname><cmdfile>file221</cmdfile></command></router><router id="R3"><command><cmdname>cmd231</cmdname><cmdfile>file231</cmdfile></command><command><cmdname>cmd232</cmdname><cmdfile>file232</cmdfile></command></router></testrun></mycase></lab>';



$(document).ready(function() {
  $xml = $($.parseXML(xml));


  $xml.find("mycase").each(function() {
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
});
