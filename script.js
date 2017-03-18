function updateScreen() {	
$(".foot01").html("<p style='padding-left:0px;'>&copy; " + new Date().getFullYear() + " Saskatoon Shotokan Karate. All rights reserved.</p>");
document.getElementById("nav02").innerHTML = 
"<div>" +
"<ul class='nav'>" +
"<li id='indexTab'><button id='homeButton'>Home</button></li>" +
"<li id='aboutTab'><button id='aboutButton'>About</button>" +
"<ul class='hidden'>" +
"<li><button id='instructorsButton'>Instructors</button></li>" +
"<li><button id='feesButton'>Fees</button></li>" +
"<li><button id='calendarButton'>Calendar</button></li>" +
"</ul>" +
"</li>" +
"<li id='newsTab'><button id='newsButton'>News</button></li>" +
"<li id='linksTab'><button id='linksButton'>Links</button></li>" +
"<li id='contactTab'><button id='contactButton'>Contact</button></li>" +
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
	var feesButton = document.getElementById("feesButton");
	feesButton.addEventListener("click", function() {goToPage('fees')});
	var calendarButton = document.getElementById("calendarButton");
	calendarButton.addEventListener("click", function() {goToPage('calendar')});
	var newsButton = document.getElementById("newsButton");
	newsButton.addEventListener("click", function() {goToPage('news')});
	var linksButton = document.getElementById("linksButton");
	linksButton.addEventListener("click", function() {goToPage('links')});
	var contactButton = document.getElementById("contactButton");
	contactButton.addEventListener("click", function() {goToPage('contact')});
	});

function goToPage(pageName) {
	console.log("Changing Page");
	switch(pageName) {
		case 'home':
			if ( $("#index").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#index").removeClass("hidden");
				}
			break;
		case 'about':
			if ( $("#about").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#about").removeClass("hidden");
				}
			break;
		case 'instructors':
			if( $("#instructors").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#instructors").removeClass("hidden");
				}
			break;
		case 'fees':
			if( $("#fees").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#fees").removeClass("hidden");
				}
			break;
		case 'calendar':
			if( $("#calendar").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#calendar").removeClass("hidden");
				}
			break;
		case 'news':
			if( $("#news").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#news").removeClass("hidden");
				}
			break;
		case 'links':
			if( $("#links").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#links").removeClass("hidden");
				}
			break;
		case 'contact':
			if( $("#contact").hasClass("hidden") ) {
				$(".main").addClass("hidden");
				$("#contact").removeClass("hidden");
				}
			break;
		default:
			break;
		}
	}
};
requestAnimationFrame(updateScreen);
