<?php
    use PHPMailer\PHPMailer\PHPMailer;


    $dentistName = $_POST['dentist_name'];
    $dentistAddress = $_POST['dentist_address'];
    $dentistEmail = $_POST['dentist_email'];
    $dentistPhone = $_POST['dentist_phone'];
    $dentistGdc = $_POST['dentist_gdc'];

    $patientName = $_POST['user_name'];
    $patientBirth = $_POST['user_datebirth'];
    $patientEmail = $_POST['user_email'];
    $patientPhone = $_POST['user_phone'];

    $procedure = $_POST['procedure'];
    $reasonForReferral = $_POST['reason_for_referral'];

    $tooth = implode(" | ",$_POST['tooth']);

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //SMTP Settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "xxxxxx"; // sender mail (SMPT)
    $mail->Password = 'xxxxxx'; // password of sender mail
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //Email Settings
    // $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);
    for($ct=0;$ct<count($_FILES['upload']['tmp_name']);$ct++){
    $mail->AddAttachment($_FILES['upload']['tmp_name'][$ct],$_FILES['upload']['name'][$ct]);
}
    $mail->isHTML(true);

    $mail->setFrom('xxxx'); // sender mail
    $mail->addAddress("xxx"); // where the emails will go
    $mail->Subject = ("$dentistEmail ($dentistName)");
    $mail->Body = "Dentist's full name: " . $dentistName . '<br>' .
    'Practice name and address: ' . $dentistAddress . '<br>' .
    'Email: ' . $dentistEmail . '<br>' .
    'Phone: ' . $dentistPhone . '<br>' .
    'GDC numbeer: ' . $dentistGdc . '<br>' . '<br>' .
    "Patient's name: " . $patientName . '<br>' .
    'Date of birth: ' . $patientBirth . '<br>' .
    'Email: ' . $patientEmail . '<br>' .
    'Phone: ' . $patientPhone . '<br>' . '<br>' .

    'Region of interest: ' . $tooth . '<br>' .

    'Diagnose: ' . $procedure . '<br>' .
    'Reason for referral: ' . $reasonForReferral . '<br>';


    if ($mail->send()) {
      header('location: thanks.html');
    } else {
      echo 'Error';
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
?>
