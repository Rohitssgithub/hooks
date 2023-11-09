// import React from 'react'
// import { Field, ErrorMessage } from 'formik'
// // import { TextField } from '@mui/material'
// import TextError from './TextError/TextError';
// import TextField from '@mui/material/TextField';
// import styles from './Input.module.scss'

// const Input = (props) => {
//     const { label, name, type, icon, ...rest } = props;
//     return (
//         <div className={styles.inputControl}>
//             <label htmlFor={name}>{label}</label>
//             <Field name={name} type={type} {...rest}
//                 className={styles.inputField}
//             >
//                 {
//                     ({ field }) => {
//                         return (
//                             <TextField
//                                 {...field}
//                                 id={name}
//                                 label={label}
//                                 variant="standard"
//                                 className={styles.inputField}
//                             />
//                         )
//                     }
//                 }
//             </Field>
//             <ErrorMessage name={name} component={TextError} />
//         </div>
//     )
// }

// export default Input


import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError/TextError';
import styles from './Input.module.scss';

const Input = (props) => {
    const { label, name, type, icon, ...rest } = props;
    return (
        <div className={styles.inputControl}>
            <label htmlFor={name}>{label}</label>
            <Field name={name} type={type} {...rest} className={styles.inputField}>
                {({ field }) => {
                    return (
                        <input
                            {...field}
                            id={name}
                            type={type}
                            placeholder={label}
                            className={styles.inputField}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default Input;
