
import React from "react";
import CaseStudyCard from "../ui/CaseStudyCard";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="px-28 py-[88px] max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[#403930] text-[40px] font-semibold">
          My Recent CaseStudies
        </h2>
        <div className="flex items-center gap-6 text-[#2B2C34] text-xl">
          <span>See All</span>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="2:1448" layer-name="vuesax/linear/arrow-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"> <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#2B2C34" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.5 12H20.33" stroke="#2B2C34" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <CaseStudyCard
          title="QuickBooks Onboarding"
          description="Tailoring accounting software onboarding to different mindsets"
          context="QuickBooks is an accounting and business management software for small business owners. This redesign was one of the first major projects I drove after joining the QuickBooks onboarding team."
          role="Research co-facilitator, Design lead for the project"
          duration="November 2021 - January 2022"
          tools={["Figma", "Figjam", "Usertesting.com", "Google Suite"]}
        >
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
            className="w-full h-auto rounded-3xl"
            alt="QuickBooks Onboarding"
          />
        </CaseStudyCard>

        <CaseStudyCard
          title="QuickBooks Mobile Web Redesign"
          description="Turning broken workflows into intentionally crafted experiences"
          context="Over a 12 week internship with Intuit, I co-redesigned and helped ship three improved workflows within QuickBooks mobile web. A month after launch, these projects had increased day 7 login 3+ times up 5 percentage pts, mobile web trial-to-sub conversion up 3 percentage pts and mobile web signup to retention up 5.7 percentage pts"
          role="One of two design interns on a 12 person cross functional team"
          duration="June - August 2020"
          tools={["Figma", "Photoshop", "QuickBooks design system"]}
        >
          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=400&fit=crop"
              className="w-full h-auto rounded-2xl"
              alt="Mobile Web Desktop"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop"
              className="w-full h-auto rounded-2xl"
              alt="Mobile Web Mobile"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard
          title="Fuse Google Chrome Extension"
          description="Designing a second brain for researchers collecting information"
          context="Fuse is a Google Chrome extension that helps researchers collect and organize information. In summer 2019, I interned and designed for the Fuse team at Carnegie Mellon's Human Computer Interaction Institute."
          role="UX research and design intern on a 7 person cross functional team"
          duration="June - August 2019"
          tools={["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"]}
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
            className="w-full h-auto rounded-3xl"
            alt="Fuse Chrome Extension"
          />
        </CaseStudyCard>

        <CaseStudyCard
          title="Harvest app"
          description="Putting a seasonal spin on accessible farmers market information"
          context="Course work for a studio design class on User Centered Design. In a 10 week sprint we went from problem definition to a fully prototyped solution."
          role="Co UX/UI designer, Co UX researcher, Lead content strategist"
          duration="September - December 2018"
          tools={["Figma", "Illustrator", "Lucid Chart", "Marvel"]}
        >
          <div className="grid grid-cols-3 gap-5">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=350&fit=crop"
              className="w-full h-auto rounded-2xl"
              alt="Harvest App 1"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=350&fit=crop"
              className="w-full h-auto rounded-2xl"
              alt="Harvest App 2"
            />
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=350&fit=crop"
              className="w-full h-auto rounded-2xl"
              alt="Harvest App 3"
            />
          </div>
        </CaseStudyCard>
      </div>
    </section>
  );
};

export default CaseStudies;
