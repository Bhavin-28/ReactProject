const Product1 = [
  {
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
  }
]

const product = document.getElementById('root'); 
// const product = document.querySelector('#root')
  let html = Product1.map((p) => {
    let t = document.createElement('p');
    console.log(t);
    t.innerHTML = p.id
    // console.log(product);
    // console.log(t);
    product.append(t)
  });