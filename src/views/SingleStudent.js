import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleStudentCard from '../components/SingleStudentCard';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
    // or .then((response) => setStudent(response)); SAME THING AS ABOVE -SHORTHAND VERSION
  }, []);

  return (
    <div>
      <SingleStudentCard student={student}>
        <h2>{student.name}</h2>
        <h3>{student.teacher}</h3>
        <h3>{student.grade}</h3>
      </SingleStudentCard>
    </div>
  );
}
