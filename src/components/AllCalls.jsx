
import * as React from 'react';
import {useEffect} from "react";
import axios from "axios";
import {GET_CAll_URL} from "../helper";

export const AllCalls = () =>
{
    let callList = []
    useEffect( () => {
         axios.get(GET_CAll_URL)
            .then(
                res => {
                    callList = [...res]
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