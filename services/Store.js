const StoreObj = {
  facts: [],
};

const Store = new Proxy(StoreObj, {
  set(target, property, value) {
    target[property] = value;
    if (property === "facts") {
      window.dispatchEvent(new Event("appfactschange"));
    }
    return true;
  },
});

export default Store;
