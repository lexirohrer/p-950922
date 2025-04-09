import React from "react";
import ContentCard from "../ui/ContentCard";

const ContentGrid = () => {
  return (
    <section className="px-0 py-10">
      <div className="grid grid-cols-[repeat(2,1fr)] gap-8 px-[120px] py-0 max-md:grid-cols-[1fr] max-md:px-10 max-md:py-0">
        <ContentCard
          tag="CaseStudies"
          title="CASE STUDIES"
          description="Have a look on my caseStudies and process ..."
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bca99efdc0f6225e129d8f7378333befac61213"
            className="w-[161px] h-60 rounded-[18px]"
            alt="Case Study 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b8d109599bea2b1e1030a8e633efd73263549a"
            className="w-[161px] h-60 rounded-[18px]"
            alt="Case Study 2"
          />
        </ContentCard>

        <ContentCard
          tag="Tips &amp; Trick"
          title="PM MOCKS"
          description="Learn how to be a product manager and how to face the interview process..."
        >
          <div className="flex justify-center gap-5">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="2:1563" layer-name="Time Square" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="time-icon-lg"> <path d="M32.6798 4.00022C39.4598 4.00022 43.9998 8.75822 43.9998 15.8382V32.1782C43.9998 39.2402 39.4598 44.0002 32.6798 44.0002H15.3398C8.55979 44.0002 3.99979 39.2402 3.99979 32.1782V15.8382C3.99979 8.75822 8.55979 4.00022 15.3398 4.00022H32.6798ZM23.2998 13.8382C22.4798 13.8382 21.7998 14.5202 21.7998 15.3382V25.4402C21.7998 25.9602 22.0798 26.4602 22.5398 26.7202L30.3798 31.4002C30.6198 31.5602 30.8998 31.6202 31.1598 31.6202C31.6598 31.6202 32.1598 31.3602 32.4398 30.8802C32.8798 30.1782 32.6398 29.2582 31.9198 28.8202L24.7998 24.5802V15.3382C24.7998 14.5202 24.1398 13.8382 23.2998 13.8382Z" fill="#FDBA74"></path> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="2:1567" layer-name="Time Square" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="time-icon-sm"> <path d="M19.0632 2.33344C23.0182 2.33344 25.6666 5.10894 25.6666 9.23893V18.7706C25.6666 22.8901 23.0182 25.6668 19.0632 25.6668H8.94822C4.99322 25.6668 2.33322 22.8901 2.33322 18.7706V9.23893C2.33322 5.10894 4.99322 2.33344 8.94822 2.33344H19.0632ZM13.5916 8.07227C13.1132 8.07227 12.7166 8.4701 12.7166 8.94727V14.8401C12.7166 15.1434 12.8799 15.4351 13.1482 15.5868L17.7216 18.3168C17.8616 18.4101 18.0249 18.4451 18.1766 18.4451C18.4682 18.4451 18.7599 18.2934 18.9232 18.0134C19.1799 17.6039 19.0399 17.0673 18.6199 16.8118L14.4666 14.3384V8.94727C14.4666 8.4701 14.0816 8.07227 13.5916 8.07227Z" fill="#FDBA74"></path> </svg>',
                }}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="2:1571" layer-name="Time Square" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="time-icon-sm"> <path d="M19.0632 2.33344C23.0182 2.33344 25.6665 5.10894 25.6665 9.23893V18.7706C25.6665 22.8901 23.0182 25.6668 19.0632 25.6668H8.94821C4.99321 25.6668 2.33321 22.8901 2.33321 18.7706V9.23893C2.33321 5.10894 4.99321 2.33344 8.94821 2.33344H19.0632ZM13.5915 8.07227C13.1132 8.07227 12.7165 8.4701 12.7165 8.94727V14.8401C12.7165 15.1434 12.8799 15.4351 13.1482 15.5868L17.7215 18.3168C17.8615 18.4101 18.0249 18.4451 18.1765 18.4451C18.4682 18.4451 18.7599 18.2934 18.9232 18.0134C19.1799 17.6039 19.0399 17.0673 18.6199 16.8118L14.4665 14.3384V8.94727C14.4665 8.4701 14.0815 8.07227 13.5915 8.07227Z" fill="#FDBA74"></path> </svg>',
                }}
              />
            </div>
          </div>
        </ContentCard>

        <ContentCard
          tag="WhoAmI"
          title="ABOUT ME"
          description="I believe in empathizing with customers to solve their problems. I aspire. ..."
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="2:1585" layer-name="Activity" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="activity-icon"> <path d="M30.8994 7.5606C30.8194 8.0606 30.7794 8.5606 30.7794 9.0606C30.7794 13.5606 34.4194 17.1986 38.8994 17.1986C39.3994 17.1986 39.8794 17.1406 40.3794 17.0606V33.1986C40.3794 39.9806 36.3794 44.0006 29.5794 44.0006H14.8014C7.99939 44.0006 3.99939 39.9806 3.99939 33.1986V18.4006C3.99939 11.6006 7.99939 7.5606 14.8014 7.5606H30.8994ZM31.3014 19.7206C30.7594 19.6606 30.2214 19.9006 29.8994 20.3406L25.0614 26.6006L19.5194 22.2406C19.1794 21.9806 18.7794 21.8786 18.3794 21.9206C17.9814 21.9806 17.6214 22.1986 17.3794 22.5186L11.4614 30.2206L11.3394 30.4006C10.9994 31.0386 11.1594 31.8586 11.7594 32.3006C12.0394 32.4806 12.3394 32.6006 12.6794 32.6006C13.1414 32.6206 13.5794 32.3786 13.8594 32.0006L18.8794 25.5386L24.5794 29.8206L24.7594 29.9386C25.3994 30.2786 26.1994 30.1206 26.6594 29.5186L32.4394 22.0606L32.3594 22.1006C32.6794 21.6606 32.7394 21.1006 32.5194 20.6006C32.3014 20.1006 31.8194 19.7606 31.3014 19.7206ZM39.1796 4C41.8396 4 43.9996 6.16 43.9996 8.82C43.9996 11.48 41.8396 13.64 39.1796 13.64C36.5196 13.64 34.3596 11.48 34.3596 8.82C34.3596 6.16 36.5196 4 39.1796 4Z" fill="#FACC15"></path> </svg>',
              }}
            />
          </div>
        </ContentCard>

        <ContentCard
          tag="Episodes"
          title="PODCAST"
          description="If there's anything on your mind, we'd love to hear from you..."
        >
          <div className="flex gap-2.5 mt-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a202d7d453ef40b4c0f6a38d676bc289c4f859f5"
              className="w-20 h-20 rounded-[50%]"
              alt="Podcast Guest 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14077c8eb9cec2c986999e8bd99920d450545822"
              className="w-20 h-20 rounded-[50%]"
              alt="Podcast Guest 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad84a347b874af6b6d41d5ac96bea495d0f820a"
              className="w-20 h-20 rounded-[50%]"
              alt="Podcast Guest 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f25fe2a593b1986d9244e708fad23def61dc8d"
              className="w-20 h-20 rounded-[50%]"
              alt="Podcast Guest 4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb531133f43816be159e11688f16206b90f22246"
              className="w-20 h-20 rounded-[50%]"
              alt="Podcast Guest 5"
            />
          </div>
        </ContentCard>
      </div>
    </section>
  );
};

export default ContentGrid;
