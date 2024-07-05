
import React from 'react';
import classNames from 'classnames';

const TextInput = ({ label, field, type, value, onChange, onBlur, error, touched }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                name={field}
                className={classNames('form-control', { 'is-invalid': touched && error })}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {touched && error ? <div className="invalid-feedback">{error}</div> : null}
        </div>
    );
};

export default TextInput;
