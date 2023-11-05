import React from 'react'
import './profile.css'
import NavbarUser from '../Navbar-user/NavbarUser'
import { Link } from "react-router-dom";

const Proflie = () => {
    return (
        <>
        <NavbarUser/>
        <br />
        <br />
        <br />
        <br />
        <div className="container profile">
            <form>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h2>
                                        Emily Ja
                                    </h2>
                            <hr></hr>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-4">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Emily Ja</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>0123456789</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>emily@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Link to="/editprofile">
                                                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                                                </Link> 
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
            </form>           
        </div>
        </>
    )
}

export default Proflie


