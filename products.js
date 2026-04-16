function applyFilter(filter) {
    var btns = document.querySelectorAll(".filter-btns");
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains(filter)) {
            btns[i].classList.add("active");
        } else {
            btns[i].classList.remove("active");
        }
    }

    var cards = document.querySelectorAll(".camera-card");
    for (let i = 0; i < cards.length; i++) {
        if (filter === "all" || cards[i].classList.contains(filter)) {
            cards[i].classList.remove("hide");
        } else {
            cards[i].classList.add("hide");
        }
    }
}

applyFilter('all');