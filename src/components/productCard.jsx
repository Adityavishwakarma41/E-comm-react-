import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductCard({data}) {

    const dispatch = useDispatch()
    
    function AddCart(data){
     const cartObj = {...data}
     cartObj.quantity = 1
     dispatch(addToCart(cartObj))
    }

    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={data?.thumbnail} alt={data.title}/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{data?.title}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${data.price}</h6>
                            <h6 className="text-muted ml-2">
                                <del>$123.00</del>
                            </h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0">
                            <i className="fas fa-eye text-primary mr-1" />
                            View Detail
                        </a>
                        <button onClick={()=>{AddCart(data)}} className="btn btn-sm text-dark p-0">
                            <i className="fas fa-shopping-cart text-primary mr-1" />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
