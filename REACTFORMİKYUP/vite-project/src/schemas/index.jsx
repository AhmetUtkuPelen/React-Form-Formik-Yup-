import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/


export const BasicSchema = yup.object().shape({

    email : yup.string().email('Use A Valid E-Mail Address').required('E-Mail Is Required'),
    age : yup.number().positive('Positive Number Please').integer('Whole Number Please').required('Age IS Required'),
    password : yup.string().min(6,'Minimum 6 Characters').matches(passwordRules,{message :'1 LowerCase , 1 UpperCase and 1 Number Please'}).required('Password Is Required'),
    confirmPassword : yup.string().oneOf([yup.ref('password')],'Passwords Doesnt Match').required('Re-Password Is Required'),
})


export const AdvancedSchema = yup.object().shape({
    username: yup.string().min(3, 'Username Has To Be 3 Characters Long At Least').required('Username Is Required'),
    university: yup.string().oneOf(['bogazici', 'ege', '9eylul' , 'odtü', 'itü','cbü'], 'Please Choose Your University').required('Please Choose Your University'),
    isAccepted: yup.boolean().oneOf([true], 'Please Accept Use Of Term'),
})