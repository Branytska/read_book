<?php
	$login = $_POST['userLogin'];
	$password = $_POST['userPassword'];
	$result = "";
	if($login != "nastya" || $password != "1234"){
		$result = "error";
	}
	echo json_encode($result);