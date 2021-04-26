import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent } from './helpers/data/StudentData';

const StudentForm = ({ formTitle }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      // [e.target.name]: e.target.value,  - OR -
      [e.target.name]:
        e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add student to firebase
    addStudent(student);
  };

  return (
    <div className='student-form'>
      <form
        id='addStudentForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
      <h2>{formTitle}</h2>
      <div>
        <label>Name:</label>
        <input
          name='name'
          value={student.name}
          type='text'
          placeholder='Enter Student Name'
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Teacher:</label>
        <input
          name='teacher'
          value={student.teacher}
          type='text'
          placeholder='Enter Teacher Name'
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Grade:</label>
        <input
          name='grade'
          value={student.grade}
          type='number'
          placeholder='Enter Grade'
          onChange={handleInputChange}
        />
      </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired
};

export default StudentForm;
