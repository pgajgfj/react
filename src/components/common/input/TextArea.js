
import React from 'react';

const TextArea = ({ label, field, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <textarea className="form-control" name={field} value={value} onChange={onChange}></textarea>
        </div>
    );
};

export default TextArea;
