var Index = 0;
slideShowFunction();

function slideShowFunction()
{
  var i = 0;
  var slide1 = document.getElementsByClassName("Slide1");
  var slide2 = document.getElementsByClassName("Slide2");
  var slide3 = document.getElementsByClassName("Slide3");
  var slide4 = document.getElementsByClassName("Slide4");

  for (i = 0; i < slide1.length; i++) {
    slide1[i].style.display = "none";
    slide2[i].style.display = "none";
    slide3[i].style.display = "none";
    slide4[i].style.display = "none";
  }
  Index++;
  if (Index > slide1.length)
  {
    Index = 1;
  }

  slide1[Index-1].style.display = "block";
  slide2[Index-1].style.display = "block";
  slide3[Index-1].style.display = "block";
  slide4[Index-1].style.display = "block";

  setTimeout(slideShowFunction, 3000);
}

