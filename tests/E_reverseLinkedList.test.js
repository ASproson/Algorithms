const { reverseLinkedList, List_Node } = require("../E_reverseLinkedList");

describe("reverseLinkedList", () => {
  it("should return null for an empty list", () => {
    const reversed = reverseLinkedList(null);
    expect(reversed).toBeNull();
  });

  it("should reverse a list with one element", () => {
    const head = new List_Node(1);
    const reversed = reverseLinkedList(head);
    expect(reversed).toEqual(head);
  });

  it("should reverse a list with two elements", () => {
    const head = new List_Node(1, new List_Node(2));
    const reversed = reverseLinkedList(head);
    expect(reversed).toEqual(new List_Node(2, new List_Node(1)));
  });

  it("should reverse a list with three elements", () => {
    const head = new List_Node(1, new List_Node(2, new List_Node(3)));
    const reversed = reverseLinkedList(head);
    expect(reversed).toEqual(
      new List_Node(3, new List_Node(2, new List_Node(1)))
    );
  });
});
