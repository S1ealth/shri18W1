export default function reduce(store, action) {
  const newStore = reduce(store, action);
  function reduce(store, action) {
    switch (action.type) {
      case 'set_name':
        return {
          ...store,
          name: action.name,
        };
      case 'server_sent':
        return {
          ...store,
          serverName: action.name,
        };
      default:
        return store;
    }
  }
  return newStore;
}
