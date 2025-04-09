import React from "react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article className="flex bg-[#FFF8F2] p-10 rounded-3xl max-sm:flex-col">
      <div className="flex-1">
        <h3 className="text-[#403930] text-[32px] font-semibold mb-1">
          {title}
        </h3>
        <p className="text-[#594F43] text-2xl font-medium mb-6">
          {description}
        </p>
        <a href="#" className="text-[#4E5E80] text-2xl font-semibold">
          View Case Study
        </a>
      </div>
      <div className="flex-1">{children}</div>
    </article>
  );
};

export default CaseStudyCard;
