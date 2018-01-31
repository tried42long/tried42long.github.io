//-------------------------------------------------------------------------------------------------------------
//VERSION 4 FRAMEWORK FUNCTIONS



window.addEventListener("resize", function () { ResizeCalendar() });


function LaunchHoursEditor(ServerBase, Parameters) {
    document.getElementById("FrameworkEditor_Container").className = "FrameworkEditor_Container_open gradient";
    //alert(ServerBase);
    //alert(Parameters);
    AjaxMe(ServerBase, 'LoadHours', Parameters, 'Framework_container');
    setTimeout(function () { ResizeCalendar(); }, 800);
    setTimeout(function () { Hours_GetHours_ByDay_HeaderPreview('divFrameworkPreviewHoursText'); }, 800);
    //alert("We're Ajaxing");
}

function FrameworkEditorCloser() {
    document.getElementById("FrameworkEditor_Container").className = "FrameworkEditor_Container_closed";
}

function CloseMe(ID) {
    document.getElementById(ID).style.display = "none";
}

function Hours_LeftMenuRefresh()
{
    var FileURL = document.getElementById("hdnHoursFileURL").value;
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_LeftMenuRefresh', Parameters, "hours_left_menu");
}

//----------------------------------------------------------------
//WORKZONE TAB NAVIGATION

function ShowTab(tabname) {
    var i;
    var ULChildren = document.getElementById('tab_holder').children
    for (i = 0; i < ULChildren.length; i++) {
        document.getElementById(ULChildren[i].id).className = "non-active";
        document.getElementById(ULChildren[i].id.replace("tab", "content")).className = "content_non-active";
    }

    document.getElementById("tab_" + tabname).className = "active";
    document.getElementById("content_" + tabname).className = "content_active";
}

function Hours_ShowSections() {

    if (document.getElementById("Hours_OtherHours").className == "Hours_OtherHours_closed") {
        document.getElementById("btnHours_ShowSections").value = "[-] Other Hours";
        document.getElementById("Hours_OtherHours").className = "Hours_OtherHours_opened";
    }
    else {
        document.getElementById("btnHours_ShowSections").value = "[+] Other Hours";
        document.getElementById("Hours_OtherHours").className = "Hours_OtherHours_closed";
    }
}


function Hours_ShowEvents() {
    if (document.getElementById("Hours_CurrentEvents").className == "Hours_CurrentEvents_closed") {
        document.getElementById("btnHours_ShowEvents").value = "[-] Events";
        document.getElementById("Hours_CurrentEvents").className = "Hours_CurrentEvents_opened";
    }
    else {
        document.getElementById("btnHours_ShowEvents").value = "[+] Events";
        document.getElementById("Hours_CurrentEvents").className = "Hours_CurrentEvents_closed";
    }
}

function Hours_GeneratePreview(FileURL, HoursID, LayoutType, ReturnType) {
    //alert("Calendar Preview");

    if (FileURL == "") FileURL = document.getElementById("hdnHoursFileURL").value;
    if (LayoutType == "") LayoutType = 0;
    if (ReturnType == "") ReturnType = 0;


    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + HoursID + "|" + LayoutType + "|0";
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_GeneratePreview', Parameters, 'hours_preview_workspace');
    setTimeout(function () { ResizeCalendar(); }, 500);

}

function Hours_GeneratePreview_InEditor(FileURL, LayoutType, ReturnType)
{
    //alert("Calendar Preview");
    var HoursID = document.getElementById("selHoursSet").options[document.getElementById("selHoursSet").selectedIndex].value;

    if (FileURL == "") FileURL = document.getElementById("hdnHoursFileURL").value;
    if (LayoutType == "") LayoutType = 0;
    if (ReturnType == "") ReturnType = 0;


    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + HoursID + "|" + LayoutType + "|0";
    //alert(Parameters);

    AjaxMe(ServerBase, 'Hours_GeneratePreview', Parameters, 'hours_preview_workspace');
    setTimeout(function () { ResizeCalendar(); }, 500);

}

