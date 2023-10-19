$(document).ready(function () {
    $("a.myLinkModal").click(function (event) {
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myModal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#myModal__close, #myOverlay").click(function () {
        $("#myModal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
        });
    });
});

window.onload = function() {
    var img = document.getElementById('img');
    var container = document.getElementById('container');
    var showImage = function showImage() {
      img.style.display = "inline";
      container.style.backgroundImage = "";
    };
    img.addEventListener('load', showImage);
    img.addEventListener('error', showImage);
    var thumbs = document.getElementsByClassName('thumb');
    for (var i = 0, z = thumbs.length; i < z; i++) {
      var thumb = thumbs[i];
      var handler = (function(t) {
        return function clickThumb() {
          container.style.backgroundImage = "url('https://dummyimage.com/500x500/000/fff.gif&text=loading')";
          img.style.display = "none";
          img.src = t.dataset['image'];
        };
      })(thumb);
      thumb.addEventListener('click', handler);
    }
  };