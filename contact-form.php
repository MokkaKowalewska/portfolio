<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

ini_set("SMTP", "serwer1940016.home.pl ");
ini_set("sendmail_from", "hello@monikakowalewska.pl");
ini_set("smtp_port", "465");


if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = "hello@monikakowalewska.pl";
    $from = "hello@monikakowalewska.pl";
    $subject = "MONIKAKOWALEWSKAPL MESSAGE";
    $content = "<b>Name:</b>" . $name . "<br><b>Email:</b>" . $email . "<br><b>Message:</b>" . "<p>" . $message . "</p>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    mail($to, $subject, $content, $headers);

        if(mail($to, $subject, $content, $headers))  {
            echo "success";
        } else {
            echo "Oopsie! The server failed to send the message. I'm sorry, could You try again later?";
        }


}


?>
