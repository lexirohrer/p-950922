
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const Resume = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          <div className="mb-10">
            <h1 className="text-[#403930] text-[40px] font-semibold mb-6">Resume</h1>
            <p className="text-[#594F43] text-xl mb-8">
              I care about value-driven design that strives for positive social impact. Growing up in a home that hosted 56 exchange students from 16 different countries fostered my love of travel and language learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Fulbright Fellow on Smart City Technology</h3>
                  <p className="text-[#594F43] font-medium">August 2024 - Present</p>
                  <p className="text-[#594F43] mt-2">Lived and worked in Bangkok, Thailand on a year long design & research fellowship. Facilitated 15+ participatory design workshops across 5 NGO, private, and public orgs.</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Product Designer</h3>
                  <p className="text-[#594F43] font-medium">Intuit • September 2021 - August 2024</p>
                  <p className="text-[#594F43] mt-2">Designing onboarding experiences to help small business owners set up and use QuickBooks across web and mobile. Leading the design effort to unify and tailor the QuickBooks onboarding experience across geographic regions.</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Design & Communications Director</h3>
                  <p className="text-[#594F43] font-medium">Basilica Bio • April 2021 - Present</p>
                  <p className="text-[#594F43] mt-2">Facilitating and participating in environmental justice education workshops. Created Basilica Bio's brand system, communication strategy, and website.</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Human Computer Interaction Research Intern</h3>
                  <p className="text-[#594F43] font-medium">Carnegie Mellon University • June 2019 - September 2019</p>
                  <p className="text-[#594F43] mt-2">Designed the onboarding flow for the chrome extension by Dr. Aniket Kittur's lab. Planned, recruited for, and conducted concept tests with users on prospective feature development.</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold mb-2">Proficient in</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Figma</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Adobe CC</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Prototyping</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Design critique</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Storyboarding</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">User Interviews</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Usability Testing</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Content Strategy</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold mb-2">Working knowledge of</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Sketch</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">InVision</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Competitive Analysis</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">B.S. | Human Centered Design & Engineering</h3>
                  <p className="text-[#594F43] font-medium">Minor | Linguistics</p>
                  <p className="text-[#594F43] font-medium">University of Washington, Seattle • 2017-2021</p>
                  <p className="text-[#594F43] mt-2">GPA: 3.98</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">UX Certificate in Interaction Design</h3>
                  <p className="text-[#594F43] font-medium">Nielsen Norman Group, Vancouver • August 2018</p>
                  <p className="text-[#594F43] mt-2">ID 1025553</p>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Publications</h2>
              <div>
                <h3 className="text-[#403930] text-xl font-semibold">Principles for Applying Augmented Reality in Manufacturing</h3>
                <p className="text-[#594F43] font-medium">January 2019</p>
                <p className="text-[#594F43] mt-2">Massachusetts Institute of Technology (MIT) Undergraduate Research Technology Conference</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl lg:col-span-2">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold">Portfolio</h3>
                  <p className="text-[#594F43]">uxlex.com</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold">Phone</h3>
                  <p className="text-[#594F43]">(831) 917-3866</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold">Email</h3>
                  <p className="text-[#594F43]">lexirohrer@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold">LinkedIn</h3>
                  <p className="text-[#594F43]">linkedin.com/in/alexandra-rohrer/</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
