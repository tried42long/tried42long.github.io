// JScript source code
//FORM EDITOR
//Purpose: Will allow users to craft online forms without needing to have code experience.
//          all data is stored in XML format and then the form is build at runtime on the server
//          forms should not transmit level 1 or 2 data, if that is the requirement talk to the data application team
//          for more secure data transmission.

function ShowForm(FileURL, Results) {
   
    var ServerBase = document.getElementById("hdnServerBase").value;
    // alert(ServerBase);

    var Parameters = FileURL + "|" + Results;

    AjaxMe(ServerBase, 'Forms_PublicForm', Parameters, Results);
    $("#divForm").hide('fade', 200);
    $("#divSubmit").hide('fade', 200);
}

function ShowForm_Public(FileURL, Results, CSSStyle) {
     var ServerBase = document.getElementById("hdnServerBase").value;
    //alert(ServerBase + "||" + FileURL + "||" + Results);
     var TheLetter;
     TheLetter = Results.replace("div", "");
     TheLetter = TheLetter.replace("_Ajax", "");

     var Parameters = FileURL + "|" + Results + "|" + CSSStyle + "|" + TheLetter;
    // alert(Parameters);
     var WidthTest = document.getElementById(Results).offsetWidth;
     if (WidthTest < 440)
     {
         //this form is being used in a small space and needs to be shrunk
         document.getElementById(Results).className = document.getElementById(Results).className + " small_space_forms_format";
     }
      AjaxMe(ServerBase, 'Forms_PublicForm', Parameters, Results);
    //   $("#divForm").hide('fade', 200);
    //   $("#divSubmit").hide('fade', 200);
}



function ReshapePreview()
{
    document.getElementById("LayoutClass").className = document.getElementById("txtLayoutClass").value;
    document.getElementById("LayoutDiv").className = document.getElementById("txtSection").value;
    
    if (document.getElementById("selCSS").options[document.getElementById("selCSS").selectedIndex].value == -1)
    {

    } else
    {
        document.getElementById("txtCustomCSS").value = document.getElementById("selCSS").options[document.getElementById("selCSS").selectedIndex].value;
    }
    
    document.getElementById("divZZ").className = "form_preview " + document.getElementById("txtCustomCSS").value;
    
}

function ClearSplash(Results) {
   
    // Run the effect
    $("#divFormSplash" + Results).hide('fold', 400);
    $("#divForm" + Results).show('fade', 900);
    document.getElementById("divForm" + Results).focus;
   // alert("you're going to hide the splash");
}

function SubmitShow(Results)
{
    // Run the effect
    $("#divSubmit" + Results).show('fade', 1000);
    $("#divForm" + Results).hide('fold', 400);
    document.getElementById("divSubmit" + Results).focus;
}


function ShowSplash(Results) {

    // Run the effect
    document.getElementById("frm_" + Results).onsubmit = "";
    $("#divFormSplash" + Results).show('fold', 800);
    $("#divForm" + Results).hide('blind', 500);    
    document.getElementById("frm_" + Results).submit();
    // alert("you're going to hide the splash");
}

function ShowSliderValue(SliderID, ShowValueID) {
    var myobj = document.getElementById(SliderID);
   // alert(myobj.value);
    document.getElementById(ShowValueID).value = document.getElementById(SliderID).value;
}

/////////////////////////////////////////////////////
// End OF FILE
//////////////////////////////////////////////////////////
