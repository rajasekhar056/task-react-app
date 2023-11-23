import React, { useState } from 'react'
import Items from './items';

function AppForm() {

  const [formData, setFormData] = useState({
    title: '',
    url: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    url: '',
  });

  const [items,setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
      isValid = false;
    } else {
      newErrors.title = '';
    }

    if (formData.url.trim() === '') {
      newErrors.url = 'Url is required';
      isValid = false;
    } else {
      newErrors.url = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setItems([...items,formData]);
      setFormData({
        title: '',
        url: '',
      });
    }
  }
  const handleDelete = (index) => {
    return () => {
      setItems(items.filter((item, i) => i !== index));
    }
  }
  return (
    <div className='form-container'>
      <div>
        {items.length > 0 && <Items data={items} handleDelete={handleDelete}/>}
      </div>
      <br />
      <form className='app-form' onSubmit={handleSubmit}>
        <h2>Add Something...</h2>
        <div >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder='Enter Title'
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <span style={{ color: 'red' }}>{errors.title}</span>
        </div>

        <div>
          <label htmlFor="url">Image Url:</label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder='Enter Image Url'
            value={formData.url}
            onChange={handleChange}
          />
          <br />
          <span style={{ color: 'red' }}>{errors.url}</span>

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AppForm
