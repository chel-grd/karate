function updateScreen(time) {	
document.getElementById("foot01").innerHTML =
"<p style='padding-left:0px;'>&copy; " + new Date().getFullYear() + " Saskatoon Shotokan Karate. All rights reserved.</p>";
document.getElementById("nav02").innerHTML = 
"<div id='cssmenu'>" +
"<ul>" +
"<li id='indexTab'><button id='homeButton'>Home</button></li>" +
"<li id='aboutTab' class='has-sub'><button id='aboutButton'>About</button>" +
"<ul>" +
"<li class='has-sub'><button id='instructorsButton'>Instructors</button>" +
"</li>" + 
"<li class='has-sub'><button id='classesButton'>Classes</button>" +
"<ul>" +
"<li><button id='feesButton'>Fees</button></li>" +
"<li class='last'><button id='calendarButton'>Calendar</button></li>" +
"</ul>" +
"</li>" +
"</ul>" +
"</li>" +
"<li id='newsTab'><button id='newsButton'>News</button></li>" +
"<li id='linksTab'><button id='linksButton'>Links</button></li>" +
"<li id='contactTab' class='last'><button id='contactButton'>Contact</button></li>" +
"</ul>" +
"</div>";
var pageTitle = document.getElementById("title").innerHTML;
switch(pageTitle) {
	case "Links":
		$("#linksTab").addClass("active");
		break;
	case "About":
	case "Instructors":
	case "Calendar":
		$("#aboutTab").addClass("active");
		break;
	case "News":
		$("#newsTab").addClass("active");
		break;
	case "Saskatoon Shotokan Karate":
		$("#indexTab").addClass("active");
		$("#about").addClass("hidden");
		break;
	case "Contact":
		$("#contactTab").addClass("active");
		break;
	default:
		break;	
}
};
requestAnimationFrame(updateScreen);
