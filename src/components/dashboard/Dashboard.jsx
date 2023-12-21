import { OperationDashboard, UserDashboard } from '../index'
import { useSelector } from 'react-redux';
function Dashboard() {

    var _profile = useSelector((state) => state.auth.profile)
    console.log(_profile);
    if (_profile == 'user') {
        return (
            <>
                <div className="flex flex-col h-full px-4 ml-5 max-md:w-full max-md:ml-0">
                    <UserDashboard />

                </div></>


        );
    }
    else if (_profile == 'operation') {

        return <OperationDashboard />
    }
    else if (_profile == 'technical') {
        <OperationDashboard />
    }
    else {

    }




}

export default Dashboard