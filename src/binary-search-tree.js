const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null
  }
  root(){
    return this.head;
  }

  add(data) {
    let node = new Node(data)
    if(this.head === null){
      this.head = node
    } else {
      this.addNode(this.head, node);
    }
  }
  addNode(node, newNode){
    if(newNode.data < node.data){
       if(node.left === null){
          node.left = newNode;
       }else{
          this.addNode(node.left, newNode);
       };
    } else {
       if(node.right === null){
          node.right = newNode;
       }else{
          this.addNode(node.right,newNode);
       };
    };
 };

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return this.search(this.head, data);
  }
   search(node, data){
    if(node === null){
      return null
    }else if(node.data > data){
      return this.search(node.left, data);
    }else if(node.data < data){
      return this.search(node.right, data);
    }else{
      return node;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};