<?php
    include "db.inc.php";
    $query = "SELECT a.id_animal, a.kind, a.taxonomic, b.name, a.area_foto, a.strength, a.relevance, a.kind_foto FROM animals a, status_kind b WHERE a.id_status_kind = b.id_status_kind";
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
    if($result){
        $rows = mysqli_num_rows($result);
        $column = mysqli_num_fields($result);
        while ($row = mysqli_fetch_array($result)) {
            echo '<figure class="effect-milo">';
            echo '<img src="'.$row['kind_foto'].'" alt="img11" width="282" height="222" />';
            echo '<figcaption>';
            echo '<div class="portfolio_button">';
            echo '<h3>Подробности</h3>';
            echo '<a href=".animal'.$row['id_animal'].'" class="open_popup" data-effect="mfp-zoom-out"> <i class="hovicon effect-9 sub-b"></i></a>';
            echo '</div>';
            echo '<div class="mfp-hide mfp-with-anim work_desc animal'.$row['id_animal'].'">';
            echo '<div class="col-md-6"><div class="image_work">';
            echo '<h3 class="project_title">Фотография вида:<br>';
            echo '<img src="'.$row['kind_foto'].'" alt="img" width="348" height="280">';
            echo '<h3 class="project_title">Ареал вида и его распространение в Украине:<br>';
            echo '<img src="'.$row['area_foto'].'" alt="img" width="348" height="280">';
            echo '</div></div>';
            echo '<div class="col-md-6"><div class="project_content">';
            echo '<h2 class="project_title">'.$row['kind'].'</h2>';
            echo '<h3 class="project_title">Таксономическая принадлежность:</h2>';
            echo '<p class="project_desc">'.$row['taxonomic'].'</p>';
            echo '<h3 class="project_title">Природоохранный статус вида:</h2>';
            echo '<p class="project_desc">'.$row['name'].'</p>';
            echo '<h3 class="project_title">Численность и причины ее изменения:</h2>';
            echo '<p class="project_desc">'.$row['strength'].'</p>';
            echo '<h3 class="project_title">Хозяйственное и коммерческое значение:</h2>';
            echo '<p class="project_desc">'.$row['relevance'].'</p>';
            echo '</div></div><div style="clear:both"></div></div></figcaption></figure>';

        }
    }
    mysqli_free_result($result);// очищаем результат
    mysqli_close($link);
?>