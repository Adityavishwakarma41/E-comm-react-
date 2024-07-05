import React from 'react'
import HeroSection from '../../components/heroSection'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <>
            <HeroSection heading={"Login"} />
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6 bg-light shadow p-3'>
                        <div className='mt-1'>
                            <h4 className='text-center text-black-50'>Login</h4>
                            <form action="">
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="text" className='form-control col-8' placeholder='User Name' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <input type="password" className='form-control col-8' placeholder='Password' />
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <div className='col-8'>
                                        <div className='d-flex justify-content-between'>
                                            <div><input type="checkbox" /> Remember Me</div>
                                            <Link to="/forgot-password">Forgot Password ?</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center mt-3 mb-3'>
                                  <button className='btn btn-outline-info col-8'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
