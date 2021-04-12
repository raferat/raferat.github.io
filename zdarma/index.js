let i = document . getElementById ("cursor");

function moveCursor(event)
{
  var x = event . clientX;
  var y = event . clientY + window.pageYOffset;
  
  i . style . display = "block";
  i . style . top = y + "px";
  i . style . left = x + "px";
}

function hideCursor ()
{
  i . style . display = "none";
}