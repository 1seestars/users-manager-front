import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from '../../validation/validateFormSecondPage';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { red } from '@material-ui/core/colors'
import { RenderTextField } from './RenderTextField';
import { Button, Fab } from '@material-ui/core';

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul className='activityList'>
    {fields.map((workplace, index) => (
      <li key={index}>
        <div className='workInfoHeader'>
          <h4>Workplace #{index + 1}</h4>
          <DeleteForeverIcon 
            type="button"
            title="Remove Item"
            onClick={() => fields.remove(index)}
            style={{ color: red[800], cursor: 'pointer' }}
            className='removeButton'
          />
        </div>
        <Field
          name={`${workplace}.enterprise`}
          type="text"
          component={RenderTextField}
          label="Enterprise"
        />
        <Field
          name={`${workplace}.position`}
          type="text"
          component={RenderTextField}
          label="Position"
        />
        <Field
          name={`${workplace}.years`}
          type="text"
          placeholder="ex. 2005-2007"
          component={RenderTextField}
          label="Years of activity"
        />
      </li>
    ))}
    <li>
      <Fab size="medium" color="secondary" aria-label="add" style={{fontSize: '30px', margin: '10px', textAlign: 'center', lineHeight: '30px', border: 'none'}} type="button" onClick={() => fields.push({})}>
        +
      </Fab><br />
      {submitFailed && error && <div className='workNumberError'><span style={{ margin: '0 20px 0 40px' }}>{`( ❗ )`}</span><span style={{fontWeight: '700'}}>{error}</span></div>}
    </li>
  </ul>
)

const AddUserComponentSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <div className='formWrapper'>
      <h2 style={{ fontWeight: '300' }}>Work experience</h2>
      <form onSubmit={handleSubmit}>
        <div className='dataInputs'>
          <FieldArray name="workplaces" component={renderMembers} />
        </div>
        <div className='manipulateButtons'>
          <Button 
            variant="contained" 
            type="button" 
            className="previous" 
            onClick={previousPage}>
            Previous
          </Button>
        </div>
        <div className='manipulateButtons'>  
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            disabled={pristine || submitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'addNewUser',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(AddUserComponentSecondPage)