import React, { useState } from 'react';

function Appform() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    // setForm((prev) => ({ ...prev, [name]: value }));
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        name='name'
        id='name'
        value={form.name}
        onChange={changeHandler}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='text'
        name='email'
        id='email'
        value={form.email}
        onChange={changeHandler}
      />
      <button>Submit</button>
    </form>
  );
}

export default Appform;
