import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainFormWindow from '../AddUserForm/MainFormWindow';
import AdminPanel from '../AdminPanel/AdminPanel';
import { withRouter } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs(props) {
  const classes = {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  const [routeValue, setRouteValue] = React.useState(props.history.location.pathname)

  const handleCallToRouter = (value, newValue) => {
    setRouteValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Tabs value={routeValue}
        onChange={handleCallToRouter}> "aria-label="simple tabs example">
          
          <Tab label="Add user" {...a11yProps(0)} value="/">
          <div>
           <MainFormWindow />
        </div>
        </Tab>
          <Tab label="Administration" {...a11yProps(1)} value="/admin">
          <div>
           <AdminPanel />
        </div>
        </Tab>
        </Tabs>
      </AppBar>
      <TabPanel value={routeValue} index={"/"}>
        <MainFormWindow />
      </TabPanel>
      <TabPanel value={routeValue} index={"/admin"}>
        <AdminPanel />
      </TabPanel>
    </div>
  );
}

export default withRouter(SimpleTabs)