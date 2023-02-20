import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkCard from './LinkCard';
import { Grid, Box } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel} from '@material-ui/core';
import CardTest from '../../pages/test/CardTest';
import Paper from '@material-ui/core/Paper';
import { TableContainer } from '@mui/material';

function LinkMemory() {
    const [userLinkData, setUserLinkData] =  useState<Array<Object>>([]);

    useEffect(() => {
        userSavedLinkData();
    }, [])

    async function userSavedLinkData() {
        await axios.get('/api/userSavedLinkData')
            .then((res) => {
                let result = res.data.DATA_SEARCH;
                if(result == 'SUCCESS') {
                    let listData = res.data.USER_LINK_DATA;
                    setUserLinkData(
                        listData
                    );
                }
            }).catch((err) => {
                console.log('USER SAVED LINKED DATA ERR : ' + JSON.stringify(err));
            }) 
    }

    return (
        <div>
            {   
                userLinkData.map((eachData, index) => (
                    <LinkCard linkData={eachData} key={index} sx={{ display: 'inline-flex' }} />
                ))
            }
        </div>
    )   
}

export default LinkMemory;