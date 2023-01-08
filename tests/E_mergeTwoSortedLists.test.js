const { mergeTwoSortedLists, ListNode } = require("../E_mergeTwoSortedLists");

describe("mergeTwoSortedLists()", () => {
  it("returns expected when passed list1 && list2", () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    );
    const result = mergeTwoSortedLists(list1, list2);
    expect(result).toEqual(expected);
  });
});
