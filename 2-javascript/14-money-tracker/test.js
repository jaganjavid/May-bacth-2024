

// Item Class
class Item {
    constructor(id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }
}

// Storage Controller
class StorageCtrl {

    static storeItem(item) {
        let items;
        if (localStorage.getItem("items") === null) {
            items = [];
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
            console.log(`step - 1`);
        } else {
            items = JSON.parse(localStorage.getItem("items"));
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
            console.log(`step - 2`);
        }
    }

    static getItem() {
        if (localStorage.getItem("items") === null) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem("items"));
        }
    }

    static deleteItemLS(id) {
        let items = JSON.parse(localStorage.getItem("items"));
        items.forEach((item, index) => {
            if (id === item.id) {
                items.splice(index, 1);
            }
        });
        localStorage.setItem("items", JSON.stringify(items));
    }

    static updatedItemLS(updatedItem) {
        let items = JSON.parse(localStorage.getItem("items"));
        items.forEach((item, index) => {
            if (updatedItem.id === item.id) {
                items.splice(index, 1, updatedItem);
            }
        });
        localStorage.setItem("items", JSON.stringify(items));
    }

    static clearItems() {
        localStorage.removeItem("items");
    }
}






// Item Controller
class ItemCtrl {
    constructor() {
        this.data = {
            items: StorageCtrl.getItem(),
            currentItem: null,
            totalMoney: 0,
        };
    }

    getItem() {
        return this.data.items;
    }

    addItem(name, money) {

        let ID;

        if (this.data.items.length > 0) {
            this.data.items[this.data.items.length - 1].id + 1
        } else {
            ID = 0;
        }

        money = parseInt(money);
        const newItem = new Item(ID, name, money);
        this.data.items.push(newItem);
        return newItem;
    }

    getTotalMoney() {
        let total = 0;
        if (this.data.items.length > 0) {
            this.data.items.forEach((item) => {
                total += item.money;
            });
        } else {
            return (this.data.totalMoney = 0);
        }
        return total;
    }

    getItemById(id) {
        let found = null;
        this.data.items.forEach((item) => {
            if (item.id === id) {
                found = item;
            }
        });
        return found;
    }

    setCurrentItem(item) {
        this.data.currentItem = item;
    }

    getCurrentItem() {
        return this.data.currentItem;
    }

    deleteItem(id) {
        const ids = this.data.items.map((item) => item.id);
        const index = ids.indexOf(id);
        this.data.items.splice(index, 1);
    }

    updatedItem(name, money) {
        money = parseInt(money);
        let found = null;
        this.data.items.forEach((item) => {
            if (item.id === this.data.currentItem.id) {
                item.name = name;
                item.money = money;
                found = item;
            }
        });
        return found;
    }

    clearAllItems() {
        this.data.items = [];
    }
}





// UI Controller
class UICtrl {
    static populateItemList(items) {
        let html = "";
        items.forEach((item) => {
            html += `
                  <li class="collection-item" id="item-${item.id}">
                      <strong>${item.name}</strong> : <em>${item.money} rs</em>
                      <a href="#" class="secondary-content">
                          <i class="fa-solid fa-pencil edit-item"></i>
                      </a>
                  </li>
                `;
        });
        document.querySelector("#item-list").innerHTML = html;
    }

    static clearEditState() {
        document.querySelector(".add-btn").style.display = "inline";
        document.querySelector(".update-btn").style.display = "none";
        document.querySelector(".delete-btn").style.display = "none";
        document.querySelector(".back-btn").style.display = "none";
    }

    static showEditState() {
        document.querySelector(".add-btn").style.display = "none";
        document.querySelector(".update-btn").style.display = "inline";
        document.querySelector(".delete-btn").style.display = "inline";
        document.querySelector(".back-btn").style.display = "inline";
    }

    static getItemInput() {
        return {
            name: document.querySelector("#item-name").value,
            money: document.querySelector("#item-money").value,
        };
    }

    static addListItem(newItem) {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.id = `item-${newItem.id}`;
        li.innerHTML = `<strong>${newItem.name}</strong> : <em>${newItem.money} rs</em>
                 <a href="#" class="secondary-content">
                  <i class="fa-solid fa-pencil edit-item"></i>
                 </a>`;
        document.querySelector("#item-list").appendChild(li);
    }

    static clearInputState() {
        document.querySelector("#item-name").value = "";
        document.querySelector("#item-money").value = "";
    }

    static showTotalMoney(totalMoney) {
        document.querySelector(".total-money").innerText = totalMoney;
    }

