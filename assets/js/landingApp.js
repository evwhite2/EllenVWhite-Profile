
$(document).ready(function(){

function mark(){

$(".container").attr("style", "display: none");

var pos= 0;
var opc= 0;
var subPos=350;
var subOpc=0;

var landing = setInterval(land, 10);
var subLanding= setInterval(subLand, 8);

    function land(){

        if(pos== 100){
            clearInterval(landing);
        }else{ 
            pos++;
            opc= opc+0.01;
            $("#welcome").attr("style", `top:${pos}px;opacity:${opc}`);
        }
    }

    function subLand(){
        if (subPos== 165){
            clearInterval(subLanding);
        }else{
            subPos--;
            subOpc= subOpc+0.1;
            $("#landing-sub").attr("style", `top:${subPos}px;opacity:${subOpc}`);
        }
    }

}

mark();


function disappear(){

    $(".container").attr("style", "display: block");

    
    var toPage= setInterval(scroll, 10);
    var ht=100;

            function scroll(){

                if(ht== 0){
                    clearInterval(toPage)
                }else{
                    ht--;
                    $(".landing").attr("style", `height:${ht}%`);
                }

                if (ht<100){
                    // var opc= 1;
                    // var headerFade = setInterval(fade, 10);

                    // function fade(){

                    //     if(opc<0){
                    //         clearInterval(headerFade);
                    //     }else{
                    //         opc= opc-0.1;
                    //         $("#welcome").attr("style", `opacity:${opc}`);
                    //     }
                    // }

                    $("#welcome").attr("style", "display:none");
                    $("#landing-sub").attr("style", "display:none");
                }

            }   
}

$(".landing").on("click", disappear);

});