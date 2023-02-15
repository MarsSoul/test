document.getElementById("button").addEventListener("click", function(){
var lat = parseFloat(document.getElementById('lat').value);
var lon = parseFloat(document.getElementById('lon').value);
const x = Math.floor((lon + 180) / 360 * Math.pow(2, 19));
const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, 19));
    document.getElementById("x").innerHTML = 'x = ' + x;
    document.getElementById("y").innerHTML = 'y = ' + y;
});
