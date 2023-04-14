import React, { useState } from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductBox from "./components/ProductBox";
const Product1 = []
let productId = 0;

function ProductCollection(){
  const [productName, setProductName] = useState('');
  const [proPrice,setProPrice] = useState('');
  const [proDesc,setProDesc] = useState('');
  const [products,setProducts] = useState(Product1);
  let handleClick = (e) =>{
    setProducts([
      ...products,
      {
        id : ++productId,
        name : productName,
        price : proPrice,
        description : proDesc  
      }
    ])
      setProductName('');
      setProPrice('');
      setProDesc('');
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
  const handleProductName = (e) => {
    setProductName(e.target.value);
  }
  const handleProPrice= (e)=>{
    setProPrice(e.target.value)
  }
  const handleProDesc = (e) => {
    setProDesc(e.target.value);
  }
  
  return (

    <div className="productAdd container bg-light">     
        <h1>Enter Product Information</h1>
        <div className="productDetail col-xs-2">
          
          <div className="input-group mb-3">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </div>
              <input type="text" className="form-control proId" value={productName} onChange={handleProductName} placeholder="Product Name" />
          </div>
          
          <div className="input-group mb-3">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </div>
              <input type="text" className="form-control proPrice" value={proPrice} onChange={handleProPrice} placeholder="Enter Product Pride" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </div>
              <input type="text" className="form-control proDesc" placeholder="Enter Product Description" value={proDesc} onChange={handleProDesc} />
          </div>  
        
        </div>  
          <button type="submit" className="btn btn-outline-primary btn-lm addData me-2" onClick={handleClick} >Add product</button>
          <button type="submit" className="btn btn-outline-danger btn-lm addData" onClick={handleDelete} >Delete Product</button>

        <div className="productsList d-flex justify-content-around p-4">
          {products.map((data) => (
            <div key={data.name} id={`productInformation-${data.id}`} className={`products_list products${data.name} `} >
                <p>Product Id : {data.id}</p>  
                <h3>Product Name : {data.name}</h3>
                <p><b>Product Price : </b> {data.price}</p>
                <p><b>Product Description : </b>{data.description}</p>
            </div>
          ))}
          </div>  
    </div>
  )
  } 

export default ProductCollection
