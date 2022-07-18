import React from "react";
import { useParams } from "react-router-dom";

const Appointment = ()=>{

    const { id } = useParams();
  const [appointDetails, setAppointDetails] = React.useState({});

  // basis this id: a network

  React.useEffect(() => {
    fetch(`http://localhost:3001/appoints/${id}`)
      .then((res) => res.json())
      .then((res) => {setAppointDetails(res); console.log("response",res)});
  }, [id]);

  return <div>
    <div>
   <b>Name:</b>{appointDetails.name}
    </div>
    <div>
    <b>Age:</b> {appointDetails.age}
    </div>
    <div>
    <b>Appointment Details :</b>{appointDetails.appointmentdetails}
    </div>
    <div>
    <b>Time:</b>{appointDetails.time}
    </div>
    <div>
    <b>Date:</b>{appointDetails.date}
    </div>
    <div>
    <b>Gender:</b>{appointDetails.gender}
    </div>
  </div>;
};


export default Appointment;