
import React, {useEffect, useState} from 'react';
import RestaurantProfile from '../components/RestaurantProfile/RestaurantProfile'
import RetailProfile from '../components/RetailProfile/RetailProfile'
import UserProfile from '../components/UserProfile/UserProfile'
import API from '../utils/API';

function AccountPage() {
  // Creating states and setters
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consumer, setConsumer] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [open, setOpen] = useState();
  const [address, setAddress] = useState();
  const [masks, setMasks] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [dineIn, setDineIn] = useState();
  const [tables, setTables] = useState();
  const [outsideDining, setOutsideDining] = useState();
  const [takeOut, setTakeOut] = useState();
  const [driveThru, setDriveThru] = useState();
  const [curbside, setCurbside] = useState();

    // runs when page loads
  useEffect(() => {
    sessionCheck()
},)
// Check if the user is signed in on the front end by checking backend
function sessionCheck() {
    API.SessionCheck().then((res) => {
        // If the response gets a successful response
        if (res.status === 200) {
            // setIsLoggedIn(true);
            setConsumer(res.data.consumer)
            setEmail(res.data.username)
            setPassword(res.data.password)
            // If the account isn't a consumer
            if(!consumer){
                setBusinessType(res.data.businessType)
                setEmail(res.data.username)
                setPassword(res.data.password)
                setCompanyName(res.data.companyName)
                setAddress(res.data.address)
                setCity(res.data.city)
                setState(res.data.state)
                setZip(res.data.zip)
                setOpen(res.data.open)
                setMasks(res.data.masks)
                setCurbside(res.data.curbside)
                setDriveThru(res.data.driveThru)
                setDineIn(res.data.dineIn)
                setTables(res.data.tables)
                setTakeOut(res.data.takeOut)
                setOutsideDining(res.data.outsideDining)
            }
        }
        else {
            console.log("user failed to login");
        }
    })
}
    return (
        <div>
            <div>
                {/* Using ternary operators to conditionally render the correct profile page */}
                {consumer ? <UserProfile password={password} email={email}/> : null}
                {businessType === 'restaurant' ? <RestaurantProfile  password={password} email={email} companyName={companyName} open={open} address={address} city={city} state={state} zip={zip} masks={masks} curbside={curbside} driveThru={driveThru} dineIn={dineIn} tables={tables} takeOut={takeOut} outsideDining={outsideDining}/> : null}
                {businessType === 'retail' ? <RetailProfile password={password} email={email} companyName={companyName} open={open} address={address} city={city} state={state} zip={zip} masks={masks} curbside={curbside}/> : null}
            </div>
        </div>
    )
}
export default AccountPage; 