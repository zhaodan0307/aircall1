
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_CAll_URL} from "../helper";
import {CallDetail} from "./CallDetail.jsx";
require("babel-core/register");
require("babel-polyfill");
require("babel-preset-es2015");
import './../css/allCalls.css'
import {List} from "@mui/material";

export const AllCalls = () =>
{
    const [list,setList] = useState([])
    useEffect( async () => {
        await axios.get(GET_CAll_URL)
            .then(
                res => {
                    setList( [...res.data].filter(v=>v.is_archived === false))
                }
            ).catch(
                err => console.log(err)
            )

    },[list])
    return (
        <List className='allContainer'>
            {list.length>0 && list.map((value, index)=><div key={index}><CallDetail value={value}/></div>)}
        </List>

    );
}