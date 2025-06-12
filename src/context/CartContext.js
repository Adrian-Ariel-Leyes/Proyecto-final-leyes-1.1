import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (item, quantity) => {
    const itemIndex = cart.findIndex(prod => prod.id === item.id);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar un producto
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de productos
  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Total precio
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};