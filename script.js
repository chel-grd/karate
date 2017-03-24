$(".foot01").html("<p style='padding-left:0px;'>&copy; " + new Date().getFullYear() + " Saskatoon Shotokan Karate. All rights reserved.</p>");
document.getElementById("nav02").innerHTML = 
"<div id='navMenu'>" +
"<ul class='nav'>" +
"<li id='indexTab'><button id='homeButton' class='navButton active'>Home</button></li>" +
"<li id='aboutTab'><button id='aboutButton' class='navButton'>About</button>" +
"<ul id='subMenu' class='hidden'>" +
"<li><button id='instructorsButton' class='navButton'>Instructors</button></li>" +
"<li><button id='feesButton' class='navButton'>Fees</button></li>" +
"<li><button id='calendarButton' class='navButton'>Calendar</button></li>" +
"</ul>" +
"</li>" +
"<li id='newsTab'><button id='newsButton' class='navButton'>News</button></li>" +
"<li id='linksTab'><button id='linksButton' class='navButton'>Links</button></li>" +
"<li id='contactTab'><button id='contactButton' class='navButton'>Contact</button></li>" +
"</ul>" +
"</div>";
$(document).ready(function() {
	$("#webTitle").mouseenter( function() {
		$("#webTitle").addClass("highlight");
	}),
	$("#webTitle").mouseleave( function() {
		$("#webTitle").removeClass("highlight");
	});
	$("#aboutTab").mouseenter(function() {
		$("#subMenu").slideDown("fast");
	});
	$("#aboutTab").mouseleave(function() {
		$("#subMenu").slideUp("fast");
	});
});
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
function setActiveTab(pageName) {
	$(".navButton").removeClass("active");
	switch(pageName) {
		case 'home':
			$("#homeButton").addClass("active");
			break;
		case 'about':
		case 'instructors':
		case 'fees':
		case 'calendar':
			$("#aboutButton").addClass("active");
			break;
		case 'news':
			$("#newsButton").addClass("active");
			break;
		case 'links':
			$("#linksButton").addClass("active");
			break;
		case 'contact':
			$("#contactButton").addClass("active");
			break;
		default:
			break;
		}
	}
function goToPage(pageName) {
	console.log("Changing Page");
	setActiveTab(pageName);
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
