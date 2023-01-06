function chooseBackground() {
Swal.fire({
  title: '<strong>Choose a <u>background</u></strong>',
  icon: 'info',
  html:
    '<select name="colors" onchange="changeColor(this)">' +
    '<option value="url(/backgrounds/skoolbackground.gif)">Choose one</option>' +
    '<option value="url(/backgrounds/skoolbackground.gif)">Sunset</option>' +
    '<option value="url(/colorbackground.gif)">Rainbow</option>' +
    '<option value="url(/backgrounds/default.png)">Original</option>' +
  '</select>'
  })
}

function changeColor(event) {
  var color = event.value;
  console.log(color)
  document.getElementsByTagName('BODY')[0].style.background = color;
  document.getElementsByTagName('BODY')[0].style.backgroundSize = "100%";
}
