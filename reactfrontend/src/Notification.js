import { Card, CardContent } from '@material-ui/core'
import React , {useState, useEffect}from 'react'
import './Notification.css'

function Notification() {
    const [response, setResponse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reports/crime')
        .then((response) => response.json())
        .then((data) => {
            setResponse(data)
        })
    },[])

    return (
        <div className="hlo"> 
            { response.forEach((res) => {
                console.log(res._id)
            })}  
            {/* {console.log(response[0].description)} */}
            {/* {console.log(response[0].arealocation)}
            {console.log(response[0].userid.name)} */}
            {/* <p>Hello world</p>             */}
            <div>
                {response.map((res) => (
                    <Card>
                        <CardContent> 
                            <h3>{res.description}</h3>
                            <p>{res.userid.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
} 

export default Notification
