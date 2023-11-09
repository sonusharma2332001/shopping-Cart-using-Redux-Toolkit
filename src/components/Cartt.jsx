import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { plusbutton,minusbutton } from "../features/cartslice";


const Cartt = () => {
  
const {cart,totalquantity,totalamount} = useSelector((state)=>state.Allcarts)

const dispatch = useDispatch();
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  
                  
                  <hr className="my-4" />

                  {/* Single item */}
                  {cart.map((item,)=>(
                    
                    <div className="row" key={item.id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img
                          src={item.image}
                          className="w-100"
                          alt="loading."
                        />
                        <a href="#!" >
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                      </div>
                      {/* Image */}
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* Data */}
                      <p>
                        <strong>{item.title}</strong>
                      </p>
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-trash"></i>
                      </button>
                      {/* Data */}
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button className="btn btn-primary px-3 me-2" onClick={()=>dispatch(minusbutton(item))}>
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                          <input id="form1" min="0" name="quantity" value={item.quantity} type="number" className="form-control" />
                          <label className="form-label" htmlFor="form1"></label>
                        </div>

                        <button className="btn btn-primary px-3 ms-2" onClick={()=>dispatch(plusbutton(item))}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <strong>${item.price*item.quantity}</strong>
                      </p>
                      {/* Price */}
                    </div>
                  </div>
                  ))}
                  {/* Single item */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{totalquantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{totalamount.toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cartt;
