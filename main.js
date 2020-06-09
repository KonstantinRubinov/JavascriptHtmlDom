loop(document);
function loop(node){
    if (node.innerHTML && node.type=="submit" && node.innerHTML.toLowerCase() == "login"){
		node.innerHTML = "Login as Konstantin";
	}
    var nodes = node.childNodes;
    for (var i = 0; i <nodes.length; i++){
        if(!nodes[i]){
            continue;
        }

        if(nodes[i].childNodes.length > 0){
            loop(nodes[i]);
        }
    }
}