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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      const updateProducts = products.map((pro) => {
        if (pro.id === selectedProduct.id) { 
          return{
            ...pro,
            name : productName,
            price : proPrice,
            description : proDesc,
          }; 
        }
        return pro;
      });
      setProducts(updateProducts);
      setSelectedProduct(null);
    }else{
      setProducts([
        ...products,
        {
          id : ++productId,
          name : productName,
          price : proPrice,
          description : proDesc,  
          
        },
      ]);
    }
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
    const newProducts = products.filter((products) => products.id !==  selectedProductId);
    setProducts(newProducts);
      let selectedProductId = e.target.value;
      console.log("selectedProductId",selectedProductId);
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
  const productSelect = (e) => {
    setSelectedProductId(parseInt(e.target.value));
    const selectedProId = parseInt(e.target.value);
    const selectedPro = products.find((pro) => pro.id === selectedProId);
    setSelectedProduct(selectedPro);
  }
  const handleImageChange = (e) => {

  }
  
  return (

    <div className="productAdd container bg-light">     
        <h1>Enter Product Information</h1>
        <div className="productDetail col-xs-2">
          
          <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control proId" 
                value={selectedProduct ? selectedProduct.name : productName} 
                onChange={handleProductName} 
                placeholder="Product Name"    
              />
          </div>
          
          <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control proPrice" 
                value={selectedProduct ? selectedProduct.price : proPrice} 
                onChange={handleProPrice} 
                placeholder="Enter Product Pride" 
              />
          </div>

          <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control proDesc" 
                placeholder="Enter Product Description" 
                value={selectedProduct ? selectedProduct.description :proDesc} 
                onChange={handleProDesc} 
              />
          </div>
          
          <div className="input-group mb-3">
              <input 
                type="file" 
                className="form-control attachment" 
                placeholder="select Your Attachment" 
                value='' 
                onChange={handleImageChange} 
              />
          </div> 
           
        
        </div>  
          <button type="submit" className="btn btn-outline-primary btn-lm addData me-2" onClick={handleClick} >Add product</button>
          <button type="submit" className="btn btn-outline-danger btn-lm addData" onClick={handleDelete} >Delete Product</button>

        <div className="productsList d-flex justify-content-around p-4">
          {products.map((data) => (
            <div key={data.name} id={`productInformation-${data.id}`} className={`products_list products${data.name} `} >
            <div className="input-group-text productCheck">
                <input className="form-check-input mt-0" type="checkbox" value={`${data.id}`} onClick = {productSelect} />
                <p>Product Id : {data.id}</p>  
            </div> 
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
