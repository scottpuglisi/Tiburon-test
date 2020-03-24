<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST ['message']

$email_from = 'spuglisi@tiburonlockers.com';

$email_subject = "New Lead - Web Form Submission";

$email_body = "Name: $name.\n".
			"Email: $email.\n".
			"Phone Numer: $phone.\n".
			"Company: $company.\n".
			"Industry: $industry.\n".
			"Location: $location.\n".
			"Annual Visitors: $visitors.\n".
			"Current Lockers: $currentlockers.\n".
			"Comments: $comments.\n";

$to = "lockmeup@tiburonlockers.com

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html);

?>