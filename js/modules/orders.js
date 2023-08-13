const orderTop = (array) => array.toSorted((a, b) => b['rank'] - a['rank']);

const orderRelevant = (array) => array.filter((post) => post['relevant']);

const orderLatest = (array) => array.toReversed();

const orderAside = (array, tagsbase) =>
  array.filter(({ tags }) => tags.find((element) => element === tagsbase));

const orderData = (array, typeorder) => {
  let processarray;
  switch (typeorder) {
    case 'relevant':
      processarray = orderRelevant(array);
      break;
    case 'latest':
      processarray = orderLatest(array);
      break;
    case 'top':
      processarray = orderTop(array);
      break;
  }
  return processarray;
};

export { orderData, orderAside };
