<?php

header("Content-type: text/xml\n\n");
print "<?xml version='1.0' encoding='UTF-8'?>";
print "<?xml-stylesheet type='text/xsl' href='assign09.xsl'?>";

$firstname = array("Jakob", "Trever", "Bill", "Grandma", "Amanda");
$middlname = array("Ann", "Kyle", "Bernard", "Old", "Ann");
$lastname  = array("Alldredge", "Newsman", "Berheizer", "All", "Orem");
$city      = array("Dallas", "Mormonville", "SLC", "Smallville", "South Jordan");
$state     = array("Texas", "Utah", "Utah", "Virginia", "Utah");
$college   = array("Weber State", "BYU", "A&amp;M", "BYU-I", "UCLA");
$department = array("Physical Science", "Business", "Business", "Old People", "Aggriculture");
$major     = array("CS", "CIT", "Accounting", "Cookie Baking", "Farming");


print "<studentList>";
for ($i=0; $i < sizeof($firstname); $i++) {
  print "<student>";
  print "<name>";
  print "<first>$firstname[$i]</first>";
  print "<middle>$middlname[$i]</middle>";
  print "<last>$lastname[$i]</last>";
  print "</name>";
  print "<location>";
  print "<city>$city[$i]</city>";
  print "<state>$state[$i]</state>";
  print "</location>";
  print "<college name='$college[$i]'>";
  print "<department name='$department[$i]'>";
  print "<major>$major[$i]</major>";
  print "</department>";
  print "</college>";
  print "</student>";
}
print "</studentList>";

?>
