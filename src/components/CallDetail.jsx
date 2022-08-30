
import * as React from 'react';
import './../css/callDetail.css'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Avatar,
    Divider, IconButton,

    ListItem,
    ListItemAvatar,
    ListItemText, Tooltip,

} from "@mui/material";

import {BsFillArchiveFill, BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill} from "react-icons/bs";

import {ExpandMore} from "@mui/icons-material";
import axios from "axios";
import {GET_CAll_URL} from "../helper";
import {useEffect, useState} from "react";
import {FaTrashRestore} from "react-icons/fa";


export const CallDetail = ({value}) =>
{
    const [expand,setExpand] = useState(false)


    const archiveCall = async () =>{
       await axios.post(`${GET_CAll_URL}\\${value.id}`, {
           is_archived: true
       }).then(res=>console.log('true',res)).catch(e=>console.log(e))
    }

    const activeCall = async ()=>{
        await axios.post(`${GET_CAll_URL}\\${value.id}`, {
            is_archived: false
        }
        ).then(res=>console.log('false',res)).catch(e=>console.log(e))
    }

    const handleExpandClick = () => {

        setExpand(!expand);

    };
    useEffect(()=>{

        value.is_archived===false && setExpand(false)
    },[value.is_archived])




    return (


            <div className='detailContainer' >
                 <h5 style={{padding:'0px',margin:'0px',textAlign:'center'}}>{value.created_at.slice(0,10)+"   "+value.created_at.slice(11,19)}</h5>
                <Divider/>
                <div style={{borderRadius: '10px',marginTop:'5px'}}>
                    <Accordion sx={{backgroundColor:'darkseagreen',padding:'0px'}} expanded={expand} onChange={handleExpandClick}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{paddingLeft:'0'}}

                        >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    {value.direction === 'outbound'?<div style={value.call_type === 'missed'?{color:'darkred'}:{color:'green'}}><BsFillTelephoneOutboundFill/></div>:<div style={value.call_type === 'answered'?{color:'green'}:{color:'darkred'}}><BsFillTelephoneInboundFill/></div>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={value.direction==='outbound'?value.to:value.from} secondary={<div style={value.call_type==="answered"?{color:'green'}:{color:'darkred'}}>{value.call_type}<br/>Duration:{value.duration} min</div>} />

                            <div style={{color:'gray',fontSize:'medium',}} onClick={value.is_archived?activeCall:archiveCall}><Tooltip title={value.is_archived?"active":"archive"}><IconButton size="small">{value.is_archived?<FaTrashRestore/>:<BsFillArchiveFill/>}</IconButton></Tooltip></div>


                        </ListItem>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Divider/>
                            <div>

                                {value.direction==='inbound'?<p >TO:  {value.to}</p>:<p>FROM:  {value.from}</p>}
                                <p>VIA:   {value.via}</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>


                </div>


            </div>



    );
}