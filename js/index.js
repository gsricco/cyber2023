function lawandnotlaw(index) {
    var element = document.getElementById("lowselectlaw");
    var element2 = document.getElementById("middleselectlaw");
    var element3 = document.getElementById("highselectlaw");
    var element4 = document.getElementById("hiddensmile1");
    var element5 = document.getElementById("hiddensmile2");
    if ((index == 1) || (index == 2)) {
        element4.classList.remove("hidden");
        element5.classList.add("hidden");
        document.querySelector('#hiddensmile1').style.display = 'flex';
        document.querySelector('#hiddensmile2').style.display = 'none';
        if (typeof (element) != 'undefined' && element != null) {
            element.classList.add("red-light");
        }
        if (typeof (element2) != 'undefined' && element2 != null) {
            element2.classList.add("orange-light");
        }
        element3.classList.remove("green-light");
    } else {
        element4.classList.add("hidden");
        element5.classList.remove("hidden");
        document.querySelector('#hiddensmile1').style.display = 'none';
        document.querySelector('#hiddensmile2').style.display = 'flex';
        if (typeof (element) != 'undefined' && element != null) {
            element.classList.remove("red-light");
        }
        if (typeof (element2) != 'undefined' && element2 != null) {
            element2.classList.remove("orange-light");
        }
        element3.classList.add("green-light");
    }
}

function lawandnotlaw1(index) {
    var element = document.getElementById("lowselectlaw1");
    var element2 = document.getElementById("middleselectlaw1");
    var element3 = document.getElementById("highselectlaw1");
    var element4 = document.getElementById("hiddensmile11");
    var element5 = document.getElementById("hiddensmile12");
    if ((index == 1) || (index == 2)) {
        element4.classList.remove("hidden");
        element5.classList.add("hidden");
        document.querySelector('#hiddensmile11').style.display = 'flex';
        document.querySelector('#hiddensmile12').style.display = 'none';
        if (typeof (element) != 'undefined' && element != null) {
            element.classList.add("red-light");
        }
        if (typeof (element2) != 'undefined' && element2 != null) {
            element2.classList.add("orange-light");
        }
        element3.classList.remove("green-light");
    } else {
        element4.classList.add("hidden");
        element5.classList.remove("hidden");
        document.querySelector('#hiddensmile11').style.display = 'none';
        document.querySelector('#hiddensmile12').style.display = 'flex';
        if (typeof (element) != 'undefined' && element != null) {
            element.classList.remove("red-light");
        }
        if (typeof (element2) != 'undefined' && element2 != null) {
            element2.classList.remove("orange-light");
        }
        element3.classList.add("green-light");
    }
}


function showinfowindow() {
    var container = document.getElementById('modalo');
    var container1 = document.getElementById('modalo1');
    var blur = document.getElementById('blurscreen');
    if (window.screen.width > 600) {
        container.classList.remove("off");
        blur.classList.remove("off");
    } else {
        container1.classList.remove("off");
        blur.classList.remove("off");
    }
}


function closeinfowindow() {
    var container = document.getElementById('modalo');
    var container1 = document.getElementById('modalo1');
    var blur = document.getElementById('blurscreen');
    if (window.screen.width > 600) {
        container.classList.add("off");
        blur.classList.add("off");
    } else {
        container1.classList.add("off");
        blur.classList.add("off");
    }
}

function closeinfowindow1() {
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

String.prototype.replaceAt = function (index) {
    if (this.length > index) {
        return this.substring(0, index) + "..."
    } else {
        return this
    }
}

function noshow1() {
    const modalSearchMKT = document.getElementById('modalSearchMKT');
    modalSearchMKT.style.display = 'none';
}

