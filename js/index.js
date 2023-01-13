// var arr;
function lawandnotlaw(index) {
    var element = document.getElementById("lowselectlaw");
    var element2 = document.getElementById("middleselectlaw");
    var element3 = document.getElementById("highselectlaw");
    var element4 = document.getElementById("hiddensmile1");
    var element5 = document.getElementById("hiddensmile2");
    if ((index == 1) || (index == 2)) {
        if (document.documentElement.clientWidth <= 1000) {
            element4.style.display = 'flex';
            element5.style.display = 'none';
        } else {
            element4.style.display = 'flex';
            element5.style.display = 'flex';
        }
        element4.classList.remove("hidden");
        element5.classList.add("hidden");
        if (typeof(element) != 'undefined' && element != null) {
            element.classList.add("red-light");
        }
        if (typeof(element2) != 'undefined' && element2 != null) {
            element2.classList.add("orange-light");
        }
        element3.classList.remove("green-light");
    } else {
        if (document.documentElement.clientWidth <= 1000) {
            element4.style.display = 'none';
            element5.style.display = 'flex';
        } else {
            element4.style.display = 'flex';
            element5.style.display = 'flex';
        }
        element4.classList.add("hidden");
        element5.classList.remove("hidden");
        if (typeof(element) != 'undefined' && element != null) {
            element.classList.remove("red-light");
        }
        if (typeof(element2) != 'undefined' && element2 != null) {
            element2.classList.remove("orange-light");
        }
        element3.classList.add("green-light");
    }
}

if (document.documentElement.clientWidth <= 1000) {
            document.getElementById('hiddensmile1').style.display = 'flex';
            document.getElementById('hiddensmile2').style.display = 'none';
        }

function showinfowindow() {
   var container = document.getElementById('modalo');
   var blur = document.getElementById('blurscreen'); 
   container.classList.remove("off");
   blur.classList.remove("off");
}

function closeinfowindow() {
    var container = document.getElementById('modalo');
    var blur = document.getElementById('blurscreen');
        container.classList.add("off");
        blur.classList.add("off");
    }

function showburgermenu() {
    var burgermenu = document.getElementById('burgermenu');
        burgermenu.style.display = 'flex';
}

function closeburgermenu() {
    var burgermenu = document.getElementById('burgermenu');
        burgermenu.style.display = 'none';
}

String.prototype.replaceAt = function(index) {if (this.length > index) {return this.substring(0, index) + "..."} else {return this};}

// document.addEventListener('mouseup', function(e) {
//     var container = document.getElementById('filter');
//     if (!container.contains(e.target)) {
//         container.classList.add("no-show")
//     }
// });
// const noshow2 = () =>{
//     e.preventDefault();
//     // var element = document.getElementById("filter-btn-mob");
//     // var searchclass = document.getElementById("searchclass");
//
//             const modalSearchMKT = document.getElementById('modalSearchMKT');
//             modalSearchMKT.style.display = 'flex';
//
// }
function noshow1(){
    const modalSearchMKT = document.getElementById('modalSearchMKT');
    modalSearchMKT.style.display = 'none';
}