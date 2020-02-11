import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui'
import { fetchUsers, deleteUser, deleteAllUsers } from '../../store/adminPanel/actions'

class AdminPanel extends React.Component {
    state = { expanded: false }

    componentDidMount() {
        this.props.fetchUsers()
    }

    handleChange = id => {
        this.setState(this.state.expanded === id ? { expanded: false } : { expanded: id })
    }

    renderList = () => {
        const { users, networkError, isLoading } = this.props
        if (isLoading) {
            return (
                <div style={{ width: '100%', padding: '150px 0', textAlign: 'center' }}>
                    <CircularProgress color='#3f51b5' />
                </div>
            ) 
        } else if (!networkError) {
            if (users.length) {
                return (
                    <div style={{ margin: '2% 0' }}>
                        <button 
                            className='removeAllItemsButton' 
                            onClick={() => this.props.deleteAllUsers()}>
                            Delete All
                        </button>
                        {users.map((user, index) => (
                            <div>
                                <ExpansionPanel style={{ width: '90%', margin: '30px auto' }} expanded={this.state.expanded === user.id}>
                                    <ExpansionPanelSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        style={{ background: 'linear-gradient(rgba(240,238,240,1) 0%, rgba(212,210,212,1) 100%)', color: 'white', borderRadius: '8px' }}>
                                        <Typography><button title='Delete' className="removeUserButton" onClick={() => this.props.deleteUser(`user/${user.id}`)}><span style={{fontWeight: '700'}}>&times;</span></button><button title='Expand' className="expandButton" onClick={() => this.handleChange(user.id)}><span style={{fontWeight: '700'}}>⇳</span></button></Typography>
                                        <Typography style={{ color: 'black', fontWeight: '700', margin: '0 auto' }}>{index + 1}. {user.firstName} {user.lastName}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={{width: '100%'}}>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header">
                                                <Typography>Account Info</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                    <ul>
                                                        <li key={user.id}>Account ID: {user.id}</li>
                                                        <li key={user.email}>Email: {user.email}</li>
                                                        <li key={user.password}>Password: {user.password}</li>
                                                        <li key={user.gender}>Gender: {user.gender}</li>
                                                        <li key={user.birthday}>Birthday: {user.birthday}</li>
                                                    </ul>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </div>
                                        <div style={{width: '100%'}}>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3bh-content"
                                                id="panel3bh-header">
                                                <Typography>Work Experience</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                    {user.workplaces.map((work, index) => (
                                                        <ul>
                                                            <h4 key={index} style={{margin: '12px'}}>Workplace #{index + 1}</h4>
                                                            <li key={work.enterprise}>Enterprise: {work.enterprise}</li>
                                                            <li key={work.position}>Position: {work.position}</li>
                                                            <li key={work.years}>Period: {work.years}</li>
                                                        </ul>
                                                    ))}
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        ))}
                    </div>
                )
            } else {
                return (
                    <div className='emptyUsersListAlert'>
                        <span style={{ fontWeight: '700', margin: '0 20px 0 40px' }}>⚠</span><span style={{ fontWeight: '700' }}>There are no users:</span><span> try to add it in another tab</span>
                    </div>
                )
            }
        } else {
            return (
                <div className='badConnectAlert'>
                    <span style={{ fontWeight: '700', margin: '0 20px 0 40px' }}>✖</span><span style={{ fontWeight: '700' }}>{networkError}</span>
                </div>
            )
        }
    }

    render() {
        return this.renderList()
    }
}

const mapStateToProps = ({ userList: { users, networkError, isLoading } }) => (
    {
        users,
        networkError,
        isLoading
    }
) 

const mapDispatchToProps = {
    fetchUsers,
    deleteUser,
    deleteAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)