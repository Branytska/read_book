<?php

    include "./inc/db.inc.php";

    $query = "SELECT id_status_kind, name FROM status_kind";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    if($result){
    	while ($row = mysqli_fetch_array($result)) {
    		echo "<option value='".$row['id_status_kind']."'>".$row['name']."</option>";
		}
    }
    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);