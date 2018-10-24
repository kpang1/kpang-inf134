 function showImage(smSrc, lgSrc) {
    document.getElementById('largeImg').src = smSrc;
    showLargeImagePanel();
    unselectAll();
    setTimeout(function() {
    document.getElementById('largeImg').src = lgSrc;
        }, 1)
    }
function showLargeImagePanel() {
    document.getElementById('largeImgPanel').style.display = 'block';
    }

function unselectAll() {
    if(document.selection)
        document.selection.empty();
    if(window.getSelection)
        window.getSelection().removeAllRanges();
    }


$(function() {

  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400); 
        return false;
      }
    }
  });
});

