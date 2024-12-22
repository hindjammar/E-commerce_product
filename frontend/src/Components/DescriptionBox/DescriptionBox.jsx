import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
             <p>An e-commerce website is an online platform that allows businesses and individuals to buy and sell products or services over the internet. These websites typically provide a digital storefront where users can browse items, view product details, add items to a cart, and securely complete a transaction.</p>
             <p>ShopNow, your one-stop destination for premium quality products at unbeatable prices! Explore a wide range of items, from the latest fashion trends to essential home goods, all carefully curated to meet your needs. Our user-friendly website makes shopping easy, with features like secure payments, fast shipping, and hassle-free returns. Whether you're browsing for yourself or looking for the perfect gift, ShopNow has something for everyone. Start shopping today and experience convenience,
                 style, and value all in one place!</p>
        </div>
    </div>
  )
}

export default DescriptionBox
