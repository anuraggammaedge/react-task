export const saveState = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem("cart", data);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

export const loadState = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};
