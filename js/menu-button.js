
    (() =>{
        const menuBtmRef = document.querySelector("[data-menu-button]");
        const mobilMenuRef = document.querySelector("[data-menu]");

        menuBtmRef.addEventListener("click", () =>{
            const expanded = menuBtmRef.getAttribute("aria-expanded") === "true" || false;


            // menuBtmRef.classList.toggle("menu__button--open");
            menuBtmRef.setAttribute("aria-expanded", !expanded);

            // mobilMenuRef.classList.toggle("nav-menu--open");
        });
    })();