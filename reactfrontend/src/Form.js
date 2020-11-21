import React, {useEffect, useState} from 'react'
import './Form.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";

function handleChange(e){
    // this.setState({[e.target.name]: e.target.value})
    console.log(e.target)
}

function Form () {
    useEffect(() => {
        
        const postData = async () => {
            var check = await axios.post('localhost:5000/reports/crime', {
                "description" : "I am very very Scared from Sujal Gera who's the most wanted man in Universe Part 3",
                "arealocation" : [{"lat": 37.365759, "lng": -121.9233569}],
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI5NjlmMTQ0ZTExNDJhNmViNjQ2OWIiLCJuYW1lIjoiSGFyZGlrIFVwYWRoeWF5IiwiZW1haWwiOiJoYXJkaWtraXhAZ21haWwuY29tIiwiaWF0IjoxNjA1OTg2ODAxLCJleHAiOjE2MDYwNzMyMDF9.jQrqiaGbCXKDMAVcSzh3mKlG69a1W7nX6bT10-T7EiQ"
            }).then((res) => {
                console.log(res);
            })
        }
        
        postData()
    }, [])

    // function changes(event) {
    //     console.log(event)
    // }

    return (
        <div className="form">
            <div className="header">
		        <h2>REPORT AN INCIDENT</h2>
		        <h4>Thank you for using HELPIFY. We are here <br/> to help you. If you have an emergency,<br/> make sure you call 100 first! </h4>
	        </div>
	        <div className="c1">
	            <div className="below-header">
                    <h2>Description of Incident</h2>
                    <p><span id="sp1">* </span>Please describe in brief...</p>
	            </div>

                <div className="enter-text" id="hello" value={''} onChange={(e) => handleChange(e)}>
                    <textarea id="textarena"></textarea>
                </div>

            <div className="submit">
                <a id="submit" href="#">SUBMIT</a>
            </div>

	</div>
        </div>
    )
}

export default Form ;