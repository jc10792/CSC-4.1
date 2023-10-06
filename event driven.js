var intervalID = 0;
var change = Math.random()*50;

function start()
{
  var image = document.getElementById("imgMeme");
  intervalID = setInterval(function()
  {
    image.style.left = change+"px";
    image.style.top = change+"px";
    change += Math.random()*5;
  }, Math.random()*200);
  const screenHeight = window.innerHeight; //Attempt to get the height of the window. Inspiration for this code was from Stackoverflow and ChatGPT - https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
  const imageHeight = image.clientHeight; //Attempt to get the height of the image
  if (change + imageHeight > screenHeight) //Atempt to set if statement for when the change in position and the initial image height exceeds the screen height
    {
      change = -10; //Moving the image in the opposite direction once the logical is true 
    }
  document.getElementById("startButton").disabled = true; //Toggling the buttons on and off
  document.getElementById("stopButton").disabled = false;
}

function stop()
{
  clearInterval(intervalID);  
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}