    static addItemToForm() {
        document.querySelector("#item-name").value = ItemCtrlInstance.getCurrentItem().name;
        document.querySelector("#item-money").value = ItemCtrlInstance.getCurrentItem().money;
    }

    static deleteListItem(id) {
        const itemID = `#item-${id}`;
        const item = document.querySelector(itemID);
        item.remove();
    }

    static updatedListItem(item) {
        let listItems = document.querySelectorAll(".collection-item");
        listItems.forEach((listItem) => {
            const itemID = listItem.getAttribute("id");
            if (itemID === `item-${item.id}`) {
                document.querySelector(`#${itemID}`).innerHTML = `
                       <strong>${item.name}</strong> : <em>${item.money} rs</em>
                      <a href="#" class="secondary-content">
                          <i class="fa-solid fa-pencil edit-item"></i>
                      </a>`;
            }
        });
    }

    static clearItems() {
        let listItems = document.querySelectorAll(".collection-item");
        listItems.forEach((li) => {
            li.remove();
        });
    }
}





// App Controller
class App {
    constructor() {
        this.loadEventListeners();
    }

    loadEventListeners() {
        document.querySelector(".add-btn").addEventListener("click", this.itemAddSubmit);
        document.querySelector("#item-list").addEventListener("click", this.itemEditClick);
        document.querySelector(".delete-btn").addEventListener("click", this.itemDeleteSubmit);
        document.querySelector(".update-btn").addEventListener("click", this.itemUpdateSubmit);
        document.querySelector(".back-btn").addEventListener("click", () => {
            UICtrl.clearEditState();
            UICtrl.clearInputState();
        });
        document.querySelector(".clear-btn").addEventListener("click", this.clearAllSubmit);
    }

    itemAddSubmit(e) {
        const input = UICtrl.getItemInput();
        if (input.name === "" || input.money === "") {
            alert("Please fill the form");
        } else {
            const newItem = ItemCtrlInstance.addItem(input.name, input.money);
            UICtrl.addListItem(newItem);
            const totalMoney = ItemCtrlInstance.getTotalMoney();
            UICtrl.showTotalMoney(totalMoney);
            StorageCtrl.storeItem(newItem);
            UICtrl.clearEditState();
            UICtrl.clearInputState();
        }
        e.preventDefault();
    }

    itemEditClick(e) {
        if (e.target.classList.contains("edit-item")) {
            UICtrl.showEditState();
            const listID = e.target.parentElement.parentElement.id;
            const listArr = listID.split("-");
            const id = Number(listArr[1]);
            const itemToEdit = ItemCtrlInstance.getItemById(id);
            ItemCtrlInstance.setCurrentItem(itemToEdit);
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }

    itemDeleteSubmit(e) {
        const currentItem = ItemCtrlInstance.getCurrentItem();
        ItemCtrlInstance.deleteItem(currentItem.id);
        UICtrl.deleteListItem(currentItem.id);
        const totalMoney = ItemCtrlInstance.getTotalMoney();
        UICtrl.showTotalMoney(totalMoney);
        StorageCtrl.deleteItemLS(currentItem.id);
        UICtrl.clearEditState();
        UICtrl.clearInputState();
        e.preventDefault();
    }

    itemUpdateSubmit(e) {
        const input = UICtrl.getItemInput();
        const updatedItem = ItemCtrlInstance.updatedItem(input.name, input.money);
        UICtrl.updatedListItem(updatedItem);
        const totalMoney = ItemCtrlInstance.getTotalMoney();
        StorageCtrl.updatedItemLS(updatedItem);
        UICtrl.showTotalMoney(totalMoney);
        UICtrl.clearEditState();
        UICtrl.clearInputState();
        e.preventDefault();
    }

    clearAllSubmit(e) {
        ItemCtrlInstance.clearAllItems();
        UICtrl.clearItems();
        const totalMoney = ItemCtrlInstance.getTotalMoney();
        UICtrl.showTotalMoney(totalMoney);
        StorageCtrl.clearItems();
        e.preventDefault();
    }

    start() {
        UICtrl.clearEditState();
        const items = ItemCtrlInstance.getItem();
        if (items.length > 0) {
            UICtrl.populateItemList(items);
            const totalMoney = ItemCtrlInstance.getTotalMoney();
            UICtrl.showTotalMoney(totalMoney);
        }
    }
}

// Instantiate ItemCtrl
const ItemCtrlInstance = new ItemCtrl();

// Instantiate App and start the app
const AppInstance = new App();
AppInstance.start();
