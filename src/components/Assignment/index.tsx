'use client';
import React, { useState } from 'react';
import dummyData from "../../data/dummy.json";

const Assignment = () => {
    const { candidates, assignment } = dummyData;

  const [ assignmentData, setAssignmentData ] = useState(assignment);
  const [ candidatesData, setCandidatesData ] = useState(candidates);
  return (
    <div>
        <h1>{assignmentData.title}</h1>
    </div>
  )
}

export default Assignment;