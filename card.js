var main = document.getElementById("main")
var cards = document.getElementById('cards')
var card = document.getElementsByClassName('card')

var data = []

if (window.innerWidth < 500) {

    for (let i = 0; i < 12; i++) {
        data.push({ alp: "", ind: "" })
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    let alp = ['A', 'B', 'C', 'D', 'E', 'F']
    shuffle(alp);
    var i = 0;
    data.forEach((Put_Letter) => {
        if (i == alp.length) {
            shuffle(alp)
            i = 0
        }
        Put_Letter.alp = alp[i]
        i++;
    })

    data.forEach((dalp, index) => {
        dalp.ind = index
    });

} else if (window.innerWidth > 500) {

    for (let i = 0; i < 24; i++) {
        data.push({ alp: "", ind: "" })
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    let alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
    shuffle(alp);
    var i = 0;
    data.forEach((Put_Letter) => {
        if (i == alp.length) {
            shuffle(alp)
            i = 0
        }
        Put_Letter.alp = alp[i]
        i++;
    })

    data.forEach((dalp, index) => {
        dalp.ind = index
    });
}

var time = 0
var score = setInterval(function() {
    time++;
    if (data.length == 0) {
        clearInterval(score)
    }
    document.querySelector("#score").innerHTML = time;
}, 100)

function TurnedCard() {

    acc = ''
    data.forEach((dalp) => {
        acc = acc + `<div class="card" id="${dalp.ind}"><h1 id="${dalp.ind}">${dalp.alp}</h1></div>`
    });
    cards.innerHTML = acc
}
TurnedCard()

var ptxt = ''
var ptarget = ''

main.addEventListener("click", (clk) => {
    clickHandler()
    document.querySelector("#prcl").innerText = ptxt
})

function clickHandler() {
    main.addEventListener("click", (clk) => {
        var ctxt = clk.target.innerText
        document.querySelector("#crcl").innerText = ctxt
        var ctarget = clk.target.id
        if (clk.target.style != "opacity:1; transform: rotatey(0deg);") {
            clk.target.style = "opacity:1; transform: rotatey(0deg);"
        }
        if ((ctxt === ptxt) && (ptarget != ctarget)) {
            data.forEach((dalp, cntr) => {
                if ((ctxt == dalp.alp)) {
                    if (data.length <= 2) {
                        data.splice(0, data.length)
                    }
                    data.splice(cntr, 1)
                }
            });
            TurnedCard()
        }
        ptarget = ctarget
        ptxt = ctxt
    })
}