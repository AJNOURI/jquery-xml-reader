
$(document).ready(function() {

  loadtestruns();

});//document


function removeRouters() {
  $("#dropdown_routers").find(".btn").html("Choose a device");
  $("#dropdown_routers").find(".btn").val("Choose a device");
  $("#dropdown_routers").find(".dropdown-item").each(function() {
    $(this).remove();
  });
}

function removeCommands() {
  $("#dropdown_commands").find(".btn").html("Choose a command");
  $("#dropdown_commands").find(".btn").val("Choose a command");  
  $("#dropdown_commands").find(".dropdown-item").each(function() {
    $(this).remove();
  });
}



function loadRouters(trun) {

  //removeRouters();
  $.ajax({
    url: "mycombos.xml",
    dataType: "xml",
    success: function(data) {
      //-->

      $(data).find("mycase").each(function() {
        var mycase = $(this);

        mycase.find("testrun").each(function() {
          //alert("this is a testrun");
          var testrun = $(this);
          
          //Only for the given trun
          if (testrun.attr("id") == trun) {
            //alert(testrun.attr("id"));

            

            testrun.find("router").each(function() {
              var router = $(this);
              //alert(router.attr("id"));
              //Load & build router list
              $("#dropdown_routers").find(".dropdown-menu").append('<li><a class="dropdown-item" href="#" data-value="' + router.attr("id") + '">' + router.attr("id") + '</a></li>');
              
               // dynamic Router list need custom event handler
              $(".dropdown-item").on( "click", function() {
                //alert("each dropdownitem of router");
                $(this).closest(".dropdown").find('.btn').html($(this).text());// + ' <span class="caret"></span>');
                $(this).closest(".dropdown").find('.btn').val($(this).data('value'));

              });//ropdown-item click function
            }); //routers
          } //if
        });//testruns
      });//mycases
    }//ajax Success function
  });//ajax call
}//loadRouters


function loadtestruns() {
  $.ajax({
    url: "mycombos.xml",
    dataType: "xml",
    success: function(data) {

    $(data).find("mycase").each(function() {
      var mycase = $(this);
      mycase.find("testrun").each(function() {
        var testrun = $(this);
        //alert("this (each testrun):" + testrun);
        $("#dropdown_testrun").find(".dropdown-menu").append('<li><a class="dropdown-item" href="#" data-value="' + testrun.attr("id") + '">' + testrun.attr("id") + '</a></li>');
        
        // Dynamic list need custom event handler
        $(".dropdown-item").on( "click", function() {
          var dropdownitem = $(this);
          //alert("this " + dropdownitem.text()+ " clicked");

          dropdownitem.closest(".dropdown").find('.btn').html(dropdownitem.text());// + ' <span class="caret"></span>');
          dropdownitem.closest(".dropdown").find('.btn').val(dropdownitem.data('value'));
          
          //Clean router list
          removeRouters();
          //Load router list of the selected testrun
          loadRouters(dropdownitem.text());
        });//ropdown-item click function
      });//testruns
    });//mycases
  } //ajax success function
}); //ajax call
}; //function loadtestruns


/*

### TODO
- save data into a data structure (arrays?, objects?)
- fill dropdown lists depending on each other hierarchically
- Clear router's and command's dropdown list before filling with new list


### NOTES
Dropdown list size
var countRows = $('ul.dropdown-menu li').size();

$("#container").append(" Casename:- " + mycase.find("casename").text() + "<br />");

*/