function Hours_BuildCalendar(ShowDate, HoursID, Section) {
   // alert("Calendar Preview");
    var FileURL = document.getElementById("hdnHoursFileURL").value;
    
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + HoursID + "|" + ShowDate + "|0|" + Section;
    //alert(Parameters);

    
    if (Section == "") {
        AjaxMe(ServerBase, 'Hours_BuildCalendar', Parameters, 'divHours_BuildCalendar');
        setTimeout(function () { ResizeCalendar(); }, 500);
    }else
    {

        var site_protocol = window.location.protocol;
        var UseURL = site_protocol + FileURL;
        //alert("hi there");
        //var newURL = oldURL.replace(serverbase/g, site_protocol + serverbase);

        // alert(site_protocol);

        UseURL = UseURL.replace(new RegExp("https:http", 'g'), "https");
        UseURL = UseURL.replace(new RegExp("http:http", 'g'), "http");

        Parameters = UseURL + "|" + HoursID + "|" + ShowDate + "|0|" + Section;
        var publicResults = 'divHours_BuildCalendar' + Section;
        //alert(Parameters);

        AjaxMe(ServerBase, 'Hours_BuildCalendar', Parameters, publicResults);
        setTimeout(function () { ResizeCalendarPublic(Section); }, 1500);
    }
    // alert("Hours Built");

}

function ResizeCalendar() {

    try {
        var CalendarWidth = document.getElementById("ulBigCalendar").offsetWidth;
        // alert(CalendarWidth);

        if (CalendarWidth >= 420) {
            document.getElementById("ulBigCalendar").className = "HoursEventsCalendar_List";
        }

        if (CalendarWidth >= 470) {
            document.getElementById("ulBigCalendar").className = "HoursEventsCalendar_Month";
        }
    } catch (err)
    { }
}


function Hours_GetHours_ByDay_HeaderPreview()
{
    var site_protocol = window.location.protocol;
    var FileURL = document.getElementById("hdnHoursFileURL").value;
    var ServerBase = document.getElementById("hdnServerBase").value;
    //fix for the SSL vs non-SSL
    if (FileURL.substring(0, 4) != "http")
    {
        FileURL = site_protocol + FileURL;
        ServerBase = site_protocol + ServerBase;
    }
    
    var Parameters = FileURL + "|0";
    var Results = "ShowHours_TemplateHeader";

    //alert(FileURL.substring(0, 4));
    //alert(Parameters);

    AjaxMe(ServerBase, 'Hours_GetHours_ByDay_HeaderPreview', Parameters, Results);
    
}

function Hours_EditHours(FileURL, ID) {
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + ID;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_EditHours', Parameters, 'hours_edit_space');

}

function Hours_DeleteTimeBlock(FileURL, Type, BlockID) {
    if (confirm("Are you sure you want to delete this time block?")) {
        Hours_ConfirmedDeleteTimeBlock(FileURL, Type, BlockID)
    }
}

function Hours_ConfirmedDeleteTimeBlock(FileURL, Type, BlockID) {
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + Type + "|" + BlockID;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_DeleteTimeBlock', Parameters, 'hours_edit_space');
    setTimeout(function () { Hours_EditHours(FileURL, 1); }, 800);
    setTimeout(function () { Hours_GeneratePreview(FileURL, 1); }, 800);
}

function Hours_MainChange() {
    document.getElementById('Hours_MainSave').className = "Hours_MainSave_Active";
}


function Hours_OpenDefaultDays() {
    if (document.getElementById('Hours_MainDays').style.display == "block") {
        document.getElementById('Hours_MainDays').style.display = "none";
        document.getElementById('btnOpenMainHourDays').value = "+";
    }
    else {
        document.getElementById('Hours_MainDays').style.display = "block";
        document.getElementById('btnOpenMainHourDays').value = "-";
    }
}


