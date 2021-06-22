<?php
	$servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "red_book";

    $link = mysqli_connect($servername, $username, $password, $dbname) or die("Ошибка " . mysqli_error($link));
    mysqli_select_db($link,"ajax_demo");
    mysqli_set_charset($link, "utf8");