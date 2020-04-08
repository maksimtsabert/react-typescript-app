import React, { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { FormInput } from './form-input'
import { Schema } from '../../utils/validation-rules'
import { defaultConfig } from '../../utils/form-config'
import { User } from '../../types'
import './index.css'

interface Props {
    callBack: (values: any) => void, //?
    userDetails?: User,
    show?: boolean
}

interface FormValues {
    name: string,
    phone: string,
    email: string
}

export const DefaultForm = ({ callBack, userDetails, show = true }: Props) => {
    const config = !userDetails ? defaultConfig : userDetails
    const [users] = useState(config)

    if (!show) {
        return null
    }

    return (
        <Formik
            initialValues={{ ...users }}
            enableReinitialize={true}
            validationSchema={Schema}
            onSubmit={(values :FormValues) => {
                callBack(values)
            }}>
            {({ errors, touched }: FormikProps<FormValues>) => (
                <Form>
                    <FormInput name='name' title='Name' errors={errors} touched={touched} />
                    <FormInput name='phone' title='Phone' errors={errors} touched={touched} />
                    <FormInput name='email' type='email' title='Email Address' errors={errors} touched={touched} />
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
