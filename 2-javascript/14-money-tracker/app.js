
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
        },
        addItem: function(name, money){
            
            let ID;

            // Create ID

            if(data.items.length > 0){
                
                ID = data.items[data.items.length - 1].id + 1;

                // console.log(ID);

            } else {
                ID = 0;
            }

            money = parseInt(money);

            const newItem = new Item(ID, name, money);

            // Add into an array
            data.items.push(newItem);

            return newItem;
        },
        getTotalMoney: function(){

            let total = 0;

            if(data.items.length > 0){

                data.items.forEach(function(item){
                    total += item.money;
                })


            } else {
                return data.totalMoney = 0;
            }

            return total;
        },
        getItemById: function(id){
           
            let found = null;

            // Loop Items

            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })

            return found;

        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        deleteItem: function(id){
            
            // Get IDS
            const ids = data.items.map(function(item){
                return item.id;
            })

            // Get Index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        }
    }


})();




const UICtrl = (function () {


    return {

        populateItemList: function (items) {

            let html = "";

            items.forEach(item => {

                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}</strong> : <em>${item.money} rs</em>

                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                </li>
              `

            });

            document.querySelector("#item-list").innerHTML = html;


        },
        clearEditState:function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState:function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        getItemInput: function(){
            return{
                name : document.querySelector("#item-name").value,
                money : document.querySelector("#item-money").value
            }
        },
        addListItem: function(newItem){
            
            // Create a li element
            const li = document.createElement("li");

            // Add class to li
            li.className = "collection-item";

            // Add ID
            li.id = `item-${newItem.id}`;

            // Insert HTML
            li.innerHTML = `<strong>${newItem.name}</strong> : <em>${newItem.money} rs</em>

               <a href="#" class="secondary-content">
                <i class="fa-solid fa-pencil edit-item"></i>
               </a>`;

            // append Item to ul
            document.querySelector("#item-list").appendChild(li);
            
        },
        clearInputState: function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        showTotalMoney: function(totalMoney){
           
            document.querySelector(".total-money").innerText = totalMoney;

        },
        addItemToForm: function(){
            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        deleteListItem: function(id){
      
            const itemID = `#item-${id}`;

            const item = document.querySelector(itemID);

            item.remove();
        },
        clearItems: function(){

            // const collection = document.querySelector("#item-list");
            // collection.innerHTML = "";

            let listItems = document.querySelectorAll("li");

            listItems.forEach(function(li){
                li.remove();
            })

        }

    }

})();

// APP Controller

const App = (function () {



    const loadEventListeners = function(){

        // Add Item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click event
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

        // Delete Item
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // To Back
        document.querySelector(".back-btn").addEventListener("click", function(){
            UICtrl.clearEditState();
            UICtrl.clearInputState();
        });

        // Items to clear
        document.querySelector(".clear-btn").addEventListener("click", clearAllSubmit);
     

    }

    // Add item submit
    const itemAddSubmit = function(e){

        // Get the form input from ui controller
        const input = UICtrl.getItemInput();

        if(input.name === "" || input.money === ""){
            alert("Please fill the form");
        } else {
            // console.log(input.name, input.money);

            // Add ITEM
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add item to ui list
            UICtrl.addListItem(newItem);

            // Clear a input
            UICtrl.clearInputState();
           
        }

    }

    // Edit icon click
    const itemEditClick = function(e){

        if(e.target.classList.contains("edit-item")){
           
            UICtrl.showEditState();

            // Get the ID
            const listID = e.target.parentElement.parentElement.id;

            // Break Into and array
            const listArr = listID.split("-");

            // Get the ID
            // const id = parseInt(listArr[1]);
            const id = Number(listArr[1]);

            // Get Item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set Current Item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add to the form
            UICtrl.addItemToForm();

           

        }

    }

    // Item to Delete

    const itemDeleteSubmit = function(){

        // Get current Item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete From UI
        UICtrl.deleteListItem(currentItem.id);

        // Get the total Money
        const totalMoney = ItemCtrl.getTotalMoney();

        // change in UI
        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        UICtrl.clearInputState();

    }

    const clearAllSubmit = function(){

        // Clear all from Data structure
        ItemCtrl.clearAllItems();

        // Clear All form UI
        UICtrl.clearItems();

         // Get the total Money
         const totalMoney = ItemCtrl.getTotalMoney();

         // change in UI
         UICtrl.showTotalMoney(totalMoney);


    }


    return {
        start: function () {

           
            UICtrl.clearEditState(); 


           
            // Array
            const items = ItemCtrl.getItem();

            if (items.length > 0) {

                

                UICtrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();

                UICtrl.showTotalMoney(totalMoney);

            }

            loadEventListeners();

        }
    }


})();


App.start();
