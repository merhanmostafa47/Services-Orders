/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 3);
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./resources/js/dashboard.js":
        /*!***********************************!*\
          !*** ./resources/js/dashboard.js ***!
          \***********************************/
        /*! no static exports found */
        /***/
        (function (module, exports) {

            $(document).ready(function () {

                /* if($("#paypal-button-container").length && $("#paypal-button-container").hasClass("d-flex") && !$("#paypal-button-container").hasClass("rendered")){
                    $("#paypal-button-container").addClass("rendered");
                    create_buttons();
                } */


                $("#register-done-btn").click(function () {
                    $(".first-login-cont").fadeOut(300);
                });


                if ($("#registered").length) {
                    var user = $("#registered").data('id');
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'first_login',
                        type: 'POST',
                        data: {
                            "user": user
                        },
                        success: function success(response) {}
                    });
                }

                var percent = $("#percent").data("count");
                var savings = $("#savings").data("count");
                counting("percent", percent);
                counting("savings", savings);


                $(".show-btn").on("click", function () {
                    var id = $(this).data("show");
                    $(".order-" + id).toggleClass("auto-height");

                    if (!$(this).hasClass("hide-details")) {
                        $(this).addClass("hide-details");
                        $(this).html("<i class='jam jam-chevron-up mr-1'></i><span>close order</span>");
                    } else {
                        $(this).removeClass("hide-details");
                        $(this).html("<i class='jam jam-chevron-down mr-1'></i><span>open order</span>");
                    }
                });


                $(".sender-attach img").mousedown(function (e) {
                    e.preventDefault();
                });



                $(".sender-attach img").click(function () {
                    var large = $(this).data("large");
                    $("#ilight-img").attr("src", large);
                    $(".ilightbox").fadeIn(300);
                });
                
                
                $(".ilightbox i").click(function () {
                    $(".ilightbox").fadeOut(300);
                    $("#ilight-img").delay(320).attr("src", "");
                });


                $("#revision-file").change(function () {
                    $(".revision-upload-btn").addClass("hasfiles");
                });


                $(".revision-submit-btn .btn").click(function (e) {
                    e.preventDefault();

                    var _this = $("#revision-file");

                    var comment = $("#revision-comment").val();

                    if (!$(this).hasClass("done")) {
                        if (_this[0].files.length > 0 || $.trim(comment) != "") {
                            $(this).addClass("done");
                            $(".revision-submit-btn").fadeOut(200);
                            $("#revision-file, #revision-comment").attr("disabled", "disabled");
                            var form_data = new FormData();
                            var orderID = $("input[name='od']").val();

                            var _token = $('meta[name="csrf-token"]').attr('content');

                            form_data.append('comment', comment);
                            form_data.append('orderID', orderID);
                            form_data.append('img_count', _this[0].files.length);
                            form_data.append('_token', _token);

                            if (_this[0].files.length > 0) {
                                for (var i = 0; i < _this[0].files.length; i++) {
                                    form_data.append('f' + i, _this[0].files[i]);
                                }
                            }

                            $.ajax({
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                xhr: function xhr() {
                                    var xhr = new window.XMLHttpRequest();
                                    xhr.upload.addEventListener("progress", function (evt) {
                                        if (evt.lengthComputable) {
                                            var percentComplete = evt.loaded / evt.total;
                                            percentComplete = parseInt(percentComplete * 100);

                                            if (percentComplete === 100) {
                                                $(".revision-progres div").css("width", "100%");
                                                setTimeout(function () {
                                                    $(".revision-progres").addClass("done");
                                                    $(".revision-progres div").text("Uploaded Successfully").addClass("done");
                                                    $("#revision-file, #revision-comment").attr("disabled", false);
                                                }, 3000);
                                            } else {
                                                $(".revision-progres").removeClass("done").fadeIn(300);
                                                $(".revision-progres div").css("width", percentComplete + "%").text(percentComplete + "%").removeClass("done");
                                            }
                                        }
                                    }, false);
                                    return xhr;
                                },
                                url: 'comment',
                                type: 'POST',
                                processData: false,
                                contentType: false,
                                data: form_data,
                                success: function success(response) {
                                    if (response != "") {
                                        setTimeout(function () {
                                            location.reload(true);
                                        }, 250);
                                    } else {
                                        $(".revision-submit-btn").fadeIn(200).removeClass("done");
                                    }
                                }
                            });
                        }
                    }
                });


                $('.star').on('mouseover', function () {
                    var onStar = parseInt($(this).data('star')); // The star currently mouse on
                    // Now highlight all the stars that's not after the current hovered star

                    $(this).parent().children('.star').each(function (e) {
                        if (e < onStar) {
                            $(this).addClass('star-hover');
                        } else {
                            $(this).removeClass('star-hover');
                        }
                    });
                }).on('mouseout', function () {
                    $(this).parent().children('.star').each(function (e) {
                        $(this).removeClass('star-hover');
                    });
                });


                $('.star').on('click', function () {
                    var onStar = parseInt($(this).data('star'), 10); // The star currently selected

                    var stars = $(this).parent().children('.star');
                    $(this).parents(".order-rate").children(".rate-star").val(onStar);

                    for (i = 0; i < stars.length; i++) {
                        $(stars[i]).removeClass('star-clicked');
                    }

                    for (i = 0; i < onStar; i++) {
                        $(stars[i]).addClass('star-clicked');
                    }
                });


                $(".rate-submit-btn").click(function () {
                    var order = $(this).data("order");
                    var rate = $(".rate-" + order).children(".rate-star").val();
                    var comment = $(".rate-" + order).children("textarea").val();

                    if (rate > 0) {
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('input[name="_token"]').val()
                            },
                            url: 'rating',
                            type: 'POST',
                            data: {
                                "rate": rate,
                                "comment": comment,
                                "order": order
                            },
                            success: function success(response) {
                                $(".rate-" + order).addClass("selection my-3 d-flex justify-content-center align-items-center").css("min-height", "60px").html(response);
                                $(".rate-error-" + order).remove();
                            }
                        });
                    } else {
                        $(".rate-error-" + order).text("You must to click on stars to rate our service");
                    }
                });


                $(".order-download").click(function () {
                    var down = $(this).data("order");
                    var badge = $(".finished-badge").text();

                    if (!$(this).hasClass("downed")) {
                        $(this).addClass("downed");
                        new_badge = parseInt(badge) - 1;

                        if (new_badge <= 0) {
                            new_badge = 0;
                            $(".finished-badge").fadeOut(150);
                        } else {
                            $(".finished-badge").text(new_badge);
                        }
                    }

                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('input[name="_token"]').val()
                        },
                        url: 'download',
                        type: 'GET',
                        data: {
                            "down": down
                        },
                        success: function success(response) {
                            $(".rate-" + order).addClass("selection my-3 d-flex justify-content-center align-items-center").css("min-height", "60px").html(response);
                        }
                    });
                });



                $("#edit-save-btn").click(function () {
                    var form = document.getElementById("update-profile"); //$("#update-profile");

                    var form_data = new FormData(form);
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'updateprofile',
                        type: 'POST',
                        processData: false,
                        contentType: false,
                        data: form_data,
                        success: function (_success) {
                            function success(_x) {
                                return _success.apply(this, arguments);
                            }

                            success.toString = function () {
                                return _success.toString();
                            };

                            return success;
                        }(function (response) {
                            var message = response.message;
                            var code = response.val;
                            var _class = 'alert-success';

                            if (code == 0) {
                                _class = 'alert-danger';
                            }

                            success = '<div class="alert ' + _class + '">' + message + '</div>';
                            $(".edit-alert").html(success).fadeIn(400);
                            $(".edit-alert").delay(2000).fadeOut(400);
                            setTimeout(function () {
                                $(".edit-alert").html("");
                            }, 2500);
                        }),
                        error: function error(data) {
                            var errors = data.responseJSON.errors;
                            var errorsHtml = "";
                            var time_counter = 0;
                            $.each(errors, function (key, value) {
                                errorsHtml += '<div class="alert alert-danger">' + value[0] + '</div>';
                                time_counter++;
                            });
                            var timer = time_counter * 2000;
                            $(".edit-alert").html(errorsHtml).fadeIn(400);
                            $(".edit-alert").delay(timer).fadeOut(400);
                            setTimeout(function () {
                                $(".edit-alert").html("");
                            }, timer);
                        }
                    });
                });



                $(".projects-btns").click(function () {
                    var p_btn = $(this).data("id");
                    $(".projects-btns").removeClass("active");
                    $(this).addClass("active");

                    if ($("." + p_btn).length) {
                        $(".projects-items").not($("." + p_btn)).fadeOut(300);
                        $(".no-orders").fadeOut(300);
                        $("." + p_btn).delay(320).fadeIn(300);
                    } else {
                        $(".projects-items").not($("." + p_btn)).fadeOut(300);
                        $(".no-orders").delay(320).fadeIn(300);
                    }
                });



                if ($(".projects").children().length == 0) {
                    $(".no-orders").show(1);
                }


                $(".payment-method").click(function () {
                    var value = $(this).data('value');
                    $(".payment-method").removeClass("active");
                    $(this).addClass("active");

                    if (value == 1) {
                        $("#pay_m").val("ppl");
                    } else {
                        $("#pay_m").val("CC");
                    }

                    $("#pm").val(value);
                });


                $("#select-services-btn").on("click", function () {
                    $(".payment-method-title").addClass("d-none").removeClass("d-block");
                    $("#paypal-button-container").html("");

                    $(".order-service").removeClass("active");
                    $(".service-selected").delay(300).removeClass("d-block").hide(10);
                    var counter = 0;
                    
                    $(".service-modal-body input").each(function () {
                        if ($(this).prop("checked")) {
                            var service = $(this).data("target");
                            $(".add-service-info").fadeOut(200);
                            $("#" + service).delay(220).slideDown(300).addClass("active");
                            $("[data-parent='" + service + "']").removeClass("active-d-service");
                            $(".services-summary").find("[data-row='" + service + "']").slideDown(300);
                            counter++;
                        }
                    });


                    $(".order-service").not(".active").slideUp(300);

                    if (counter == 0) {
                        $(".submit-btn-cont, .payment-method-cont, .fill-instructions, .retouching-type").fadeOut(300);
                        $(".add-service-info").delay(320).fadeIn(300);
                        $(".services-summary").removeClass("d-table");
                        $("#delete-order").addClass("d-order");
                    } else {
                        $(".submit-btn-cont, .payment-method-cont, .retouching-type").fadeIn(300);
                        $(".services-summary").addClass("d-table");
                        $("#delete-order").removeClass("d-order");
                    }

                    counter == 8 ? $("#add-service").fadeOut(300) : $("#add-service").fadeIn(300);
                });


                $(".delete-service").on("click", function () {
                    var _this = $(this);
                    $(".payment-method-title").addClass("d-none").removeClass("d-block");
                    $("#paypal-button-container").html("");

                    if (!$(this).hasClass("active-d-service")) {
                        $(this).addClass("active-d-service");
                        var counter = 0;
                        var btn = $(this).data("delete");
                        var parent = $(this).data("parent");
                        var li = $(this).data("li");
                        $("input[name='" + btn + "']").prop("checked", false);
                        $("#" + parent).removeClass("active").fadeOut(300);
                        $("." + parent).removeClass("service-selected").addClass("d-block");
                        $(".services-summary").find("[data-row='" + parent + "']").slideUp(300);
                        $(".order-service").each(function () {
                            if ($(this).hasClass("active")) {
                                counter++;
                            }
                        });

                        if (counter == 0) {
                            $(".add-service-info").delay(320).fadeIn(300);
                            $(".submit-btn-cont, .payment-method-cont, .fill-instructions, .retouching-type").fadeOut(300);
                            $(".services-summary").removeClass("d-table");
                            $("#delete-order").addClass("d-order");
                        } else {
                            $("#delete-order").removeClass("d-order");
                        }

                        counter == 8 ? $("#add-service").fadeOut(300) : $("#add-service").fadeIn(300);
                        putInputs("0", "", li);
                        $("#" + parent + " textarea").val("");
                        $("#" + parent + " .photos-thumbs").html("").removeClass("active");
                        $("tr[data-row='" + parent + "']").fadeOut(300);
                        setTimeout(function () {
                            $("tr[data-row='" + parent + "']").children(".photos-no").text("0");
                            $("tr[data-row='" + parent + "']").children(".service-price").children(".s-price").text("0");
                            var t_price = 0;
                            $(".s-price").each(function () {
                                var total_price = $(this).text();
                                t_price += parseFloat(total_price);
                            });
                            $(".total-cost").text(t_price.toFixed(2));
                        }, 320);
                        var orderID = $("input[name='od']").val();
                        var form_data = new FormData();
                        form_data.append('order', orderID);
                        form_data.append('service', li);
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: 'deleteservice',
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            data: form_data,
                            success: function success(response) {
                                $(_this).removeClass("active-d-service");
                                var discount_percentage = response['discount_percentage'];
                                var discount_saved = response['discount_saved'];

                                if (discount_percentage > 0) {
                                    $(".discount_percentage").text(discount_percentage);
                                    $(".discount_saved").text(discount_saved);
                                }

                                if (response['done'] == '0') {
                                    $(".service-upload").val("");
                                    $("#" + btn + "-photos-process").fadeOut(300);
                                    $("#" + btn + "-photos-thumbs").fadeOut(300);
                                }
                            }
                        });
                    }
                });



                $("#delete-order").on("click", function () {
                    var _this = $(this);

                    if (!$(this).hasClass("delete-order")) {
                        $(this).addClass("delete-order");
                        var orderID = $("input[name='od']").val();
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: 'deleteorder',
                            type: 'POST',
                            data: {
                                "order": orderID
                            }
                        }).done(function () {
                            location.reload(true);
                            $(_this).removeClass("delete-order");
                        });
                    }
                });


                $("#skip-retouching-type").click(function () {
                    $(".retouching-type-cont").fadeOut(300);
                });



                $(".service-upload").change(function () {
                    
                    var service_thumb = $(this).attr("id");
                    var service_name = $(this).data("service");
                    var service_return = $(this).data("return");
                    var type = null;
                    var _images = [];

                    $(".submit-order-btn").addClass("d-none").removeClass("d-flex");

                    var uploaded = $(`#${service_thumb}-thumbs .img-cont .rmv`);

                    if(uploaded.length){
                        for(var i=0; i < uploaded.length; i++){
                            _images.push($(uploaded[i]).data("img"));
                        };
                    }

                    $(this).hasClass("ref") ? type = 1 : type = 0;

                    readURL(this, service_thumb, service_name, service_return, type, _images);
                    putInputs("1", type, service_name);
                });



                $(".service-modal-body label").click(function () {
                    if ($(this).children("input").prop("checked") !== false) {
                        $(this).addClass("service-selected");
                    } else {
                        $(this).removeClass("service-selected");
                    }
                });



                $(".retouching-imgs img").click(function () {
                    var type = $(this).data("type");
                    $(".retouching-imgs img, .retouching-imgs div").removeClass("active");
                    $(this).addClass("active");
                    $(this).parent("div").addClass("active");
                    $("#retouching-inp").val(type);
                });


                $("#save-retouching-type").click(function () {
                    var r_type = $("#retouching-type").val();
                    var r_inp = $("#retouching-inp").val();

                    if ($("#retouching-inp").length && $("#retouching-inp").val() > 0) {
                        var r_type = $("#retouching-type").val();
                        var r_inp = $("#retouching-inp").val();

                        if ($("#retouching-type").val().length < 9) {
                            $("#retouching-error").text("Retouching description must be 10 letters at least");
                        } else {
                            $.ajax({
                                url: 'save_retouching',
                                type: 'POST',
                                data: {
                                    'type': r_inp,
                                    'input': r_type
                                },
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                success: function success(response) {
                                    if (response == '1') {
                                        $(".retouching-type-cont").fadeOut(300);
                                    }
                                }
                            });
                        }
                    }
                });

                


                $(".submit-order-btn").click(function (e) {
                    var _this = $(this);
                    _this.children(".spinner").delay(320).fadeIn(300);
                    _this.children(".text").fadeOut(300);

                    var _token = $('meta[name="csrf-token"]').attr('content');

                    var empty = 0;
                    var placeorder = new FormData();

                    $(".service-modal-body input").each(function () {
                        if ($(this).is(":checked")) {
                            var target = $(this).attr("name");

                            if ($("#" + target + "-ins").val() == "") {
                                empty++;
                            } else {
                                placeorder.append(target, $("#" + target + "-ins").val());
                            }
                        }
                    });

                    $(".service-upload").val("");

                    if (!_this.hasClass("clicked")) {
                        _this.addClass("clicked");

                        if (empty > 0) {
                            $(".fill-instructions").text("You need to fill in all services instructions");
                            $(".fill-instructions").fadeIn(300);

                            setTimeout(() => {
                                $(".fill-instructions").fadeOut(300);
                            }, 3000);

                            _this.removeClass("clicked");
                            _this.addClass("d-flex").removeClass("d-none");
                            _this.children(".text").delay(320).fadeIn(300);
                            _this.children(".spinner").fadeOut(300);
                        } 
                        else {
                            var orderID = $("input[name='od']").val();
                            placeorder.append('orderID', orderID);
                            placeorder.append('_token', _token);
                            placeorder.append('pm', $("#pm").val());

                            $.ajax({
                                url: 'ordernow',
                                type: 'POST',
                                processData: false,
                                contentType: false,
                                data: placeorder,
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                success: function success(response) {
                                    if ($.isNumeric(response)) {
                                        $("#__price").val(Math.round(response * 100) / 100);
                                        $(".fill-instructions").fadeOut(300);
                                        
                                        // Proceed To Payment -> Submit here
                                        // $("#create-order-form").submit();
                                        $(".payment-method-title").addClass("d-block").removeClass("d-none");                                        
                                        $("#paypal-button-container").html("");
                                        create_buttons();

                                    } else {
                                        _this.addClass("d-flex").removeClass("d-none");
                                        $(".fill-instructions").text(response);
                                        $(".fill-instructions").fadeIn(300);
                                        
                                        setTimeout(function(){
                                            $(".fill-instructions").fadeOut(300);
                                        }, 3000);
                                    }

                                    _this.removeClass("clicked");
                                }
                            });
                        }
                    }
                });


                
                // Add This Class for 2 checkout
                /* $(".submit-order-btn").click(function (e) {
                    var _this = $(this);

                    var _token = $('meta[name="csrf-token"]').attr('content');

                    var empty = 0;
                    var placeorder = new FormData();
                    $(".service-modal-body input").each(function () {
                        if ($(this).is(":checked")) {
                            var target = $(this).attr("name");

                            if ($("#" + target + "-ins").val() == "") {
                                empty++;
                            } else {
                                placeorder.append(target, $("#" + target + "-ins").val());
                            }
                        }
                    });
                    $(".service-upload").val("");

                    if (!_this.hasClass("clicked")) {
                        _this.addClass("clicked");

                        if (empty > 0) {
                            $(".fill-instructions").text("You need to fill in all services instructions");
                            $(".fill-instructions").fadeIn(300);

                            _this.removeClass("clicked");
                        } else {
                            var orderID = $("input[name='od']").val();
                            placeorder.append('orderID', orderID);
                            placeorder.append('_token', _token);
                            placeorder.append('pm', $("#pm").val());
                            $.ajax({
                                url: 'ordernow',
                                type: 'POST',
                                processData: false,
                                contentType: false,
                                data: placeorder,
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                success: function success(response) {
                                    if ($.isNumeric(response)) {
                                        $("#__price").val(Math.round(response * 100) / 100);
                                        $(".fill-instructions").fadeOut(300);
                                        $("#create-order-form").submit();
                                    } else {
                                        _this.removeClass("clicked");

                                        $(".fill-instructions").text(response);
                                        $(".fill-instructions").fadeIn(300);
                                    }
                                }
                            });
                        }
                    }
                }); */



                $("#payment-done-btn").click(function () {
                    $(".payment-msg").fadeOut(300);
                });


                $(document).on("click", ".rmv", function () {
                    var _this = $(this);

                    var img = $(this).data("img");
                    var orderId = $("input[name='od']").val();
                    var service = $(this).data("service");
                    var type = $(this).data("type");

                    if (!_this.hasClass("clicked")) {
                        _this.addClass("clicked");

                        $(_this).parents(".img-cont").fadeOut(300);
                        setTimeout(function () {
                            $(_this).parents(".img-cont").remove();
                        }, 350);
                        var form_data = new FormData();
                        form_data.append('image', img);
                        form_data.append('service', service);
                        form_data.append('order', orderId);
                        form_data.append('type', type);
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: 'deleteimg',
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            data: form_data,
                            success: function success(response) {
                                var done = response['done'];
                                var service_imgs = response['imgs'];
                                var row = response['row'];
                                var files = response['files'];
                                var service_cost = response['service_cost'];
                                var total_cost = response['total_cost'];
                                var discount_percentage = response['discount_percentage'];
                                var discount_saved = response['discount_saved'];

                                if (discount_percentage > 0) {
                                    $(".discount_percentage").text(discount_percentage);
                                    $(".discount_saved").text(discount_saved);
                                }

                                $(".service-upload").val("");
                                $(_this).parents(".order-service").children(".progres-bar.done").fadeOut(300);

                                if (files == 0) {
                                    $("tr[data-row='" + row + "']").children(".photos-no").text("0");
                                    $("tr[data-row='" + row + "']").children(".service-price").children(".s-price").text("0");
                                    $(_this).parents(".photos-thumbs").fadeOut(300);
                                    var t_price = 0;
                                    $(".s-price").each(function () {
                                        var total_price = $(this).text();
                                        t_price += parseFloat(total_price);
                                    });
                                    $(".total-cost").text(t_price.toFixed(2));
                                } else {
                                    if (done) {
                                        $("tr[data-row='" + row + "']").children(".photos-no").text(service_imgs);
                                        $("tr[data-row='" + row + "']").children(".service-price").children(".s-price").text(service_cost);
                                        $(".total-cost").text(total_cost.toFixed(2));
                                    }
                                }
                            }
                        });
                    }
                });



                $(".save-ins-btn").click(function () {
                    var _this = $(this);

                    if (!_this.hasClass("clicked")) {
                        $(this).addClass("clicked");
                        var data = $(this).data("text");
                        var service = $(this).data("service");
                        var ins = $("#" + data).val();
                        var orderID = $("input[name='od']").val();

                        $.ajax({
                            url: 'saving',
                            method: 'post',
                            data: {
                                "srvs": service,
                                "ins": ins,
                                "orderId": orderID
                            },
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            success: function success(response) {
                                $(_this).fadeOut(300);
                                $("[data-saved='" + data + "']").delay(350).fadeIn(300);

                                setTimeout(function () {
                                    $("[data-saved='" + data + "']").fadeOut(300);
                                }, 1500);
                            }
                        });
                    }
                });


                $(".order-service textarea").keydown(function () {
                    if ($(".total-cost").text() > 0) {
                        var id = $(this).attr("id");
                        $("[data-saved='" + id + "']").fadeOut(300);
                        $("[data-text='" + id + "']").delay(350).fadeIn(300).removeClass("clicked");

                        $(".payment-method-title").addClass("d-none").removeClass("d-block");
                        $("#paypal-button-container").html("");
                        $(".submit-order-btn").addClass("d-flex").removeClass("d-none");
                        $(".submit-order-btn").children(".text").delay(320).fadeIn(300);
                        $(".submit-order-btn").children(".spinner").fadeOut(300);
                    }
                });
                

                setInterval(function () {
                    refreshToken();
                }, 900000);


            });




            function refreshToken() {
                $.ajax({
                    url: 'refresh-csrf',
                    method: 'get',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(function (data) {
                    $('meta[name="csrf-token"]').attr('content', data);
                });
            }




            function fileRead(input, thumbs, service) {
                var reader = new FileReader();
                var filename = input.name;
                var fileExtension = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();

                if (filename.length > 15) {
                    var new_name = filename.substring(0, 15) + "..." + fileExtension;
                } else {
                    var new_name = filename;
                }

                reader.onloadend = function (e) {
                    if (fileExtension == "jpg" || fileExtension == "jpeg" || fileExtension == "png" || fileExtension == "gif" || fileExtension == "webp") {
                        var src = e.target.result;
                    } else {
                        var src = "/img/preview.jpg";
                    }

                    $("#" + thumbs + "-thumbs").append("<div class='col-12 col-md-4 img-cont'><img class='img-hvr' src='" + src + "'> <div class='text-center'>" + new_name + "</div> <div class='rmv' data-service='" + service + "' data-img='" + filename + "'>Remove</div></div>");
                };

                reader.readAsDataURL(input);
                $("#" + thumbs + "-thumbs").slideDown(300);
            }
            



            function putInputs(type, service_type, service_name) {
                var services_array = ["Color Correction Service", "Wedding & Events Service", "Basic Service", "Basic Extra Service", "Extensive Service", "Extensive Extra Service", "Deluxe Service", "Deluxe Extra Service"];
                var input_name = services_array[service_name - 1];

                if (type == 1) {
                    if (service_type == 0) {
                        if (!$("input[name='li_" + service_name + "_name']").length) {
                            $("#create-order-form").append("<input type='hidden' name='li_" + service_name + "_type' value='product'><input type='hidden' name='li_" + service_name + "_price'><input type='hidden' name='li_" + service_name + "_name' value='" + input_name + "'><input type='hidden' name='li_" + service_name + "_quantity' value='1'><input type='hidden' name='li_" + service_name + "_tangible' value='N'></input>");
                        }
                    }
                } else {
                    $("input[name='li_" + service_name + "_name'], input[name='li_" + service_name + "_type'], input[name='li_" + service_name + "_price'], input[name='li_" + service_name + "_quantity'], input[name='li_" + service_name + "_tangible']").remove();
                }
            }



            function filename_to_lowercase(filename){
                var filenameExt = filename.substr(filename.lastIndexOf('.') + 1);
                var filenameExtLowercase = filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
                return new_name = filename.replace(filenameExt, filenameExtLowercase);
            }




            function readURL(input, thumbs, service, s_return, type, _images) {
                var form_data = new FormData();
                var orderID = $("input[name='od']").val();

                var _token = $('meta[name="csrf-token"]').attr('content');

                form_data.append('service', service);
                form_data.append('orderID', orderID);
                form_data.append('type', type);
                form_data.append('img_count', input.files.length);
                form_data.append('_token', _token);


                if (input.files.length > 0) {
                    var uploaded_already = false, make_request = false;
                    var uploaded_files = "";

                    for (var i = 0; i < input.files.length; i++) {
                        var input_filename = filename_to_lowercase(input.files[i].name);

                        if(!_images.includes(input_filename)){
                            make_request = true;
                            form_data.append('f' + i, input.files[i]);
                        }
                        else{
                            uploaded_already = true;
                            uploaded_files += `<div>${input_filename}</div>`;
                        }
                    }

                    if(uploaded_already && uploaded_files.length){
                        $(".edit-alert .alert").html('This file is uploaded already' + uploaded_files);
                        $(".edit-alert").fadeIn(300);
                        
                        setTimeout(() => {
                            $(".edit-alert").fadeOut(300);
                        }, 2500);
                    }
                    

                    if(make_request){
                        $(input).attr("disabled", "disabled");
                        $(input).addClass("uploading-now");
                        $("#delete-order").addClass("delete-order");
                        $(".delete-service").addClass("active-d-service");
                        $(".rmv").addClass("clicked");
                        $(".payment-method-title").addClass("d-none").removeClass("d-block");
                        $("#paypal-button-container").addClass("d-none").removeClass("d-flex");

                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            xhr: function xhr() {
                                var xhr = new window.XMLHttpRequest();
                                xhr.upload.addEventListener("progress", function (evt) {
                                    if (evt.lengthComputable) {
                                        var percentComplete = evt.loaded / evt.total;
                                        percentComplete = parseInt(percentComplete * 100);

                                        if (percentComplete === 100) {
                                            $(input).attr("disabled", false);
                                            $(input).removeClass("uploading-now");
                                            $("#" + thumbs + "-process div").css("width", "100%");
                                            setTimeout(function () {
                                                $("#" + thumbs + "-process").addClass("done");
                                                $("#" + thumbs + "-process div").text("Uploaded Successfully").addClass("done");
                                            }, 3000);
                                        } else {
                                            $("#" + thumbs + "-process").removeClass("done").fadeIn(300);
                                            $("#" + thumbs + "-process div").text(percentComplete + "%").removeClass("done");
                                            $("#" + thumbs + "-process div").css("width", percentComplete + "%");
                                        }
                                    }
                                }, false);
                                return xhr;
                            },
                            url: 'placeorder',
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            data: form_data,
                            success: function success(response) {
                                $("#u-file").val("");
                                var t_price = 0;
                                var imgs_row = response['imgs_row'];
                                var r_imgs = response['image'];
                                var r_img_cost = response['image_cost'];
                                var r_price = response['cost'];
                                var d_percentage = response['discount_percentage'];
                                var d_saved = response['discount_saved'];

                                if (d_percentage > 0) {
                                    $(".discount_percentage").text(d_percentage);
                                    $(".discount_saved").text(d_saved);
                                }

                                $("#" + thumbs + "-thumbs").append(imgs_row);
                                $("#" + thumbs + "-thumbs").slideDown(300);

                                if (r_imgs != 0) {
                                    $("[data-row='" + s_return + "']").children(".photos-no").text(r_imgs);
                                }

                                $("input[name='li_" + service + "_quantity']").val(r_imgs);

                                if (r_img_cost != 0) {
                                    $("[data-row='" + s_return + "']").children(".image-cost").text("$" + r_img_cost);
                                }

                                if (r_price != 0) {
                                    $("[data-row='" + s_return + "']").children(".service-price").html("$<span class='s-price'>" + r_price + "</span>");
                                    $(".s-price").each(function () {
                                        var total_price = $(this).text();
                                        t_price += parseFloat(total_price);
                                    });
                                    $(".total-cost").text(t_price.toFixed(2));
                                }

                                $("#delete-order").removeClass("delete-order");
                                $(".delete-service").removeClass("active-d-service");
                                $(".rmv").removeClass("clicked");

                                /* if(!$("#paypal-button-container").hasClass("rendered")){
                                    $("#paypal-button-container").addClass("rendered");
                                    create_buttons();
                                    
                                } */



                                $(".submit-order-btn").addClass("d-flex").removeClass("d-none");
                                $("#paypal-button-container").html("");
                                $(".submit-order-btn").children(".text").delay(320).fadeIn(300);
                                $(".submit-order-btn").children(".spinner").fadeOut(300);
                                // $("#paypal-button-container").addClass("d-flex").removeClass("d-none");
                            }
                        });
                    }
                }
            }




            function paymentPopUp(type, msg){
                /* var svg = '<svg class="wrongmark" width="70" height="70" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/></svg>';
                var message = "Purchasing faild. Please try again later.";
                var url = "/dashboard/create-order";
                
                if(type == 1){
                    svg = '<svg class="checkmark" width="70" height="70" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/></svg>';
                    message = 'Thank You for ordering with us!';
                    url = "/dashboard/projects";
                }
                
                if(type == 3){
                    svg = '<svg class="checkmark" width="70" height="70" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/></svg>';
                    message = 'Thank You for ordering with us!';
                    url = "/dashboard/projects";
                }
                
                $(".payment-icon").html(svg);
                $(".payment-message").text(message);
                $(".payment-cont").css("display", "flex"); */
                
                window.location = "/dashboard/projects";
                // setTimeout(() => {
                // }, 2000);
            }
            


            /* function purchase_units_params(){
                var _order_id = $("input[name='od']").val();
                var _value = $(".total-cost").text();
                return [{"reference_id": _order_id, "description": `Creating order #${_order_id}`, "amount":{"currency_code": "USD","value": _value}}]
            }; */



            function create_buttons(){
                $(".submit-order-btn").addClass("d-none").removeClass("d-flex");

                paypal.Buttons({
                    style: {
                        shape: 'pill',
                        color: 'gold',
                        layout: 'vertical',
                        label: 'paypal'
                    },
                    createOrder: function(data, actions) {
                        return actions.order.create({
                            purchase_units: [{"reference_id": $("input[name='od']").val(), "description": `Creating order #${$("input[name='od']").val()}`, "amount":{"currency_code": "USD","value": parseFloat($(".total-cost").text())}}],
                            application_context: {shipping_preference: 'NO_SHIPPING'}
                        });
                    },
                    onApprove: function(data, actions) { 
                        return actions.order.capture().then(function(details) {
                            var country_code = "", postal_code = "", phone = "";

                            // var email = $("input[name='email']").val();
                            // var payeer_name = details.payer.name.given_name + " " + details.payer.name.surname;
                            // var payeer_email = details.payer.email_address;
                            var reference_id = $("input[name='od']").val();
                            var purchase_id = details.purchase_units[0].payments.captures[0].id;
                            var purchase_value = details.purchase_units[0].amount.value;
                            var status = details.status;

                            if(details.hasOwnProperty('country_code')){
                                country_code = details.payer.address.country_code;
                            }

                            if(details.hasOwnProperty('postal_code')){
                                postal_code = details.payer.address.postal_code;
                            }

                            if(details.hasOwnProperty('national_number')){
                                phone = details.payer.phone.phone_number.national_number;
                            }
                            

                            $.ajax({
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                url: '/paypal_neworder',
                                type: 'POST',
                                data: {
                                    "purchase_id": purchase_id, "reference_id": reference_id, "purchase_value": purchase_value, "country": country_code, "postal": postal_code, "phone_number": phone, "purchase_status": status
                                },
                                success: function success(response) {
                                    paymentPopUp(1);
                                }
                            });

                           /*  if(status == "COMPLETED"){
                                $.ajax({
                                    headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },
                                    url: '/paypal_neworder',
                                    type: 'POST',
                                    data: {
                                        "purchase_id": purchase_id, "reference_id": reference_id, "purchase_value": purchase_value, "country": country_code, "postal": postal_code, "phone_number": phone, "purchase_status": status
                                    },
                                    success: function success(response) {
                                        paymentPopUp(1);
                                    }
                                });
                            }
                            else{
                                paymentPopUp(2);
                            } */
                        });
                    },
                    onCancel: function(){
                        // paymentPopUp(2);
                    },
                    onError: function(err) {
                        // paymentPopUp(2);
                        $.ajax({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            url: '/paypal_neworder',
                            type: 'POST',
                            data: {
                                "error": 1
                            },
                            success: function success(response) {
                                paymentPopUp(2);
                            }
                        });
                    }
                }).render('#paypal-button-container');
            }



            function counting(param, number) {
                var c = 0;
                var count_percentage = setInterval(function () {
                    c++;

                    if (c < 50) {
                        var per = $("#" + param).text();

                        if (per < number) {
                            $("#" + param).text(parseInt(per) + 1);
                        } else {
                            clearInterval(count_percentage);
                            $("#" + param).text(number);
                        }
                    } else {
                        clearInterval(count_percentage);
                        $("#" + param).text(number);
                    }
                }, 40);
            }




            /***/
        }),

    /***/
    3:
        /*!*****************************************!*\
          !*** multi ./resources/js/dashboard.js ***!
          \*****************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! C:\xampp\htdocs\photorelive\resources\js\dashboard.js */ "./resources/js/dashboard.js");


            /***/
        })

    /******/
});