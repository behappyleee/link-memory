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
    // TODO
    // LoadingBar 적용 하기 !!!!
    // Link 데이터 가져오는 시간이 오래 걸릴 수 있음 !!!
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
        margin: [10, 20, 10],
      }));
    
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
                console.log('USER SAVED LINKED DATA ERR : ' + err);
            }) 
    }
   
    const showGridData = (showListData: any) => {
        const newArr = []
        for(let eachData in showListData) {
            let eachListData = showListData[eachData];
            newArr.push(
                <Grid key={eachData} xs={4}>
                    <LinkCard linkData={eachListData} linkKey={eachData} key={eachData} sx={{ display: 'inline-flex' }} />
                </Grid>

            );
        }   
        return newArr;
    }   
    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid container spacing={spacing}> */}
                <Grid container spacing={1}>
                    {showGridData(userLinkData)}
                </Grid>
            </Box>
        </div>
    )   
}

export default LinkMemory;