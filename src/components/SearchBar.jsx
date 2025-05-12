import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import clsx from 'clsx';
import css from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

    const handleSubmit = (values, actions) => {
        const trimmedQuery = values.query.trim();

        if (trimmedQuery === '') {
            toast.error("Please enter text to search for images.");
            return;
        }

        onSearch(trimmedQuery);
        actions.resetForm();
    }

    return (
        <Formik
      initialValues={{ query: '' }}
      onSubmit={handleSubmit}
        >
        <Form className={clsx(css.form)} >
        <Field className={clsx(css.field)} type="text" name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos" />
        <button className={clsx(css.button)} type="submit">Search</button>
            </Form>
    </Formik>
    ) 
}