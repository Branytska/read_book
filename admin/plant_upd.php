<?php
	
    include "./inc/db.inc.php";

    $id = intval($_POST['id']);
    $kind = $_POST['kind'];
    $taxonomic = $_POST['taxonomic'];
    $status_kind = intval($_POST['status_kind']);
    $areal = $_POST['areal'];
    $strength = $_POST['strength'];
    $relevance = $_POST['relevance'];
    $kind_foto = $_POST['kind_foto'];

    $query = "UPDATE `plants` SET `kind`='".$kind."', `taxonomic`='".$taxonomic."', `id_status_kind`=".$status_kind.", `area_foto`='".$areal."', `strength`='".$strength."', `relevance`='".$relevance."', `kind_foto`='".$kind_foto."' WHERE id_plant = ".$id.";";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    
    if ($result == true) {
        $result = 'success';
        echo json_encode($result);
    }else{
        $result = "error";
        echo json_encode($result);
    }

    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);
?>
    
