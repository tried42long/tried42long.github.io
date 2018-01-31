// JavaScript source code

function ParallaxChecker() {

    
    var BodyClass = document.getElementById("top").className;

    var BodyArray = BodyClass.split(" ");

    //alert(BodyArray.length);
    var i;

    for(i=0; i< BodyArray.length; i++)
    {
        if(BodyArray[i].includes("_plax_zoom"))
        {
            plax_zoom((BodyArray[i].replace("_plax_zoom", "")));
        }
    }


}

function GetElementOffset(elementID)
{
   
    var element = document.getElementById(elementId); //replace elementId with your element's Id.
    var rect = element.getBoundingClientRect();
    
    var elementLeft, elementTop; //x and y coordinates
    var scrollTop = 0;
    var scrollLeft = 0;

    //scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    //scrollLeft = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft;
    
    elementTop = rect.top + scrollTop;
    elementLeft = rect.left + scrollLeft;
   
    return {
        top: elementTop,
        left: elementLeft
    }   
}

function plax_zoom(boxID)
{
    window.addEventListener("scroll", function () { ZoomMe(boxID) });

    var myDiv = document.getElementById(boxID);
    ZoomMe(boxID);

}

function ZoomMe(boxID)
{
    var myDiv = document.getElementById(boxID);
    var coords = myDiv.getBoundingClientRect();

    var TopOfPage = window.pageYOffset;
    var WindowHeight = window.innerHeight;
    var TopOfBox = coords.top;
    var BottomOfBox = coords.bottom;
    var BoxHeight = myDiv.clientHeight;

    var SeeTop = false, SeeBottom = false;

    var ScaleFactor = 1;

    //figure out if you can see the object or not
    if (TopOfBox >= 0 && TopOfBox <= WindowHeight)
    {
        SeeTop = true;
    }

    if (parseInt(TopOfBox + BoxHeight) < WindowHeight && parseInt(TopOfBox + BoxHeight) > 0) {
        SeeBottom = true;
    }

    //setup the scale factor
    if (BottomOfBox > 0)
    {
        //top of box is showing so its a positive number
        ScaleFactor = parseFloat(BottomOfBox / 31);

    } 

    document.getElementById(boxID).style.backgroundSize = " " +  parseFloat(ScaleFactor + 100) + "%";

    //document.getElementById("test_info").innerHTML = TopOfPage;
    //document.getElementById("test_info").innerHTML += "<br/>" + WindowHeight;
    //document.getElementById("test_info").innerHTML += "<br/>" + BottomOfBox;
    //document.getElementById("test_info").innerHTML += "<br/>" + BoxHeight;
    //document.getElementById("test_info").innerHTML += "<br/>See Top: " + SeeTop;
    //document.getElementById("test_info").innerHTML += "<br/>See Bottom: " + SeeBottom;
    //document.getElementById("test_info").innerHTML += "<br/>Scale Factor: " + parseFloat(ScaleFactor + 100);
   // document.getElementById("test_info").style.display = "block";
}

