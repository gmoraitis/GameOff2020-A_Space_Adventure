window.addEventListener("load", () => {
  //window loaded
  //do something

  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      var text = document.getElementById("input").value.toLowerCase();
    

      if (text === "north") {
        // document.getElementById("computer").appendChild("r \ ");
        var node = document.createElement("LI");
        var textnode = document.createTextNode("You went north");
        node.appendChild(textnode);
        document.getElementById("computer").appendChild(node);
     
      }
      console.log(text);
      if (text === "right") {
        var node = document.createElement("LI");
        var textnode = document.createTextNode("You went east");
        node.appendChild(textnode);
        document.getElementById("computer").appendChild(node);
      }
    }
  });
});
