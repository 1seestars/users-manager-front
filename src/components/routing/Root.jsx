import 'date-fns'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, /*Route*/ } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import NavTabs from './NavBar'

const Root = ({ store }) => (
    <MuiThemeProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Provider store={store}>
                <Router>
                    <NavTabs />
                </Router>
            </Provider>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>
)

export default Root