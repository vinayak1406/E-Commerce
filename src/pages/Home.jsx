import React,{useContext} from 'react'

import{ ProductContext } from '../contexts/ProductContext'
import Products from '../Components/Products'
import Hero from '../Components/Hero'

const Home = () => {
  const {products} = useContext(ProductContext)
 
  const filterProducts = products.filter(item=>{
    return item.category === "men's clothing" || item.category === "women's clothing" 
  })
  
  return (
    <div>
      <Hero/>
      <section className='py-1'>
        <div className="mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filterProducts.map(product =>{
              return (
                <Products product={product } key={product.id}/>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home