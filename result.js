

let show = document.getElementById("show");
let division_value = document.querySelector(".division_value");
let persentag_value = document.querySelector(".persentag_value");
let total_value = document.querySelector(".total_value");
let remark_value = document.querySelector(".remark_value")
let popup = document.querySelector(".popup");
let supply_hindi = document.querySelector(".supply_hindi")
    let supply_english = document.querySelector(".supply_english")
    let supply_science = document.querySelector(".supply_science")
    let supply_s_science = document.querySelector(".supply_s_science")
    let supply_sanskrit = document.querySelector(".supply_sanskrit")
    let supply_maths = document.querySelector(".supply_maths");
show.addEventListener("click", function () {
    let hindi = parseFloat(document.querySelector("#hindi").value) || 0;
    let english = parseFloat(document.getElementById("english").value) || 0;
    let science = parseFloat(document.getElementById("science").value) || 0;
    let social_science = parseFloat(document.getElementById("social_science").value) || 0;
    let sanskrit = parseFloat(document.getElementById("sanskrit").value) || 0;
    let maths = parseFloat(document.getElementById("maths").value) || 0;
    if(hindi <= 100 && english <= 100 && science <= 100 && social_science <= 100 && sanskrit <= 100 && maths <= 100){
        popup.style.visibility="visible";
        popup.style.opacity="1";
        popup.style.scale="1";
        
    }
    else{
        alert("you not filled correctly")
    }
    
    let count = 0;
    let pass = 0;
    let remark = ""
    let division = ""
    let subjects = hindi  + english + science + social_science + sanskrit  + maths;
    let percentage = subjects / 6;
    let percentage_value = percentage.toFixed(1)
    console.log(percentage_value);
    
    let supply = document.querySelector(".supply");
    supply.style.display="block" 
    supply_hindi.innerHTML = (hindi >= 70) ? "distin in hindi" : " ";
    count = (hindi >= 40) ? pass++ :  supply_hindi.innerHTML = "Supply in hindi";
    
    supply_english.innerHTML = (english >= 75) ? "distin in english": " ";
    count = (english >= 35) ? pass++ : supply_english.innerHTML = "Supply in english";
    
    supply_science.innerHTML = (science >= 75) ? "distin in science" : " ";
    count = (science >= 45) ? pass++ : supply_science.innerHTML = "Supply in science";
 
    supply_s_science.innerHTML = (social_science >= 80) ? "distin in S.Science" : " " ;
    count = (social_science >= 30) ? pass++ : supply_s_science.innerHTML = "Supply in S.Science";
   
    supply_sanskrit.innerHTML = (sanskrit >= 75) ? "distin in sanskrit": " ";
    count = (sanskrit >= 33) ? pass++ : supply_sanskrit.innerHTML = "Supply in sanskrit";
   
    supply_maths.innerHTML = (maths >= 65) ? "distin in maths" :  " ";
    count = (maths >= 37) ? pass++ : supply_maths.innerHTML = "Supply in maths";
    
    console.log(pass)
   
    if(pass == 6){
        remark = "Pass"
    }
    else if(pass == 4){
        console.log("supplimentry");
         remark = "supplimentry"
    }
    else if(pass == 5){
        console.log("supplimentry");
         remark = "supplimentry"
    }
    else{
        console.log("fail");  
        remark = "fail" 
        supply.style.display="none" 
    }
    if(percentage_value > 60){
       division = "First Division"
    }
    else if(percentage_value < 45){
       division = "Third Division";
    }
    else{
        division = "Second Division"
    }
    remark_value.innerHTML = remark;
    persentag_value.innerHTML = percentage_value+" %";
    division_value.innerHTML = division;
    total_value.innerHTML = subjects
});
let cross = document.querySelector(".cross");
cross.addEventListener("click",function(){
    popup.style.visibility="hidden";
    popup.style.opacity="0";
    popup.style.scale="0";
    supply_maths.innerHTML = " ";
    supply_sanskrit.innerHTML = " ";
    supply_s_science.innerHTML = " ";
    supply_science.innerHTML = " ";
    supply_english.innerHTML = " ";
    supply_hindi.innerHTML = " ";
});
