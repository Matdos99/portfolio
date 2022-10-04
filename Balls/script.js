var canvas= document.getElementById('canvas');
var c= canvas.getContext("2d");
var w =window.innerWidth;
var h = window.innerHeight;

canvas.width= w;
canvas.height= h;

var mousex= 0;
var mousey = 0;

addEventListener ('mousemove', function(){
    mousex= event.clientX;
    mousey= event.clientY;
})

var grav= 0.99;
c.strokeWidth= 5;
function random(){
    return ('rgba('+ Math.round(Math.random()*250)
    + ','+ 
    Math.round(Math.random()*250)
    + ','+ 
    Math.round(Math.random()*250) 
    + ','+ 
    Math.ceil(Math.random()*10)/10+ ')')
};

function ball(){
    this.color= random();
    this.radius= Math.random()* 20+14;
    this.startradius = this.radius;
    this.x = Math.random() * (w - this.radius * 2) + this.radius;
    this.y = Math.random() * (h - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() /5;
    this.update = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fillStyle = this.color;
      c.fill();
      //c.stroke();
    };
  }
  
  var bal = [];
  for (var i=0; i<50; i++){
      bal.push(new ball());
  }
  
  function animate() {    
    if (w != window.innerWidth || h != window.innerHeight) {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, w, h);
    for (var i = 0; i < bal.length; i++) {
      bal[i].update();
      bal[i].y += bal[i].dy;
      bal[i].x += bal[i].dx;
      if (bal[i].y + bal[i].radius >= h) {
        bal[i].dy = -bal[i].dy * grav;
      } else {
        bal[i].dy += bal[i].vel;
      }    
      if(bal[i].x + bal[i].radius > w || bal[i].x - bal[i].radius < 0){
          bal[i].dx = -bal[i].dx;
      }
      if(mousex > bal[i].x - 20 && 
        mousex < bal[i].x + 20 &&
        mousey > bal[i].y -50 &&
        mousey < bal[i].y +50 &&
        bal[i].radius < 70){
          //bal[i].x += +1;
          bal[i].radius +=5; 
        } else {
          if(bal[i].radius > bal[i].startradius){
            bal[i].radius += -5;
          }
        }
        
      //forloop end
      }
  //animation end
  }
  
  animate();
  
  setInterval(function() {
    bal.push(new ball());
    bal.splice(0, 1);
  }, 500);