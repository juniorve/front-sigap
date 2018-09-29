export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if(serializedState === null){
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err){
    return undefined;
  }
};

export const saveState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    //Ignore write errors
  }
};

export const removeState = key => localStorage.removeItem(key);