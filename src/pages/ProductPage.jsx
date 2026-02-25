import { useParams } from "react-router-dom";
import Products from "../data/Product";



function ProductPage({ addToCart}) {

const { id} = useParams()
const product = Products.find((p) => p.id === Number(id))

 if(!product) return <h2>Produto não encontrado</h2>
return (
<div className="product-page">


    <img src={product.image} alt={product.name} />
    <div className="product-info">

    <h1>{product.name}</h1>
    <p className="category"> {product.category}</p>
    <p className="price"> {product.price}</p>
    <p className="description">{product.Description}</p>
    <button onClick={() => addToCart(product)}> Adicionar ao carrinho</button>

    </div>
</div>



)



}
export default ProductPage;