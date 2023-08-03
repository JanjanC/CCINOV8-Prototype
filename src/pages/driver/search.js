export default function DriverSearch() {
    return (
        <>
            <div className="container h-100 mt-5">
                <div className="row d-flex flex-row align-items-center justify-content-center py-5">
                    <div className="col-6">
                        <form>
                            <div className="form-group d-flex flex-row align-items-center">
                                <i className="fa fa-lg fa-search mr-4"></i>
                                <input type="text" className="form-control" name="name" placeholder="Where do you need to park?" required="required" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <div className="row">
                            <div className="col">
                                <img src="/images/google-maps.png" className="p-3" />
                                <div className="row p-3">
                                    <div className="col-8 border-right">
                                        <form className="p-2 d-flex flex-column">
                                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                                <h5 className="mb-0">
                                                    <i className="fa fa-lg fa-usd mr-2"></i>
                                                </h5>
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="From" />
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="To" />
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                                <h5 className="mb-0">
                                                    <i className="fa fa-lg fa-clock-o mr-2"></i>
                                                </h5>
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="From" />
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="To" />
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                                <h5 className="mb-0">
                                                    {' '}
                                                    <i className="fa fa-lg fa-star-o mr-2"></i>
                                                </h5>
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="From" />
                                                <input type="text" className="form-control ml-3 w-50" name="name" placeholder="To" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex flex-column py-4 justify-content-between h-100">
                                            <div>
                                                <input type="checkbox" className="mr-3" />
                                                <span>Show occupied</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <input className="btn btn-primary" type="submit" value="Apply" />
                                                <input className="btn btn-primary" type="reset" value="Reset" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-6">
                                <img src="/images/parking-space-owners.png" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
