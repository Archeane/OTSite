(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.scrollspy').scrollSpy();
      
  }); // end of document ready
})(jQuery); // end of jQuery name space


//populate class dropdown
(function () {
    var template = document.querySelector('.template');
    var brotherdropdown = document.querySelector('#brotherdropdown');

    for (var i = 0; i < classesInfo.length; ++i) {
        var classElement = template.cloneNode(true);
        classElement.classList.remove('template');
        classElement.style.display = 'block';
        classElement.childNodes[0].innerHTML = classesInfo[i].className;
        classElement.childNodes[0].href = '/brothers?who=' + classesInfo[i].className;
        brotherdropdown.appendChild(classElement);
    }
})();

$('#oncampus').hide();
//show employer/campus
function showEmployer(show) {
    console.log(show);
    if (show == 'true') {
        $('#employers').show();
        $('#oncampus').hide();
    } else {
        $('#employers').hide();
        $('#oncampus').show();
    }
}


function showMore(show) {
    console.log(show);
    if (show == 'true') {
        $('#more').show();
    } else {
        $('#more').hide();
    }
}

