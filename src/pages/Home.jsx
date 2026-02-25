import product from '../data/Product'
import ProductCard from '../components/ProductCard'
import { useState } from 'react';



function Home ({ addToCart }) {
 
    const [categoria, SetCategoria] = useState('Todos')
    const [busca, SetBusca] = useState('');


  


        const productFiltrados = categoria === 'Todos'
        ? product
        : product.filter(p => p.category === categoria);

        const category = ['Todos','Eletronic','Roupas','Livros', 'Perfumes'];


        const productBuscados = productFiltrados.filter((product) => (
          product.name.toLowerCase().includes(busca.toLowerCase())

        ))

return (


    <div className='container'> 

    <div className='botoes'>

    <h3>Filtrar por Categorias</h3>

    <div style={{marginBottom: '10px'}}>
        {category.map(cat => (
            <button
            key={cat}
            onClick={() => SetCategoria(cat)}
            style={{marginRight: '5px',
                backgroundColor: categoria === cat ? 'lightblue' : 'black'
            }}
            >
                 {cat}
                 </button>
        ))}
    </div>

        <input type="text"
        placeholder="Buscar Produto..."
        value={busca}
        onChange={(e) => SetBusca(e.target.value)} 
         />
    <div className='home'>
    {productBuscados.map((product) => (
   <ProductCard
    key={product.id} 
   product={product}
    addToCart={addToCart}
   />
))}
     </div>
    </div>
    </div>
)
}
export default Home;