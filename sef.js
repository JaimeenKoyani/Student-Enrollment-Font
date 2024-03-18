
var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];

var n=1;
var x=0;

function AddRow(){

    var Addrown=document.getElementById('display_table');
    var NewRow=Addrown.insertRow(n);

    list1[x]=document.getElementById("name").value;
    list2[x]=document.getElementById("email").value;
    list3[x]=document.getElementById("gender").value;
    list4[x]=document.getElementById("skill").value;
    list5[x]=document.getElementById("image").value;

    var cell1=NewRow.insertCell(0);
    var cell2=NewRow.insertCell(1);
    var cell3=NewRow.insertCell(2);
    var cell4=NewRow.insertCell(3);   
    var cell5=NewRow.insertCell(4);

    cell1.innerHTML=list1[x];
    cell2.innerHTML=list2[x];
    cell3.innerHTML=list3[x];
    cell4.innerHTML=list4[x];
    cell5.innerHTML=list5[x];

    n++;
    x++;


}