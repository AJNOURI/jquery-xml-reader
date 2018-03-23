
$(document).ready(function() {
  loadData();
  //$(".dropdown").find(".dropdown-menu").each(function(){
  //  $("#container1").append('<a class="dropdown-item" >...............</a>');   //OK
  //  $(".dropdown-menu").append('<a class="dropdown-item" >...............</a>');
  //});

/*
  $(".dropdown  .dropdown-menu li a").click(function(){
    $(this).closest(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).closest(".dropdown").find('.btn').val($(this).data('value'));
    var test = $(this).text();
    $("#container").append("selected " + $(this).text() + "<br />");
  });


  $(".dropdown-menu li a").click(function(){
    $(this).closest(".dropdown").find('.btn').html($(this).text());// + ' <span class="caret"></span>');
    $(this).closest(".dropdown").find('.btn').val($(this).data('value'));
    var test = $(this).text();
    $("#container").append("selected " + "text=" + $(this).text() + ", value="+ $(this).data('value') + "<br />");
  });
   
*/

//document
});


function fillSelectorList() {

}

function removeSelectorList() {

}


function loadData() {

  $.ajax({
    url: "mycombos.xml",
    dataType: "xml",
    success: function(data) {
      //$("u1").children().remove();



    $(data).find("mycase").each(function() {
            var mycase = $(this);
            $("#container").append(" Casename:- " + mycase.find("casename").text() + "<br />");
            $("#container").append(" topofile:- " + mycase.find("topo").text() + "<br />");
            



            $("#container").append(" Case id:- " + mycase.attr("id") + "<br />");
                mycase.find("testrun").each(function() {
                  var testrun = $(this);

                  $("#dropdown_testrun").find(".dropdown-menu").append('<li><a class="dropdown-item" href="#" data-value="' + testrun.attr("id") + '">' + testrun.attr("id") + '</a></li>');
                  
                  // Dynamic list need custom event handler
                  $(".dropdown-item").on( "click", function() {
                    $(this).closest(".dropdown").find('.btn').html($(this).text());// + ' <span class="caret"></span>');
                    $(this).closest(".dropdown").find('.btn').val($(this).data('value'));
                  });
                  testrun.children("router").each(function() {
                    var router = $(this);
                    $("#dropdown_routers").find(".dropdown-menu").append('<a class="dropdown-item" >' + router.attr("id") + '</a>');

                    // Dynamic list need custom event handler
                    $(".dropdown-item").on( "click", function() {
                      $(this).closest(".dropdown").find('.btn').html($(this).text());// + ' <span class="caret"></span>');
                      $(this).closest(".dropdown").find('.btn').val($(this).data('value'));
                    });
                    router.find("command").each(function() {
                      var command = $(this);
                      $("#dropdown_commands").find(".dropdown-menu").append('<a class="dropdown-item" >' + command.text() + '</a>');
                      // Dynamic list need custom event handler
                      $(".dropdown-item").on( "click", function() {
                        $(this).closest(".dropdown").find('.btn').html($(this).text());// + ' <span class="caret"></span>');
                        $(this).closest(".dropdown").find('.btn').val($(this).data('value'));
                      });
                    });

                  });

            });

    });

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

  }
});
}