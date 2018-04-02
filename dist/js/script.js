$(document).ready(function(){
    $("#link1").click(function(){
        $("#link1").addClass("btn-danger navbar-btn");
        $("#link2").removeClass("btn-danger navbar-btn");
        $("#link3").removeClass("btn-danger navbar-btn");
        $("#link4").removeClass("btn-danger navbar-btn");
        $("#link5").removeClass("btn-danger navbar-btn");
    })
    
    
    $("#link2").click(function(){
        $("#link2").addClass("btn-danger navbar-btn");
        $("#link1").removeClass("btn-danger navbar-btn");
        $("#link3").removeClass("btn-danger navbar-btn");
        $("#link4").removeClass("btn-danger navbar-btn");
        $("#link5").removeClass("btn-danger navbar-btn");
    })
    
    
    $("#link3").click(function(){
        $("#link3").addClass("btn-danger navbar-btn");
        $("#link2").removeClass("btn-danger navbar-btn");
        $("#link4").removeClass("btn-danger navbar-btn");
        $("#link1").removeClass("btn-danger navbar-btn");
        $("#link5").removeClass("btn-danger navbar-btn");
    })
    
    
    $("#link4").click(function(){
        $("#link4").addClass("btn-danger navbar-btn");
        $("#link2").removeClass("btn-danger navbar-btn");
        $("#link3").removeClass("btn-danger navbar-btn");
        $("#link5").removeClass("btn-danger navbar-btn");
        $("#link1").removeClass("btn-danger navbar-btn");
    })
    
    
    $("#link5").click(function(){
        $("#link5").addClass("btn-danger navbar-btn");
        $("#link2").removeClass("btn-danger navbar-btn");
        $("#link3").removeClass("btn-danger navbar-btn");
        $("#link4").removeClass("btn-danger navbar-btn");
        $("#link1").removeClass("btn-danger navbar-btn");
    })
    
    
    
    $(".view").hover(function(){
            $("#arrow").removeClass("fa-arrow-right");
            $("#arrow").addClass("fa-arrow-down");
        },

        function(){
            $("#arrow").removeClass("fa-arrow-down");
            $("#arrow").addClass("fa-arrow-right");
        }                       
    )
    
    
});
