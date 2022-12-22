var todos = new XMLHttpRequest();
var Data=[];
localStorage.setItem("Data",JSON.stringify(Data));
todos.open('GET','https://jsonplaceholder.typicode.com/todos');// estplish connection 
todos.send();
todos.onreadystatechange= function(){
    if (todos.readyState==4 && todos.status ==200){
        var todosarr = JSON.parse (todos.responseText);
        console.log(todosarr);

        for (var i = 0 ; i<todosarr.length ;i++){

            var newdiv = document.createElement("div");
            var id = document.createElement("span");
            var comp = document.createElement ("p");

            id.innerText =todosarr[i] .id;
            comp.innerText = todosarr[i].completed;

            newdiv.appendChild(id);
            newdiv.appendChild(comp);

            document.body.appendChild(newdiv);


        }
    }
    
}
