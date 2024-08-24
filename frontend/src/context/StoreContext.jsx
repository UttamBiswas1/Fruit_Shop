import { createContext, useState, useEffect } from "react";
export const StoreContext = createContext(null);
import axios from "axios";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3000";
  const [token, setToken] = useState("");
  const [fruitList, setFruit_list] = useState([]);

  const fetchFruitList = async () => {
    const response = await axios.get(url + "/fruit/list");
    setFruit_list(response.data.data);
  };
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url+"/cart/add",{ itemId },{ headers: { token }});
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url+"/cart/remove",{ itemId },{ headers: { token } });
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url+"/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };
  
  useEffect(() => {
    async function loadData() {
      await fetchFruitList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems ){
      if (cartItems[item]>0) {
        let itemInfo=fruitList.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = {
    cartItems,
    setCartItems,
    url,
    token,
    setToken,
    fruitList,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
