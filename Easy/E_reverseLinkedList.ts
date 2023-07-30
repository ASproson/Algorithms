class List_Node {
  val: number;
  next: List_Node | null;
  constructor(val?: number, next?: List_Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseLinkedList = (head: List_Node | null): List_Node | null => {
  let previous: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    // Save the current next value before we overwrite it
    const next: ListNode | null = current.next;
    // Reverse the pointer
    current.next = previous;
    // Step forward in the list
    previous = current;
    current = next;
  }
  return previous;
};

module.exports = { reverseLinkedList, List_Node };

// Time: O(n) as we have to traverse the entire array
// Space: O(1) as we only use a constant amount of memorgy regardless of the list size
