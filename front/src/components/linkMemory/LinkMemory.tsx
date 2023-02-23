import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkCard from './LinkCard';
import { Container, Typography } from "@material-ui/core";
import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel} from '@material-ui/core';
import CardTest from '../../pages/test/CardTest';
import { TableContainer } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function LinkMemory() {
    const [userLinkData, setUserLinkData] =  useState<Array<Object>>([]);
    const [spacing, setSpacing] = useState(0);
    
    useEffect(() => {
        userSavedLinkData();
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    // async function userSavedLinkData() {
    const userSavedLinkData = async() => {    
        await axios.get('/api/userSavedLinkData')
            .then((res) => {
                let result = res.data.DATA_SEARCH;
                if(result == 'SUCCESS') {
                    let listData = res.data.USER_LINK_DATA;
                    setUserLinkData(listData);
                    setSpacing(Math.ceil(listData.length/3));    
                    
                }
            }).catch((err) => {
                console.log('USER SAVED LINKED DATA ERR : ' + JSON.stringify(err));
            }) 
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={spacing}>
                    {   userLinkData && 
                        userLinkData.map((eachData, index) => (
                            <Grid xs={4} key={index}>    
                                <LinkCard linkData={eachData} key={index} sx={{ display: 'inline-flex' }} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )   
}

export default LinkMemory;