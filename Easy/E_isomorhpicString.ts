const isomorphicString = (s: string, t: string) => {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap.has(sChar) && sMap.get(sChar) !== tChar) {
      return false;
    }

    if (tMap.has(tChar) && tMap.get(tChar) !== sChar) {
      return false;
    }

    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
};

module.exports = { isomorphicString };

// Space: O(n), maps proportional to input strings
// Time: O(n) as we map once through entire array