function Hours_OpenDefaultTimeblocks() {
    if (document.getElementById('Hours_DefaultTimeblock').style.display == "block") {
        document.getElementById('Hours_DefaultTimeblock').style.display = "none";
        document.getElementById('btnOpenMainTimeblocks').value = "+";
    }
    else {
        document.getElementById('Hours_DefaultTimeblock').style.display = "block";
        document.getElementById('btnOpenMainTimeblocks').value = "-";
    }
}

function Hours_ShowTimeBlock(Block) {
    if (document.getElementById('timeblock_' + Block).style.display == "block")
    { document.getElementById('timeblock_' + Block).style.display = "none"; }
    else
    { document.getElementById('timeblock_' + Block).style.display = "block"; }

    Hours_MainChange()
}

function Update_MainHours(FileURL) {
    //alert("going to save this.");
    var title, start_date, end_date;
    var sun, mon, tues, wed, thurs, fri, sat;
    var uncheck_status, uncheck_label;

    var timeblock_count;
    var start_time, end_time;
    var timeblockid, default_time, sun_time, mon_time, tues_time, wed_time, thurs_time, fri_time, sat_time;
    var TB_Info;
    var MainHours = "";

    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;

    title = document.getElementById("txtHoursTitle").value;
    start_date = document.getElementById("txtStartDate").value;
    end_date = document.getElementById("txtEndDate").value;
    sun = getCheckValue('chkSunday');
    mon = getCheckValue('chkMonday');
    tues = getCheckValue('chkTuesday');
    wed = getCheckValue('chkWednesday');
    thurs = getCheckValue('chkThursday');
    fri = getCheckValue('chkFriday');
    sat = getCheckValue('chkSaturday');

    uncheck_status = getRadioValue('radUncheckedDays');
    uncheck_label = document.getElementById("txtCustomUnchecked").value;
    timeblock_count = document.getElementById("hdnHours_MainTimeBlockCount").value;

    MainHours = title + "|" + start_date + "|" + end_date + "|" + sun + "|" + mon + "|" + tues + "|" + wed;
    MainHours += "|" + thurs + "|" + fri + "|" + sat + "|" + uncheck_status + "|" + uncheck_label + "|" + timeblock_count;

    for (var t = 1; t <= timeblock_count; t++) {
        timeblockid = document.getElementById('hdnTimeBlock_' + t).value;
        start_time = document.getElementById('txtStartTime_' + timeblockid).value;
        end_time = document.getElementById('txtEndTime_' + timeblockid).value;

        default_time = getCheckValue('chkUseDefault_' + timeblockid);
        sun_time = getCheckValue('chkSunday_' + timeblockid);
        mon_time = getCheckValue('chkMonday_' + timeblockid);
        tues_time = getCheckValue('chkTuesday_' + timeblockid);
        wed_time = getCheckValue('chkWednesday_' + timeblockid);
        thurs_time = getCheckValue('chkThursday_' + timeblockid);
        fri_time = getCheckValue('chkFriday_' + timeblockid);
        sat_time = getCheckValue('chkSaturday_' + timeblockid);

        MainHours += "[*]" + timeblockid + "*" + start_time + "*" + end_time + "*" + default_time + "*" + sun_time + "*" + mon_time;
        MainHours += "*" + tues_time + "*" + wed_time + "*" + thurs_time + "*" + fri_time + "*" + sat_time;
    }

    Parameters = FileURL + "~" + MainHours;

    AjaxMe(ServerBase, 'Hours_UpdateMainHours', Parameters, 'hours_edit_space');

    setTimeout(function () { Hours_GeneratePreview(FileURL, 1); }, 500);
    // alert(Parameters);
}

function Hours_InsertMainHours_TimeBlock(FileURL) {
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_InsertMainHours_TimeBlock', Parameters, 'hours_edit_space');

}
 /// - FUNCTIONS GET CHECK VALUE AND GET RADIO MOVED TO PAGE_FEATURES.js

function Hours_BasicSetup(FileURL) {
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_BasicSetup', Parameters, 'hours_edit_space');
}


