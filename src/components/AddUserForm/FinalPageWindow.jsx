import React from 'react'
import { CircularProgress } from 'material-ui'
import { Button } from '@material-ui/core'
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

const FinalPage = ({ isLoading, networkError, pageReset }) => {
    return (
        <div className='formWrapper'>
            {isLoading ? 
                <CircularProgress color='#3f51b5' style={{ margin: '200px' }} /> : 
                <div>
                    <div>
                        <h2 className='formSubmitMessege' style={{ margin: '100px' }}>{networkError ? networkError : 'New users added!'}</h2>
                    </div>
                    <div>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={pageReset}>
                            Back to main page    
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        isLoading: state.addUserPage.isLoading,
        networkError: state.addUserPage.networkError
    }
) 

export default compose(reduxForm({ form: 'addNewUser' }), connect(mapStateToProps, null))(FinalPage)