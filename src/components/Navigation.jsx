import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useEffect} from "react";
import PhoneIcon from '@mui/icons-material/Phone';




export const Navigation = ({setMode}) => {
    const [value, setValue] = React.useState("all");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>setMode(value),[value])

    return(
        <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            aria-label="secondary tabs "
            TabIndicatorProps={{
                style: {
                    backgroundColor: "green",
                    
                }
            }}
        >
            <Tab icon={<PhoneIcon />} iconPosition="start" value="all" label="All Calls" />
            <Tab value="arch" label="Archived" />
        </Tabs>
    )
}