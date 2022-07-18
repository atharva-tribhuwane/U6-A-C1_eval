import React from "react";

const Appointments = () => {
    const [appoints, setAppoints] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [name,setName] = React.useState("");
    const [age,setAge] = React.useState("");
    const [details,setDetails] = React.useState("");
    const [time,setTime] = React.useState("");
    const [date,setDate] = React.useState("");
    const [gender,setGender] = React.useState("");
    const getData = () => {
        fetch(`http://localhost:3001/appoints`)
            .then((res) => res.json())
            .then((res) => {
                setAppoints(res);
                console.log(res);
                setLoading(false);
            })
    }
    const postData = ()=>{
        let payLoad={
            name:name,
            age:age,
            appointmentdetails:details,
            time:time,
            date:date,
            gender:gender
        }
        fetch(`http://localhost:3001/appoints`,{
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log("successfulll");
        })
        .catch((err)=>console.log(err))
    }
    React.useEffect(() => {
        setLoading(true)
        getData();
    }, [])
    return (
        <>
            <h1>Set Appointment</h1>
            <input type="text" placeholder="Name..." name="nam" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="age..." name="ag" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" placeholder="AppointmentDetails..." name="appoindet" value={details} onChange={(e)=>setDetails(e.target.value)}/>
            <input type="time" placeholder="Time..." name="tim" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <input type="date" placeholder="Date..." name="dat" value={date} onChange={(e)=>setDate(e.target.value)}/>
            <input type="text" placeholder="Gender..." name="gend" value={gender} onChange={(e)=>setGender(e.target.value)}/>
            <button onClick={postData}>SetAppointment</button>
            <hr />
            <h1>Appointments:</h1>
            <hr />
            {
                appoints.map((ele) => {
                    return (
                        <h1 key={ele.id}>
                            {ele.name}
                        </h1>
                    )
                })
            }
        </>
    )
}

export default Appointments;