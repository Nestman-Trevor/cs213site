<?php

echo "<title>Confirmation Page</title>";

echo "<h1>Confirmation</h1>";
echo "<h3> First Name: ";
echo $_POST["firstName"];
echo "</h3>";
echo "<h3> Last Name: ";
echo $_POST["lastName"];
echo "</h3>";
echo "<h3> Address: ";
echo $_POST["address"];
echo "</h3>";
echo "<h3> Phone# ";
echo $_POST["phone"];
echo "</h3>";
echo "<h3> Items to be Purchased: </h3>";
if(!empty($_POST['vehicle'])) {
  echo "<ul>";
  foreach ($_POST['vehicle'] as $item) {
    echo "<li>$item</li>";
  }
  echo "</ul>";
}
echo "<h3> Total: $";
echo $_POST["total"];
echo "</h3>";
echo "<h3> Credit Card Type: ";
echo $_POST["ccType"];
echo "</h3>";
echo "<h3> Credit Card Expiration: ";
echo date('F', mktime(0, 0, 0, $_POST["ccExpiration"][0] + $_POST["ccExpiration"][1], 10));
echo " ";
echo substr($_POST["ccExpiration"], 3);
echo "</h3>";

echo "<form action='assign10_a.php'>";
echo "<input type='submit' name='confirm' value='Submit'/>";
echo "<input type='submit' name='destroy' value='Cancel'/>";
echo "</form>";
?>
