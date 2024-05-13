'use client';
import React, { useState } from 'react';
import dummyData from "../../data/dummy.json";
import AssignmentDetails from './Left/AssignmentDetails';
import CandidateCard from './CandidateCard';

interface Candidate {
  name: string;
  email: string;
  score: number;
  image: string;
  introduction: string;
}

const Assignment = () => {
  const { candidates, assignment } = dummyData;

  const [assignmentData, setAssignmentData] = useState(assignment);
  const [candidatesData, setCandidatesData] = useState<Candidate[]>(candidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const handleCandidateClick = (candidate: Candidate) => {
      setSelectedCandidate(candidate);
  };

    return (
        <div className="mt-[-20px] flex flex-col gap-4">
            <div>
                <p className="text-[#C0CAD5] text-xs">Pages / <span className="text-[#464F5E]">Assignment</span></p>
                <p className="font-bold text-sm">{assignmentData.title}</p>
            </div>
            <div className="flex gap-5">
                <AssignmentDetails assignmentData={assignmentData} candidatesData={candidatesData} selectedCandidate={selectedCandidate} onCandidateClick={handleCandidateClick} />
                {selectedCandidate && <CandidateCard candidate={selectedCandidate} />}
            </div>
        </div>
    );
}

export default Assignment;
