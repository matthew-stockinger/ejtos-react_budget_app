import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch} = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    };

    return (
        <select className="form-select" style={{backgroundColor:"#A7E0A0",color:"white"}} name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
            <option style={{backgroundColor:"#A7E0A0", color:"black"}} value="">Currency</option>
            <option style={{backgroundColor:"#A7E0A0", color:"black"}} value="$">$ Dollar</option>
            <option style={{backgroundColor:"#A7E0A0", color:"black"}} value="£">£ Pound</option>
            <option style={{backgroundColor:"#A7E0A0", color:"black"}} value="€">€ Euro</option>
            <option style={{backgroundColor:"#A7E0A0", color:"black"}} value="₹">₹ Ruppee</option>
        </select>
    );
};

export default Location;