<?php

if ($_REQUEST['confirm']) {
  echo "<title>Complete</title>";
  echo "<h1>Transaction Completed</h1>";
  echo "<p>Your transaction was completed<br>
  Thank you for your purchase and please come back again soon!</p>";
}
else {
  echo "<title>Canceled</title>";
  echo "<h1>Transaction Canceled</h1>";
  echo "<p>Your transaction was canceled<br>
  Please come back again soon!</p>";
}

?>
