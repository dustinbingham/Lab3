function changeIt(){
  var makeChanges = document.getElementById('P1')

  var bR = document.getElementById('backgroundRed').value
  var bG = document.getElementById('backgroundGreen').value
  var bB = document.getElementById('backgroundBlue').value

  makeChanges.style.backgroundColor = 'rgb(' + bR + ',' + bG + ',' + bB + ')';


    var boR = document.getElementById('borderRed').value
    var boG = document.getElementById('borderGreen').value
    var boB = document.getElementById('bordreBlue').value
    var boSize = document.getElementById('borderSize').value

    makeChanges.style.borderColor = 'rgb(' + boR + ',' + boG + ',' + boB + ')';
    makeChanges.style.borderRadius = boSize + "px";

}
