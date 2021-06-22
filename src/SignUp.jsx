
import React from 'react'
import './style.css';

const SignUp = () => {
    return (
        <>
        <div className="_mainBody">
            <div className="image_wrapper">
                {/* <img src={banner} alt="" /> */}
            </div>

            <div className="form_wrapper">
                <div className="header">
                    <h1>Get Started</h1>
                    <h4>Sign Up and create an account</h4>
                </div>


                <div className="form_section">
                    <form action="" >
                        <div className="form_main">
                            <label htmlFor="">Username</label>
                            <div>
                                <input type="text"
                                    name="name"
                                  
                                    required
                                />
                            </div>
                            {/* {formik.errors.name ? <small>{formik.errors.name}</small> : null} */}
                        </div>



                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>

                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>

                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>

                        <div className="form_main">
                            <label htmlFor="">Email Address</label>
                            <div>
                                <input type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            {/* {formik.errors.email ? <small>{formik.errors.email}</small> : null} */}
                        </div>



                        <div className="form_main">
                            <label htmlFor="">Phone Number</label>
                            <div>
                                <input type="number"
                                    name="phoneNumber"
                                    required
                                />
                            </div>
                            {/* {formik.errors.phoneNumber ? <small>{formik.errors.phoneNumber}</small> : null} */}
                        </div>



                        <div className="form_main">
                            <label htmlFor="">Password  </label>
                            <div className="passwordToggle">
                                <div className="inp">
                                    <input type="password"
                                        name="password"
                                        className="pass"
                                        required
                                    />
                                </div>
                                {/* <div className={eye}> <button /> </button> </div> */}
                            </div>
                            {/* {formik.errors.password ? <small>{formik.errors.password}</small> : null} */}

                        </div>


                       <button>sign up</button>

                        <div className="Option_signup">
                            <fieldset>
                                <legend>Sign up</legend>
                            </fieldset>
                        </div>
                    </form>



                    <div className="icons">
                        {/* <div><img src={google} alt="" /> </div>
                        <div><img src={apple} alt="" />  </div>
                        <div><img src={facebook} alt="" /> </div> */}
                    </div>
                </div>



            </div>









        </div>
    </>
    )
}

export default SignUp

