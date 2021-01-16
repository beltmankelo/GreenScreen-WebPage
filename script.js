var fgimg;
var bgimg;
var opimg;
function fgImage()
{
  var canvas=document.getElementById("uno");
  var file=document.getElementById("fname");
  fgimg=new SimpleImage(file);
  fgimg.drawTo(canvas);
}
function bgImage()
{
  var canvas=document.getElementById("dos");
  var file=document.getElementById("bname");
  bgimg=new SimpleImage(file);
  bgimg.drawTo(canvas);
}
function createGreen()
{
  var canvas=document.getElementById("tres");
  var opimg=new SimpleImage(bgimg.width,bgimg.height);
  for(var pix of fgimg.values())
    {
      if(pix.getGreen()>pix.getRed()+pix.getBlue())
        {
          var x=pix.getX();
          var y=pix.getY();
          opimg.setPixel(x,y,bgimg.getPixel(x,y));
        }
      else
        {
          opimg.setPixel(pix.getX(),pix.getY(),fgimg.getPixel(pix.getX(),pix.getY()));
        }
    }
  opimg.drawTo(canvas);
}
function clrCanvas()
{
  var canvas=document.getElementById("uno");
  var canvas2=document.getElementById("dos");
  var canvas3=document.getElementById("tres");
  var ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx=canvas2.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx=canvas3.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
}