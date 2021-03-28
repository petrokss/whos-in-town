export const getLocalStorageData = (key, defaultValue) => {
  try {
    const result = localStorage.getItem(key);
    return JSON.parse(result) ?? defaultValue;
  } catch (err) {
    return defaultValue;
  }
};

export const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
