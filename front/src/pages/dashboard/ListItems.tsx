import React, { useEffect, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LinkMemory from '../../components/linkMemory/LinkMemory';
import DashBoardMainContents from './DashBoardMainContents';
import DashBoardMain from './DashBoardMain';

function MainListItems(props: any): any {
  const [contentsIndex, setContentsIndex] = useState<number>(0);  
  const dashboardContentsIndex = (contentsIndex: number) => {
    // Index 0 - 저장 된 Link 보여주는 페이지, Index 1 - Link 등록 페이지
    setContentsIndex(contentsIndex);
    props.contentsIndex(contentsIndex);
  }

  return (
    <React.Fragment>

      <ListItemButton onClick={() => {dashboardContentsIndex(0)}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="저장 된 Link" />
        {/* <DashBoardMainContents contents="SAVED_LINK"/> */}
      </ListItemButton>

      <ListItemButton onClick={() => {dashboardContentsIndex(1)}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Link 등록" />
      </ListItemButton>

      <ListItemButton onClick={() => {dashboardContentsIndex(2)}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="1:1 문의" />
      </ListItemButton>

      <ListItemButton onClick={() => {dashboardContentsIndex(3)}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="자주 묻는 질문" />
      </ListItemButton>

      {/* <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton> */}
    </React.Fragment>
  )
}

export default MainListItems;

export const secondaryListItems = (
  <React.Fragment>
    {/* FAQ or Error Report 기능 나중에 구현 하여 보기 !!! */}
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}

  </React.Fragment>
);