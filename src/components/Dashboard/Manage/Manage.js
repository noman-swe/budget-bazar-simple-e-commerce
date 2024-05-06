import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';
import '../../Shop/Shop.css';
import { useNavigate } from 'react-router-dom';

const Manage = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remainings = products.filter(p => p._id !== id);
                setProducts(remainings);
            })

    }

    // 
    // const handleUpdate = (id) => {
    //     const url = `http://localhost:5000/products/${id}`;
        
    // }

    return (
        <div className='manage-product'>
            <h1 className='text-center text-4xl pt-4'>Manage Products</h1>

            <div className="product-container grid grid-cols-3 justify-evenly p-5 ml-32 gap-8 mx-auto" style={{ 'margin': '20px 100px' }}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                        // handleUpdate={handleUpdate}
                    >
                        <p>{product.name}</p>
                    </Product>
                    )
                }
            </div>
        </div>
    );
};

export default Manage;