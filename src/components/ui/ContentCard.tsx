import React from "react";

interface ContentCardProps {
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({
  tag,
  title,
  description,
  children,
}) => {
  return (
    <article className="p-10 rounded-[28px]">
      <div className="text-sm bg-gray-50 mb-6 px-6 py-[13px] rounded-[29px]">
        {tag}
      </div>
      <h3 className="text-gray-900 text-[28px] font-semibold mb-4">{title}</h3>
      <p className="text-[#648E9E] text-sm mb-6">
        <span>{description}</span>
        <a href="#" className="text-[#0078FF] ml-1">
          read more
        </a>
      </p>
      <div className="flex gap-5">{children}</div>
    </article>
  );
};

export default ContentCard;
