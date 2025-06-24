
import React from "react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  context?: string;
  role?: string;
  duration?: string;
  tools?: string[];
  children: React.ReactNode;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  context,
  role,
  duration,
  tools,
  children,
}) => {
  return (
    <article className="flex bg-[#FFF8F2] p-10 rounded-3xl max-sm:flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <div className="flex-1 pr-8 max-sm:pr-0 max-sm:mb-6">
        <h3 className="text-[#403930] text-[32px] font-semibold mb-2">
          {title}
        </h3>
        <p className="text-[#594F43] text-2xl font-medium mb-4">
          {description}
        </p>
        
        {context && (
          <div className="mb-4">
            <h4 className="text-[#403930] text-lg font-semibold mb-2">Context</h4>
            <p className="text-[#594F43] text-base leading-relaxed">{context}</p>
          </div>
        )}
        
        {role && (
          <div className="mb-4">
            <h4 className="text-[#403930] text-lg font-semibold mb-2">Role</h4>
            <p className="text-[#594F43] text-base">{role}</p>
          </div>
        )}
        
        {duration && (
          <div className="mb-4">
            <h4 className="text-[#403930] text-lg font-semibold mb-2">Duration</h4>
            <p className="text-[#594F43] text-base">{duration}</p>
          </div>
        )}
        
        {tools && tools.length > 0 && (
          <div className="mb-6">
            <h4 className="text-[#403930] text-lg font-semibold mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-[#F0E6D6] text-[#403930] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <a href="#" className="text-[#4E5E80] text-2xl font-semibold hover:underline">
          View Case Study
        </a>
      </div>
      <div className="flex-1">{children}</div>
    </article>
  );
};

export default CaseStudyCard;
