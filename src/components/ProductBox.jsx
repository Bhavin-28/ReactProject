import React from 'react'

const ProductBox = (props) => {
  return (
    <div className="input-group mb-3">
        <div className="input-group-text">
            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
        </div>
            <input type="text" className="form-control proId"  />
            {/* <input type="text" className="form-control proId" value={inputValue} onChange={handleInputChange} placeholder="Product Id" /> */}
        </div>
  )
}

export default ProductBox