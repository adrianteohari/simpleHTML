function schimbaContinut(resursa){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("continut").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", resursa+".html", true);
  xhttp.send();
}

function sectiunea1()
{
  Data();
  Url();
  getLocation();
  Browser();
}

function Data()
{
  var Data= new Date();
  document.getElementById("data").innerHTML += Data;
}
function Url()
{
  document.getElementById("url").innerHTML += window.location.href;
}

function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    document.getElementById("locatie").innerHTML += "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
  document.getElementById("locatie").innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

function Browser()
{
  document.getElementById("browser").innerHTML=navigator.appName+"<br>"+navigator.appVersion+"<br>"+navigator.platform;
}
