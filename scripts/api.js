var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhttp.open("GET", "https://www.bangchak.co.th/api/oilprice", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName('today')[2];
    var y = x.childNodes[0];
    document.getElementById("burn_cane").innerHTML =
    y.nodeValue; 
}