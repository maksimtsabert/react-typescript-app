import React from 'react'
import { Field, FormikErrors, FormikTouched } from 'formik'
import './index.css'

interface FormValues {
    name: string,
    phone: string,
    email: string
}

interface Props {
    name: 'name' | 'phone' | 'email',
    title: string,
    type?: string,
    errors: FormikErrors<FormValues>;
    touched: FormikTouched<FormValues>;
}

export const FormInput = ({ name, title, type = 'text', errors, touched }: Props) => {
    return (<React.Fragment>
        <label htmlFor={name} className="mt-1 mb-0">{title}</label>
        <Field name={name} type={type} className={`form-control ${errors[name] && touched[name] ? 'invalid' : ''}`} />
        {errors[name] && touched[name] ? (<div className="error-message">{errors[name]}</div>) : null}
    </React.Fragment>)
}
