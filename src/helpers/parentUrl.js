const parentUrl = (child) => {
  if (child.tagName === 'A') return child;
  if (child.parentNode) {
    if (child.parentNode.tagName === 'A') {
      return child.parentNode;
    }
    return parentUrl(child.parentNode);
  }
  return false;
};

export default parentUrl;
