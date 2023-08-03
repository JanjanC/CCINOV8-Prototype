import Link from 'next/link';

const Success = () => {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="text-center">
                    <h4>THANK YOU FOR PREREGISTERING!</h4>
                    <p>You will be among the first to be notified once our service becomes available</p>
                    <Link href="/" className="btn btn-primary">
                        RETURN HOME
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
