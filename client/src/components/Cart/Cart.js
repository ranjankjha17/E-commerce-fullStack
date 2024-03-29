import React, { useContext } from 'react'
import '../../assets/styles/cart.css'
import CartProductCard from './CartProductCard'
import cartImg from '../../assets/images/cart.png'
import PrimaryButton from '../Buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const Cart = ({ setCartOpen, cartOpen }) => {
    const { cart, total } = useContext(AuthContext)

    // GO TO CHECKOUT PAGE
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate('/checkout')
        setCartOpen(false)
    }

    // GO TO MY CART PAGE
    const handleGoCart = () => {
        navigate('/cart')
        setCartOpen(false)
    }

    const handleShopNow = () => {
        navigate('/products')
        setCartOpen(false)
    }
    return (
        <section className={`cart top-0 z-50 h-[100vh] bg-[#CEEDC7] lg:w-[30%] md:w-[40%] w-[80%] py-6 lg:px-8 px-4 ${cartOpen && 'open'}`} >
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-error text-white fixed right-5 top-2" onClick={() => setCartOpen(false)}>✕</label>
            <div className='text-center mt-4 mb-8'>
                <h2 className='font-bold text-xl'>Your Shopping Cart</h2>
                <h3 className='text-md'>Selected Items: <strong>{cart.length}</strong></h3>
            </div>

            {
                cart?.length ?
                    cart?.map((item, index) => <CartProductCard data={item} key={index} />)
                    :
                    <div className='flex items-center justify-center'>
                        <img src={cartImg} className=" w-[80%]" alt="" />
                    </div>
            }
            {
                total > 0 ?
                    <h2 className='mt-4'>Subtotal &emsp; <span className='text-3xl font-bold'>INR {total}</span> </h2>
                    : <h2 className='mt-2 text-2xl font-bold text-center'>Your Shopping Cart is Empty </h2>
            }
            {
                cart?.length ?
                    <button onClick={handleGoCart} className='btn btn-outline w-full mt-8 normal-case go-cart'>
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/medpcfcy.json"
                            trigger="hover"
                            class="current-color"
                            style={{ width: "25px", height: "25px" }}>
                        </lord-icon>
                        &nbsp; Go to Cart
                    </button>
                    : <span></span>
            }

            {
                cart?.length ?
                    <button onClick={handleCheckout} className='btn btn-white w-full mt-3 text-white normal-case'>
                        Checkout &emsp;
                        <lord-icon
                            target="button"
                            src="https://cdn.lordicon.com/zmkotitn.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </button>
                    :
                    <div className='mt-12 flex justify-center'>
                        <PrimaryButton eventHandler={handleShopNow}>Shop Now </PrimaryButton>
                    </div>
            }

        </section>
    )
}

export default Cart