export default values => {
    const errors = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'gender',
      'birthday',
      'password',
      'passwordConfirmation'
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    if (values.password && values.password.length > 5) {
        if(!/[A-Z][0-9]/i.test(values.password) && !/[0-9][A-Z]/i.test(values.password)) {
          errors.password = 'Password must include at least 1 letter and 1 digit'
        }
    } else if(values.password && values.password.length <= 5) {
      errors.password = 'At least 6 symbols'
    }
    if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = 'Entered passwords are not matching'
    }
    if (values.birthday) {
      const yearsLeft = (new Date() - new Date(values.birthday))*(3.1709791983765E-11)
      const dayIntoYear = yearsLeft/4 * 0.0027397260273973
      const userOld = parseInt(yearsLeft - dayIntoYear)
      if(userOld < 18) {
        errors.birthday = 'At least 18 years old'
      }
    } else errors.birthday = 'At least 18 years old'
    return errors;
} 