function Hours_BasicChange(FileURL) {
    document.getElementById('Hours_BasicSave').className = "Hours_MainSave_Active";
}

function Hours_UpdateBasic(FileURL) {

    //alert("going to save this.");
    var ShowHours, UseURL, HoursURL;
    var StartText, MiddleText, EndText;

    ShowHours = getRadioValue('radUseHours');
    UseURL = getRadioValue('radUseHoursURL');;
    HoursURL = document.getElementById('txtHoursURL').value;
    StartText = document.getElementById('txtStartText').value;
    MiddleText = document.getElementById('txtMiddleText').value;
    EndText = document.getElementById('txtEndText').value;


    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;

    Parameters += "|*|" + ShowHours + "|*|" + UseURL + "|*|" + HoursURL + "|*|" + StartText + "|*|" + MiddleText + "|*|" + EndText;

    AjaxMe(ServerBase, 'Hours_UpdateBasic', Parameters, 'hours_edit_space');
   // alert(Parameters);
    // setTimeout(function () { Hours_BasicSetup(FileURL); }, 800);
    setTimeout(function () { Hours_GetHours_ByDay_HeaderPreview('divFrameworkPreviewHoursText'); }, 800);
}

function Hours_AddSection()
{
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var FileURL = document.getElementById("hdnHoursFileURL").value;

    AjaxMe(ServerBase, 'Hours_AddSection', FileURL, 'hours_edit_space');
    setTimeout(function () { Hours_LeftMenuRefresh(); }, 700);
    setTimeout(function () { Hours_ShowSections(); }, 800);

}

function Hours_EditOtherHours(FileURL, ID) {
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + ID;

    AjaxMe(ServerBase, 'Hours_EditOtherHours', Parameters, 'hours_edit_space');
    
}

function Hours_OtherChange() {
    document.getElementById('Hours_OtherSave').className = "Hours_MainSave_Active";
}

function Hours_OpenOtherDefaultDays() {
    if (document.getElementById('Hours_OtherDays').style.display == "block") {
        document.getElementById('Hours_OtherDays').style.display = "none";
        document.getElementById('btnOpenOtherHourDays').value = "+";
    }
    else {
        document.getElementById('Hours_OtherDays').style.display = "block";
        document.getElementById('btnOpenOtherHourDays').value = "-";
    }
}


function Hours_Delete_OtherHours(FileURL, OtherID)
{
    if(confirm("Are you sure you want to delete this?"))
    {
        var ServerBase = document.getElementById("hdnServerBase").value;
        var Parameters = FileURL + "|" + OtherID;

        AjaxMe(ServerBase, 'Hours_DeleteOtherHours', Parameters, 'hours_edit_space');

        setTimeout(function () { Hours_LeftMenuRefresh(); }, 700);
        setTimeout(function () { Hours_ShowSections(); }, 800);

    }
}

