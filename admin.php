<html>
<head>
    <title>Красная книга Украины</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- CSS | STYLE -->

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/linecons.css" />
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="css/colors/brown.css"  id="csscolors"/>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/table.css" />

    <!-- CSS | Google Fonts -->

    <link href='http://fonts.googleapis.com/css?family=Montserrat:400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:200,400,300,500,600' rel='stylesheet' type='text/css'>

    <noscript>
        <style>
        @media screen and (max-width: 755px) {
            .hs-content-scroller {
                overflow: visible;
            }
        }
        </style>
    </noscript>
</head>

<body>

    <!-- Page preloader -->
    <div id="page-loader">
        <canvas id="demo-canvas"></canvas>
    </div>
    <!-- container -->
    <div id="hs-container" class="hs-container">
        <!-- Sidebar-->
        <div class="aside1">
            <a class="contact-button" href="index.php">Выход</a>
            <div class="aside-content"><span class="part1">Красная книга Украины</span>
            </div>
        </div>
        <aside class="hs-menu" id="hs-menu">

            <!-- Profil Image-->
            <div class="hs-headline">
                <div class="img-wrap">
                    <img src="images/portrait.jpg" alt="" width="150" height="150" />
                </div>
            </div>
            <!-- End Profil Image-->

            <!-- menu -->
            <nav>
                <a href="#section1"><span class="menu_name">Животные Красной книги</span></a>
                <a href="#section2"><span class="menu_name">Растения Красной книги</span></a>
            </nav>
            <!-- end menu-->
        </aside>
        <!-- End sidebar -->

        <!-- Go To Top Button -->
        <a href="#hs-menu" class="hs-totop-link"><i class="fa fa-chevron-up"></i></a>
        <!-- End Go To Top Button -->

        <!-- hs-content-scroller -->
        <div class="hs-content-scroller">
            <!-- Header -->
        
            <!-- hs-content-wrapper -->
            <div class="hs-content-wrapper">
                <!-- Animals section -->
                <article class="hs-content works-section" id="section1">
                    <div class="hs-inner">
                        <h2>Животные Красной книги</h2>
                        <div class="portfolio">
                            <div id="result_del"></div>
                            <a href=".animal_add" class="open_popup">
                                <span class="submit_btn">
                                    <img  src="https://img.icons8.com/color/48/000000/plus--v1.png"/>
                                    Добавить новую запись
                                </span>
                            </a>

                            <table class="simple-little-table" id="animals_table" cellspacing="0">
                                <tr>
                                    <th>Вид</th>
                                    <th>Таксономия</th>
                                    <th>Статус</th>
                                    <th>URL фотографии ареала</th>
                                    <th>Численность</th>
                                    <th>Значение</th>
                                    <th>URL фотографии вида</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <?php include 'admin/animals.php'?>
                            </table>

                            <div class="mfp-hide mfp-with-anim work_desc contact-section animal_add">
                                <fieldset id="contact_form" class="add_panel">
                                    
                                    <h3>Добавление нового вида животного в Красную книгу Украины</h3>
                                    <div id="result_add"></div>
                                    <input type="text" style="margin: 10px;" name="animal_kind_value" placeholder="Название вида" />
                                    <input type="text" style="margin: 10px;" name="animal_taxonomic_value" placeholder="Таксономическая принадлежность" />
                                    <input type="text" style="margin: 10px;" name="animal_areal_value" placeholder="Ареал вида и его распространение в Украине(URL)" />
                                    <input type="text" style="margin: 10px;" name="animal_strength_value" placeholder="Численность и причины ее изменения" />
                                    <input type="text" style="margin: 10px;" name="animal_relevance_value" placeholder="Хозяйственное и коммерческое значение" />
                                    <input type="text" style="margin: 10px;" name="animal_kind_foto_value" placeholder="Фотография вида(URL)" />
                                    <select  id="animal_status" style="margin: 10px;">
                                        <?php include "admin/status.php"?>
                                    </select>
                                    <br>
                                    <span class="submit_btn" id="animal_add_btn">Добавить</span>
                                </fieldset>     
                            </div>

                            <div class="mfp-hide mfp-with-anim work_desc contact-section animal_upd_data">
                                <fieldset id="contact_form" class="add_panel">
                                    <h3>Изменение вида животного в Красной книге Украины</h3>
                                    <div id="result_upd"></div>
                                    <input type="text" style="margin: 10px;" id="animal_kind_value" placeholder="Название вида" />
                                    <input type="text" style="margin: 10px;" id="animal_taxonomic_value" placeholder="Таксономическая принадлежность" />
                                    <input type="text" style="margin: 10px;" id="animal_areal_value" placeholder="Ареал вида и его распространение в Украине(URL)" />
                                    <input type="text" style="margin: 10px;" id="animal_strength_value" placeholder="Численность и причины ее изменения" />
                                    <input type="text" style="margin: 10px;" id="animal_relevance_value" placeholder="Хозяйственное и коммерческое значение" />
                                    <input type="text" style="margin: 10px;" id="animal_kind_foto_value" placeholder="Фотография вида(URL)" />
                                    <select  id="animal_status2" style="margin: 10px;">
                                        <?php include "admin/status.php"?>
                                    </select>
                                    <br>
                                    <span class="submit_btn" id="animal_upd_btn">Изменить</span>
                                    <input type="hidden" id="id"/>
                                </fieldset>     
                            </div>
                            <div style="clear:both"></div>
                        </div>
                    </div>
                </article>
                <!-- End Animals section -->
                <!-- Plant section -->
                <article class="hs-content works-section" id="section2">
                    <div class="hs-inner">
                        <h2> Растения Красной книги</h2>
                        <div class="portfolio">
                            <div id="result_del"></div>
                            <a href=".plant_add" class="open_popup">
                                <span class="submit_btn">
                                    <img  src="https://img.icons8.com/color/48/000000/plus--v1.png"/>
                                    Добавить новую запись
                                </span>
                            </a>
                            <table class="simple-little-table" id="plant_table" cellspacing="0">
                                <tr>
                                    <th>Вид</th>
                                    <th>Таксономия</th>
                                    <th>Статус</th>
                                    <th>URL фотографии ареала</th>
                                    <th>Численность</th>
                                    <th>Значение</th>
                                    <th>URL фотографии вида</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <?php include 'admin/plants.php'?>
                            </table>
                            <div class="mfp-hide mfp-with-anim work_desc contact-section plant_add">
                                <fieldset id="contact_form" class="add_panel">
                                    <h3>Добавление нового вида растения в Красную книгу Украины</h3>
                                    <div id="result_add"></div>
                                    <input type="text" style="margin: 10px;" name="plant_kind_value" placeholder="Название вида" />
                                    <input type="text" style="margin: 10px;" name="plant_taxonomic_value" placeholder="Таксономическая принадлежность" />
                                    <input type="text" style="margin: 10px;" name="plant_areal_value" placeholder="Ареал вида и его распространение в Украине(URL)" />
                                    <input type="text" style="margin: 10px;" name="plant_strength_value" placeholder="Численность и причины ее изменения" />
                                    <input type="text" style="margin: 10px;" name="plant_relevance_value" placeholder="Хозяйственное и коммерческое значение" />
                                    <input type="text" style="margin: 10px;" name="plant_kind_foto_value" placeholder="Фотография вида(URL)" />
                                    <select  id="plant_status" style="margin: 10px;">
                                        <?php include "admin/status.php"?>
                                    </select>
                                    <br>
                                    <span class="submit_btn" id="plant_add_btn">Добавить</span>
                                </fieldset>     
                            </div>

                            <div class="mfp-hide mfp-with-anim work_desc contact-section plant_upd_data">
                                <fieldset id="contact_form" class="add_panel">
                                    <h3>Изменение вида растения в Красной книге Украины</h3>
                                    <div id="result_upd"></div>
                                    <input type="text" style="margin: 10px;" id="plant_kind_value" placeholder="Название вида" />
                                    <input type="text" style="margin: 10px;" id="plant_taxonomic_value" placeholder="Таксономическая принадлежность" />
                                    <input type="text" style="margin: 10px;" id="plant_areal_value" placeholder="Ареал вида и его распространение в Украине(URL)" />
                                    <input type="text" style="margin: 10px;" id="plant_strength_value" placeholder="Численность и причины ее изменения" />
                                    <input type="text" style="margin: 10px;" id="plant_relevance_value" placeholder="Хозяйственное и коммерческое значение" />
                                    <input type="text" style="margin: 10px;" id="plant_kind_foto_value" placeholder="Фотография вида(URL)" />
                                    <select  id="plant_status2" style="margin: 10px;">
                                        <?php include "admin/status.php"?>
                                    </select>
                                    <br>
                                    <span class="submit_btn" id="plant_upd_btn">Изменить</span>
                                    <input type="hidden" id="id_plant"/>
                                </fieldset>     
                            </div>
                            <div style="clear:both">
                            </div>
                        </div>
                    </div>
                </article>
                <!-- End Plant section -->
                <!-- End hs-content-wrapper -->
            </div>
            <!-- End hs-content-scroller -->
        </div>
        <!-- End container -->
        <!-- PLUGIN SCRIPTS -->

        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/default.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="js/watch.js"></script>
        <script type="text/javascript" src="js/layout.js"></script>
        <script type="text/javascript" src="js/main.js"></script>

        <!-- END PLUGIN SCRIPTS -->
</body>

</html>
