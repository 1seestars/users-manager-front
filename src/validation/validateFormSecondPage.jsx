const validate = values => {
    const errors = {}
    if (!values.workplaces || !values.workplaces.length) {
      errors.workplaces = { _error: 'At least one workplace must be entered' }
    } else {
      const workplacesArrayErrors = []
      values.workplaces.forEach((workplace, workplaceIndex) => {
        const workplaceErrors = {}
        if (!workplace || !workplace.enterprise) {
          workplaceErrors.enterprise = 'Required'
          workplacesArrayErrors[workplaceIndex] = workplaceErrors
        }
        if (!workplace || !workplace.position) {
          workplaceErrors.position = 'Required'
          workplacesArrayErrors[workplaceIndex] = workplaceErrors
        }
        if (!workplace || !workplace.years) {
          workplaceErrors.years = 'Required'
          workplacesArrayErrors[workplaceIndex] = workplaceErrors
        } else if (!/^[0-9]{4,4}-[0-9]{4,4}$/i.test(workplace.years) || 
          (new Date().getFullYear() - +workplace.years.slice(0,4)) > 60 || 
          (new Date().getFullYear() - +workplace.years.slice(5)) > 60 || 
          +workplace.years.slice(0,4) > +workplace.years.slice(5)) {
            workplaceErrors.years = 'Incorrect values'
            workplacesArrayErrors[workplaceIndex] = workplaceErrors
        } 
      })
      if (workplacesArrayErrors.length) {
        errors.workplaces = workplacesArrayErrors
      }
    }
    return errors
}
  
export default validate