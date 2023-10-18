import React from 'react'

const EditProflie = () => {
    return (
        <div className="container">
            <h1>Edit Profile</h1>
            <hr />
            <div className="row">
                {/* ด้านซ้าย */}
                <div className="col-md-3">
                    <div className="text-center">
                        <img
                            src="//placehold.it/150"
                            className="avatar img-circle"
                        />
                        <br/><br/>
                        <input type="file" className="form-control" />
                    </div>
                </div>

                {/* ด้านขวา */}
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
                                <input type="button" className="btn btn-primary" value="Save Changes" />
                                <span></span>
                                <input type="reset" className="btn btn-default" value="Cancel" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProflie
