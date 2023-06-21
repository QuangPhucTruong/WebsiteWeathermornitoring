//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyCPExand8MvoDQ_HW2LIHr0BS2Hjo98kw0",
//     authDomain: "ncbcc-55c6a.firebaseapp.com",
//     projectId: "ncbcc-55c6a",
//     storageBucket: "ncbcc-55c6a.appspot.com",
//     messagingSenderId: "963826911545",
//     appId: "1:963826911545:web:a844101b150ccfa74700e8",
//     measurementId: "G-D8EGKLLTCV"
//   };

const firebaseConfig = { 
    apiKey : "AIzaSyAs77VKKm6Sic1xWZJu3t-zvxhBgOW637w" , 
    authDomain : "nhung-con-bo-cham-chi.firebaseapp.com" , 
    databaseURL : "https://nhung-con-bo-cham-chi-default-rtdb.firebaseio.com" , 
    projectId : "nhung-con-bo-cham-chi" , 
    storageBucket : "nhung-con-bo-cham-chi.appspot.com" , 
    messagingSenderId : "1044973508784" , 
    appId : "1:1044973508784:web:aa9f53c2eb4ddea1298375" , 
    measurementId : "G-XCLZKVJLYX" 
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


//Den 01
var btnOn1 = document.getElementById("btnOnId_01");
var btnOff1 = document.getElementById("btnOffId_01");

var btnOn2 = document.getElementById("btnOnId_02");
var btnOff2 = document.getElementById("btnOffId_02");

var btnOn3 = document.getElementById("btnOnId_03");
var btnOff3 = document.getElementById("btnOffId_03");




btnOn1.onclick = function() {
    document.getElementById("denId_01").src = "./img/lighton.png"
    database.ref("/Thiet bi cua toi").update({
        led01 : 1,
    });
}
btnOn2.onclick = function() {
    document.getElementById("denId_02").src = "./img/lighton.png"
    database.ref("/Thiet bi cua toi").update({
        led02 : 1,
    });
}

btnOn3.onclick = function() {
    document.getElementById("denId_03").src = "./img/lighton.png"
    database.ref("/Thiet bi cua toi").update({
        led03 : 1,
    });
}

////////////////////////////////////


btnOff1.onclick = function() {
    document.getElementById("denId_01").src = "./img/lightoff.png"
    database.ref("/Thiet bi cua toi").update({
        led01: 0 });
}
btnOff2.onclick = function() {
    document.getElementById("denId_02").src = "./img/lightoff.png"
    database.ref("/Thiet bi cua toi").update({
        led02: 0
    });
}
btnOff3.onclick = function() {
    document.getElementById("denId_03").src = "./img/lightoff.png"
    database.ref("/Thiet bi cua toi").update({
        led03: 0
    });
}
//////////////////
database.ref("/Thoi tiet hom nay/nhiet do").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("nhietdo").innerHTML = humi;
    } else
        console.log("No data available!")
});
// var temp = document.getElementById("nhietdo");
// database.ref("/Thoi tiet hom nay/nhiet do").on("value", function(snapshot) {
//          temp.value = snapshot.val();
//         document.getElementById("nhietdo").innerHTML = temp.value;
   
// });
database.ref("/Thoi tiet hom nay/do am").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    } else
        console.log("No data available!")
});

database.ref("/Thoi tiet hom nay/toc do gio").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var wind = snapshot.val();
        document.getElementById("gio").innerHTML = wind;
    } else
        console.log("No data available!")
});



//auto update ImgDen
database.ref("/Thiet bi cua toi/led01").on("value", function(snapshot1) {
    if (snapshot1.exists()) {
        var ss1 = snapshot1.val();
        if (ss1 == 1)
            document.getElementById("denId_01").src = "./img/lighton.png"
        else
            document.getElementById("denId_01").src = "./img/lightoff.png"
    } else
        console.log("No data available!")
});

database.ref("/Thiet bi cua toi/led02").on("value", function(snapshot2) {
    if (snapshot2.exists()) {
        var ss2 = snapshot2.val();
        if (ss2 == 1)
            document.getElementById("denId_02").src = "./img/lighton.png"
        else
            document.getElementById("denId_02").src = "./img/lightoff.png"
    } else
        console.log("No data available!")
});


database.ref("/Thiet bi cua toi/led03").on("value", function(snapshot3) {
    if (snapshot3.exists()) {
        var ss3 = snapshot3.val();
        if (ss3 == 1)
            document.getElementById("denId_03").src = "./img/lighton.png"
        else
            document.getElementById("denId_03").src = "./img/lightoff.png"
    } else
        console.log("No data available!")
});

//test: get once.
database.ref("/Thiet bi cua toi").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})