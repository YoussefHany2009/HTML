//html elments
    const vimsge1 = document.getElementById("vimsg_card1");
            //Vi msg
    const card1 = document.getElementById("card_1");

    const vimsge2 = document.getElementById("vimsg_card2");
        //Vi msg
    const card2 = document.getElementById("card_2");

    const vimsge3 = document.getElementById("vimsg_card3");
        //Vi msg
    const card3 = document.getElementById("card_3");

    //skills
    let html = "100%";
    let css = "75%";
    let js = "75%";
//event lisner
card1.addEventListener("click",function(){
    vimsge1.innerText = html
});

card2.addEventListener("click",function(){
    vimsge2.innerText = css
});

card3.addEventListener("click",function(){
    vimsge3.innerText = js
});
    // Apply vimsg_RED class if the value is less than 100%
    if (parseInt(html) < 100) {
        vimsge1.classList.add("vimsg_RED");
    }

    if (parseInt(css) < 100) {
        vimsge2.classList.add("vimsg_RED");
    }

    if (parseInt(js) < 100) {
        vimsge3.classList.add("vimsg_RED");
    }