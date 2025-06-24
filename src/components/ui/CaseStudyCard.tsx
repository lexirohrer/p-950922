
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
  tools,
  children,
}) => {
  return (
    <article className="flex bg-white p-10 rounded-3xl max-sm:flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <div className="flex-1 pr-8 max-sm:pr-0 max-sm:mb-6">
        <h3 className="text-[#403930] text-[32px] font-semibold mb-2">
          {title}
        </h3>
        <p className="text-[#594F43] text-2xl font-medium mb-4">
          {description}
        </p>
        
        {tools && tools.length > 0 && (
          <div className="mb-6">
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
      </div>
      <div className="flex-1">{children}</div>
    </article>
  );
};

export default CaseStudyCard;
