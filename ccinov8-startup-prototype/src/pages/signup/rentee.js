import PreregisterForm from '@/components/preregister-form';
import useLog from '@/hooks/useLog';

export default function Rentee() {
    useLog('Parking Owner Sign Up Page');

    return (
        <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">RENT OUT YOUR PARKING SPACE</h2>
                        <div className="row">
                            <PreregisterForm
                                type="Parking Owner"
                                redirectType="renter"
                                redirectMessage="WANT TO LOOK FOR PARKING SPACES INSTEAD?"
                            ></PreregisterForm>

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
