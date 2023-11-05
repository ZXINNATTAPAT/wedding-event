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
        <div class="container profile">
            <form>
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h2>
                                        Emily Ja
                                    </h2>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <hr></hr>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-4">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Emily Ja</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>0123456789</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>emily@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <Link to="/editprofile">
                                                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
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


