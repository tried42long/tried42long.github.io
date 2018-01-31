//alert("STARTING LOAD");


// Scroll handler to toggle classes.
window.addEventListener("scroll", function () { PageWhereAmI() });
window.addEventListener("keydown", function () { YourMove() });
//window.addEventListener("keypress", function () {YourMove() });
window.addEventListener("click", function () { CheckTheClicker() });



function PageWhereAmI() {
    var  width;
    width = document.documentElement.clientWidth; // || document.documentElement.clientWidth || document.body.clientWidth;
    
    var  B = document.body, H = document.documentElement, height;
    if (typeof document.height !== 'undefined') {
        height = document.height // For webkit browsers
    } else {
        height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
    }
    // height = document.documentElement.clientHeight; // || document.documentElement.clientWidth || document.body.clientWidth;
   
  

    document.getElementById("test_info").innerHTML = " ";
    document.getElementById("test_info").innerHTML += "top of page: " + window.pageYOffset + "<br/>";
    document.getElementById("test_info").innerHTML += "overall height: " +  height + "<br/>";
    document.getElementById("test_info").innerHTML += "Main Content CSS: " +  document.getElementById("MainContent").className;
    

    if(width > 800)
    {
        //user screen is not considered a mobile device

        if (parseInt(window.pageYOffset) > 90 && height > 1400) {
            //user scrolled down page so the top is no longer showing
            document.getElementById("back_to_top").className = "BTT_on";
            document.getElementById("Navigation").className = "LowerScroll";
            document.getElementById("SiteName_Tabs").className = "LowerScroll";
            document.getElementById("CSUFLink_Search").className = "LowerScroll";
            document.getElementById("SearchNav").className = "LowerSearch";
            document.getElementById("MainContent").className = "LowerScroll_solo";
            document.getElementById("divFooter").className = "LowerScroll";
          
            try{

                if(document.getElementById("divTopMedia") != null)
                {
                    document.getElementById("divTopMedia").className = "TopMedia LowerScroll_TopMedia";
                }
                else
                {
                    if(document.getElementById("PageBanner") != null && document.getElementById("Breadcrumb") != null )
                    {
                        document.getElementById("PageBanner").className = "LowerScroll";
                        document.getElementById("Breadcrumb").className = "CrumbMover LowerScroll_withbanner";
                        document.getElementById("MainContent").className = "LowerScroll_withbannerandcrumb";
                    }

                    if(document.getElementById("PageBanner") != null && document.getElementById("Breadcrumb") == null )
                    {
                        document.getElementById("PageBanner").className = "LowerScroll";
                        document.getElementById("MainContent").className = "LowerScroll_withbanner";
                    }

                    if(document.getElementById("PageBanner") == null && document.getElementById("Breadcrumb") != null )
                    {
                        document.getElementById("Breadcrumb").className = "CrumbMover LowerScroll";
                        document.getElementById("MainContent").className = "LowerScroll_withcrumb";
                    }

                    if(document.getElementById("PageBanner") == null && document.getElementById("Breadcrumb") == null )
                    {
                        document.getElementById("MainContent").className = "LowerScroll";
                    }
                }
            }
            catch(err){}

           
        } else {
            //user is seeing the top of the page
            document.getElementById("back_to_top").className = "BTT_off";
            document.getElementById("SearchNav").className = "FullScreen";
            document.getElementById("Navigation").className = "FullScreen";
            document.getElementById("SiteName_Tabs").className = "FullScreen";
            document.getElementById("CSUFLink_Search").className = "FullScreen";
            document.getElementById("SearchNav").className = "FullScreen";
            document.getElementById("MainContent").className = "FullScreen";
            document.getElementById("divFooter").className = "FullScreen";
            try{
                if(document.getElementById("divTopMedia") != null)
                {
                    document.getElementById("divTopMedia").className = "TopMedia ";
                }
                document.getElementById("PageBanner").className = "FullScreen";
            }
            catch(err){}

            try{
                document.getElementById("Breadcrumb").className = "CrumbMover FullScreen";
            }
            catch(err){}
        }
    }
}

function getBrowserDimensions() {
    return {
        width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
    };
}

//var browser_dims = getBrowserDimensions();

var browser_dims = "1000:400";



