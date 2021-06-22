<?php
	
    include "./inc/db.inc.php";

    $kind = $_POST['kind'];
    $taxonomic = $_POST['taxonomic'];
    $status_kind = intval($_POST['status_kind']);
    $areal = $_POST['areal'];
    $strength = $_POST['strength'];
    $relevance = $_POST['relevance'];
    $kind_foto = $_POST['kind_foto'];

    $query = "INSERT INTO `plants`( `kind`, `taxonomic`, `id_status_kind`, `area_foto`, `strength`, `relevance`, `kind_foto`) VALUES ('".$kind."','".$taxonomic."', ".$status_kind.", '".$areal."', '".$strength."', '".$relevance."', '".$kind_foto."' );";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    $query = "SELECT id_plant FROM plant WHERE kind = '".$kind."';";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    
    if ($result) {
        echo json_encode($result->fetch_row());
    }else{
        $test = "error";
        echo json_encode($test);
    }

    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);
?>
    
