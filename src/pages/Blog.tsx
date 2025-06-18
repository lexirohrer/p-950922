
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const Blog = () => {
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
            <h1 className="text-[#403930] text-[40px] font-semibold mb-6">Blog</h1>
            <p className="text-[#594F43] text-xl mb-8">
              Thoughts on design, technology, and creative processes. Find inspiration and insights from my journey.
            </p>
          </div>
          
          <div className="w-full">
            <iframe
              src="https://substack.com/@uxlex/embed"
              className="w-full min-h-[800px] border-0 rounded-lg"
              title="Substack Feed"
              loading="lazy"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
