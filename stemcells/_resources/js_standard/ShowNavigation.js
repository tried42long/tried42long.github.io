//-------------------------------------------------------------------------------------------------------------
//VERSION 4 FRAMEWORK FUNCTIONS


function Navigation_LoadHeaderTabs()
{
    var site_protocol = window.location.protocol;
    var ServerBase = document.getElementById("hdnServerBase").value;

    if (ServerBase.indexOf("http") == -1)
    {
        ServerBase = site_protocol + ServerBase;
    }

    var Parameters = ServerBase + "|" + ServerBase + "/_setup/_TabNavigation.xml" + "|" + ServerBase + "/_setup/_SiteSetup.xml";
    //alert(Parameters);

    AjaxMe(ServerBase, 'Navigation_LoadHeaderTabs', Parameters, "Navigation");

}

function Navigation_LoadBreadcrumbs(PageURL) {
    var site_protocol = window.location.protocol;
    var ServerBase = document.getElementById("hdnServerBase").value;
  
    if (ServerBase.indexOf("http")  == -1) {
        ServerBase = site_protocol + ServerBase;
    }

    var Parameters = ServerBase + "|" + PageURL;
    //alert(Parameters);

    AjaxMe(ServerBase, 'Navigation_LoadBreadcrumbs', Parameters, "Breadcrumb");

}

function Navigation_ShowExtended(tab) {
    //opens the extended nav if user tabs through content
    //close all extended tabs
    var TheLetter, strTestTab;
    var TheShowLetter;
    var  width;
    width = document.documentElement.clientWidth; // || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 700) {
        //close all extended nav 
        Navigation_CloseExtendedMainNav();

        //show the tab that is highlighted
        for (i = 65; i <= 90; i++) {
            TheLetter = String.fromCharCode(i);
            strTestTab = "tab" + TheLetter;
            if (strTestTab == tab) {
                TheShowLetter = TheLetter;
            }
        }

        var rightnow = Date.now();

        //show the tab that is highlighted
        try {
            document.getElementById("link_tab" + TheShowLetter).className = "active";
            document.getElementById("extended" + TheShowLetter).className = "ShowExtended";
            document.getElementById("Nav_tab" + TheShowLetter).className = "highlight";
            document.getElementById("hdnInterfaceNavTime").value = rightnow;

            // setTimeout(function () { Navigation_CheckInterfaceNavTime() }, 5000);
        }
        catch (err)
        { }
    } //else we are on mobile and should ignore all these commands

}

function Navigation_FocusNav(tab)
{
    //clear the currently active tabs
    var TheLetter;
    //alert("Show Focus");
    for (i = 65; i <= 90; i++) {
        TheLetter = String.fromCharCode(i);
        try {
            document.getElementById("link_tab" + TheLetter).className = "";
        }
        catch (err)
        { }
    }

    //  alert(tab);
    document.getElementById("link_" + tab).focus();
    document.getElementById("link_" + tab).className = "active";
   // document.getElementById("divA_content").innerHTML += "Focus set for Nav_" + tab + " | ";

}

function Navigation_HideExtendedNav(tab)
{
    //closes out of a specific extended tab when moused out
    var TheLetter, strTestTab, TheShowLetter;
    var  width;

    width = document.documentElement.clientWidth; // || document.documentElement.clientWidth || document.body.clientWidth;

    if (width > 700) {

        for (i = 65; i <= 90; i++) {
            TheLetter = String.fromCharCode(i);
            strTestTab = "tab" + TheLetter;
            if (strTestTab == tab) {
                TheShowLetter = TheLetter;
            }
        }

        try
        {
            document.getElementById("extended" + TheShowLetter).className = "";
            document.getElementById("link_tab" + TheShowLetter).className = "";
        } catch(err)
        {}
        // document.getElementById("divA_content").innerHTML += "Remove Focus set for Nav_" + tab + " | ";
    }

}

function Navigation_CloseExtendedMainNav()
{
    //shuts off all extended main nav
    var TheLetter;

    for (i = 65; i <= 90; i++) {
        TheLetter = String.fromCharCode(i);
        try {
            document.getElementById("link_tab" + TheLetter).className = "";
            document.getElementById("extended" + TheLetter).className = "HideExtended";
            document.getElementById("Nav_tab" + TheLetter).className = "no-highlight";
        }
        catch (err)
        { }
    }

}



/////////////////////////////////////////////////////
//
// END OF FILE
//
///////////////////////////////////////////////////////