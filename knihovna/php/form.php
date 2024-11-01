<?php
// multiple recipients (note the commas)
$to = "martinek.pavel@oa-opava.cz";
// subject
$subject = "Subject";
// compose message
$message = "
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <h1>Zpráva z webu: webovky.4fan.cz</h1>
    <ul><li>Zpráva z webu: ";
$message .= $_POST['message'];

$message .= "</li><li>Od: " ;
$message .= $_POST['name'];
$message .= "</li><li>Email: " ;
$message .= $_POST['email'];
$message .= "</li></ul></body></html>";
$message .= "</li></ul></body></html>";

// To send HTML mail, the Content-type header must be set
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

// send email
mail($to, $subject, $message, $headers);

header('Location: http://webovky.4fan.cz/projekt01/success.html')
?>


