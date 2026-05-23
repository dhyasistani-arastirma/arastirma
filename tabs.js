(function () {
    const links = document.querySelectorAll(".nav-link[data-panel]");
    const panels = document.querySelectorAll(".panel");

    function show(panelId) {
        panels.forEach(p => {
            const match = p.id === panelId;
            p.classList.toggle("is-active", match);
            if (match) {
                p.removeAttribute("hidden");
            } else {
                p.setAttribute("hidden", "");
            }
        });
        links.forEach(l => {
            l.classList.toggle("is-active", l.dataset.panel === panelId);
        });
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "instant" });
    }

    links.forEach(link => {
        link.addEventListener("click", () => show(link.dataset.panel));
    });
})();
