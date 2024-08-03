import DefaultLayout from "@/layouts/DefaultLayout";

const ContactUsPage = () => {
  return (
    <DefaultLayout>
      <section className="mx-auto grid min-h-screen w-10/12 gap-20 pb-28 pt-20 font-rubik md:pb-36 md:pt-28 lg:grid-cols-2 2xl:max-w-[1440px]">
        <div>
          <div>
            <h1 className="mb-6 text-4xl font-semibold text-primary-black md:text-[56px]">Contact Us</h1>
            <p className="max-w-[509px] text-lg font-normal text-primary-black md:text-xl">
              Looking for the solution that best fits your business needs? Fill out the contact form and our Sales team will be in touch.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-y-3">
            <h2 className="text-2xl font-semibold text-[#051A52]">Contact Us</h2>
            <p>
              <span className="text-[#26C485]">contactus@stardemglobal.com</span> / 012803829
            </p>
            <p className="text-primary-black">
              Vibranium Valley <br />
              42, Local Airport Road, Ikeja, Lagos
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-[#DEE3EB] p-8 md:p-12">
          <label htmlFor="fullname" className="mb-1.5 block">
            Full name
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="eg. Stephens Joe"
            className="mb-6 block w-full rounded-sm border border-[#A5ADC0] p-3 placeholder:text-base placeholder:text-[#A5ADC0]"
          />

          <label htmlFor="company" className="mb-1.5 block">
            Company name
          </label>
          <input
            type="text"
            name="company"
            placeholder="eg. Global Company Limited"
            className="mb-6 block w-full rounded-sm border border-[#A5ADC0] p-3 placeholder:text-base placeholder:text-[#A5ADC0]"
          />

          <label htmlFor="phoneNo" className="mb-1.5 block">
            Company line
          </label>
          <input
            type="text"
            name="phoneNo"
            placeholder="eg. +234 000 0000 000"
            className="mb-6 block w-full rounded-sm border border-[#A5ADC0] p-3 placeholder:text-base placeholder:text-[#A5ADC0]"
          />

          <label htmlFor="email" className="mb-1.5 block">
            Work email
          </label>
          <input
            type="email"
            name="email"
            placeholder="eg. email@company.com"
            className="mb-6 block w-full rounded-sm border border-[#A5ADC0] p-3 placeholder:text-base placeholder:text-[#A5ADC0]"
          />

          <label htmlFor="message" className="mb-1.5 block">
            Your message
          </label>
          <textarea
            name="message"
            placeholder="Enter message here"
            className="mb-6 block min-h-[120px] w-full rounded-sm border border-[#A5ADC0] p-3 placeholder:text-base placeholder:text-[#A5ADC0]"
          />

          <button type="submit" className="rounded-lg bg-yellow px-6 py-3 text-base font-medium text-dark-fill">
            Send Message
          </button>
        </form>
      </section>
    </DefaultLayout>
  );
};

export default ContactUsPage;
