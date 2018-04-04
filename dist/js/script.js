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
    
    
    $("#link1").click(function(){
        $("#html").show("slow");
        $("#html1").show("slow");
        $("#boot").show("slow");
        $("#js").show("slow");
        $("#jquery").show("slow");
        $("#jquery1").show("slow");
    })
    
    
    $("#link2").click(function(){
        $("#html").show("slow");
        $("#html1").show("slow");
        $("#boot").hide("slow");
        $("#js").hide("slow");
        $("#jquery").hide("slow");
        $("#jquery1").hide("slow");
        
    })
    
    $("#link3").click(function(){
        $("#html").hide("slow");
        $("#html1").hide("slow");
        $("#boot").show("slow");
        $("#js").hide("slow");
        $("#jquery").hide("slow");
        $("#jquery1").hide("slow");
        
    })
    
    $("#link4").click(function(){
        $("#html").hide("slow");
        $("#html1").hide("slow");
        $("#boot").hide("slow");
        $("#js").show("slow");
        $("#jquery").hide("slow");
        $("#jquery1").hide("slow");
        
    })
    
    
    $("#link5").click(function(){
        $("#html").hide("slow");
        $("#html1").hide("slow");
        $("#boot").hide("slow");
        $("#js").hide("slow");
        $("#jquery").show("slow");
        $("#jquery1").show("slow");
        
    })
    
});
