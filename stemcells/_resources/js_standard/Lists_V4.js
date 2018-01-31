//setup array of current div blocks that are using the class accordion

function collectListSections() {

    myAccordionArray.pop();
    myAccordGroupArray.pop();

    var TheA = "A".charCodeAt(0);
    var TheZ = "Z".charCodeAt(0);

    for (i = TheA; i <= TheZ; i++)
    {
       // alert(String.fromCharCode(i));
        try {
            var divIndex = 'div' + String.fromCharCode(i) + '_content';
            var checkclass = document.getElementById(divIndex).className.toLowerCase();

            if (checkclass.indexOf("list_aboutitem") >= 0)
            {
               //alert("Have Found A list");
               
                AboutItem_Setup(divIndex);
               // alert(myDiv.getElementsByTagName("h3")[0].innerHTML);
               // myDiv.getElementsByTagName("h3")[0].setAttribute("onclick", "AccordionMeForm('" + divIndex + "')");
                //document.getElementById('div' + String.fromCharCode(i)).onclick = AccordionMeSolo;
            }
        }
        catch (err) {
        }
    }      
}

function AboutItem_Setup(divIndex)
{
    //Add onclick function to the body in case user clicks off a slide that is open
    var blackout = document.getElementById("blackout");
    blackout.setAttribute("onclick", "AboutItem_CloseAll('" + divIndex + "')");

    //format the list item to have the item so you can click on it to open more information
    var myDiv = document.getElementById(divIndex);
    var mylist = myDiv.getElementsByTagName("li");
    var myTitle, TitleTest;

    for(var i=0; i<= mylist.length; i++)
    {
        try
        {
            TitleTest = mylist[i];
            myTitle = TitleTest.getElementsByTagName("h3");
            //myTitle.innerHTML = "test " + i;
            if(myTitle[0].length != 0)
            {
                // alert(myTitle[0].innerHTML);
                myTitle[0].setAttribute("onclick", "AboutItem_Show(" + i + ", '" + divIndex + "')");
                myTitle[0].setAttribute("tabindex", "0");

                //add navigation to the slide
                var SlideUL = mylist[parseInt(i + 1)].getElementsByTagName("ul")
               
                if (SlideUL.length != 0)
                {
                    var newLI = document.createElement("li");
                    var newCloseButton = document.createElement("button")
                    newCloseButton.innerText = "Close";
                    newCloseButton.className = "pill gradient slim";
                    newCloseButton.setAttribute("onclick", "AboutItem_CloseAll(-1)");
                    newCloseButton.setAttribute("tabindex", "0");
                    newLI.className = "AboutItem_CloseButton";
                    newLI.appendChild(newCloseButton);
                    SlideUL[0].appendChild(newLI);
                }
            }
            
        }catch (err)
        {
            
        }
    }
}

function AboutItem_Show(index, divIndex)
{
    //Add onclick function to the body in case user clicks off a slide that is open
    var blackout = document.getElementById("blackout");
    blackout.setAttribute("onclick", "AboutItem_CloseAll('" + divIndex + "')");

    try {
        var OpenItem = document.getElementsByClassName("AboutList_Show_InfoCard");
        OpenItem[0].className = "AboutList_Hide_InfoCard";
    } catch (err)
    { }

    var myDiv = document.getElementById(divIndex);
    var mylist = myDiv.getElementsByTagName("li");

    for(var i=0; i<= mylist.length; i++)
    {
        if(i == (index+1))
        {
            mylist[i].className = "AboutList_Show_InfoCard";
            blackout.className = "blackout_on";
        }
    }
}

function AboutItem_CloseAll(divIndex)
{
   // alert(divIndex);
    var OpenItem = document.getElementsByClassName("AboutList_Show_InfoCard");
    OpenItem[0].className = "AboutList_Hide_InfoCard";

    var blackout = document.getElementById("blackout");
    blackout.className = "blackout_off";
}