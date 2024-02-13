function OpenCustCard(){
    let card = document.getElementById("CustCard");

    if(card.classList.contains("CustomerCard")){
        card.classList.remove("CustomerCard");
        card.classList.add("CustomerCardInvis");
    }
    else{
        card.classList.remove("CustomerCardInvis");
        card.classList.add("CustomerCard")
    }
}