//   secondary-navigation

$(document).ready(function() {
  $("#prolist").mouseover(function() {
    $("#show").collapse("show");
  });
  $("#prolist").mouseout(function() {
    $("#show").collapse("hide");
  });

  $("#location").mouseover(function() {
    $("#site").collapse("show");
  });
  $("#location").mouseout(function() {
    $("#site").collapse("hide");
  });
  $("#services").mouseover(function() {
    $("#category1").collapse("show");
  });
  $("#services").mouseout(function() {
    $("#category1").collapse("hide");
  });
  $("#pat-vist").mouseover(function() {
    $("#category2").collapse("show");
  });
  $("#pat-vist").mouseout(function() {
    $("#category2").collapse("hide");
  });
  $("#ham-menu").click(function() {
    $(this).hide();
    $("#closed").show();
    $("#cat-list").toggle();
  });
  $("#closed").click(function() {
    $(this).hide();
    $("#ham-menu").show();
    $("#cat-list").toggle();
  });

  //   buttons
  $("#spec-sub").click(function() {
    $("#sub1").toggle();
  });
  $("#serv-sub").click(function() {
    $("#sub2").toggle();
  });
  $("#chemo-sub").click(function() {
    $("#inner-sub1").toggle();
  });
  $("#sup-serv").click(function() {
    $("#inner-sub2").toggle();
  });
  $("#couns-sub").click(function() {
    $("#inner-sub3").toggle();
  });
  $("#surv-sub").click(function() {
    $("#inner-sub4").toggle();
  });
  $("#team-sub").click(function() {
    $("#sub3").toggle();
  });
  $("#loca-sub").click(function() {
    $("#sub4").toggle();
  });
  $("#res-sub").click(function() {
    $("#sub5").toggle();
  });
});
