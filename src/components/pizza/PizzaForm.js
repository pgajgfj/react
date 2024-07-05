// src/components/pizza/PizzaForm.js
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextInput from '../common/index';
import TextArea from '../common/input/TextArea';
import PhotoInput from '../common/input/photoinput';
import classNames from 'classnames';
import './PizzaForm.css';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    price: yup.number().required('Price is required').min(0, 'Price must be a positive number'),
    photo: yup.array().min(1, 'At least one photo is required'),
});

const PizzaForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            photo: [],
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="pizza-form">
            <TextInput
                label="Pizza Name"
                field="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && formik.errors.name}
            />
            <TextArea
                label="Description"
                field="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && formik.errors.description}
            />
            <TextInput
                label="Price"
                field="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && formik.errors.price}
            />
            <PhotoInput
                label="Photo"
                field="photo"
                photos={formik.values.photo}
                setPhotos={(photos) => formik.setFieldValue('photo', photos)}
                error={formik.touched.photo && formik.errors.photo}
            />
            <button type="submit" className="btn btn-primary">
                Add Pizza
            </button>
        </form>
    );
};

export default PizzaForm;
