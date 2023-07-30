class LinkNode {
  val: number;
  next: LinkNode | null;
  constructor(val?: number, next?: LinkNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node

const middleNode = (head: LinkNode | null) => {
  if (!head) {
    return null;
  }

  let slow: LinkNode | null = head;
  let fast: LinkNode | null = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = { middleNode, LinkNode };

// Time: O(n) as we need to touch every node
// Space: O(1) as the memory used it constant regardless of input size
