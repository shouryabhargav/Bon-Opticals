var name_array= [];
var length=0;
var g="";

function submit(){
    var bg=document.getElementById("p1").value;
    var bg=document.getElementById("p3").value;
    var bg=document.getElementById("p5").value;
    var bg=document.getElementById("p6").value;
    var bg=document.getElementById("p7").value;
    var bg=document.getElementById("p8").value;
    var bg=document.getElementById("p9").value;
    var bg=document.getElementById("p10").value;
    var bg=document.getElementById("p11").value;
    var bg=document.getElementById("p12").value;
    var bg=document.getElementById("p13").value;
    var bg=document.getElementById("p14").value;
    var bg=document.getElementById("p15").value;
    var bg=document.getElementById("p16").value;
    var bg=document.getElementById("p17").value;
    var bg=document.getElementById("p18").value;
    var bg=document.getElementById("p19").value;
    var bg=document.getElementById("p20").value;

    console.log(bg);
    name_array.push(bg);

    console.log(name_array);
    length=name_array.length;

    console.log(length);

    display_array();

}

function display_array(){
    g=[];
    for(var j=0; j<length; j++){
    g.push("<h1>name= "+ name_array[j]+ "</h1>");
    console.log(g);
    }
    console.log(g);
    document.getElementById("guest_list").innerHTML=g;


    var no_c=g.join(" ");
    console.log(no_c);
    document.getElementById("row2").innerHTML=no_c;
} 

function sorting(){
    name_array.sort();
    console.log(name_array);
    g=[];
    for(var j=0; j<length; j++){
    g.push("<h1>name= "+ name_array[j]+ "</h1>");
    console.log(g);
    }
    var no_c=g.join(" ");
    console.log(no_c);
    document.getElementById("row2").innerHTML=no_c;
}

function show() { 
    document.getElementById("guest_list").innerHTML = "<h3>" + name_array +"</h3>"; 
}

function searching()
{
    var s= document.getElementById("p2").value;
    var found=0;
    var j;
    for(j=0; j<length; j++)
    {
        if(s.toUpperCase()==name_array[j].toUpperCase()){
            found=found+1;
        }
    }
    document.getElementById("s1").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}