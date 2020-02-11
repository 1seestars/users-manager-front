import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../validation/validateFormFirstPage'
import { RenderTextField } from './RenderTextField'
import { Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { KeyboardDatePicker } from '@material-ui/pickers'

const renderDateField = ({ input, label, meta: { touched, error } }) => {
    input.value = input.value ? input.value : '2020/01/20'
        return (
            <>
                <div>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label={label}
                        autoComplete="off"
                        value={Date.now(input.value)}
                        onChange={(event, value) => input.onChange(value)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{ margin: 8,
                            width: 450
                        }}
                        {...input}
                    />
                </div>
                <div>
                    {touched && error && <span className="errorSpan">{error}</span>}
                </div>
            </>
        )
}

const renderRadioGroup = ({ input, meta: { touched, error }, ...rest }) => (
    <>
        <RadioGroup
            {...input}
            {...rest}
            value={input.value}
            onChange={(event, value) => input.onChange(value)}
        />
        {touched && error && <span className="errorSpan">{error}</span>}
    </>
)

const AddUserComponentFirstPage = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <div className='formWrapper'>
            <h2 style={{ fontWeight: '300' }}>Account info</h2>
            <form onSubmit={handleSubmit}>
                <div className='dataInputs'>
                    <div className ='formInput'>
                        <Field
                            name="firstName"
                            component={RenderTextField}
                            label="First Name"
                            type="text"
                        />
                    </div>
                    <div className ='formInput'>
                        <Field 
                            name="lastName" 
                            component={RenderTextField} 
                            label="Last Name" 
                            type="text" 
                        />
                    </div>
                    <div className ='formInput'>
                        <Field 
                            name="email" 
                            component={RenderTextField} 
                            label="Email" 
                            type="text" 
                        />
                    </div>
                    <div className ='formInput'>
                        <Field name="gender" component={renderRadioGroup}>
                            <div className='sexChoose'>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio color="primary" />}
                                    label="Male"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio color="primary" />}
                                    label="Female"
                                    labelPlacement="end"
                                />
                            </div>
                        </Field>
                    </div>
                    <div>
                        <Field 
                            name="birthday" 
                            component={renderDateField} 
                            label="Birthday" 
                        />
                    </div>
                    <div className ='formInput'>
                        <Field 
                            name="password" 
                            component={RenderTextField} 
                            label="Password" 
                            type="password" 
                        />
                    </div>      
                    <div className ='formInput'>
                        <Field 
                            name="passwordConfirmation" 
                            component={RenderTextField} 
                            label="Confirm Password" 
                            type="password" 
                        />
                    </div>
                </div>
                <div className='manipulateButtons'>
                    <Button 
                        variant="contained" 
                        type="button" 
                        disabled={pristine || submitting} 
                        onClick={reset}>
                            Clear
                    </Button>
                </div>
                <div className='manipulateButtons'>  
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        disabled={pristine || submitting}>
                            Next
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'addNewUser',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(AddUserComponentFirstPage)