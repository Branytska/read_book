<?php
	
    include "./inc/db.inc.php";

    $id = intval($_POST['id']);

    $query = 'DELETE FROM animals WHERE id_animal = '.$id.';';
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    
    if ($result == true) {
        $result = "success";
        echo json_encode($result);
    }else{
        $result = "error";
        echo json_encode($result);
    }
    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);
?>
    
