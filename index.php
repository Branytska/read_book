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
            <a class="contact-button">Вход</a>
            <div class="aside-content">
                <span class="part1">Красная книга Украины</span>
            </div>
        </div>
        <aside class="hs-menu" id="hs-menu">
            <!-- <canvas id="demo-canvas"></canvas> -->

            <!-- Profil Image-->
            <div class="hs-headline">
                <a id="my-link" href="#my-panel"><i class="fa fa-bars"></i></a>
                <a href="#" class="download"><i class="fa fa-cloud-download"></i></a>
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
                            <?php include 'inc/animal.php'?>
                        </div>
                    </div>
                </article>
                <!-- End Animals section -->
                <!-- Plant section -->
                <article class="hs-content works-section" id="section2">
                    <div class="hs-inner">
                        <h2> Растения Красной книги</h2>
                        <div class="portfolio">
                            <?php include 'inc/plant.php'?>
                        </div>
                    </div>
                </article>
                <!-- End Plant section -->

                <!-- Contact Section -->
                    <article class="hs-content contact-section" id="section8">
                    <div class="hs-inner">
                        <div class="contact_info">
                            <h3>Вход в систему</h3>
                            <hr>
                            <h6>Для получения возможности редактирования Красной книги введите имя пользователя и пароль</h6>

                            <hr>
                        </div>
                        <!-- Contact Form -->
                        <fieldset id="contact_form">
                            <div id="result"></div>
                            <input type="text" name="login" id="login" placeholder="Имя пользователя" />
                            <input type="password" name="password" id="password" placeholder="Пароль" />
                            <span class="submit_btn" id="submit_btn">Войти в систему</span>
                        </fieldset>
                        <!-- End Contact Form -->
                    </div>
                </article>                
                <!-- End Contact Section -->
                </div>
                <!-- End hs-content-wrapper -->
            </div>
            <!-- End hs-content-scroller -->
        </div>
        <!-- End container -->
        <div id="my-panel">
        </div>

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
