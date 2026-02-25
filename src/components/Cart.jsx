

function Cart ({ carrinho, total, removeFromCart }) {


    return (
 
        <div className="cart">
        <h2>Meu carrinho</h2>


       {carrinho.map((product, index) => (
       <div key={index}>
       <p>{product.name}</p>
       <p>{product.price}</p>
        <button onClick={() => removeFromCart(index)}>Remover</button>
       </div>
    ))}
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button>Finalizar compra</button>
        </div>
    )
}
export default Cart;