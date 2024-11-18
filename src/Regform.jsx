import React from 'react';

const RegForm = ({ numFields }) => {
    const [formData, setFormData] = React.useState(Array.from({ length: numFields }, () => ({ name: '', rollno: '' })));

    const handleChange = (index, field, value) => {
        const newFormData = [...formData];
        newFormData[index][field] = value;
        setFormData(newFormData);
    };

    const fields = formData.map((fieldData, i) => (
        <div key={i}>
            <label htmlFor={`name-${i}`}>Name {i + 1}</label>
            <input type="text" id={`name-${i}`} value={fieldData.name} onChange={(e) => handleChange(i, 'name', e.target.value)} />

            <label htmlFor={`rollno-${i}`}>Roll No {i + 1}</label>
            <input type="text" id={`rollno-${i}`} value={fieldData.rollno} onChange={(e) => handleChange(i, 'rollno', e.target.value)} />
        </div>
    ));

    return (
        <div>
            {fields}
            {/* Render the rest of the form components */}
        </div>
    );
};

export default RegForm;