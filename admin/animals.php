<?php

    include "./inc/db.inc.php";
    
    $query = "SELECT a.id_animal, a.kind, a.taxonomic, b.name, b.id_status_kind, a.area_foto, a.strength, a.relevance, a.kind_foto FROM animals a, status_kind b WHERE a.id_status_kind = b.id_status_kind";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
    if($result){
        while ($row = mysqli_fetch_array($result)) {
           echo "<tr id='animal_id_".$row['id_animal']."'>";
           echo "<td id='animal_kind'>".$row['kind']."</td>";
           echo "<td id='animal_taxonomic'>".$row['taxonomic']."</td>";
           echo "<td id='animal_status' name='".$row['id_status_kind']."'>".$row['name']."</td>";
           echo "<td id='animal_areal'>".$row['area_foto']."</td>";
           echo "<td id='animal_strength'>".$row['strength']."</td>";
           echo "<td id='animal_relevance'>".$row['relevance']."</td>";
           echo "<td id='animal_kind_foto'>".$row['kind_foto']."</td>";
           echo "<td><a href='.animal_upd_data' class='open_popup'><span id='".$row['id_animal']."' class='submit_btn animal_upd'><img src='https://img.icons8.com/color/50/000000/edit.png'/></span></a></td>";
           echo "<td><span id='".$row['id_animal']."' class='submit_btn animal_del'><img src='https://img.icons8.com/color/48/000000/filled-trash.png'/></span></td>";
           echo "</tr>";

        }
    }
    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);
?>