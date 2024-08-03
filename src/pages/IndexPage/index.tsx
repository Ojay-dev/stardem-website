import { bg_productivity, image1, image2, image3, image4, question_mark } from "@/assets/images";
import { ArrowRight, FastTime, FeaturedIcon, PlanetSketch, PlanetSketch2 } from "@/assets/svgs";
import DefaultLayout from "@/layouts/DefaultLayout";

const featuredServices = [
  {
    title: "Technology Solutions",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    image: image1,
  },
  {
    title: "Strategy & Planning",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    image: image2,
  },
  {
    title: "Risk & Compliance",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    image: image3,
  },
  {
    title: "Mergers & Acquisition",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    image: image4,
  },
];

const industries = [
  {
    title: "Oil & Gas",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Agri-business",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Public Sector",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Power & Utilities",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Retail Business",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Technology",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Telecom",
    description: "Venture Capital and PE engagements.",
  },
  {
    title: "Transport & Logistics",
    description: "Venture Capital and PE engagements.",
  },
];

const IndexPage = () => {
  return (
    <DefaultLayout>
      <>
        <section className="relative mx-auto flex w-10/12 flex-col items-center py-28 font-rubik lg:h-[74vh] lg:justify-center 2xl:max-w-[1440px]">
          <img
            src={PlanetSketch}
            alt="planet illustration"
            className="absolute right-12 top-3 w-[90px] md:w-[unset] lg:right-32 lg:top-32"
          />
          <img src={PlanetSketch2} alt="planet illustration" className="absolute left-12 top-96 sm:top-80 lg:left-32 lg:top-96" />
          <div className="mb-4 flex cursor-pointer items-center gap-3 rounded-2xl bg-[#F5F8FF] p-1 text-sm text-[#326CF6]">
            <span className="rounded-2xl bg-white px-2.5 py-0.5">New</span>
            <span className="flex gap-x-1">
              Personalized experience <img src={ArrowRight} alt="right arrow" />
            </span>
          </div>

          <h1 className="max-w-[640px] text-center text-4xl font-medium !leading-[72px] text-primary-black lg:text-6xl">
            Take your business to the next level.
          </h1>
          <p className="mt-6 max-w-[580px] text-center text-xl text-light-gray">
            Driving business growth through expert engagements, technology and optimisation.
          </p>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto w-10/12 font-rubik text-white 2xl:max-w-[1440px]">
            <div className="mb-[72px] flex flex-col items-center gap-y-4">
              <h2 className="text-base font-semibold text-yellow">Our Services</h2>

              <h3 className="text-center text-3xl font-medium leading-snug text-[#DEE3EB] lg:text-[40px]">
                Creating value beyond the hype
              </h3>
              <p className="max-w-[640px] text-center text-lg leading-9 text-[#DEE3EB] lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur vred adipiscing tortor, pellentesque donec deaut.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
              {featuredServices.map((service, index) => (
                <div className="relative flex h-[420px] overflow-hidden rounded border border-light-gray" key={index}>
                  <img
                    src={service.image}
                    alt="lady using a laptop"
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
                  />

                  <div className="relative z-10 flex h-full w-full flex-col justify-end gap-y-5 bg-[linear-gradient(to_bottom,_transparent,_black_70%)] px-6 py-8">
                    <img src={FeaturedIcon} alt="right arrow" className="h-12 w-12" />

                    <div className="flex flex-col gap-y-2">
                      <h4 className="text-xl font-medium text-[#dee3eb]">{service.title}</h4>
                      <p className="text-base text-[#7B869F]">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-10/12 flex-col-reverse items-center gap-20 py-32 font-rubik lg:flex-row 2xl:max-w-[1440px]">
          <div className="mb-[72px] flex flex-col items-start gap-y-4 lg:w-1/2">
            <h2 className="text-base font-semibold text-yellow">Business Processes</h2>

            <h3 className="text-3xl font-medium !leading-[50px] text-dark-fill lg:text-[40px]">
              Optimise your <br />
              business processes.
            </h3>
            <p className="max-w-[640px] text-lg !leading-[32px] text-background">
              Streamline and enhance your business processes for maximum efficiency and success. <br />
              <br />
              Strategic planning sessions are essential gatherings where businesses chart their course, set objectives, and align their
              resources to achieve their long-term goals and objectives
            </p>
          </div>

          <img src={question_mark} alt="question mark" className="lg:w-1/2" />
        </section>

        <section className="bg-background pt-24">
          <div className="mx-auto w-10/12 font-rubik text-white 2xl:max-w-[1440px]">
            <div className="mb-[72px] flex flex-col items-center gap-y-4">
              <h2 className="text-base font-semibold text-yellow">INDUSTRIES</h2>

              <h3 className="text-center text-3xl font-medium leading-snug text-[#DEE3EB] lg:text-[40px]">The industries we serve</h3>
              <p className="max-w-[640px] text-center text-xl leading-9 text-[#DEE3EB]">
                Lorem ipsum dolor sit amet, consectetur vred adipiscing tortor, pellentesque donec deaut.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry, index) => (
                <div className="rounded bg-dark-fill px-5 py-8" key={index}>
                  <img src={FastTime} alt="" />
                  <h5 className="mt-5 text-xl font-medium text-[#dee3eb]">{industry.title}</h5>
                  <p className="mt-3 text-base leading-loose text-[#7B869F]">
                    Venture Capital and PE
                    <br />
                    engagements.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-32 py-32 font-rubik">
            <img
              src={bg_productivity}
              alt="lady using a laptop"
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
            />

            <div className="relative z-10 mx-auto w-10/12 2xl:max-w-[1440px]">
              <div className="mb-[72px] flex flex-col items-center lg:w-1/2 lg:items-start">
                <h2 className="mb-[18px] text-base font-semibold text-yellow">Productivity</h2>

                <h3 className="mb-5 max-w-[489px] text-center text-4xl font-medium leading-snug text-[#DEE3EB] lg:text-left lg:text-[40px]">
                  Submit a request for proposal
                </h3>
                <p className="max-w-[553px] text-center text-lg leading-8 text-[#DEE3EB] lg:text-left">
                  Use the RFP submission form to provide details of the the services you require, that you would like KPMG assistance with.
                </p>

                <button className="mt-10 rounded-lg bg-yellow px-6 py-3 text-base font-medium text-dark-fill">Contact Us</button>
              </div>
            </div>
          </div>
        </section>
      </>
    </DefaultLayout>
  );
};

export default IndexPage;
