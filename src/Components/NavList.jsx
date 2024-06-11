import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Link} from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    
    <Link to = "/dashboard">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link to ="/dashboard/patient">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>

    <Link to ="/dashboard/wards">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Wards" />
      </ListItemButton>
    </Link> 

    <Link to ="/dashboard/others">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Other" />
      </ListItemButton>
    </Link>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    
  </React.Fragment>
);