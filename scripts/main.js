

var inp_as=document.getElementById('a_size'); // it will return element having id = "a_size" as an object so javascript can manipulate it
var inp_gen=document.getElementById("a_generate"); // it will return element having id = "a_generate" as an object
var inp_aspeed=document.getElementById("a_speed"); // it will return element having id = "a_speed" as an object


var butts_algos=document.querySelectorAll(".algos button"); // it will return array of objects having tag <button> && class = "algos"
//return object looks like {"Insertion","heap"---}



array_size=inp_as.value; // size fo array 
var div_sizes=[]; // to store random no.
var divs=[]; // to store "div" elements having diffrent properties like height,width
var margin_size;
var cont=document.getElementById("array_container"); // iske use se hum array_container wale div me naaye div element insert karenge




inp_gen.addEventListener("click",generate_array); // jaise hi (generate new array) par click karenge generate_array function invoke hooga
inp_as.addEventListener("input",update_array_size);// jaise hi (size of array) change karenge toh update_array_size function invoke hooga


// generate_array function to generate array of random elements
function generate_array()
{
    cont.innerHTML=""; //very imp. ----

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.25*(inp_as.max - inp_as.min) ) +30; // adjust kaarna hai taaki sahi se visualize ho
        divs[i]=document.createElement("div"); // div element insert kaara hai
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        
        
        cont.appendChild(divs[i]); // naaye div element insert kardiya hai
    }
}

// update_array_size function to update size of array and generate new array by calling generate_arraY function
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size(); // taakki web page jab starting me load ho toh ussme bhi array ho

//har button par ek Listener assign kara hai taaki button click karte hi apni desired algo. chale---
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo); // runalgo funtion as a callback function pass kaara hai
}


// disable_button bahut imp hai isse error hoone se baachega or ye paake karega ke ek bar me ek algo hi chale
function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled=true;
        
    }

    inp_as.disabled=true;
    inp_gen.disabled=true;
    inp_aspeed.disabled=true;
}

function runalgo()
{
    disable_buttons(); // kiise bhi algo par click karte hi saare buttons disabled ho jaayenge-+

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
