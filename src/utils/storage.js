const asyncLocalStorage = {
  setItem: (key, value) => Promise.resolve().then(() => {
    localStorage.setItem(key, value);
  }),
  getItem: (key) => Promise.resolve().then(() => localStorage.getItem(key)),
  removeItem: (key) => Promise.resolve().then(() => localStorage.removeItem(key)),
};

export default asyncLocalStorage;
