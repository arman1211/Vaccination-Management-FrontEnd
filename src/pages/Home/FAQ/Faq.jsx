import img from "../../../assets/frequently.jpg";
const Faq = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img src={img} alt="FAQ tailwind section" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-2xl flex flex-col gap-3">
              <div className="mb-6 lg:mb-8">
                <h6 className="text-lg text-center font-medium text-pink-500 mb-2 lg:text-left">
                  Frequently asked question
                </h6>
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  How can I schedule a vaccination appointment?
                </div>
                <div className="collapse-content">
                  <p>
                    To schedule a vaccination appointment, log in to your
                    account, navigate to the appointment scheduling section,
                    choose a convenient date and time slot, and confirm your
                    appointment.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Can I view my vaccination history on the platform?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you can view your vaccination history by logging into
                    your account and accessing the vaccination records section.
                    This will display details of all vaccines you have received
                    through our system.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What do I do if I missed my scheduled vaccination appointment?
                </div>
                <div className="collapse-content">
                  <p>
                    If you missed your scheduled appointment, please log in to
                    your account as soon as possible to reschedule. Its
                    important to receive vaccinations according to the
                    recommended schedule for optimal protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
