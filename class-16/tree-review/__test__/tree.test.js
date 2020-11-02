const { Node } = require('../binary-tree')


describe('Test Node class', () => {

  it('should instantiate a Node', () => {
    const node = new Node("apple");
    
    const actual = node.value;
    
    const expected = "apple";
    
    expect(actual).toBe(expected);
  });

  it('should have correct children', () => {
    const node = new Node("apple", new Node("banana"), new Node("cucumber"));
    expect(node.left.value).toBe("banana");
    expect(node.right.value).toBe("cucumber");
  });

  it('should have correct children, long ways', () => {
    const node = new Node("apple");
    node.left = new Node("banana");
    node.right = new Node("cucumber");
    expect(node.left.value).toBe("banana");
    expect(node.right.value).toBe("cucumber");
  });

  

})