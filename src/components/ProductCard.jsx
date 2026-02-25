import { useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {

    const navigate = useNavigate()
    return (
       
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => navigate(`/produto/${product.id}`)}> Ver produto</button>

        </div>
    )
}
export default ProductCard;