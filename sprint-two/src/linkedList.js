var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var temp = Node(value); //new node
    temp.value = value; //set value


    // if the list is not empty, set old tail.next to new tail(new item)
    if(this.tail !== null){
      this.tail.next = temp;
    }


    this.tail = temp; //sets tail as new tail

    if(this.head === null){ //if there is no head (empty list) set head as new node
       this.head = temp;
    }
  };

  list.removeHead = function(){
    var value = this.head.value; //stores value
    var nextNode = this.head.next; // stores next
    this.head = nextNode; //sets head to new head
    return value; // returns old node value
  };

  list.contains = function(target){
    var currentNode = this.head; // starts searching at head

    do { // continues search until .next === null
        console.log("node:", this.head); //log
      if(currentNode.value === target){ // if current node === target
        return true; // return true
      } else {
        currentNode = currentNode.next; // look at next node
      }
    } while(currentNode !== null)

    return false // return false if not found
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
