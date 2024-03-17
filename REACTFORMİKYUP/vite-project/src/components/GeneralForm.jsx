import { useFormik } from 'formik';
import { BasicSchema } from '../schemas';
import { Link } from 'react-router-dom';

const onSubmit = async (values , actions) => {

    await new Promise((resolve)=>{

        setTimeout(resolve,1000)

    })

    actions.resetForm()

}


function GeneralForm() {
  const { values , errors , isSubmitting , handleChange , handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: BasicSchema,
    onSubmit,
  })


  return (
    <form onSubmit={handleSubmit}>
      <div className='inputDiv'>
        <label>Email</label>
        <input type="email" value={values.email} onChange={handleChange} id="email" placeholder="Please Type Ypur E-Mail" className={errors.email ? 'input-error' : ''} />
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>
      <div className='inputDiv'>
        <label>Age</label>
        <input type="number" value={values.age} onChange={handleChange} id="age" placeholder="Please Type Your Age" className={errors.age ? 'input-error' : ''} />
      </div>
      <div className='inputDiv'>
        <label>Password</label>
        <input type="password" value={values.password} onChange={handleChange} id="password" placeholder="Your Password Please" className={errors.password ? 'input-error' : ''} />
      </div>
      <div className='inputDiv'>
        <label>Re-Password</label>
        <input type="password" value={values.confirmPassword} onChange={handleChange} id="confirmPassword" placeholder="Your Password Again Please" className={errors.confirmPassword ? 'input-error' : ''} />
      </div>
      <button disabled={isSubmitting} type="submit" className='button'>SAVE</button>
      <Link to='/portal' className='backButton'>Go To Portal Form</Link>
    </form>
  );
}

export default GeneralForm