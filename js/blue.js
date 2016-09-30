$("input").focus(function(){
	$(".bg").css("-webkit-filter", "blur(2px)");
	$(".bg").css("-moz-filter", "blur(2px)");
	$(".bg").css("-o-filter", "blur(2px)");
	$(".bg").css("-ms-filter", "blur(2px)");
	$(".bg").css("filter", "blur(2px)");
});