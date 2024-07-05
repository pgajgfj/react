import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const MultiFileInput = ({ label, field, value, error, onChange }) => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
        onChange(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png, image/webp',
        onDrop,
    });

    return (
        <div className="form-group">
            <label>{label}</label>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} name={field} />
                <p>Перетягніть файли сюди або натисніть, щоб вибрати файли</p>
            </div>
            <div className="selected-files">
                {files.map((file, index) => (
                    <div key={index}>
                        {file.name}
                    </div>
                ))}
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default MultiFileInput;
