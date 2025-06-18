
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";

const Portfolio = () => {
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
            <h1 className="text-[#403930] text-[40px] font-semibold mb-6">Portfolio</h1>
            <p className="text-[#594F43] text-xl mb-8">
              Take a look at my work and case studies showcasing design solutions and creative processes.
            </p>
          </div>
          <CaseStudies />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
