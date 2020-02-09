import React from "react";
import { Tabs, Tab } from 'material-ui';
import { withRouter } from "react-router-dom";
import MainFormWindow from './AddUserForm/MainFormWindow'
import AdminPanel from './AdminPanel/AdminPanel'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

class NavTabs extends React.Component {
    state = {
        routeValue: this.props.history.location.pathname
    }

    handleCallToRouter = (value) => {
        this.props.history.push(value);
        this.setState({ routeValue: value })
    }

    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Tabs
                        value={this.props.history.location.pathname}
                        onChange={this.handleCallToRouter}>
                        <Tab
                            style={{ background: '#3f51b5' }}
                            label="Add User"
                            value="/">
                        </Tab>
                        <Tab
                            style={{ background: '#3f51b5' }}
                            label="Administration"
                            value="/admin">
                        </Tab>
                    </Tabs>   
                </AppBar> 
                <TabPanel value={this.state.routeValue} index={"/"}>
                    <MainFormWindow />
                </TabPanel>
                <TabPanel value={this.state.routeValue} index={"/admin"}>
                    <AdminPanel />
                </TabPanel>
            </div>
        )
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

export default withRouter(NavTabs)