function hideFunction() {
  $("#aboutMe").hide();
}
function interestsButton() {
  var x = document.getElementById("aboutMe");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  footerScript();
}

//------------------------------------------------------------

function hideFunction2() {
  $("#hideProjects").hide();
}
function projectsMeButton() {
  var x = document.getElementById("hideProjects");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//-------------------------------------------------------------


function footerScript() {

  $(function () {
    updateFooterPosition();
  });

  $(window).resize(function () {
    updateFooterPosition();
  });

  function updateFooterPosition() {
    var bottomOfFooter = $('footer').offset().top + $('footer').outerHeight(true);
    var heightShortage = $(document).height() - bottomOfFooter;
    if (heightShortage < 0) heightShortage = 0;
    $('footer').css('margin-top', heightShortage);
  }
  // source of "updateFooterPosition()" -- > https://stackoverflow.com/a/57738593/12007562
}


