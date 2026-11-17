import React, { useState } from 'react'

const ShoppingCart = () => {
    let [cartItems, setCartItems] = useState([
        { id: 1, itemName: "Mobile", itemPrice: 15000, quantity: 3 },
        { id: 2, itemName: "Laptop", itemPrice: 45000, quantity: 2 },
        { id: 3, itemName: "PoweBank", itemPrice: 6000, quantity: 5 },
        { id: 4, itemName: "Watch", itemPrice: 5000, quantity: 10 },
        { id: 5, itemName: "Bag", itemPrice: 3000, quantity: 6 },

    ])
    let [total, setTotal] = useState(0)

    let totalAmount = () => {
        let price = 0

        cartItems.map((item) => {
            setTotal(price += item.itemPrice)
        })

    }

    let cartIncrement = (id) => {
        setCartItems(cartItems.map((cart) => {
            if (cart.id === id) {
                return { ...cart, quantity: cart.quantity + 1 }
            } else {
                return cart
            }
        }))
    }


    return (
        <div>
            <h2>Cart Items</h2>
            <aside>
                {
                    cartItems.map((cart) => {
                        return (
                            <div>

                                <h2>Product Name: {cart.itemName}</h2>
                                <p>Product Price: ₹ {cart.itemPrice}/-</p>
                                <p>Quantity:{cart.quantity}</p>
                                <button onClick={() => cartIncrement(cart.id)}>Increment Quantity</button>
                                <hr />
                            </div>
                        )
                    })
                }
            </aside>
            <button onClick={totalAmount}>Calaculate Total</button>
            <h3> Total Price of Items: {total}</h3>

        </div>
    )
}

export default ShoppingCart
