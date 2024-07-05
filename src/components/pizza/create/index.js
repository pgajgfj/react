import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextInput from "../../common/textInput";
import MultiFileInput from "../../common/multiFileInput";
import './PizzaForm.css';

const PizzaCreatePage = () => {

    const initValue = {
        name: "",
        description: "",
        images: []
    };

    const registerSchema = yup.object({
        name: yup.string()
            .required("Вкажіть назву"),
        description: yup.string()
            .required("Вкажіть опис"),
        images: yup.array()
            .min(1, 'Фото є обов\'язковими')
            .of(
                yup.mixed().test(
                    'fileType',
                    'Неправильний формат файлу',
                    value => value && ['image/jpeg', 'image/png', 'image/webp'].includes(value?.type)
                )
            ),
    });

    const handleFormikSubmit = (values) => {
        console.log("Submit form ", values);
    };

    const formik = useFormik({
        initialValues: initValue,
        onSubmit: handleFormikSubmit,
        validationSchema: registerSchema
    });

    const { values, touched, errors, handleSubmit, handleChange, setFieldValue } = formik;

    const onChangeFileHandler = (files) => {
        setFieldValue("images", files);
    };

    return (
        <>
            <h1 className={"text-center"}>Додати піцу</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>
                <TextInput label={"Назва"} field={"name"} type={"text"}
                           value={values.name}
                           error={errors.name}
                           onChange={handleChange} />

                <TextInput label={"Опис"} field={"description"} type={"text"}
                           value={values.description}
                           error={errors.description}
                           onChange={handleChange} />

                <MultiFileInput label={"Фото"} field={"images"}
                                value={values.images}
                                error={errors.images}
                                onChange={onChangeFileHandler} />

                <button type="submit" className="btn btn-primary">Створити</button>
            </form>
        </>
    );
};

export default PizzaCreatePage;
