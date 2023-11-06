import React from 'react'
import NavbarUser from '../Navbar-user/NavbarUser'
import { Link } from "react-router-dom";

const EditProflie = () => {
    return (
        <>
        <NavbarUser/>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
            <h1>Edit Profile</h1>
            <hr />
            <div className="row">
                <div className="col-md-3"></div>
                
                <div className="col-md-9 personal-info">
                    <h3>Personal info</h3>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label className="col-md-3 control-label">Username :</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Phone :</label>
                            <div className="col-md-8">
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Password:</label>
                            <div className="col-md-8">
                                <input
                                    className="form-control"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Confirm password:</label>
                            <div className="col-md-8">
                                <input
                                    className="form-control"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label"></label>
                            <div className="col-md-8">
                                <Link to="/profile">
                                    <input type="button" className="btn btn-primary" value="Save Changes" />    
                                </Link>          
                                <span></span>
                                <Link to="/profile">
                                    <input type="reset" className="btn btn-default" value="Cancel" />
                                </Link>            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditProflie
