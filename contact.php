<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['number'];
  $message = $_POST['message'];
  
  $to = 'emjay.knight@gmail.com';
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nNumber: $number\n\n$message";
  
  if (mail($to, $subject, $body)) {
    echo 'Thank you for contacting me.';
  } else {
    echo 'There was a problem sending your message. Please try again later.';
  }
}
?>