function OldParallax()
{
    var myoffset = parseInt(window.pageYOffset);

    var translate_me = (parseInt(window.pageYOffset) * .1) * -1;
    var translate_mePos = parseInt(window.pageYOffset) * .1;
    var scale, opacity, browser_height;
   // document.getElementById("test_info").style.display = "block";
   
    //alert(document.getElementById('divC').offsetTop);
    //move the content and the images on scrolling
    var container, coords, img_container, effectClass, effectArray, effect;

    var i, d, e;

    browser_height = browser_dims.height;
    
    for(i = 1; i < 13; i++)
    {
         container = document.getElementById(boxID);
        
        if(container.className.includes("hascontent")==true)
        {
            //get the effect of the desired parallax style
            effect = "effect_default";
            var div_FindEffect = container.getElementsByTagName('div');
            for (d = 0; d < div_FindEffect.length; d++)
            {
                if (div_FindEffect[d].className.includes("effect") == true)
                {
                    effectClass = div_FindEffect[d].className;
                    effectArray = effectClass.split(" ");
                    for (e = 0; e < effectArray.length; e++)
                    {
                        if(effectArray[e].includes("effect") == true) 
                        {effect = effectArray[e];
                            break;}
                            
                    }
                }
            }

           // alert(effect);

            //get the top of the content container, if it is visble on the page we start the process of parrallax
            coords = container.getBoundingClientRect();
            if (coords.top <= browser_height)
            {
                img_container = container.getElementsByClassName("parallax_image")[0];
                scale = parseInt((parseInt(browser_height) - parseInt(coords.top)) / 100);
                opacity = parseInt(((parseInt(browser_height) - parseInt(coords.top)) / 100)-0);
                if (scale < 10) scale = "0" + scale;
                if (opacity <= 9)
                { opacity = "0." + opacity; }
                else
                { opacity = 1; }

                      
                switch(effect.toLowerCase())
                {
                    //opacity
                    case "effect_opacity":
                     
                        img_container.style.transform = "translate3d(" + (scale * 10) + "px, 0px,  0px) scale(1.5, 1.5)";
                        img_container.style.opacity = opacity;
                        img_container.style.filter = "'alpha(opacity=" + (opacity * 130) + "')";

                        break;

                    //expands / zooms in 
                    case "effect_expand":
                        //img_container.style.overflowY = "hidden";
                        img_container.style.backgroundPosition = "50% 50%";
                        img_container.style.transform = "translate3d(0px, 0px,  0px) scale(1." + scale + ", 1." + scale + ")";
                        img_container.style.opacity = 1;

                        break;

                        //moves to the left scale
                    case "effect_leftscale":
                        scale = scale * 6;
                        img_container.style.transform = "translate3d( -" + scale + "px, -" + scale + "px, 0px) scale(1.5, 1.5)";
                        img_container.style.opacity = 1;
                        break;

                    case "effect_scale":
                        scale = scale * 12;
                     //   img_container.style.height = browser_height + "px";
                     //   img_container.style.width = "100%";
                     //   img_container.style.position = "fixed";
                      //  img_container.style.top = "0px";
                      //  img_container.style.left = "0px";
                       // img_container.style.zIndex = "0";

                        img_container.style.opacity = 1;
                        break;

                        //zooms out
                    case "effect_pullback":
                        //img_container.style.overflowY = "hidden";
                        img_container.style.backgroundPosition = "100% 100%";
                        scale = "0." + scale;
                        scale = parseFloat(1.2 - scale);
                        if (scale < 1) scale = 1;
                        img_container.style.transform = "translate3d(0px, 0px,  0px) scale(" + scale + ", " + scale + ")";
                        img_container.style.opacity = 1;

                        break;

                    case "effect_default":
                        img_container.style.transform = "translate3d(0px, 0px,  0px) scale(1, 1)";
                        img_container.style.opacity = 1;
                        break;
                }
                //container.style.marginTop = "80px";
                document.getElementById("test_info").innerHTML = window.pageYOffset;
                document.getElementById("test_info").innerHTML += "<p>Window Height: " + browser_dims.height + "</p>";
                document.getElementById("test_info").innerHTML += "<p>Parallax Offset: " + translate_me + "</p>";
                document.getElementById("test_info").innerHTML += "<p>Scale: " + scale + "</p>";
                document.getElementById("test_info").innerHTML += "<p>container ID: " + container.id.toString() + "</p>";
                document.getElementById("test_info").innerHTML += "<p>container Offset: " + coords.top + "</p>";
            }
        }
    }

    var container1 = document.getElementById("box1").getBoundingClientRect();
    var container4 = document.getElementById("box4").getBoundingClientRect();

    var g = document.getElementsByClassName("parallax_content");
    var i, newoffset;
    for (i=0; i<g.length; i++)
    {
        newoffset = parseInt(g[i].offsetTop) * -1;
        //g[i].style.transform = "translate3d(0px, " + translate_me + "px, 0px)";
        //g[i].style.marginTop = (parseInt(translate_me)*-1) + "px";
    }

    g = document.getElementsByClassName("parallax_image");
    for (i = 0; i < g.length; i++)
    {
        var scale = translate_mePos.toString().substring(0, 1);
       
        newoffset = parseInt(g[i].offsetTop + myoffset + 20) * -1;
        //g[i].style.transform = "translate3d(0px, " + translate_me + "px, 0px) scale(1.0"+ scale + ", 1.0" + scale + ")";
        
    }

   
}

//////////////////////////////////////////////////
//  END OF FILE
//////////////////////////////////////////////////