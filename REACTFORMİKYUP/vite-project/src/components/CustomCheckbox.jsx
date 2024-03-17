import { useField } from "formik"



function CustomCheckbox({label,...props}) {

const [field , meta] = useField(props)

return (
<>
<div className="checkbox">
 <input {...field} {...props} className={meta.error ? 'input-error' : ''} />
 <span>I Accept Terms Of Use</span>
</div>
 {meta.error && <div className="error">{meta.error}</div>}
</>
  )
}

export default CustomCheckbox
