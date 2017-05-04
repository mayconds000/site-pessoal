<?php


require './PHPMailer/PHPMailerAutoload.php';
//Recupera os dados enviados pelo formulário


$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);

var_dump( $getPost );

// Variáveis
$nome = $getPost['nome'];
$email = $getPost['email'];
$telefone = $getPost['phone'];
$mensagem = $getPost['mensagem'];


// Enviando o e-mail 
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = "smtp.mayconds.com";
$mail->SMTPAuth = true;
$mail->Username = "site@mayconds.com";
$mail->Password = "Mxds@326";
/**
* Caso o SMTPDebug estiver abilitado da erro no redirect devido ao 
* `echo` 
*/
//$mail->SMTPDebug = 3;
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->CharSet = "utf8";
$mail->setFrom("site@mayconds.com", "{$nome}");
$mail->addAddress("mayconds000@gmail.com");
$mail->isHTML(true);

$mail->Subject = "Orcamento pelo site";
$mail->Body = "Enviado por: {$nome} <br /> 
                  Telefone: {$telefone}<br /> 
                     Email: {$email}<br /> 
                  Mensagem: {$mensagem}";

if(!$mail->send()) {
  echo "error " . $mail->ErrorInfo;
} else {
  echo "success";
}