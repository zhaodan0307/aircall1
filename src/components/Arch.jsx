
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_CAll_URL, RESET} from "../helper";
import {CallDetail} from "./CallDetail.jsx";
require("babel-core/register");
require("babel-polyfill");
require("babel-preset-es2015");
import './../css/allCalls.css'
import {Button, List} from "@mui/material";

export const Arch = () =>
{
    const [list,setList] = useState([])
    useEffect( async () => {
        await axios.get(GET_CAll_URL)
            .then(
                res => {
                    setList( [...res.data].filter(v=>v.is_archived === true))
                }
            ).catch(
                err => console.log(err)
            )

    },[list])

    const activeAll = async () => {
       await axios.get(RESET)
           .then( res => console.log(res))
           .catch( err => console.log(err))
    }


    return (
        <List className='allContainer'>
            <Button onClick={activeAll}
                    variant="contained" color="success" sx={{padding:'10px',width:'80%',margin:'20px auto'}}>
                Active All Calls
            </Button>
            {list.length>0 && list.map((value, index)=><div key={index}><CallDetail value={value}/></div>)}
        </List>

    );
}