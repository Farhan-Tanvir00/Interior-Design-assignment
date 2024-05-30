let basicMinus = document.querySelector("#basicMbutton");
let basicPlus = document.querySelector("#basicPbutton");

let proMinus = document.querySelector("#proMbutton");
let proPlus = document.querySelector("#proPbutton");

let proSignup = document.querySelector("#psignup");
let basicSignup = document.querySelector("#bsignup");

let proPrice= document.querySelector("#pprice");
let basicPrice = document.querySelector("#bprice");

let proRoom = document.querySelector("#pquantity");
let basicRoom = document.querySelector("#bquantity");

let proContainer = document.querySelector("#propack");
let basicContainer = document.querySelector("#basicpack");

let form = document.querySelector("#form");


let proRoomCount = 1;
let basicRoomCount = 1;

let proPriceCount = 249;
let basicPriceCount = 199;

let msgCount = 0;

basicMinus.addEventListener('click', function(){
    if(basicPriceCount !== 199){
        basicPriceCount -= 199;
        basicRoomCount -= 1;

        basicPrice.textContent = `$${basicPriceCount}`;
        basicRoom.textContent = `${basicRoomCount} rooms`;
    }
    if(basicRoomCount === 1){
        basicRoom.textContent = `${basicRoomCount} room`;
    }
});

basicPlus.addEventListener('click', function(){
    basicPriceCount += 199;
    basicRoomCount += 1;

    basicPrice.textContent = `$${basicPriceCount}`;
    basicRoom.textContent = `${basicRoomCount} rooms`;
});

proMinus.addEventListener('click', function(){
    if(proPriceCount !== 249){
        proPriceCount -= 249;
        proRoomCount -= 1;

        proPrice.textContent = `$${proPriceCount}`;
        proRoom.textContent = `${proRoomCount} rooms`;
    }
    if(proRoomCount === 1){
        proRoom.textContent = `${proRoomCount} room`;
    }
});

proPlus.addEventListener('click', function(){
    proPriceCount += 249;
    proRoomCount += 1;

    proPrice.textContent = `$${proPriceCount}`;
    proRoom.textContent = `${proRoomCount} rooms`;
});




proSignup.addEventListener('click', function(){
    // remove proContainer added text
    let pold = document.querySelector("#pnew");
    let hold = document.querySelector("#hnew");
    if(pold != null && hold != null){
        pold.remove();
        hold.remove();
    }

    // remove basicContainer added text
    let pbold = document.querySelector("#pbnew");
    let hbold = document.querySelector("#hbnew");
    if(pbold != null && hbold != null){
        pbold.remove();
        hbold.remove();
    }


    let newText = document.createElement("p");
    let hr = document.createElement("hr");

    newText.id = "pnew";
    hr.id = "hnew";

    newText.append(`Thank You for Choosing ${proRoomCount} Room.`);
    newText.style.color = "#616161";
    
    proContainer.append(hr);
    proContainer.append(newText);
    console.log(hr,newText);
});

basicSignup.addEventListener('click', function(){
    // remove basicContainer added text
    let pbold = document.querySelector("#pbnew");
    let hbold = document.querySelector("#hbnew");
    if(pbold != null && hbold != null){
        pbold.remove();
        hbold.remove();
    }

    // remove proContainer added text
    let pold = document.querySelector("#pnew");
    let hold = document.querySelector("#hnew");
    if(pold != null && hold != null){
        pold.remove();
        hold.remove();
    }

    let newText = document.createElement("p");
    let hr = document.createElement("hr");

    newText.id = "pbnew";
    hr.id = "hbnew";

    newText.append(`Thank You for Choosing ${basicRoomCount} Room.`);
    newText.style.color = "#616161";
    
    basicContainer.append(hr);
    basicContainer.append(newText);
    console.log(hr,newText);
});


form.addEventListener('submit', function(e){
    e.preventDefault();
})