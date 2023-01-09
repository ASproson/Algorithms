const { middleNode, LinkNode } = require("../E_MiddleOfLinkedList");

describe("middleNode", () => {
  test("returns null for an empty list", () => {
    expect(middleNode(null)).toBe(null);
  });

  test("returns the only node for a list with one node", () => {
    const node = new LinkNode(1);
    expect(middleNode(node)).toBe(node);
  });

  test("returns the middle node for a list with odd number of nodes", () => {
    const head = new LinkNode(1);
    head.next = new LinkNode(2);
    head.next.next = new LinkNode(3);
    expect(middleNode(head)).toEqual(head.next);
  });

  test("returns the middle node for a list with even number of nodes", () => {
    const head = new LinkNode(1);
    head.next = new LinkNode(2);
    head.next.next = new LinkNode(3);
    head.next.next.next = new LinkNode(4);
    expect(middleNode(head)).toEqual(head.next.next);
  });
});
