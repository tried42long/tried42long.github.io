
				
// JScript import file

// YOU MAY FIND THE NEED TO HAVE YOUR OWN JS FILES ON YOUR PAGES.  BY DEFAULT THERE IS 
// NO NEED TO INCLUDE SEPERATE JAVASCRIPT FILES INTO YOUR SITE AS ALL FUNCTIONS 
// DESIGNED FOR THE TEMPLATES WILL AUTOMATICALLY BE ADDED IN THE STANDARD JS FILES.

// DO NOT EDIT THE FUNCTION BELOW IT IS USED TO ADD IN THE JAVASCRIPT

function addJavascript_footer(jsname) {
	
	var footerJS = document.getElementById('divJSFooter')[0];
	var myscript = document.createElement('script');
	
	myscript.setAttribute('type','text/javascript');
	myscript.setAttribute('src',jsname);
	footerJS.appendChild(myscript);
}

	var myHost = window.location.host.toLowerCase();
			
				