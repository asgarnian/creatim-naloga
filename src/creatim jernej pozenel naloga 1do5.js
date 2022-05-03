//prva naloga
function izpisStevil() {

    //ker ni bilo drugih zahtev funkcija vrne vse skupaj v stringu
    let izpis = "";
    for (let i = 1; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            izpis += "Trojka + Petka";
        } else if (i % 3 == 0) {
            izpis += "Trojka";
        } else if (i % 5 == 0) {
            izpis += "Petka";
        } else {
            izpis += i;
        }
        izpis += " ";

    }
    return izpis;
}


//druga naloga

(function () {
    var length = 20;
    for (let index = 0; index < length; index++) {
        setTimeout(function () {
            console.log(index);
        }, index * 200);
    }
})();

//tretja naloga

(function () {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        if ((parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)) == "7") {
            alert("Hello World");
        }
    }

})();

//Četrta naloga
var object = {
    alert: function (txt) {
        alert(txt);
        return this;
    },
    confirm: function (txt) {
        confirm(txt);
        return this;
    }
}

//object.alert("Warning: you are about to delete this item!");
//object.confirm("Are you sure?");
object.alert("Warning: you are about to delete this item!").confirm("Are you sure?");

//peta naloga

//Če sem prav razumel nalogo je treba pravilno določit v katerem DIVu je miška?
//s tole kodo se v gnezdenih divih pokažejo oboji parent in childi in pozicijo miške v vsakem
$("#element1").on("mousemove", function (event) {
    let msg = "Element1 mousemove na poziciji ";
    msg += event.pageX + ", " + event.pageY;
    console.log(msg);

});
$("#element2").on("mousemove", function (event) {
    let msg = "Element2 mousemove na poziciji ";
    msg += event.pageX + ", " + event.pageY;
    console.log(msg);

});
$("#element3").on("mousemove", function (event) {
    let msg = "Element3 mousemove na poziciji ";
    msg += event.pageX + ", " + event.pageY;
    console.log(msg);

});
