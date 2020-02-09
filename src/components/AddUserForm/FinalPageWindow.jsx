import React from 'react'
import { CircularProgress } from 'material-ui'
import { Button } from '@material-ui/core'
import { reduxForm } from 'redux-form';

const FinalPage = ({ isLoading, message, pageReset }) => {
    return (
        <div className='formWrapper'>
            {isLoading ? 
                <CircularProgress color='#3f51b5' style={{ margin: '200px' }} /> : 
                <div>
                    <div>
                        <h2 className='formSubmitMessege' style={{ margin: '100px' }}>{message}</h2>
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

export default reduxForm({
    form: 'addNewUser',
  })(FinalPage)