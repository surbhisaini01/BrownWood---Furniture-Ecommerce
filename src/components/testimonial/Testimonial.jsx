/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.freepik.com/256/12225/12225773.png?semt=ais_hybrid"
                />
                <p className="leading-relaxed">
                  I'm Surbhi. "As a dedicated BCA student with a passion for
                  cloud computing, I bring a solid foundation in computer
                  science combined with specialized expertise in leveraging
                  cloud technologies to drive innovation and efficiency. With
                  hands-on experience in deploying and managing applications on
                  leading cloud platforms such as AWS, Azure, and Google Cloud,
                  I excel in architecting scalable and resilient solutions
                  tailored to meet diverse business needs.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Surbhi
                </h2>
                <p className="text-gray-500">surbhisaini1234@gmail.com</p>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.freepik.com/256/12225/12225773.png?semt=ais_hybrid"
                />
                <p className="leading-relaxed">
                  I'm Admin. "As a dedicated BCA student with a passion for
                  cloud computing, I bring a solid foundation in computer
                  science combined with specialized expertise in leveraging
                  cloud technologies to drive innovation and efficiency. With
                  hands-on experience in deploying and managing applications on
                  leading cloud platforms such as AWS, Azure, and Google Cloud,
                  I excel in architecting scalable and resilient solutions
                  tailored to meet diverse business needs.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  HelpDesk
                </h2>
                <p className="text-gray-500">admin@support.com</p>
                <p className="text-gray-500">Backend Develeoper</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.freepik.com/256/12225/12225773.png?semt=ais_hybrid"
                />
                <p className="leading-relaxed">
                  I'm Diksha. "As a dedicated BCA student with a passion for
                  cloud computing, I bring a solid foundation in computer
                  science combined with specialized expertise in leveraging
                  cloud technologies to drive innovation and efficiency. With
                  hands-on experience in deploying and managing applications on
                  leading cloud platforms such as AWS, Azure, and Google Cloud,
                  I excel in architecting scalable and resilient solutions
                  tailored to meet diverse business needs.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Diksha{" "}
                </h2>
                <p className="text-gray-500">dikshajangra996@gmail.com</p>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
