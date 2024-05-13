import React, { useState } from 'react';
import Image from 'next/image'

interface Candidate {
  name: string;
  email: string;
  score: number;
  image: string;
  introduction: string;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`bg-white rounded-xl ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
     <div className="flex p-3">
        <div className="w-[390px]">
            <div className="flex justify-between px-2 py-1 pr-8">
              <div className="flex gap-2">
                <img src={candidate.image} width={55} alt="Picture of the author" />
                <div className="flex flex-col">
                  <p className="font-bold text-[#3B4554]">{candidate.name}</p>
                  <p className="text-[#758499]">{candidate.email}</p>
                </div>
              </div>
              <p className={`font-bold text-lg ${candidate.score > 50 ? 'text-[#32BE5C]' : 'text-[#EDB638]'}`}>{candidate.score} %</p>
            </div>
        </div>
        <div className="bg-slate-300 w-[330px]">
          <Image src={candidate.image} width={300} height={400} alt="image"/>
        </div> 
     </div>
    </div>
  );
};

export default CandidateCard;
