var ul = document.getElementById("myList");
    var li;
    var itemid; 
    var item;
    addTask = function () {
    
        if(document.getElementById("task").value != ""){
           
            item = document.getElementById("task");
            
            itemid = ul.childElementCount;
            
            li = createitemEL(item.value, itemid);

            li.appendChild(createRemoveTaskBtn(itemid));

            li.appendChild(vertarefa(itemid));

            ul.appendChild(li);

            
            item.value = "";

           
        }

    }

    removeTask = function (itemid) {
        
        for( i = 0 ; i < ul.children.length ; i++) {
                if(ul.children[i].getAttribute("index") == itemid) {
                    ul.children[i].remove();
                }
        }
    }

    createitemEL = function (itemValue, itemid) {
        
        let li = document.createElement("li");
       
        li.setAttribute("index", itemid);
        
        li.appendChild(document.createTextNode(itemValue));
        
        return li;


    }

    createRemoveTaskBtn = function (itemid) {
        
        let btn = document.createElement("button");
        btn.setAttribute("onclick", "removeTask("+itemid+")");
        btn.innerHTML = "X";
        return btn;


    }

    vertarefa = function (itemid) {
        let btn = document.createElement("button");
        btn.setAttribute("onclick", "aletarefa("+itemid+")");
        btn.innerHTML = "Ver";
        return btn;
        
    }

    aletarefa = function (){
        alert("n sei");

        
    }
