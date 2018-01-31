//setup array of current div blocks that are using the class accordion
var myFB11Array = ["test"];
var myFB11GroupArray = ["test"];

function collectFeatureBlock11()
{
    //alert("FB11 collection");
    myFB11Array.pop();
    myFB11GroupArray.pop();

    var TheA = "A".charCodeAt(0);
    var TheZ = "Z".charCodeAt(0);

    for (i = TheA; i <= TheZ; i++)
    {
        // alert(String.fromCharCode(i));
        try {
            var divIndex = 'div' + String.fromCharCode(i) + "_content";
            var checkclass = document.getElementById(divIndex).className.toLowerCase();

            if (checkclass.indexOf("featureblock11_") >= 0)
            {
                //alert("Have Found A Feature Block 11");
                var myDiv = document.getElementById(divIndex);

                //get the count of child elements inside the div
                var myLI = myDiv.getElementsByTagName("li");

                for (l = 0; l < myLI.length; l++)
                {
                    //go through all the LI's and auto collapse the ones that need to have a nested li.
                    if(myLI[l].getElementsByTagName("ul").length > 0)
                    {
                       // alert("Found an LI with nested UL");
                    }
                }
                

                // alert(myDiv.getElementsByTagName("h3")[0].innerHTML);
                myDiv.getElementsByTagName("ul")[0].setAttribute("onclick", "AccordionMeForm('" + divIndex + "')");
                //document.getElementById('div' + String.fromCharCode(i)).onclick = AccordionMeSolo;
            } 
        }
        catch (err) {
        }
    }
   
}





//--------------------------------------------------
//END OF FILE
//--------------------------------------------------