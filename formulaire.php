<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $to = 'votre-email@votre-domaine.com';
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);
  header('Location: thank-you.html');
}
