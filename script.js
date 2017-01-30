document.getElementById("foot01").innerHTML =
"<p>&copy; " + new Date().getFullYear() + " Saskatoon Shotokan Karate. All rights reserved.</p>";

document.getElementById("nav02").innerHTML = 
"<div id='cssmenu'>" +
"<ul>" +
"<li id='indexTab'><a href='index.html'><span>Home</span></a></li>" +
"<li id='aboutTab' class='has-sub'><a href='about.html'><span>About</span></a>" +
"<ul>" +
"<li class='has-sub'><a href='instructors.html'><span>Instructors</span></a>" +
"</li>" + 
"<li class='has-sub'><a href='#'<span>Classes</span></a>" +
"<ul>" +
"<li><a href='fees.html'><span>Fees</span></a></li>" +
"<li class='last'><a href='calendar2.html'><span>Calendar</span></a></li>" +
"</ul>" +
"</li>" +
"</ul>" +
"</li>" +
"<li id='newsTab'><a href='news.html'><span>Club News</span></a></li>" +
"<li id='linksTab'><a href='links.html'><span>Links</span></a></li>" +
"<li id='downloadsTab'><a href='downloads.html><span>Downloads</span></a></li>" +
"<li id='contactTab' class='last'><a href='contact.html'><span>Contact</span></a></li>" +
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
		break;
	case "Downloads":
		$("#downloadsTab").addClass("active");
		break;
	case "Contact":
		$("#contactTab").addClass("active");
		break;
	default:
		break;	
}

