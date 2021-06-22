jQuery(document).ready(function($) {
    "use strict";
    watch($('.pace-progress'), 'width', function() {
        if (this.style.width > 99 + '%') {
            Pace.stop();
        };
    });
        /* ---------------------------------------------------------------------- */
    /* ---------------------- SWITCHER -------------------------------------- */
    /* ---------------------------------------------------------------------- */

    jQuery('#switch-panel').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher').css({
                'left': '-40px'
            });
            jQuery('#switch-panel').removeClass('show-panel');
            jQuery('#switch-panel').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher').css({
                'left': 0
            });
            jQuery('#switch-panel').removeClass('hide-panel');
            jQuery('#switch-panel').addClass('show-panel');
        }
    });
    jQuery('#switch-panel-responsive').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher-responsive').css({
                'right': '-40px'
            });
            jQuery('#switch-panel-responsive').removeClass('show-panel');
            jQuery('#switch-panel-resposnive').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher-responsive').css({
                'right': 0
            });
            jQuery('#switch-panel-resposnive').removeClass('hide-panel');
            jQuery('#switch-panel-responsive').addClass('show-panel');
        }
    });

    $('.blue').click(function() {
        $('#csscolors').attr('href', 'css/colors/blue.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.brown').click(function() {
        $('#csscolors').attr('href', 'css/colors/brown.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.cyan').click(function() {
        $('#csscolors').attr('href', 'css/colors/cyan.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.gray').click(function() {
        $('#csscolors').attr('href', 'css/colors/gray.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.green').click(function() {
        $('#csscolors').attr('href', 'css/colors/green.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.light-brown').click(function() {
        $('#csscolors').attr('href', 'css/colors/light-brown.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.light-green').click(function() {
        $('#csscolors').attr('href', 'css/colors/light-green.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.orange').click(function() {
        $('#csscolors').attr('href', 'css/colors/orange.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------------NEWS / RECENT ACTIVITY  -------------------- */
    /* ---------------------------------------------------------------------- */
    $("#marquee").marquee();
    /* ---------------------------------------------------------------------- */
    /* ------------------------------ MAGNIFIC POPUP ------------------------ */
    /* ---------------------------------------------------------------------- */
    $('.open_popup').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------ SKILLS -------------------------------- */
    /* ---------------------------------------------------------------------- */
    $('.bar-percentage[data-percentage]').each(function() {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));
        progress.text(percentage + '%');
        progress.siblings().children().css('width', percentage + '%');
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- SCROLL REINITIALISATION ------------------------ */
    /* ---------------------------------------------------------------------- */

    jQuery('.jspPane').bind('resize', function(e) {
        var pane = $('div.hs-content-wrapper > article')
        pane.jScrollPane({
            verticalGutter: 0,
            hideFocus: false,
            contentWidth: '0px'
        });
        var api = pane.data('jsp');
        api.reinitialise();

    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- ABOUT SECTION TOGGLE CARD ---------------------- */
    /* ---------------------------------------------------------------------- */
    var menu_trigger = $("[data-card-front]");
    var back_trigger = $("[data-card-back]");

    menu_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });

    back_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- CONTACT ------------------------------ */
    /* ---------------------------------------------------------------------- */
    $("#submit_btn").on('click', function() {
        //get input field values
        var user_login= $('input[name=login]').val();
        var user_password = $('input[name=password]').val();

        var proceed = true;
        if (user_login == "") {
            $('input[name=login]').css('border-color', 'red');
            proceed = false;
        }
        if (user_password == "") {
            $('input[name=password]').css('border-color', 'red');
            proceed = false;
        }
        if (proceed) {
            //data to be sent to server
            var post_data = {
                'userLogin': user_login,
                'userPassword': user_password
            };
            var output;
            //Ajax post data to server
            $.post('php/verification.php', post_data, function(response) {

                //load json data from server and output message     
                if (response == 'error') {
                    output = '<div class="error">Неправильный логин или пароль</div>';
                    $("#result").hide().html(output).slideDown().delay(4000).slideUp();
                } else {
                    window.location.href = 'admin.php';
                }

                
            }, 'json');

        }
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- ANIMALS add -------------------------- */
    /* ---------------------------------------------------------------------- */
    $("#animal_add_btn").on('click', function() {
        //get input field values
        var kind = $('input[name=animal_kind_value]').val();
        var taxonomic = $('input[name=animal_taxonomic_value]').val();
        var areal = $('input[name=animal_areal_value]').val();
        var strength = $('input[name=animal_strength_value]').val();
        var relevance = $('input[name=animal_relevance_value]').val();
        var kind_foto = $('input[name=animal_kind_foto_value]').val();
        var status_kind = document.getElementById("animal_status").value;

        var proceed = true;
        if (kind == "") {
            $('input[name=animal_kind_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (taxonomic == "") {
            $('input[name=animal_taxonomic_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (areal == "") {
            $('input[name=animal_areal_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (strength == "") {
            $('input[name=animal_strength_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (relevance == "") {
            $('input[name=animal_relevance_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (kind_foto == "") {
            $('input[name=animal_kind_foto_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (proceed) {
            //data to be sent to server
            var post_data = {
                'kind': kind,
                'taxonomic': taxonomic,
                'status_kind': status_kind,
                'areal': areal,
                'strength': strength,
                'relevance': relevance,
                'kind_foto': kind_foto
            };
            var output;
            //Ajax post data to server
            $.post('admin/animal_add.php', post_data, function(response){
                    if (response == 'error') {
                        output = '<div class="error"> Произошла ошибка </div>';
                        $("#result_add").hide().html(output).slideDown().delay(4000).slideUp();
                    } else{
                        output = '<div class="success"> Запись добавлена. ID записи: '+response+'</div>';
                        $("#result_add").hide().html(output).slideDown().delay(4000).slideUp();
                    }
            }, 'json');
            updateTable();
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- ANIMALS del -------------------------- */
    /* ---------------------------------------------------------------------- */
    $("table#animals_table span.animal_del").on('click', function(){
            var id = $(this).attr('id');
            console.log(id);
            var post_data = {
                'id' : id
            };
            var output;
            //Ajax post data to server
            $.post('admin/animal_del.php', post_data, function(response){
                if (response == 'error') {
                    output = '<div class="success"> Произошла ошибка </div>';
                }else{
                    output = '<div class="success"> Запись удалена </div>';
                }
            }, 'json');
            $("#result_del").hide().html(output).slideDown().delay(4000).slideUp();
            updateTable();
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- ANIMALS upd inp ---------------------- */
    /* ---------------------------------------------------------------------- */
    $("table#animals_table span.animal_upd").on('click', function(){
        var id = $(this).attr('id');
        var kind = $('tr#animal_id_'+id+' td#animal_kind').text();
        var taxonomic = $('tr#animal_id_'+id+' td#animal_taxonomic').text();
        var areal = $('tr#animal_id_'+id+' td#animal_areal').text();
        var strength = $('tr#animal_id_'+id+' td#animal_strength').text();
        var relevance = $('tr#animal_id_'+id+' td#animal_relevance').text();
        var kind_foto = $('tr#animal_id_'+id+' td#animal_kind_foto').text();
        var status_kind = $('tr#animal_id_'+id+' td#animal_status').attr('name');
        document.getElementById('animal_kind_value').value = kind;
        document.getElementById('animal_taxonomic_value').value = taxonomic;
        document.getElementById('animal_areal_value').value = areal;
        document.getElementById('animal_strength_value').value = strength;
        document.getElementById('animal_relevance_value').value = relevance;
        document.getElementById('animal_kind_foto_value').value = kind_foto;
        $('#animal_status2 option[value="'+status_kind+'"]').prop('selected', true);
        $('#id').val(id);
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- ANIMALS upd out ---------------------- */
    /* ---------------------------------------------------------------------- */
    $("#animal_upd_btn").on('click', function(){
        var id = $('#id').val();
        var kind = $('#animal_kind_value').val();
        var taxonomic = $('#animal_taxonomic_value').val();
        var areal = $('#animal_areal_value').val();
        var strength = $('#animal_strength_value').val();
        var relevance = $('#animal_relevance_value').val();
        var kind_foto = $('#animal_kind_foto_value').val();
        var status_kind = $('#animal_status2').val();
        console.log(id, kind, taxonomic, areal, strength, relevance, kind_foto, status_kind);
        var post_data = {
                'id':id,
                'kind': kind,
                'taxonomic': taxonomic,
                'status_kind': status_kind,
                'areal': areal,
                'strength': strength,
                'relevance': relevance,
                'kind_foto': kind_foto
            };
        var output;
        $.post('admin/animal_upd.php', post_data, function(response){
            if(response == 'error'){
                output = '<div class="error"> Произошла ошибка </div>';
            }else{
                output = '<div class="success"> Запись обновлена </div>';
            }
        }, 'json');
        $("#result_upd").hide().html(output).slideDown().delay(4000).slideUp();
        updateTable();
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- PLANTS add --------------------------- */
    /* ---------------------------------------------------------------------- */
    $("#plant_add_btn").on('click', function() {
        //get input field values
        var kind = $('input[name=plant_kind_value]').val();
        var taxonomic = $('input[name=plant_taxonomic_value]').val();
        var areal = $('input[name=plant_areal_value]').val();
        var strength = $('input[name=plant_strength_value]').val();
        var relevance = $('input[name=plant_relevance_value]').val();
        var kind_foto = $('input[name=plant_kind_foto_value]').val();
        var status_kind = document.getElementById("plant_status").value;

        var proceed = true;
        if (kind == "") {
            $('input[name=plant_kind_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (taxonomic == "") {
            $('input[name=plant_taxonomic_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (areal == "") {
            $('input[name=plant_areal_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (strength == "") {
            $('input[name=plant_strength_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (relevance == "") {
            $('input[name=plant_relevance_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (kind_foto == "") {
            $('input[name=plant_kind_foto_value]').css('border', '1px solid red');
            proceed = false;
        }
        if (proceed) {
            //data to be sent to server
            var post_data = {
                'kind': kind,
                'taxonomic': taxonomic,
                'status_kind': status_kind,
                'areal': areal,
                'strength': strength,
                'relevance': relevance,
                'kind_foto': kind_foto
            };
            var output;
            //Ajax post data to server
            $.post('admin/plant_add.php', post_data, function(response){
                    if (response == 'error') {
                        output = '<div class="error"> Произошла ошибка </div>';
                        $("#result_add").hide().html(output).slideDown().delay(4000).slideUp();
                    } else{
                        output = '<div class="success"> Запись добавлена. ID записи: '+response+'</div>';
                        $("#result_add").hide().html(output).slideDown().delay(4000).slideUp();
                    }
            }, 'json');
            updateTable();
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- PLANT del ---------------------------- */
    /* ---------------------------------------------------------------------- */
    $("table#plant_table span.plant_del").on('click', function(){
            var id = $(this).attr('id');
            console.log(id);
            var post_data = {
                'id' : id
            };
            var output;
            //Ajax post data to server
            $.post('admin/plant_del.php', post_data, function(response){
                if (response == 'error') {
                    output = '<div class="success"> Произошла ошибка </div>';
                }else{
                    output = '<div class="success"> Запись удалена </div>';
                }
            }, 'json');
            $("#result_del").hide().html(output).slideDown().delay(4000).slideUp();
            updateTable();
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- PLANT upd inp ------------------------ */
    /* ---------------------------------------------------------------------- */
    $("table#plant_table span.plant_upd").on('click', function(){
        var id = $(this).attr('id');
        var kind = $('tr#plant_id_'+id+' td#plant_kind').text();
        var taxonomic = $('tr#plant_id_'+id+' td#plant_taxonomic').text();
        var areal = $('tr#plant_id_'+id+' td#plant_areal').text();
        var strength = $('tr#plant_id_'+id+' td#plant_strength').text();
        var relevance = $('tr#plant_id_'+id+' td#plant_relevance').text();
        var kind_foto = $('tr#plant_id_'+id+' td#plant_kind_foto').text();
        var status_kind = $('tr#plant_id_'+id+' td#plant_status').attr('name');
        document.getElementById('plant_kind_value').value = kind;
        document.getElementById('plant_taxonomic_value').value = taxonomic;
        document.getElementById('plant_areal_value').value = areal;
        document.getElementById('plant_strength_value').value = strength;
        document.getElementById('plant_relevance_value').value = relevance;
        document.getElementById('plant_kind_foto_value').value = kind_foto;
        $('#plant_status2 option[value="'+status_kind+'"]').prop('selected', true);
        $('#id_plant').val(id);
        console.log(id, kind, taxonomic, areal, strength, relevance, kind_foto, status_kind);
    });

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- PLANT upd out ------------------------ */
    /* ---------------------------------------------------------------------- */
    $("#plant_upd_btn").on('click', function(){
        var id = $('#id_plant').val();
        var kind = $('#plant_kind_value').val();
        var taxonomic = $('#plant_taxonomic_value').val();
        var areal = $('#plant_areal_value').val();
        var strength = $('#plant_strength_value').val();
        var relevance = $('#plant_relevance_value').val();
        var kind_foto = $('#plant_kind_foto_value').val();
        var status_kind = $('#plant_status2').val();
        console.log(id, kind, taxonomic, areal, strength, relevance, kind_foto, status_kind);
        var post_data = {
                'id':id,
                'kind': kind,
                'taxonomic': taxonomic,
                'status_kind': status_kind,
                'areal': areal,
                'strength': strength,
                'relevance': relevance,
                'kind_foto': kind_foto
            };
        var output;
        $.post('admin/plant_upd.php', post_data, function(response){
            if(response == 'error'){
                output = '<div class="error"> Произошла ошибка </div>';
            }else{
                output = '<div class="success"> Запись обновлена </div>';
            }
        }, 'json');
        $("#result_upd").hide().html(output).slideDown().delay(4000).slideUp();
        updateTable();
    });

    function updateTable(){
        setTimeout(window.location.href = "admin.php", 1000);
        
    }

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").on('keyup', function() {
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------------- PLACEHOLDER ------------------------------ */
    /* ---------------------------------------------------------------------- */
    $('input, textarea').placeholder();
    /* ---------------------------------------------------------------------- */
    /* --------------------------- RESPONSIVE SIDEBAR ----------------------- */
    /* ---------------------------------------------------------------------- */
    var content = $('.hs-menu nav').contents();
    $('#my-panel').jScrollPane();
    $(window).bind("load resize", function() {
        if ($(window).width() <= 755) {
            $('#my-link').panelslider({
                side: 'left',
                clickClose: false,
                duration: 200
            });
            content.appendTo('#my-panel');
        } else {
            $.panelslider.close();
            content.appendTo('.hs-menu nav');
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ---------------------- NAVIGUATION ARROW KEYBOARD -------------------- */
    /* ---------------------------------------------------------------------- */
    $("body").on('keydown', function(e) {
        if (e.keyCode == 37) { // left
            $(".previous-page").click();
        } else if (e.keyCode == 39) { // right
            $(".next-page").click();;
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ---------------------- GOOGLE MAPS-------------------- */
    /* ---------------------------------------------------------------------- */
    $(".map-location").on('click', function() {
        //set your google maps parameters
        var latitude = 37.775,
            longitude = -122.4183333,
            map_zoom = 14;

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = (is_internetExplorer11) ? 'images/gmaps/cd-icon-location.png' : 'images/gmaps/cd-icon-location.svg';

        //define the basic color of your map, plus a value for saturation and brightness
        var main_color = '#2d313f',
            saturation_value = -20,
            brightness_value = 5;

        //we define here the style of the map
        var style = [{
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "stylers": [{
                "hue": "#00aaff"
            }, {
                "saturation": -100
            }, {
                "gamma": 2.15
            }, {
                "lightness": 12
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 24
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 57
            }]
        }]

        //set google map options
        var map_options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style
            }
            //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //add a custom marker to the map                
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map 
            var controlUIzoomIn = document.getElementById('cd-zoom-in'),
                controlUIzoomOut = document.getElementById('cd-zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                map.setZoom(map.getZoom() - 1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    });

    /* ---------------------------------------------------------------------- */
    /* --------------------- FIX SOME SAFARI BUGS  -------------------------- */
    /* ---------------------------------------------------------------------- */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var oldsldrwidth = $('.research-section .slider-details').width();
        $('.research-section .slider-details').width(oldsldrwidth - 100);
        $(window).bind("load resize", function() {
            if ($(window).width() > 755) {

                var heightdoc = $(document).height();
                $('.hs-content-wrapper').height(heightdoc - 47);
                var heightwrp = $('.hs-content-wrapper').height();
                $('.hs-content').height(heightwrp - 22);
                var pane = $('div.hs-content-wrapper > article')
                pane.jScrollPane({
                    verticalGutter: 0,
                    hideFocus: false,
                    contentWidth: '0px'
                });
                var api = pane.data('jsp');
                api.reinitialise();
            } else {
                $('.hs-content-wrapper').css('height', 'auto');

            }
        });
    }
    /* ---------------------------------------------------------------------- */
    /* -------------------------- TESTIMONIALS  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    var testimonials = {};

    testimonials.slider = (function() {
        var currentItemIndex = 0,
            prevBtn = $('.prev-testimonial'),
            nextBtn = $('.next-testimonial'),
            items = (function() {
                var items = [];
                $('.testimonial').each(function() {
                    items.push($(this));
                });
                return items;
            })();

        function getCurrent() {
            $('.testimonial').each(function(index) {
                $(this).removeClass('current');
            });
            $('.testimonial').eq(currentItemIndex).addClass('current');
        }

        function greyOut(prevBtn, nextBtn) {
            if ($(prevBtn).hasClass('grey-out')) {
                $(prevBtn).removeClass('grey-out');
            }
            if ($(nextBtn).hasClass('grey-out')) {
                $(nextBtn).removeClass('grey-out');
            }
            if (currentItemIndex == 0) {
                $(prevBtn).addClass('grey-out');
            }
            if (currentItemIndex == items.length - 1) {
                $(nextBtn).addClass('grey-out');
            }
        }

        return {
            init: function(prevBtn, nextBtn) {
                items[currentItemIndex].addClass('current');
                greyOut(prevBtn, nextBtn);
                $(prevBtn).click(function() {
                    if (currentItemIndex > 0) {
                        currentItemIndex--;
                    }
                    getCurrent();
                    greyOut(prevBtn, nextBtn);
                });
                $(nextBtn).click(function() {
                    if (currentItemIndex < items.length - 1) {
                        currentItemIndex++;
                    }
                    getCurrent();
                    greyOut(prevBtn, nextBtn);
                });
            }
        };

    })();

    testimonials.slider.init('.prev-testimonial', '.next-testimonial');
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- PROCESS  ------------------------------- */
    /* ---------------------------------------------------------------------- */

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $(".next").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $("#progressbar li").eq($(".proceess").index(next_fs)).addClass("active");

        next_fs.show();

        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        $("#progressbar li").eq($(".proceess").index(current_fs)).removeClass("active");

        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'left': left
                });
                previous_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });
});
