
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

           

        }

    }


    return {
        start: function () {

           
            UICtrl.clearEditState(); 


           
            // Array
            const items = ItemCtrl.getItem();

            if (items.length > 0) {

                

                UICtrl.populateItemList(items);

            }

            loadEventListeners();

        }
    }


})();


App.start();
