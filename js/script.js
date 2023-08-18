$(document).ready(function(){
    $("#formGroup").submit(function(event){
        event.preventDefault();
        let side1 = parseInt($("input#side1").val());
        let side2 = parseInt($("input#side2").val());
        let side3 = parseInt($("input#side3").val());

        if(side1 === side2 && side2 === side3 ){
            $("#result").text("It's an Equilateral Triangle");
        }else if(side1 === side2 || side1 === side3 ){
            $("#result").text("It's an Isosceles Triangle");
        }else if((side1 <= side2 || side1 <= side3) ){
            $("#result").text("Not a triangle");
        }else{
            $("#result").text("It's a Scalene triangle");
        }
    });
});