function Hours_Update_OtherHours(FileURL, OtherID)
{
        //alert("going to save this.");
        var hours_type, title, start_date, end_date;
        var sun, mon, tues, wed, thurs, fri, sat;
        var uncheck_status, uncheck_label;

        var timeblock_count;
        var time_type, start_time, end_time;
        var timeblockid, default_time, sun_time, mon_time, tues_time, wed_time, thurs_time, fri_time, sat_time;
        var TB_Info;
        var OtherHours = "";

        var ServerBase = document.getElementById("hdnServerBase").value;
        var Parameters = FileURL;

        hours_type = document.getElementById("selHoursType").options[document.getElementById("selHoursType").selectedIndex].value;
        title = document.getElementById("txtHoursTitle").value;
        start_date = document.getElementById("txtStartDate").value;
        end_date = document.getElementById("txtEndDate").value;
        sun = getCheckValue('chkSunday');
        mon = getCheckValue('chkMonday');
        tues = getCheckValue('chkTuesday');
        wed = getCheckValue('chkWednesday');
        thurs = getCheckValue('chkThursday');
        fri = getCheckValue('chkFriday');
        sat = getCheckValue('chkSaturday');

        uncheck_status = getRadioValue('radUncheckedDays');
        uncheck_label = document.getElementById("txtCustomUnchecked").value;
        timeblock_count = document.getElementById("hdnHours_OtherTimeBlockCount").value;

        OtherHours = OtherID + "~" + hours_type + "|" + title + "|" + start_date + "|" + end_date + "|" + sun + "|" + mon + "|" + tues + "|" + wed;
        OtherHours += "|" + thurs + "|" + fri + "|" + sat + "|" + uncheck_status + "|" + uncheck_label + "|" + timeblock_count;

        for (var t = 1; t <= timeblock_count; t++) {
            timeblockid = document.getElementById('hdnTimeBlock_' + t).value;
            time_type = document.getElementById("selTimeType_" + timeblockid).options[document.getElementById("selTimeType_" + timeblockid).selectedIndex].value;
            start_time = document.getElementById('txtStartTime_' + timeblockid).value;
            end_time = document.getElementById('txtEndTime_' + timeblockid).value;

            default_time = getCheckValue('chkUseDefault_' + timeblockid);
            sun_time = getCheckValue('chkSunday_' + timeblockid);
            mon_time = getCheckValue('chkMonday_' + timeblockid);
            tues_time = getCheckValue('chkTuesday_' + timeblockid);
            wed_time = getCheckValue('chkWednesday_' + timeblockid);
            thurs_time = getCheckValue('chkThursday_' + timeblockid);
            fri_time = getCheckValue('chkFriday_' + timeblockid);
            sat_time = getCheckValue('chkSaturday_' + timeblockid);

            OtherHours += "[*]" + timeblockid + "*" + time_type + "*" + start_time + "*" + end_time + "*" + default_time + "*" + sun_time + "*" + mon_time;
            OtherHours += "*" + tues_time + "*" + wed_time + "*" + thurs_time + "*" + fri_time + "*" + sat_time;
        }

        Parameters = FileURL + "~" + OtherHours;

        AjaxMe(ServerBase, 'Hours_UpdateOtherHours', Parameters, 'hours_edit_space');

        setTimeout(function () { Hours_GeneratePreview(FileURL, 1); }, 500);
        // alert(Parameters);
        setTimeout(function () { Hours_LeftMenuRefresh(); }, 700);
        setTimeout(function () { Hours_ShowSections(); }, 800);
}

function Hours_InsertOtherHours_TimeBlock(FileURL, OtherID)
{
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL + "|" + OtherID;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_InsertOtherHours_TimeBlock', Parameters, 'hours_edit_space');
    setTimeout(function () { Hours_EditOtherHours(FileURL, OtherID); }, 800);
    setTimeout(function () { Hours_OpenDefaultTimeblocks(); }, 900);
    
}

function Hours_DeleteOtherHours_TimeBlock(FileURL, OtherID, TimeID) {
    //alert("Form backup Reset");
    if (confirm("Are you sure you want to delete this timeblock?")) {
        var ServerBase = document.getElementById("hdnServerBase").value;
        var Parameters = FileURL + "|" + OtherID + "|" + TimeID;
        //alert(ServerBase);   

        AjaxMe(ServerBase, 'Hours_DeleteOtherHours_TimeBlock', Parameters, 'hours_edit_space');
        setTimeout(function () { Hours_EditOtherHours(FileURL, OtherID); }, 800);
        setTimeout(function () { Hours_OpenDefaultTimeblocks(); }, 900);
    }
}

function Hours_ShowClosures(FileURL)
{
    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var Parameters = FileURL;
    //alert(ServerBase);   

    AjaxMe(ServerBase, 'Hours_ShowClosures', Parameters, 'hours_edit_space');
}

function Hours_closures_edit() {

    document.getElementById('Hours_ClosuresSave').className = "Hours_MainSave_Active";
}

