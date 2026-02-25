

function Header({ carrinho, total }) {




return (

<div className="header">

<h3>Doollars</h3>
<span>🛒 {carrinho.length} | R$ {total.toFixed(2)}</span>

</div>



)


}
export default Header;