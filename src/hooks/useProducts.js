import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/products/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                if (error) {
                    navigate('*');
                }
            })
    }, [])

    return [products, setProducts];
}

export default useProducts;