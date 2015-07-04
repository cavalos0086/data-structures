// This are the links to documentation on the specs values.
// http://chaijs.com/api/bdd/
// http://mochajs.org/




describe('b_tree',function(){

	var newBtree;

	beforeEach(function(){

		// using 4 as a m-order for the btree. 
		// Hopefully I can make it general
		// TODO: the btree order should be specified at the creation of the btree object.
		newBtree = new Btree();
	})

	it('should have methods named "insert","contains","delete_node","shuffle"', function(){
		expect(newBtree.insert).to.be.a("function");
		expect(newBtree.contains).to.be.a("function");
		expect(newBtree.delete_node).to.be.a("function");
		expect(newBtree.sort_node).to.be.a("function");
		expect(newBtree.split_node).to.be.a("function");
	});

	it("should add keys to the nodes",function(){
		// newBtree.insert(4);
		// newBtree.insert(10);
		newBtree.insert(40);
		expect(newBtree.contains(40)).to.equal(true);
		expect(newBtree.contains(30)).to.equal(false);
	});

	// it("should handle negative numbers insertion", function(){
	// 	newBtree.insert(4);
	// 	newBtree.insert(10);
	// 	newBtree.insert(-40);
	// 	expect(newBtree.contains(-40)).to.equal(true);
	// 	expect(newBtree.contains(40)).to.equal(true);
	// });

});