//////////////////////////////////////////////////////
//KEYBOARD MOVES
function YourMove(e)
{
    e = e || window.event;
    // alert(e.keyCode);
        
    try{
        //check for the image gallery
        if (document.getElementById('LightBox').className == "lightbox_on") 
        {
            MoveTheGallery(e);    
            return;
        }
    }catch(err)
    {}

    try
    {
        //move the location the user wants
          
        if (e.keyCode == '13') {
            // enter key
            //alert("Enter");
            //check to see if they are on a List_AboutItem H3
            //alert(document.activeElement.onclick);
            var checkOnclick = document.activeElement.onclick.toString();
            // alert(checkOnclick);
            if(checkOnclick.indexOf("AboutItem_Show") > 0)
            {
                //we are on an element that needs to be clicked
                document.activeElement.click();
            }
        }    
        else if (e.keyCode == '38') {
            // up arrow
            //alert("Up");
        }
        else if (e.keyCode == '40') {
            // down arrow
            //alert("Down");
        }
        else if (e.keyCode == '37') {
            // left arrow
            //alert("Left");
        }
        else if (e.keyCode == '39') {
            // right arrow
            //alert("right");
        } 
        else if (e.keyCode == '36') {
            //home key
            // alert("home");
        } 
        else if (e.keyCode == '35') {
            //end key
            // alert("end");
        }
        else if (e.keyCode == '27') {
            //esc key
            // alert("esc");
            if(document.getElementById("SearchNav").className == "LowerSearch")
            {
                document.getElementById("SearchNav").className = "LowerSearch_hide";
                document.getElementById("SearchIcon").focus;
            }

            if(document.getElementById("blackout").className == "blackout_on")
            {
                try
                {
                    AboutItem_CloseAll(-1);
                }catch(err)
                {}
            }
        }                
        else if (e.keyCode == '9') {
            //tab key
            // alert("tab");
        }        
    }
    catch(err)
    {}
}

/////////////////////////////////////////////////////////////////////////

function MoveTheGallery(e) {
    try{
        if (document.getElementById('LightBox').className == "lightbox_on") 
        {
            //move image gallery based on specific key press
            e = e || window.event;
            //alert(e.keyCode);
        
            if (e.keyCode == '38') {
                // up arrow
                //alert("Up");
            }
            else if (e.keyCode == '40') {
                // down arrow
                //alert("Down");
            }
            else if (e.keyCode == '37') {
                // left arrow
                lightbox_prev();
            }
            else if (e.keyCode == '39') {
                // right arrow
                lightbox_next();
            } 
            else if (e.keyCode == '36') {
                //home key
                lightbox_first();
            } 
            else if (e.keyCode == '35') {
                //end key
                lightbox_last();
            }
            else if (e.keyCode == '27') {
                //esc key
                lightbox_exit();
            }
        }
    }
    catch(err)
    {}
}

function CheckTheClicker(e)
{
    //check to see if the gallery is open
    e = e || window.event;
    //alert(e.target.id);
    if(e.target.id == "" || e.target.id == null)
    {
        try{
            if(document.getElementById('LightBox').className == "lightbox_on")
            {
                lightbox_exit()
            }
        }catch(err)
        {}
    }

}

function ShowSearchAreas()
{
    if(document.getElementById("lnkSearchDomains").className == "Open")
    {
        document.getElementById("searchRadioBtns").className = "Close";
        document.getElementById("searchTools").className = "Close";
        document.getElementById("lnkSearchDomains").className = "Close";
    }else
    {
        document.getElementById("searchRadioBtns").className = "Open";
        document.getElementById("lnkSearchDomains").className = "Open";
        document.getElementById("searchTools").className = "Open";
        document.getElementById("searchRadioBtns").focus();
    }
}

//PageWhereAmI();
//alert("END OF LOAD");

function ShowHideNav(navid)
{
    var li = navid.replace("btn", "");
   
    btnnav = document.getElementById(navid);
    
    if(btnnav.innerHTML == "+")
    {
        btnnav.innerHTML = "-";
        btnnav.className = "menu_open";
        btnnav.title = "close";
        document.getElementById(li).className = "active";      
      
    }else
    {
        btnnav.innerHTML = "+";
        btnnav.className = "menu_closed";
        btnnav.title = "open";
        document.getElementById(li).className = "";              
    }
}

//Left Nav Slider
function ExpandLeftMenu()
{
    if(document.getElementById('MobileVertNavSlider').innerHTML == "&gt;")
    {
        document.getElementById('MobileVertNavSlider').className= "showright";
        document.getElementById('MobileVertNavSlider').innerHTML = "&lt;";
        document.getElementById('VerticalNavMenu').className ="showright";
    }
    else
    {document.getElementById('MobileVertNavSlider').className= "hideleft";
        document.getElementById('MobileVertNavSlider').innerHTML = "&gt;";
        document.getElementById('VerticalNavMenu').className ="hideleft";
    }
}

//move breadcrumbs
setTimeout(function () {BreadCrumbClass(); }, 500);

function BreadCrumbClass()
{
    try{
        //  alert("crumbs");
        document.getElementById("Breadcrumb").className = "CrumbMover";
    }
    catch(err){
        //alert(err.message)
    }
}

//hours start up: main page, lower scroll, and mobile
setTimeout(function () { Get_Site_Hours();}, 500);

function Get_Site_Hours()
{
    Hours_GetHours_ByDay_HeaderPreview();        
}

function Display_Site_Hours(TheHours)
{
    //alert(TheHours);
    try{
        document.getElementById("SiteHours").innerHTML = TheHours;
        document.getElementById("LowerScroll_SiteHours").innerHTML = TheHours;
        document.getElementById("mobile_SiteHours").innerHTML = TheHours;
    }
    catch(err){
        //alert(err);
    }
}

//determine if IE then disable sitecues, it doesn't seem to launch in IE correctly
setTimeout('IE_version()', 50);

