/**
 *
 * @param {String} key
 * @returns JSON data or undefined
 */

export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch {
    return undefined;
  }
};

/**
 *
 * @param {String} key
 * @param {JSON} data
 */

export const saveData = (key, data = "") => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 *
 * @param {key} key
 */
export const deleteData = (key) => {
  localStorage.removeItem(key);
};
