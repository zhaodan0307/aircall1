
import * as React from 'react';
import './../css/callDetail.css'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Avatar,
    Divider, IconButton,

    ListItem,
    ListItemAvatar,
    ListItemText, Tooltip,
    Typography
} from "@mui/material";

import {BsFillArchiveFill, BsFillTelephoneInboundFill, BsFillTelephoneOutboundFill} from "react-icons/bs";

import {ExpandMore} from "@mui/icons-material";
import axios from "axios";
import {GET_CAll_URL} from "../helper";


export const CallDetail = ({value}) =>
{


    const archievCall = async () =>{
       await axios.post(`${GET_CAll_URL}\\${value.id}`, {
           is_archived: true
       }).then(res=>console.log(res)).catch(e=>console.log(e))
    }

    return (


            <div className='detailContainer' >
                 <h5 style={{padding:'0px',margin:'0px',textAlign:'center'}}>{value.created_at.slice(0,10)+"   "+value.created_at.slice(11,19)}</h5>
                <Divider/>
                <div style={{borderRadius: '10px',marginTop:'5px'}}>
                    <Accordion sx={{backgroundColor:'darkseagreen',padding:'0px'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    {value.direction === 'outbound'?<div style={value.call_type === 'missed'?{color:'darkred'}:{color:'green'}}><BsFillTelephoneOutboundFill/></div>:<div style={value.call_type === 'answered'?{color:'green'}:{color:'darkred'}}><BsFillTelephoneInboundFill/></div>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={value.direction==='outbound'?value.to:value.from} secondary={<div style={value.call_type==="answered"?{color:'green'}:{color:'darkred'}}>{value.call_type}<br/>Duration:{value.duration} min</div>} />

                            <div style={{color:'gray',fontSize:'medium',}} onClick={archievCall}><Tooltip title="Delete"><IconButton><BsFillArchiveFill/></IconButton></Tooltip></div>


                        </ListItem>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Divider/>
                            <div>

                                {value.direction==='inbound'?<Typography >To:  {value.to}</Typography>:<Typography >From:  {value.from}</Typography>}
                                <Typography>VIA:{value.via}</Typography>
                            </div>
                        </AccordionDetails>
                    </Accordion>


                </div>


            </div>



    );
}