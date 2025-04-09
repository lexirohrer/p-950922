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
          title="Sheepify States"
          description="Designed some empty state screens in kawaii style for the popular sheepify app"
        >
          <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/711525ec035fbee994da844a0f8b82bce8d5a1b0"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79be68ad7260509f00f5c1b446b70af828ceaccb"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1dff94f6ce5405bd71eea369f97592ddd64e23f"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31315d1b38fa94cb6cf6a6eb44fe513325469f2c"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/547c028bb594af48e58114237bd387e610ec1278"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 5"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e78c8b3d162d75f70ab414b8b8840c703ded61"
              className="w-full h-auto rounded-2xl"
              alt="Sheepify 6"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard
          title="HoneyBunny"
          description="A colorful dashboard to manage your fictional projects and team, all in a single place."
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39290587ac1d2cee381e62ba01d8908d6a7a295"
            className="w-full h-auto rounded-3xl"
            alt="HoneyBunny Dashboard"
          />
        </CaseStudyCard>

        <CaseStudyCard
          title="Memrise Redesign"
          description="I redesigned the popular language learning app memrise in kawaii style to make it more cute."
        >
          <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67cac3c7226dcfaa0f2db724cee385d498e0470a"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8578d33de3f0c61313bcbd8c7d499284c321d21f"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4011e62a0b5da4b61389597c7e895faf89e1ee75"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d1b5e3cc8d4d52d631e83eeb3ca3e636ba5601"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72d2a81d8578b2c5e4d15fa1a71c430e4d0c8f0f"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 5"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b6602abcfb298e7a3aa086e9e05f8dbee6d7f9"
              className="w-full h-auto rounded-2xl"
              alt="Memrise 6"
            />
          </div>
        </CaseStudyCard>
      </div>
    </section>
  );
};

export default CaseStudies;
