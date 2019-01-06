/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var anadiv;
var clicked = false;
var flag;
countsuffle = false;
sufflearray = [1, 2, 3, 6, 5, 4, 7, 8, 9];

$(document).ready(function () {

    $("#cong").hide();

    $("#iki").hide();
    $("#uc").hide();
    $("#select").hide();
    $("#button2").hide();
    $("#game_area").hide();
    function slide() {


        $(".anim").fadeOut("slow", function () {

            $("#iki").fadeIn("slow", function () {

                $("#iki").fadeOut("slow", function () {

                    $("#uc").fadeIn("slow", function () {

                        $("#uc").fadeOut("slow", function () {

                            $(".anim").fadeIn("slow");

                        })

                    })

                })

            })

        })

        x = setTimeout(function () {
            slide()
        }, 4000);
    }





    function buttonc() {

        $("#start").click(function () {
            $("#main").hide();
            $("#man").hide();
            $("#button").hide();
            $("#select").show();
            $("#button2").show();


            $("#res1").mouseenter(function () {

                $("#res1").css("opacity", "0.5");

                $("#res1").mouseleave(function () {
                    $("#res1").css("opacity", "1.0");


                });

            });

            $("#res2").mouseenter(function () {

                $("#res2").css("opacity", "0.5");

                $("#res2").mouseleave(function () {
                    $("#res2").css("opacity", "1.0");


                });

            });


            $("#res3").mouseenter(function () {

                $("#res3").css("opacity", "0.5");

                $("#res3").mouseleave(function () {
                    $("#res3").css("opacity", "1.0");


                });

            });

        })


        $("#res1").click(function () {

            anadiv = "resim1.jpg";

            $("#res1").css("border", "solid red 2px");
            $("#res3").css("border", "0px");
            $("#res2").css("border", "0px");



        });

        $("#res2").click(function () {
            anadiv = "resim2.jpg";


            $("#res2").css("border", "solid red 2px");
            $("#res1").css("border", "0px");
            $("#res3").css("border", "0px");


        });

        $("#res3").click(function () {
            anadiv = "resim3.jpg";


            $("#res3").css("border", "solid red 2px");

            $("#res1").css("border", "0px");
            $("#res2").css("border", "0px");


        });

    }

    slide();
    buttonc();




    $("#butondiv").click(function () {


        $("#select").hide();
        $(this).hide();
        $("#game_area").show();
        $("#board div").css("background-image", " url('image/" + anadiv + "')");


        $("#board").children("div:nth-child(" + EmptySquare + ")").css({backgroundImage: "", background: "#ffffff"});



    });

    $("select").click(function () {

        if (!clicked) {
            $("#combo").append("<button id='sufflebuton'>SUFFLE")
            clicked = true;
        }


        $("#sufflebuton").click(function () {

            countstr = $("select").val();
            count = parseInt(countstr);
            var need;



            flagsuf = false;
            for (var i = 0; i < count; i++) {

                setTimeout(function () {
                    for (var k = 0; k < sufflearray.length; k++) {

                        if (sufflearray[k] == 9) {
                            if (k == 0 || flagsuf == true) {

                                console.log("k geldi array" + sufflearray)
                                flagsuf = true;

                                if (k == 8) {
                                    console.log("evet oldu")
                                    flagsuf = false;
                                } else {
                                    need = k + 1;
                                    temp = sufflearray[k];
                                    sufflearray[k] = sufflearray[k + 1];
                                    sufflearray[k + 1] = temp;
                                    k = sufflearray.length;
                                }


                            } else if (flagsuf == false) {
                                need = k - 1;
                                temp = sufflearray[k];
                                sufflearray[k] = sufflearray[k - 1];
                                sufflearray[k - 1] = temp;
                                k = sufflearray.length;
                                console.log("tikladi " + need + " " + sufflearray);

                            }

                        }


                    }


                    setTimeout(function () {
                        $("#" + need).trigger("click");

                    }, 500)
                }, 1000 * i);




            }




        });
    });
    $("#board").mouseenter(function () {

        for (var k = 0; k < sufflearray.length; k++) {

            if (sufflearray[k] == 9) {

                $("#" + k).css("opacity", "0.5");
                $("#" + (k - 2)).css("opacity", "0.5");




            }

        }

    });

    $("#board").mouseleave(function () {

        for (var k = 0; k < sufflearray.length; k++) {

            if (sufflearray[k] == 9) {

                $("#" + k).css("opacity", "1");
                $("#" + (k - 2)).css("opacity", "1");


            }

        }

    });

});


var zi = 1;
var EmptySquare = 9;
var obj = false;
success = [
    ['0px', '0px'],
    ['180px', '0px'],
    ['360px', '0px'],
    ['0px', '180px'],
    ['180px', '180px'],
    ['360px', '180px'],
    ['0px', '360px'],
    ['180px', '360px'],
    ['360px', '360px'],
]

$.fn.extend(
        {puzzle_dg: function (e) {
                var t = "#" + $(this).attr("id");
                var n = e + "px";
                var r = e * 3 + "px";
                $(t).append('<div id="board"></div>');
                $(t).append('<div id="combo"><select><option value="0">Select suffle amount</option><option value="3">3</option><option value="7">7</option></select></div>');

                $("#board").css({position: "absolute", width: r, height: r, border: "1px solid gray"});
                for (var i = 0; i < 9; i++)
                {
                    $("#board").append("<div style='left: " + i % 3 * e + "px; top: " + Math.floor(i / 3) * e + "px; width: " + e + "px; height: " + e + "px; background-position: " + -(i % 3) * e + "px " + -Math.floor(i / 3) * e + "px ' title='" + (i + 1) + "' id=" + (i + 1) + "></div>")
                }

                $("#board").children("div:nth-child(" + EmptySquare + ")").css({backgroundImage: "", background: "#ffffff"});



                $("#board").children("div").click(function () {

                    Move(this, e);

                });



            }}

)
function Move(e, t) {

    var n = false;
    var r = $("#board").children("div:nth-child(" + EmptySquare + ")")
            .css("left");
    var i = $("#board").children("div:nth-child(" + EmptySquare + ")")
            .css("top");
    var s = $(e).css("left");
    var o = $(e).css("top");
    if (r == s && o == parseInt(i) - t + "px")
        n = true;
    if (r == s && o == parseInt(i) + t + "px")
        n = true;
    if (parseInt(r) - t + "px" == s && o == i)
        n = true;
    if (parseInt(r) + t + "px" == s && o == i)
        n = true;
    if (n) {
        countsuffle = true;
        $(e).css("z-index", zi++);
        $(e).animate({left: r, top: i}, 200, function () {
            $("#board")
                    .children("div:nth-child(" + EmptySquare + ")").css("left", s);
            $("#board")
                    .children("div:nth-child(" + EmptySquare + ")").css("top", o)
            win = false;
            for (var i = 0; i < 9; i++)
            {
                if ($("#" + (i + 1)).css("left") === success[i][0] && $("#" + (i + 1)).css("top") === success[i][1]) {
                    if ($("#" + (0 + 1)).css("left") === success[i][0] && $("#" + (0 + 1)).css("top") === success[0][1]) {
                        win = true;
                    }
                } else {
                    win = false;
                }
            }
            if (win) {
                $("#cong").fadeIn("slow", function () {
                    $("#cong").animate({"font-size": "+=20px"}, 3000);
                });

            }

        })


    } else {
        flag = false;
    }


}



