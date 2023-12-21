import React from 'react'
import { UserNewTicket } from '../index'
import { useSelector } from 'react-redux';
function NewTicket() {
    var _profile = useSelector((state) => state.auth.profile)
    console.log(_profile);
    if (_profile == 'user') {
        return (
            <>

                <UserNewTicket />

            </>


        );
    }
    else if (_profile == 'operation') {

        return <UserNewTicket />
    }
    else if (_profile == 'technical') {
        <OperationDashboard />
    }
}

export default NewTicket