/********************************************************
* This uses a CGI web service that returns the mileage
* between two cities as an XML document
********************************************************/

var req;

function xmlLoader()
{
  // normal xml request
  req = new XMLHttpRequest();

  // make sure request worked
  if (req != null)
  {
    url = "http://157.201.194.254/cgi-bin/ercanbracks/mileage/mileageAjaxXML" +
    "?startCity=" + document.getElementsByName('startCity')[0].value +
    "&startState=" + document.getElementsByName('startState')[0].value +
    "&endCity=" + document.getElementsByName('endCity')[0].value +
    "&endState=" + document.getElementsByName('endState')[0].value;
    req.onreadystatechange = processReqChange;
    req.open("GET", url, true);
    req.send(null);
    //alert("url: " + url);
  }
  else
  {
    //alert("xml Loader ERROR");
  }
}

function processReqChange()
{
  if (req.readyState == 4 && req.status == 200)
  {
    var xml = req.responseXML;
    document.getElementById("results").value +=
    "Trip Information:\n" +
    "Start: " + xml.getElementsByTagName('startcity')[0].childNodes[0].nodeValue
     + ", " + xml.getElementsByTagName('startstate')[0].childNodes[0].nodeValue + "\n"
     + "Destination: " + xml.getElementsByTagName('endcity')[0].childNodes[0].nodeValue
     + ", " + xml.getElementsByTagName('endstate')[0].childNodes[0].nodeValue + "\n"
     + "Miles: " + xml.getElementsByTagName('miles')[0].childNodes[0].nodeValue + "\n"
     + "Modes of Transportation: " + xml.getElementsByTagName('tmode')[0].childNodes[0].nodeValue
     + "\n\n";
  }
  else
  {
    // ERROR
  }
}
