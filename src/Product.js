import React, { useState } from "react";
const Product1 = [{
    id : 1,
    price : 250,
    description : 'Electronics'
},
{
    id : 2,
    price : 350,
    description : 'Mobiles'
},
{
    id : 3,
    price : 450,
    description : 'kitchens'
}]

function ProductCollection(){
const [inputValue, setInputValue] = useState('');
const [proPrice,setProPrice] = useState('');
const [proDesc,setProDesc] = useState('');
const [products,setProducts] = useState(Product1);

  let handleClick = (e) =>{
    setProducts([
      ...products,
      {
        id : inputValue,
        price : proPrice,
        description : proDesc  
      }
    ])
    // const proId = inputValue,
    // productPrice = proPrice,
    // productDescription = proDesc;
    // const newData = {
    //   id : proId,
    //   price : productPrice,
    //   description : productDescription
    // }
    
    // let test = [...products];
    // test.push(newData)
  
    // setProducts(test);
  }
  let handleDelete = (e) => {

  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleProPrice= (e)=>{
    setProPrice(e.target.value)
  }
  const handleProDesc = (e) => {
    setProDesc(e.target.value);
  }
  
  return (

    <div className="productAdd">     
        <h1>Enter Product Info</h1>
        <div className="productDetail">
          <input type="text" className="proId" value={inputValue} onChange={handleInputChange} placeholder="Product Id"/>
          
          <input type="text" className="proPrice" value={proPrice} onChange={handleProPrice} placeholder="Enter Product Pride"/>
          
          <input type="text" className="proDesc" placeholder="Enter Product Description" value={proDesc} onChange={handleProDesc}/>
        </div>  
          <button type="submit" className="addData" onClick={handleClick} >Add Data</button>
          <button type="submit" className="addData" onClick={handleDelete} >Delete Product</button>

      {products.map((data) => (
        <div key={data.id} id="lrel">
            <h3>Product id : {data.id}</h3>
            <h6>Product Price : {data.price}</h6>
            <h6>Product Description : {data.description}</h6>
        </div>
      ))}
    </div>
  )
  } 

export default ProductCollection
