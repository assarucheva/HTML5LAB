function init()
{
    document.addEventListener('MozMousePixelScroll', scroll)
    document.addEventListener("wheel", scroll)
    document.addEventListener("mousewheel", scroll)
}
var mul = 1;

   function scroll(e)
   {
      var doc = document.getElementById('id1');
      var coef = e.deltaY || e.detail || e.wheelDelta;
      // отмасштабируем при помощи CSS
      if (coef > 0) mul += 0.01;
      else mul -= 0.01;
      doc.style.transform = doc.style.WebkitTransform = doc.style.MsTransform = 'scale(' + mul + ')';
    }
onload = init;
