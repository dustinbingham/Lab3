var slideCounter = 1;
showSlide(slideCounter)

function NextSlide(n){
  showSlide(slideCounter += n)
}


function showSlide(n){
  var i;
  var x = document.getElementsByClassName('mySlideShow')
  if (n > x.length){
  slideCounter = 1;
}
  if (n < 1)
  {slideCounter = x.length}
  for (i = 0; i < x.length; i++){
  {  x[i].style.display = "none"}
  }
  x[slideCounter-1].style.display = "block"
}
