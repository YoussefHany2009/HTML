//html Elemtns
const orange = document.getElementById("orange-copy");
const vodafone = document.getElementById("vodafone-copy")
//phoneNumbers
let orangeNumber = "+2001271211451";
let vodafoneNumber = "+2001070839151";
//copy function for orange
orange.addEventListener("click", function(){
    navigator.clipboard.writeText(orangeNumber)
})
//copy function for vodafone
vodafone.addEventListener("click", function(){
    navigator.clipboard.writeText(vodafoneNumber)
})