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
                            <div className="col-6 d-flex flex-column">
                                <img src="/images/sample-map.png" className="p-3" />
                                <div className="row p-3">
                                    <div className="col-8 bg-info">
                                        <form className="p-2 d-flex flex-column">
                                            <div className="form-group d-flex flex-row align-items-center">
                                                <i className="fa fa-lg fa-search mr-4"></i>
                                                <input type="text" className="form-control" name="name" placeholder="Where do you need to park?" required="required" />
                                            </div>
                                            <div className="form-group d-flex flex-row align-items-center">
                                                <i className="fa fa-lg fa-search mr-4"></i>
                                                <input type="text" className="form-control" name="name" placeholder="Where do you need to park?" required="required" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-4 bg-warning"></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="/images/parking-space-owners.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
