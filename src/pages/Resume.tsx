
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
              My professional experience, skills, and educational background.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Senior Product Designer</h3>
                  <p className="text-[#594F43] font-medium">Design Co. • 2022 - Present</p>
                  <p className="text-[#594F43] mt-2">Leading design for consumer products, creating user-centered experiences and design systems.</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">UX Designer</h3>
                  <p className="text-[#594F43] font-medium">Tech Startup • 2020 - 2022</p>
                  <p className="text-[#594F43] mt-2">Designed mobile and web applications, conducted user research and usability testing.</p>
                </div>
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Junior Designer</h3>
                  <p className="text-[#594F43] font-medium">Creative Agency • 2018 - 2020</p>
                  <p className="text-[#594F43] mt-2">Created visual designs for digital products and marketing materials.</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold mb-2">Design Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Figma</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Sketch</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Adobe CC</span>
                    <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Framer</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold mb-2">Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">React</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#403930] text-lg font-semibold mb-2">Methodology</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#6246EA] text-white px-3 py-1 rounded-full text-sm">Design Thinking</span>
                    <span className="bg-[#6246EA] text-white px-3 py-1 rounded-full text-sm">User Research</span>
                    <span className="bg-[#6246EA] text-white px-3 py-1 rounded-full text-sm">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <h2 className="text-[#403930] text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Bachelor of Design</h3>
                  <p className="text-[#594F43] font-medium">Design University • 2014 - 2018</p>
                  <p className="text-[#594F43] mt-2">Specialized in User Experience Design and Human-Computer Interaction</p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl flex items-center justify-center">
              <a
                href="#"
                className="inline-block text-[#4D5566] text-2xl font-semibold px-10 py-6 rounded-2xl border-4 border-solid border-[#4D5566] text-center"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
