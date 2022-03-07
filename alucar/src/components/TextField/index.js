import React from "react";
import { ErrorMessage, useField, } from "formik";

export const TextField = ({label,...props}) => {
    const [field, meta] = useField(props);

    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input className={`form__input ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="off" />
            <ErrorMessage component="p" name={field.name} className="error body-small" />
        </div>
    )
}