function IE_version() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var trident = ua.indexOf("Trident/");

    //alert(ua);
	
    if (msie > 0 || trident > 0)  // If Internet Explorer, return version number
    {
        document.getElementById("sitecues-badge").className = "hideme";
        //alert('IE');
        
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
    }

    return false;
}

//MOBILE USE FUNCTIONS
function mobilemenu()
{
    if(document.getElementById('Navigation').className != 'mobileopen')
    {
        document.getElementById('Navigation').className = 'mobileopen';
        document.getElementById('divHamburgerMenu').className = 'mobileon';
        window.scrollTo(0,0);
    }else
    {
        document.getElementById('Navigation').className = 'mobileclosed';
        document.getElementById('divHamburgerMenu').className = 'mobileoff';
    }
}
	
function mobileexpand(div)
{
		
    // if(document.getElementById(div).className == 'mobileexpand')
    // {
    //     document.getElementById(div).className = 'mobilecollapse';
    //	document.getElementById(div + "_button").innerHTML = '+';
    // }else
    //  {
    //      document.getElementById(div).className = 'mobileexpand';
    //	    document.getElementById(div + "_button").innerHTML = '-';
    //   }
}

function Mobile_ShowExtended(letter)
{
    if(document.getElementById("extended" + letter).className != 'open')
    {
        document.getElementById("extended" + letter).className = 'open';
        document.getElementById("btnExtended" + letter).className = 'extendedmenu_open';
    }else{
        document.getElementById("extended" + letter).className = '';
        document.getElementById("btnExtended" + letter).className = 'extendedmenu_closed';
    }
}

function mobile_leftmenu()
{
    if(document.getElementById('btnMobileLeftMenu').className != 'open')
    {
        document.getElementById('btnMobileLeftMenu').className = 'open';
        document.getElementById('btnMobileLeftMenu').innerHTML = 'Close Section Navigation';
        document.getElementById('VerticalNavMenu').className = 'open';
    }else
    {
        document.getElementById('btnMobileLeftMenu').className = 'closed';
        document.getElementById('btnMobileLeftMenu').innerHTML = 'Open Section Navigation';
        document.getElementById('VerticalNavMenu').className = 'closed';
    }
}



function SiteSearch()
{
    var searchDomain = getRadioValue("as_sitesearch");
    var tempSearch = "";

    //alert(document.getElementById('hdnSearchType').value);
    UnderstandUsage(searchDomain,  document.getElementById("SearchCSUF").value, 'site_search', 'search');

    if(searchDomain == 'www.fullerton.edu' || document.getElementById('hdnSearchType').value == 1)
    {
        //we are searching the main campus and not a site site search
        document.getElementById("frmSiteSearch").submit()
    }
    else
    {
        //we are doing a multi domain search
        document.getElementById("lnkSearchDomains").href =  "https://www.google.com/search?q=" + document.getElementById('SearchCSUF').value + "+" + searchDomain;
        document.getElementById("lnkSearchDomains").click();
    }
    
}


function UnderstandUsage(link, linktext, category, action)
{
    var EventInfo = "" + linktext.trim() + " [" + link + "]";
		
    if(document.getElementById('hdnIsDev').value != "1")
    {	
        try
        { 
            //gtag('event', 'login', {'method': 'Google'});
            if (action == 'click') {
                gtag('event', 'click', { 'event_category': category, 'event_label': EventInfo });
            }

            if (action == 'search') {
                gtag('event', 'search', { 'event_category': category, 'search_term': linktext});
            }
        }
        catch(err)
        {
            //alert(err.message);
        }
    }
	
    return true;
}



function getCheckValue(ElementID) {
    var test;

    if (document.getElementById(ElementID).checked)
    { test = 1; }
    else
    { test = 0; }

    return test;
}

function getRadioValue(ElementName) {
    var theValue, length;
    var theRadio = document.getElementsByName(ElementName);

    for (var i = 0, length = theRadio.length; i < length; i++) {
        if (theRadio[i].checked) {
            theValue = theRadio[i].value;
            break;
        }
    }
    return theValue;
}


<!-- START sitecues implementation script -->

<!--<script data-provider="sitecues-config" type="application/javascript">-->
    var sitecues = window.sitecues = window.sitecues || {};
sitecues.config = sitecues.config || {};
<!--</script>-->
<!--<script data-provider="sitecues" type="application/javascript">-->
    // DO NOT MODIFY THIS SCRIPT WITHOUT ASSISTANCE FROM SITECUES
    var sitecues = window.sitecues = window.sitecues || {};
sitecues.config = sitecues.config || {};
sitecues.config.siteId = 's-68a01ec7';
sitecues.config.scriptUrl = 'http://js.sitecues.com/l/s;id='+sitecues.config.siteId+'/js/sitecues.js';
(function () {
    var script = document.createElement('script'),
        first  = document.getElementsByTagName('script')[0];
    script.type  = 'application/javascript';
    script.async = true;
    script.src   = sitecues.config.scriptUrl;
    first.parentNode.insertBefore(script, first);
}());
<!--</script>-->
<!-- END sitecues implementation script -->


//////////////////////////////////////////////////
//  END OF FILE
//////////////////////////////////////////////////