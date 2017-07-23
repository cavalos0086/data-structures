var LinkedList = function () {
	var list = {};
	list.head = null;
	list.tail = null;
	list.counter = 0;

	list.addToTail = function (value) {
		var newNode = Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = this.tail.next;
		}
		this.counter++;
	};

	list.addToHead = function(value) {
		var newNode = Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.counter++;
	}

	list.addAnywhere = function(value, position) {
		var index = 0;
		var ptr = this.head;
		var newNode = Node(value);

		while (index < position - 1 && !ptr) {
			ptr = ptr.next;
			index++;
		}

		temp = ptr.next;
		ptr.next = newNode;
		newNode.next = temp;
		this.counter++;
	}

	list.removeHead = function () {
		var temp = this.head.value;
		this.head = this.head.next;
		this.counter--;
		return temp;
	};

	list.removeTail = function() {
		var ptr = this.head;
		var index = 0;

		while (index < (this.counter - 2)) {
			ptr = ptr.next;
			index++;
		}
		this.tail = ptr;
		this.counter--;
	}
	list.removeAt = function(position) {
		var index = 0;
		var ptr = this.head;

		while (index < position - 1 && !ptr) {
			ptr = ptr.next;
			index++;
		}

		if (index === this.counter-1) {
			this.removeTail();
		} else {
			ptr.next = ptr.next.next;
		}

		this.counter--;
	}
	list.contains = function (target) {
		var index = 0;
		var ptr = this.head;
		var isInList = false;

		while (index < this.counter) {
			if (ptr.value === target) {
				isInList = true;
				break;
			}
			index++;
			ptr = ptr.next;
		}

		return isInList;
	};

	return list;
};

var Node = function (value) {
	var node = {};

	node.value = value;
	node.next = null;

	return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
