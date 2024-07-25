
// ITEM CONTROLLER, UI CONTROLLER, Storage Controller

// const StorageCtrl = (function () {

// })();


// ITEM Controller
const ItemCtrl = (function () {

    // Item Construtor

    const Item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // Data Structure / state

    const data = {

        items: [
            { id: 0, name: "clothes", money: 500 },
            { id: 1, name: "food", money: 1000 },
            { id: 2, name: "shoping", money: 1100 },
        ],
        currentItem: null,
        totalMoney: 0

    }

    return {
        getItem: function () {
            return data.items;
        }
    }


})();




const UICtrl = (function () {


    return {

        populateItemList: function (items) {

            let html = "";

            items.forEach(item => {

                html += `
                <li class="collection-item" id="item-1">
                    <strong>${item.name}</strong> : <em>${item.money} rs</em>

                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                </li>
              `

            });

            document.querySelector("#item-list").innerHTML = html;


        }

    }

})();

// APP Controller

const App = (function () {


    return {
        start: function () {
           
            // Array
            const items = ItemCtrl.getItem();

            if (items.length > 0) {

                UICtrl.populateItemList(items);

            }


        }
    }


})();


App.start();
