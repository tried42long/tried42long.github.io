// -----------------------------------------------------------------------------------
function AjaxMe(serverbase, action, parameters, results) {

    //alert("hello");
    //alert(action);
    //alert(results);
    var method;
    var url;

    method = "GET";

    switch (action) {
        case 'Navigation_LoadHeaderTabs':
            url = serverbase + "/_resources/scripts_php/functions_navigation.php?action=" + action;
            url += "&parameters=" + parameters;
            //alert("Building It!");
            break;

        case 'Navigation_LoadBreadcrumbs':
            url = serverbase + "/_resources/scripts_php/functions_navigation.php?action=" + action;
            url += "&parameters=" + parameters;
            //alert("Building It!");
            break;

        case 'BuildGalleryIndex':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            //alert("Building It!");
            break;

        case 'LoadGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;

            document.getElementById('txtGalleryStatus').innerHTML = "Gallery Loaded Successfully";
            // document.getElementById('divImgEdit').style.display = "none";
            break;

        case 'RebuildGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            document.getElementById('txtGalleryStatus').innerHTML = "Rebuilding Gallery";
            break;


        case 'EditImageInfo':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'UpdateImageInfo':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            document.getElementById('txtGalleryStatus').innerHTML = "Updating Image Info";
            break;

        case 'UpdateImageOrder':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'SortImageOrder':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'PublicGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            url += "&ispublic=1";
            url += "&results=" + results;
            document.getElementById(results).style.display = "block";
            break;

        case 'Show_PublicGallery':
            url = serverbase + "/_resources/scripts_php/functions_gallery.php?action=" + action;
            url += "&parameters=" + parameters;
            url += "&ispublic=1";
            url += "&results=" + results;
            document.getElementById(results).style.display = "block";
            break;

        case 'Slideshow_Load':
            url = serverbase + "/_resources/scripts_php/functions_slideshow.php?action=" + action;
            url += "&parameters=" + parameters;
            url += "&results=" + results;
            document.getElementById(results).style.display = "block";
            break;

        case 'TraningInfo':
            url = serverbase + "/_resources/scripts_php/functions_Training.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'TraningContent':
            url = serverbase + "/_resources/scripts_php/functions_Training.php?action=" + action;
            url += "&parameters=TraningContent";
            url += "&TrainingURL=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'ContentMine':
            url = serverbase + "/_resources/scripts_php/functions_ContentMiner.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Pull_RSS':
            url = serverbase + "/_resources/scripts_php/functions_ContentMiner.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'LoadForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Forms_GeneratePreview':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_LayoutBlocks':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_LayoutElements':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_AddFieldset':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";            
            break;

        case 'Form_AddTextBlock':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateTextBlock':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Form_DeleteFieldset':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_ReadyForms':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_StandardFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_CustomFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateFieldsetLegend':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'AddElementToForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_RemoveElementFromFieldset':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateEditElement':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_EditElement':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateLayoutBlocks':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_ShowLayoutElementID':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateLayoutElements':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_LoadTitleInfo':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;
        case 'Form_UpdateTitleInfo':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Form_LoadSplashFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Form_UpdateSplashScreen':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Form_LoadSubmitFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'Form_AddEmail':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'Form_DeleteEmail':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'Form_UpdateSubmitOptions':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Form_LoadResponseFields':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'Form_UpdateResponseScreen':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Forms_PublicForm':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            break;

        case 'Form_BackupReset':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Form_CreateNew':
            url = serverbase + "/_resources/scripts_php/functions_forms.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'LoadFramework':
            url = serverbase + "/_resources/scripts_php/functions_framework.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'LoadHours':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_EditHours':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_UpdateMainHours':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_InsertMainHours_TimeBlock':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_DeleteTimeBlock':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_GeneratePreview':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_BasicSetup':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_UpdateBasic':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case 'Hours_GetHours_ByDay_HeaderPreview':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            //document.getElementById(results).style.display = "block";
            break;

        case 'Hours_AddSection':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case 'Hours_EditOtherHours':
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_LeftMenuRefresh":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_DeleteOtherHours":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_UpdateOtherHours":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_InsertOtherHours_TimeBlock":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_DeleteOtherHours_TimeBlock":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_BuildCalendar":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case "Hours_ShowClosures":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            document.getElementById(results).style.display = "block";
            break;

        case "Hours_InsertEditClosure":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;

        case "Hours_DeleteClosure":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--")
            {
                document.getElementById(results).style.display = "block";
            }
            break;

        case "Hours_GeneratePreviewPublic":
            url = serverbase + "/_resources/scripts_php/functions_hours_events.php?action=" + action;
            url += "&parameters=" + parameters;
            if (results != "--") {
                document.getElementById(results).style.display = "block";
            }
            break;
    }

    //alert("method: " + method + '\n' + "url: " + url + '\n' + "params: " + parameters + '\n' + "results: " + results);
    AjaxCall(method, url, parameters, results);

}

