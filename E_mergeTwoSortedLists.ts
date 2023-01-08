class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoSortedLists = (
  list1: ListNode | null,
  list2: ListNode | null
) => {
  // base case: if either list is empty, return the other list
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  // recursive case: choose the smaller of the two heads, and recursively merge the remainder of the lists
  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
};

// Time: O(n)
// Space: O(n)

module.exports = { mergeTwoSortedLists, ListNode };

const mergeTwoSortedListsIteration = (
  list1: ListNode | null,
  list2: ListNode | null
) => {
  // handle edge cases where either list is empty
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let mergedList: ListNode | null;

  // set the head of the merged list to the smaller of the two heads
  if (list1.val < list2.val) {
    mergedList = list1;
    list1 = list1.next;
  } else {
    mergedList = list2;
    list2 = list2.next;
  }

  // set a reference to the current node of the merged list
  let current = mergedList;

  // iterate over both lists, adding the smaller of the two current nodes to the merged list
  // and advancing the reference to the next node in that list
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // add the remaining nodes of the non-empty list to the merged list
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  return mergedList;
};

// Time: O(n) as we have touch all the nodes in the lists
// Space: O(1) as our generated list is based on the input parameters
