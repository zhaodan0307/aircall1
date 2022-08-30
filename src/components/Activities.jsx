
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_CAll_URL} from "../helper";
import {CallDetail} from "./CallDetail.jsx";
require("babel-core/register");
require("babel-polyfill");
require("babel-preset-es2015");
import './../css/allCalls.css'
import {Button, List, Paper} from "@mui/material";



export const Activities = () =>
{
    const [list,setList] = useState([])

    useEffect( async () => {
        await axios.get(GET_CAll_URL)
            .then(
                res => {
                    setList( [...res.data].filter(v=>v.is_archived === false)


                        )

                }
            ).catch(
                err => console.log(err)
            )

    },[list])


    const archiveAll = async () =>{
        await list.forEach((value) => {
             axios.post(`${GET_CAll_URL}\\${value.id}`, {
                is_archived: true
            }).then(res=>console.log('true',res)).catch(e=>console.log(e))
        })


    }

    return (
        <section className='allContainer' >
            <Button onClick={archiveAll}
                variant="contained" color="success" sx={{padding:'10px',width:'80%',margin:'20px auto'}}>
                Archive All Calls
            </Button>
            <List >
                {list.length>0 && list.map((value, index)=><div key={index}><CallDetail value={value} index={index}/></div>)}
            </List>

        </section>


    );
}