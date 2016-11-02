// Skrypt który odpowiada za reakcje kafelków
function hover(n)
{
	$("#tile"+n).addClass("hover"+n)
	$("body").addClass("tlo"+n);
	$("body").removeClass("tlo");
}

function out(n)
{
	$("#tile"+n).removeClass("hover"+n)
	$("body").removeClass("tlo"+n);
	$("body").addClass("tlo");
}