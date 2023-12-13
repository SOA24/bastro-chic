var cont=0

var HO=document.getElementById("HO");
HO?.addEventListener("mouseenter",function () {
    HO.style.transform="scale(1.2)";
})
HO?.addEventListener("mouseleave",function(){
    HO.style.transform="scale(1)";
});

var HO1=document.getElementById("HO1")
HO1?.addEventListener("mouseenter",function(){
    HO1.style.transform="scale(1.2)";
});
HO1?.addEventListener("mouseleave",function(){
    HO1.style.transform="scale(1)";
});

var HO2=document.getElementById("HO2")
HO2?.addEventListener("mouseenter",function(){
    HO2.style.transform="scale(1.2)";
});
HO2?.addEventListener("mouseleave",function(){
    HO2.style.transform="scale(1)";
});

var HO3=document.getElementById("HO3")
HO3?.addEventListener("mouseenter",function(){
    HO3.style.transform="scale(1.2)";
});
HO3?.addEventListener("mouseleave",function(){
    HO3.style.transform="scale(1)";
});

var HO4=document.getElementById("HO4")
HO4?.addEventListener("mouseenter",function(){
    HO4.style.transform="scale(1.2)";
});
HO4?.addEventListener("mouseleave",function(){
    HO4.style.transform="scale(1)";
});

var HO5=document.getElementById("HO5")
HO5?.addEventListener("mouseenter",function(){
    HO5.style.transform="scale(1.2)";
});
HO5?.addEventListener("mouseleave",function(){
    HO5.style.transform="scale(1)";
});

$("#btnmenu1 ,#btnmenu2,#btnmenu3,#btnmenu4,#btnmenu5,#btnmenu6").hover(function () {
        //
        $(this).css("background-color","green");
        $(this).css("height","50px");
        $(this).css("width","80px");
        $(this).css("font-size","20px");
    }, function () {
        // out
        $(this).css("background-color","red");
        $(this).css("height","40px");
        $(this).css("width","70px");
        $(this).css("font-size","15px");
    }
);
$("#btncomp1 ,#btncomp2,#btncomp3,#btncomp4,#btncomp5").hover(function () {
    //
    $(this).css("background-color","green");
    $(this).css("height","50px");
    $(this).css("width","80px");
    $(this).css("font-size","20px");
}, function () {
    // out
    $(this).css("background-color","red");
    $(this).css("height","40px");
    $(this).css("width","70px");
    $(this).css("font-size","15px");
}
);
function seleccionar(id_fila) {
    console.log(id_fila)
    if($("#"+id_fila).hasClass("seleccionada")){
        $("#"+id_fila).removeClass("seleccionada");
        seleccionadas.splice(id_fila,1)
    }
    else{
        $("#"+id_fila).addClass("seleccionada");
        seleccionadas.push(id_fila)
    }
}

function agregar (id,nombre,precio){
    cont++
    $("#span1").text(cont);
    var fila='<tr id="fila'+cont+'"class="selected" onclick="seleccionar(this.id)">'+
    '<td>'+cont+'</td>'+
    '<td>'+nombre+'</td>'+
    '<td>'+precio+'</td></tr>';
    $("#tabla tbody").append(fila);
    total+=precio;
}
$("#btncomp1").click(function () { 
    var nombre =$("#nombre").text();
    var costo= $("#costo").text();
    var desc=$("#Contenido").text();
    agregar(nombre,costo,desc)
    
});
$("#btncomp2").click(function () { 
    var nombre =$("#nombre2").text();
    var costo= $("#costo2").text();
    var desc=$("#Contenido2").text();
    agregar(nombre,costo,desc)
    
});
$("#btncomp3").click(function () { 
    var nombre =$("#nombre3").text();
    var costo= $("#costo3").text();
    var desc=$("#Contenido3").text();
    agregar(nombre,costo,desc)
    
});
$("#btncomp4").click(function () { 
    var nombre =$("#nombre4").text();
    var costo= $("#costo4").text();
    var desc=$("#Contenido4").text();
    agregar(nombre,costo,desc)
    
});
//index
$("#btnmenu1").click(function () { 
    var nombre =$("#nombre").text();
    var costo= $("#costo").text();
    var desc=$("#Contenido").text();
    agregar(nombre,costo,desc)
    
});

$("#btnmenu2").click(function () { 
    var nombre =$("#nombre2").text();
    var costo= $("#costo2").text();
    var desc=$("#Contenido2").text();
    agregar(nombre,costo,desc)
    
});

$("#btnmenu3").click(function () { 
    var nombre =$("#nombre3").text();
    var costo= $("#costo3").text();
    var desc=$("#Contenido3").text();
    agregar(nombre,costo,desc)
    
});

$("#btnmenu4").click(function () { 
    var nombre =$("#nombre4").text();
    var costo= $("#costo4").text();
    var desc=$("#Contenido4").text();
    agregar(nombre,costo,desc)
    
});

$("#btnmenu5").click(function () { 
    var nombre =$("#nombre5").text();
    var costo= $("#costo5").text();
    var desc=$("#Contenido5").text();
    agregar(nombre,costo,desc)
    
});

$("#btnmenu6").click(function () { 
    var nombre =$("#nombre6").text();
    var costo= $("#costo6").text();
    var desc=$("#Contenido6").text();
    agregar(nombre,costo,desc)
    
});










