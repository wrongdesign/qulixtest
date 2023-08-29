function checkData() {
    if (document.getElementById("name") == '' || document.getElementById("lastName") == '' || document.getElementById("compName") == '' || document.getElementById("email") == '' || !document.getElementById("email").textContent.includes('@', 0)) {
        alert('Fill in all the fields');
    } else {
        alert('Your data was sended on our server');
    }

    console.log(document.body.clientWidth);
}

function showMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    let matchMediaQuery = window.matchMedia("(max-width: 639px)");
    if (matchMediaQuery.matches) {
        console
        pop.style.cssText = "position: absolute; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; top: 0px;";
    } else {
        pop.style.cssText = "display: none; overflow: hidden;";
    }
    matchMediaQuery.addListener(showMenu);
}

function closeMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    pop.style.cssText = "display: none; overflow: hidden;";
}

$(document).ready(function () {
    if (document.body.clientWidth < 640) {
        $('.speaker > img').attr('src', 'images/speakerCircle.png');
    }
});

$(window).resize(function () {
    if (document.body.clientWidth < 640) {
        $('.speaker > img').attr('src', 'images/speakerCircle.png');
    }

    if (document.body.clientWidth >= 640) {
        $('.speaker > img').attr('src', 'images/speaker.png');
    }
});