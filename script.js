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
window.addEventListener('DOMContentLoaded', function() {
	var homeButton = document.getElementById("homeButton");
	homeButton.addEventListener("click", function() {goToPage('home')});
	var aboutButton = document.getElementById("aboutButton");
	aboutButton.addEventListener("click", function() {goToPage('about')});
	var instructorsButton = document.getElementById("instructorsButton");
	instructorsButton.addEventListener("click", function() {goToPage('instructors')});
	var classesButton = document.getElementById("classesButton");
	classesButton.addEventListener("click", function() {goToPage('classes')});
	var feesButton = document.getElementById("feesButton");
	feesButton.addEventListener("click", function() {goToPage('fees')});
	var calendarButton = document.getElementById("calendarButton");
	calendarButton.addEventListener("click", function() {goToPage('calendar')});
	var newsButton = document.getElementById("newsButton");
	newsButton.addEventListener("click", function() {goToPage('news')});
	var linksButton = document.getElementById("linksButton");
	linksButton.addEventListener("click", function() {goToPage('links')});
	var contactButton = document.getElementById("contactButton");
	contactButton.addEventListener("click", function() {goToPage('calendar')});
	});

function goToPage(pageName) {
	$(".main").addClass("hidden");
	switch(pageName) {
		case 'home':
			$("#home").removeClass("hidden");
			break;
		case 'about':
			$("#about").removeClass("hidden");
			break;
		case 'instructors':
			$("#instructors").removeClass("hidden");
			break;
		case 'classes':
			break;
		case 'fees':
			$("#fees").removeClass("hidden");
			break;
		case 'calendar':
			$("#calendar").removeClass("hidden");
			break;
		case 'news':
			$("#news").removeClass("hidden");
			break;
		case 'links':
			$("#links").removeClass("hidden");
			break;
		case 'contact':
			$("#contact").removeClass("hidden");
			break;
		default:
			break;
		}
	}
};
requestAnimationFrame(updateScreen);
