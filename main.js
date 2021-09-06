$(function(){
///////////////start///////////////////
$("#myPortfolio").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'm09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});

$("#intro").YTPlayer({
    containment:'.m01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    useOnMobile: true,
    optimizeDisplay:false,    //넣을까 말까
});

//portfolio video control
$("#portfolio01").YTPlayer({
    containment:'.portfolio01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});

$(".m02 .xi-pause").on("click", function(){
    $("#portfolio01").YTPPause();
})

$(".m02 .xi-play").on("click", function(){
    $("#portfolio01").YTPPlay();
})


$("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio02").YTPPause();
})

$(".m03 .xi-play").on("click", function(){
    $("#portfolio02").YTPPlay();
})


$("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});

$(".m04 .xi-pause").on("click", function(){
    $("#portfolio03").YTPPause();
})

$(".m04 .xi-play").on("click", function(){
    $("#portfolio03").YTPPlay();
})


$("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});

$(".m05 .xi-pause").on("click", function(){
    $("#portfolio04").YTPPause();
})

$(".m05 .xi-play").on("click", function(){
    $("#portfolio04").YTPPlay();
})


//photo_slider
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    autoplay:4000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});

/*$(".m07 i.xi-arrow-left").on("click", function(){
    $(".photo_slider").slick("slickPrev");
})

$(".m07 i.xi-arrow-right").on("click", function(){
    $(".photo_slider").slick("slickNext");
}) */


//full open
$("#header i, .m09 img").on("click", function(){
    $("#full").addClass("on")
});

$("#full i,#full a").on("click", function(){
    $("#full").removeClass("on")
});



///////////////end///////////////////
});