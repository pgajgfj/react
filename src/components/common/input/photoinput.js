
import React, { useState } from 'react';

const PhotoInput = ({ label, field, onChange }) => {
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setPreview(URL.createObjectURL(file));
        onChange(e);
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <input type="file" className="form-control" accept="image/*" name={field} onChange={handleChange} />
            {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </div>
    );
};

export default PhotoInput;
