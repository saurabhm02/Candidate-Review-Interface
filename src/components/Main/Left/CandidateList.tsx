import React from 'react';

interface Candidate {
    name: string;
    email: string;
    score: number;
    image: string;
    introduction: string;
}

interface CandidateListProps {
    candidates: Candidate[];
    selectedCandidate: Candidate | null;
    onCandidateClick: (candidate: Candidate) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, selectedCandidate, onCandidateClick }) => {
    return (
        <div className="flex flex-col gap-2 ">
            {candidates.map((candidate) => (
                <div
                    key={candidate.email}
                    className={`text-sm rounded-md ${selectedCandidate === candidate ? 'bg-gray-200' : ''} cursor-pointer`}
                    onClick={() => onCandidateClick(candidate)}
                >
                    <div className="flex justify-between px-2 py-1 pr-8">
                        <div className="flex gap-2">
                            <img src={candidate.image} width={30} alt="Picture of the author" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[#3B4554]">{candidate.name}</p>
                                <p className="text-[#758499]">{candidate.email}</p>
                            </div>
                        </div>
                        <p className={`font-bold text-lg ${candidate.score > 50 ? 'text-[#32BE5C]' : 'text-[#EDB638]'}`}>{candidate.score} %</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CandidateList;