function Hours_closures_edit_start()
{
    if (document.getElementById("dte_CloseEnd").value == "" || document.getElementById("dte_CloseStart").value > document.getElementById("dte_CloseEnd").value || document.getElementById("dte_CloseStart").value == "")
    {
        document.getElementById("dte_CloseEnd").value = document.getElementById("dte_CloseStart").value;
    }

    Hours_closures_edit()
}


function Hours_InsertEditClosure() {

    //alert("Form backup Reset");
    var ServerBase = document.getElementById("hdnServerBase").value;
    var FileURL = document.getElementById("hdnHoursFileURL").value;

    var Parameters, ClosureID, Start, End, Title, Calendar;

    ClosureID = document.getElementById("hdn_ClosureID").value;
    Start = document.getElementById("dte_CloseStart").value;
    End = document.getElementById("dte_CloseEnd").value;
    Title = document.getElementById("txt_CloseTitle").value;
    Calendar = document.getElementById("sel_CloseCalendar").options[document.getElementById("sel_CloseCalendar").selectedIndex].value;

    Parameters = FileURL + "|*|" + ClosureID + "|*|" + Start + "|*|" + End + "|*|" + Title + "|*|" + Calendar;
   // alert(Parameters);
    AjaxMe(ServerBase, 'Hours_InsertEditClosure', Parameters, '--');
    setTimeout(function () { Hours_ShowClosures(FileURL + "|-1"); }, 700);

}

function Hours_DeleteClosure(FileURL, ClosureID) {

    if (confirm("Are you sure you want to delete this closure?"))
    {
        var ServerBase = document.getElementById("hdnServerBase").value;
        var Parameters = FileURL + "|" + ClosureID;
        //alert(ServerBase);   

        AjaxMe(ServerBase, 'Hours_DeleteClosure', Parameters, '--');
        setTimeout(function () { Hours_ShowClosures(FileURL+"|-1"); }, 700);
    }
    
}


////////////////////////////////////////
//  WIDGET COMMANDS
///////////////////////////////////////////


function _WidgetBuilder(id)
{
    //modify the data source paths

    document.getElementById("OULocalPath").value = document.getElementById("OUPath").value + ", " + id + ")";
    document.getElementById("OUFullPath").value = document.getElementById("OUPathFull").value + ", " + id + ")";

    Hours_PreviewWidget(document.getElementById("OUPathForPreview").value, id, 'divA_preview');

}

function Hours_PreviewWidget(URL, ID, Section)
{
    var FileURL = URL.replace(".htm", ".xml");
    var LayoutType = "";
    var ReturnType = "";

    var ServerBase = document.getElementById("hdnServerBase").value;

    if (LayoutType == "") LayoutType = 0;
    if (ReturnType == "") ReturnType = 0;

    var site_protocol = window.location.protocol;
    var UseURL = site_protocol + ServerBase + FileURL;
    //alert("hi there");
    //var newURL = oldURL.replace(serverbase/g, site_protocol + serverbase);
    
   // alert(site_protocol);

    UseURL = UseURL.replace(new RegExp("https:http", 'g'), "https");
    UseURL = UseURL.replace(new RegExp("http:http", 'g'), "http");
   

    var Parameters = UseURL + "|" + ID + "|" + LayoutType + "|" + ReturnType + "|" + Section;
    //alert(ServerBase);
  //  alert(Parameters);
   // alert(Section);

    AjaxMe(ServerBase, 'Hours_GeneratePreviewPublic', Parameters, Section);
    setTimeout(function () { ResizeCalendarPublic(Section); }, 500);

}


function ResizeCalendarPublic(Section) {
    var CalendarWidth = document.getElementById("ulBigCalendar" + Section).offsetWidth;
    // alert(CalendarWidth);
    //alert(Section);

     if (CalendarWidth >= 470) {

        document.getElementById("ulBigCalendar" + Section).className = "HoursEventsCalendar_Month";
    }
    else {

        document.getElementById("ulBigCalendar"+Section).className = "HoursEventsCalendar_List";
    }

   
}

/////////////////////////////////////////////////////
//
// END OF FILE
//
///////////////////////////////////////////////////////