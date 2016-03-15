

var req;

function processReqChange()
{
  /*
    readyState return types
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready

    status return types
    200: "OK"
    404: Page not found
  */
  if (req.readyState == 4 && req.status == 200)
    {
      var theText = req.responseText;
      document.getElementById("cities").innerHTML = theText;
    }
    else
    {
      /*alert("There was a problem in processReqChange\n" +
            "req readyState = " + req.readyState +
            "\nreq status = " + req.status); */
    }
  }

function jsonReq()
{
  /*
    readyState return types
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready

    status return types
    200: "OK"
    404: Page not found
  */
  if (req.readyState == 4 && req.status == 200)
    {
      var object = JSON.parse(req.responseText);
      var list = "<table border = '1'><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

      for (var i = 0; i < object.students.length; i++)
      {
        list += "<tr><td>" + object.students[i].first + " " + object.students[i].last + "</td>" +
        "<td>" + object.students[i].address.city + ", " + object.students[i].address.state + " " +
        object.students[i].address.zip + "</td>" +
        "<td>" + object.students[i].major + "</td>" +
        "<td>" + object.students[i].gpa + "</td></tr>\n";
      }
      document.getElementById("studentlist").innerHTML = list;
    }
    else
    {
      //alert("There was a problem in jsonReq");
    }
  }


function xmlLoader(url)
{
  // normal xml request
  req = new XMLHttpRequest();

  // make sure request worked
  if (req != null)
  {
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

function jsonPage(url)
{
  req = new XMLHttpRequest();

  if (req != null)
  {
    req.onreadystatechange = jsonReq;
    req.open("GET", url , true);
    req.send(null);
  }
  else
  {
    //alert("Browser doesn't support xml requests");
  }
}


function getCities()
{
  var currentCountry = document.getElementById("country").value;
  switch (currentCountry) {
    case 'usa':
      xmlLoader('usa.txt');
      break;
    case 'mex':
      xmlLoader('mexico.txt');
      break;
    case 'can':
      xmlLoader('canada.txt');
      break;
    case 'rus':
      xmlLoader('russia.txt');
      break;
    case 'ger':
      xmlLoader('germany.txt');
      break;
    default:
      xmlLoader('usa.txt');
  }
}

function setFocus(id)
{
  document.getElementById(id).focus();
  getCities();
}

function getJSON()
{
  fileName = document.getElementById("fileName").value;
  jsonPage(fileName);
}
