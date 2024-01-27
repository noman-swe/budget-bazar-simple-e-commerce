import { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/localStorageAdd";

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products]);

    return [cart, setCart]
};

export default useCart;