function AjaxCall(method, url, parameters, results) {

    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    var serverbase = document.getElementById("hdnServerBase").value;
    var site_protocol = window.location.protocol;
    var oldURL = url;

    //alert("hi there");
    //var newURL = oldURL.replace(serverbase/g, site_protocol + serverbase);

    url = oldURL.replace(new RegExp(serverbase, 'g'), site_protocol + serverbase);
    url = oldURL.replace(new RegExp("httphttp", 'g'), site_protocol + serverbase);
    url = oldURL.replace(new RegExp("httpshttp", 'g'), site_protocol + serverbase);

   // alert(url);
    //alert(newURL);
    //alert(serverbase)
    //alert(window.location.protocol);

    //document.getElementById(results).innerHTML += "<br/><br/>Call Begins.";
    //document.getElementById(results).innerHTML += "<br/><br/>URL: " + url;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            switch (results) {
                case "ShowHours_TemplateHeader":
                    Display_Site_Hours(xmlhttp.responseText);
                    break;
                case "--":
                    break;
                default:
                    try {
                        if (results == 'Navigation')
                        {
                            document.getElementById(results).className = "NavigationOn";
                        }

                        document.getElementById(results).innerHTML = xmlhttp.responseText;
                        
                        LaunchSlideshow(results);
                         GalleryMsgUpdate();
                    //alert(xmlhttp.responseText);
				}catch(err){
				   // alert(err);
				}
            }
        } else {
            try {
                switch(results)
                {
                    case "Navigation":
                        document.getElementById(results).innerHTML = " ";
                        break;

                    case "Breadcrumb":
                        document.getElementById(results).innerHTML = " ";
                        break;
                    default:
                        document.getElementById(results).innerHTML = "<span class=\"loading_data\">loading data...please wait</span>";
                        break;
                }
                
			}catch(err){
			    //alert(err);
			}
            //document.getElementById(results).innerHTML += "<br/><br/>" + url;
            //document.getElementById(results).innerHTML += "<br/><br/>Ready State: " + xmlhttp.readyState + ", Status: " + xmlhttp.status;
        }
    }

    if (method == "GET") {
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } else {

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }

}

function GalleryMsgUpdate() {

    try {
        if (document.getElementById('txtGalleryStatus').innerHTML == "Image Updated") {
            setTimeout(function () { document.getElementById('lnkGalleryRefresh').click(); }, 1500);
        }
        else {
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus StatusChange_start'; }, 1400);
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus StatusChange'; }, 2000);
            setTimeout(function () { document.getElementById('txtGalleryStatus').className = 'txtGalleryStatus'; }, 4000);
            setTimeout(function () { document.getElementById('txtGalleryStatus').innerHTML = '&nbsp;'; }, 4500);
        }
    }
    catch (e) { //do nothing
    }
}

////////////////////////////////
//
// END OF FILE
////////////////////////////////////
