<?php
    use PHPMailer\PHPMailer\PHPMailer;


    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $phone = $_POST['user_phone'];
    $issue = $_POST['user_issue'];
    $message = $_POST['user_message'];

    // $attachment = $_POST['upload'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //SMTP Settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "xxx"; // sender mail (SMPT)
    $mail->Password = 'xxx'; // password of sender mail
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //Email Settings
    $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);
    $mail->isHTML(true);

    $mail->setFrom('xxx'); // sender mail
    $mail->addAddress("xxx"); // where the emails will go
    $mail->Subject = ("$email ($name)");
    $mail->Body = 'Name: ' . $name . '<br>' .
    'Email: ' . $email . '<br>' .
    'Phone: ' . $phone . '<br>' .
    'Dental issue: ' . $issue . '<br>' .
    'Message: ' . $message . '<br>';


    if ($mail->send()) {
      header('location: thanks.html');
    } else {
      echo 'Error';
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
?>
