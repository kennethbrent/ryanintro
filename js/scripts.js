const tiger = 'Tiger';
const thomas = 'Thomas';
const tv = 'TV';

var i = 0;
var txt = 'Tiger'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tiger").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var b = 0
var txt2 = 'Thomas'; /* The text */
function typeWriter2() {
    if (b < txt2.length) {
      document.getElementById("thomas").textContent += txt2.charAt(b);
      b++;
      setTimeout(typeWriter2, speed);
    }
  }

var c = 0
var txt3 = 'TV'; /* The text */
function typeWriter3() {
    if (c < txt2.length) {
      document.getElementById("tv").textContent += txt3.charAt(c);
      c++;
      setTimeout(typeWriter3, speed);
    }
  }
  
  typeWriter()
  setTimeout(()=>{
      typeWriter2()
  },1200)
  setTimeout(()=>{
    $('#tv').fadeIn();
},3200)

var colorI = 0;
function change() {
  var doc = document.getElementById("tv");
  if(doc.style.backgroundColor === 'red'){
    doc.style.backgroundColor = "";
    doc.style.color = '#000';
  } else {
    doc.style.backgroundColor = 'red';
    doc.style.color = '#fff'
  }
  console.log(doc.style.backgroundColor)
}
setInterval(change, 1000);