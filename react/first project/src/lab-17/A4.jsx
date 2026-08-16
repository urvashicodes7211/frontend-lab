// Display Products stored in array using ReactJS

import React from 'react'

function A4() {
    const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: 4.3
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.6
  },
  {
    id: 4,
    name: "Classic Backpack",
    price: 1299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: 4.2
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    rating: 4.4
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 699,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    rating: 4.1
  },
  {
    id: 7,
    name: "Coffee Mug",
    price: 399,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    rating: 4.7
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 999,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    rating: 4.3
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    rating: 4.8
  },
  {
    id: 10,
    name: "Cotton T-Shirt",
    price: 599,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: 4.5
  }
];


  return (
    <>
        <div className="container">
            <div className="row">
            {products.map((product) => (
                <div className="col-md-3 mb-4" key={product.id}>
                
                <div className="card h-100">
                    <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    />

                    <div className="card-body">
                    <h5>{product.name}</h5>
                    <p>₹{product.price}</p>
                    <p>⭐ {product.rating}</p>
                    <p>{product.category}</p>
                    </div>
                </div>

                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default A4