import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { AdvancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';


const onSubmit = async (values, actions) => {

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }} onSubmit={onSubmit} validationSchema={AdvancedSchema} >
        {(isSubmitting) => (
          <Form>
            <CustomInput label="UserName" name="username" type="text" placeholder="Your Username Please" />
            <CustomSelect label="Your University" name="university" placeholder="Please Choose Your University">
                <option value="">Please Choose Your University</option>
                <option value="bogazici">Bogazici University</option>
                <option value="ege">Egean University</option>
                <option value="9eylul">9 Eylul University</option>
                <option value="odtü">Orta Dogu Teknik University</option>
                <option value="itü">İstanbul Technical University</option>
                <option value="cbü">Celal Bayar University</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"/>
            <button className='button' disabled={isSubmitting} type='submit'>SAVE</button>
            <Link to='/' className='backButton'>Go Back To Main Form</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm