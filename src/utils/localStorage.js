const getItemLS = () => {
  const cartStringified = localStorage.getItem("cart");
  if (cartStringified) {
    return JSON.parse(cartStringified);
  }
  return [];
};

const setItemLS = (id) => {
    console.log(id)
  const cart = getItemLS();
  cart.push(id);
  const cartStringified = JSON.stringify(cart)
  localStorage.setItem('cart', cartStringified)
};


export {setItemLS, getItemLS}
