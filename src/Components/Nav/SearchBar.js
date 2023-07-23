import React, { useState } from 'react'
import AlbumData from '../Cards/AblumData'
import LightData from '../Cards/LightData'
import PhotoData from '../Cards/PhotoData'

const SearchBar = () => {
    const initialProducts=[AlbumData,LightData,PhotoData];
    const [products,setProducts]=useState(initialProducts)
    const [query,setQuery]=useState('');
    
    const handleQuery=(event)=>{
        setQuery=(event.target.value);
    };

    const filteredRes=products.filter((product)=>
    product.name.toLowerCase().includes(query.toLowerCase())||products.artists.toLowerCase().includes(query.toLowerCase()))
    return (
    <div>
        <input
        type="text"
        value={query}
        onChange={handleQuery}
        placeholder="Search for products..."
      />

      <ul>
        {filteredRes.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
