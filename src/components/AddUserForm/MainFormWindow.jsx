import React from 'react'
import AddUserComponentFirstPage from './FirstPageWindow'
import AddUserComponentSecondPage from './SecondPageWindow'
import { fetchUsers } from '../../store/adminPanel/actions'
import { connect } from 'react-redux'
import FinalPage from './FinalPageWindow'

class MainFormWindow extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            page: 1,
            isLoading: false,
            message: "New user added!"
        }
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 })
    }
    
    previousPage = () => {
        this.setState({ page: this.state.page - 1 })
    }

    pageReset = () => {
        this.setState({ page: 1 })
    }

    onSubmit = values => {
        this.props.fetchUsers('http://localhost:4000/user', 'POST', values)
        this.nextPage()
    }

    render() {
        const { page } = this.state
        return (
            <div>
                {page === 1 && <AddUserComponentFirstPage onSubmit={this.nextPage} />}
                {page === 2 && <AddUserComponentSecondPage previousPage={this.previousPage} onSubmit={values => this.onSubmit(values)} />}
                {page === 3 && <FinalPage isLoading={this.state.isLoading} message={this.state.message} pageReset={this.pageReset} />}
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUsers
}

export default connect(null, mapDispatchToProps)(MainFormWindow)