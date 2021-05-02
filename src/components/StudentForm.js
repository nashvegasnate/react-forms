import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from '../helpers/data/StudentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || 0,
    firebaseKey: firebaseKey || null
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
    if (student.firebaseKey) {
      // make call to updateStudent to update student and rerender the DOM
      updateStudent(student).then(setStudents); // this is the same as below, just shorthand.
      // updateStudent(student).then((studentArray) => setStudents(studentArray));
    } else {
      addStudent(student).then(setStudents); // this is the same as below, just shorthand.
      // addStudent(student).then((studentArray) => setStudents(studentArray));

      // clear inputs
      setStudent({
        name: '',
        teacher: '',
        grade: 0,
        firebaseKey: null
      });
    }
  };

  return (
    <div className='student-form'>
      <Form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={student.name}
            type='text'
            placeholder='Enter a Student Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="teacher">Teacher:</Label>
          <Input
            name='teacher'
            id='teacher'
            value={student.teacher}
            type='text'
            placeholder='Enter a Teacher Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="grade">Grade:</Label>
          <Input
            name='grade'
            id='grade'
            value={student.grade}
            type='number'
            placeholder='Enter a Grade'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
