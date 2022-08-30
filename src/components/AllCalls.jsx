
import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_CAll_URL} from "../helper";
require("babel-core/register");
require("babel-polyfill");

export const AllCalls = () =>
{
    const [list,setList] = useState([])
    useEffect( async () => {
        await axios.get(GET_CAll_URL)
            .then(
                res => {
                    setList( [...res])
                }
            ).catch(
                err => console.log(err)
            )

    },[])
    return (
        <div>

        </div>

    );
}