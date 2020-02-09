import React from 'react'
import TextField from '@material-ui/core/TextField'

export const RenderTextField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
  <>
    <div>
      <TextField 
        label={label} 
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...input} 
        variant="outlined"
        style={{ 
          margin: 8,
          width: 450
        }}
      />
    </div>
    <div>
      {touched && error && <span className="errorSpan">{error}</span>}
    </div>
  </>
)


