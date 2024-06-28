
import React, { useState } from 'react';
import TextInput from "../../common/input";
import PhotoInput from "../../common/input/photoinput";
import TextArea from "../../common/input/TextArea";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        name: '',
        phone: '',
        email: '',
        photo: null,
        hobbies: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit form ", formData);
    }

    return (
        <>
            <h1 className="text-center">Реєстрація</h1>
            <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
                <TextInput label="Прізвище" field="firstName" type="text" value={formData.firstName} onChange={handleChange} />
                <TextInput label="Ім'я" field="name" type="text" value={formData.name} onChange={handleChange} />
                <TextInput label="Телефон" field="phone" type="text" value={formData.phone} onChange={handleChange} />
                <TextInput label="Електронна пошта" field="email" type="email" value={formData.email} onChange={handleChange} />
                <PhotoInput label="Фото" field="photo" onChange={handleChange} />
                <TextArea label="Хобі" field="hobbies" value={formData.hobbies} onChange={handleChange} />
                <button type="submit" className="btn btn-primary">Реєструватися</button>
            </form>
        </>
    );
}

export default RegisterPage;
