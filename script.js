(() => {
    "use strict";

    fetch("./data.json")
        .then(response => {
            return response.json();
        })
        .then(function(json) {
            const element = document.getElementById("menus");
            json.forEach(restaurant => {
                const container = document.createElement("div"),
                    name = document.createElement("h2"),
                    menus = document.createElement("div");

                container.classList.add("card", "text-center");

                name.innerText = restaurant.name;
                name.classList.add("card-header", "bg-info", "text-white");

                container.appendChild(name);

                restaurant.menus.forEach(menu => {
                    const menuElement = document.createElement("div"),
                        menuName = document.createElement("h5"),
                        price = document.createElement("h4"),
                        menuExtended = document.createElement("p");

                    menuName.innerText = menu.name;
                    price.innerText = menu.price;
                    menuExtended.innerHTML = menu.extended;

                    menuName.classList.add("card-title");
                    menuExtended.classList.add("card-text");
                    menuElement.classList.add("card-body");

                    menuElement.appendChild(menuName);
                    menuElement.appendChild(price);
                    menuElement.appendChild(menuExtended);

                    container.appendChild(menuElement);
                });

                element.appendChild(container);
            });
        });
})();
