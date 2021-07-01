

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

   var $docVar = $(document),
            $winVar = $(window),
            $svgVar = $('svg').drawsvg(),
            max = $docVar.height() - $winVar.height();
  
        $winVar.on('scroll', function() {
            var p = $winVar.scrollTop() / max;
            $svgVar.drawsvg('progress', p);
        });
