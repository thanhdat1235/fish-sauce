import React, { FC } from "react";
import PageWithLayoutType from "../../../../src/types/pageWithLayout";
import HomeLayout from "../../../../src/layouts/home.layout";
import { GetStaticProps } from "next";
import Link from "next/link";

const QualitySafety: FC = () => {
  return (
    <>
      <div className="w-full">
        <section className="!pt-28 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto relative w-full md:w-10/12">
                <h6 className="text-lg mt-2 mb-0 text-blueGray-400">
                  March 1, 2019
                </h6>
                <h3 className="text-3xl font-bold leading-normal mt-0 mb-2">
                  The Castle Looks Different at Night...
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="!pt-12 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 justify-center">
              <img
                src="https://demos.creative-tim.com/notus-pro-react/static/media/new-york-city.d7a444b7.jpg"
                alt="..."
                className="rounded-lg shadow-lg w-850-px"
              />
            </div>
          </div>
        </section>
        <section className="!pt-12 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto relative w-full md:w-8/12">
                <p className="mb-4 text-lg text-blueGray-500">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more. We are here to make life better.
                </p>
                <p className="mb-4 text-lg text-blueGray-500">
                  And now I look and look around and there’s so many Kanyes I've
                  been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound... and thank you for
                  turning my personal jean jacket into a couture piece.
                </p>
                <p className="text-xl text-blueGray-500 mx-0 !my-12 block pl-4 border-l border-blueGray-200 border-l-2">
                  "And thank you for turning my personal jean jacket into a
                  couture piece."<br></br>
                  <small className="mt-2 font-semibold text-blueGray-700">
                    Kanye West, Producer.
                  </small>
                </p>

                <h3 className="text-3xl font-bold leading-normal mt-0 mb-2">
                  Using Video Games To Generate Clicks
                </h3>
                <p className="mb-4 text-lg text-blueGray-500">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more. We are here to make life better.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="!pt-12 relative">
          <div className="w-full">
            <div className="flex justify-center w-full">
              <div className="w-full transform duration-500 transition-all ease-in-out mx-auto block">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-pro-react/static/media/sofia-kuniakina.d748127a.jpg"
                  className="h-auto mx-auto rounded-lg shadow-xl w-450-px"
                />
              </div>
              <div className="w-full transform duration-500 transition-all ease-in-out mx-auto hidden">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-pro-react/static/media/sacha-styles.b70fcf79.jpg"
                  className="h-auto mx-auto rounded-lg shadow-xl w-450-px"
                />
              </div>
              <div className="w-full transform duration-500 transition-all ease-in-out mx-auto hidden">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-pro-react/static/media/victor-garcia.517e6e46.jpg"
                  className="h-auto mx-auto rounded-lg shadow-xl w-450-px"
                />
              </div>
              <div className="w-full transform duration-500 transition-all ease-in-out mx-auto hidden">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-pro-react/static/media/doyoun-seo.626bcf05.jpg"
                  className="h-auto mx-auto rounded-lg shadow-xl w-450-px"
                />
              </div>
              <div className="w-full transform duration-500 transition-all ease-in-out mx-auto hidden">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-pro-react/static/media/ayo-ogunseinde.171c7cb2.jpg"
                  className="h-auto mx-auto rounded-lg shadow-xl w-450-px"
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-blueGray-800 bg-white border-white active:bg-blueGray-100 active:border-blueGray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-blueGray-800 bg-white border-white active:bg-blueGray-100 active:border-blueGray-100 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="!pt-12 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="mx-auto relative w-full md:w-8/12">
                <h3 className="text-3xl font-bold leading-normal mt-0 mb-2">
                  Rest of the Story:
                </h3>
                <p className="mb-4 text-lg text-blueGray-500">
                  We are here to make life better. And now I look and look
                  around and there’s so many Kanyes I've been trying to figure
                  out the bed design for the master bedroom at our Hidden Hills
                  compound... and thank you for turning my personal jean jacket
                  into a couture piece. I speak yell scream directly at the old
                  guard on behalf of the future. daytime All respect prayers and
                  love to Phife’s family Thank you for so much inspiration
                </p>
                <p className="mb-4 text-lg text-blueGray-500">
                  Thank you Anna for the invite thank you to the whole Vogue
                  team And I love you like Kanye loves Kanye Pand Pand Panda
                  I've been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound...The Pablo pop up was
                  almost a pop up of influence. All respect prayers and love to
                  Phife’s family Thank you for so much inspiration daytime I
                  love this new Ferg album! The Life of Pablo is now available
                  for purchase I have a dream. Thank you to everybody who made
                  The Life of Pablo the number 1 album in the world! I'm so
                  proud of the nr #1 song in the country. Panda! Good music
                  2016!
                </p>
                <p className="mb-4 text-lg text-blueGray-500">
                  I love this new Ferg album! The Life of Pablo is now available
                  for purchase I have a dream. Thank you to everybody who made
                  The Life of Pablo the number 1 album in the world! I'm so
                  proud of the nr #1 song in the country. Panda! Good music
                  2016!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full">
        <div className="!py-12 blog-3">
          <div className="container mx-auto px-4">
            <div className="!mb-12">
              <div className="!mb-12 flex flex-wrap -mx-4 justify-center">
                <div className="px-4 relative w-full lg:w-8/12 text-center">
                  <span className="text-lightBlue-500 bg-lightBlue-200 text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight rounded px-2">
                    Stories
                  </span>
                  <h3 className="text-3xl font-bold mt-3 mb-1 text-blueGray-700">
                    Before I go
                  </h3>
                  <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-500">
                    We've got time, but we are only doing what they say and
                    want. I do not want to live as I will never die, cause
                    life's too short, and I do not want to drown myself, as
                    others would like.
                  </p>
                </div>
              </div>
            </div>
            <div className="!mb-12 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
              <div className="items-center flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-4/12">
                  <img
                    src="https://demos.creative-tim.com/notus-pro-react/static/media/city-1.501c0bb7.jpg"
                    className="w-full rounded-lg rounded-r-none"
                    alt="..."
                  />
                </div>
                <div className="px-4 relative w-full lg:w-8/12">
                  <div className="lg:pl-0 px-4 py-5 flex-auto">
                    <h3 className="text-3xl font-semibold text-blueGray-700 leading-tight">
                      <Link href="#">
                        Portofino one of the best for remote working
                      </Link>
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                      <span className="mr-2">
                        Finding temporary housing should be as easy as renting
                        an Airbnb. That’s the idea behind Portofino, which
                        raised $65 million to expand its pet sitting businesses.
                        This come as the right move for the investment while the
                        planet is moving on work from home...
                      </span>
                      <Link href="#" className="text-lightBlue-500">
                        Read More
                      </Link>
                    </p>
                    <div className="mt-6">
                      <Link href="#" className="inline-flex items-center">
                        <img
                          src="https://demos.creative-tim.com/notus-pro-react/static/media/face-1.dbea4a4c.jpg"
                          className="rounded-full mr-4 w-12 h-12"
                          alt="..."
                        />
                        <div className="flex-1">
                          <div className="justify-between items-center">
                            <h6 className="text-md font-bold uppercase mt-0 mb-0 text-blueGray-500">
                              Laura Hanks
                            </h6>
                            <small className="text-sm text-blueGray-500 mt-0">
                              Published 4 days ago
                            </small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!mb-12 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
              <div className="items-center flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-4/12">
                  <img
                    src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3.c5d0c11c.jpg"
                    className="w-full rounded-lg rounded-r-none"
                    alt="..."
                  />
                </div>
                <div className="px-4 relative w-full lg:w-8/12">
                  <div className="lg:pl-0 px-4 py-5 flex-auto">
                    <h3 className="text-3xl font-semibold text-blueGray-700 leading-tight">
                      <Link href="#">MateLabs mixes learning with IFTTT</Link>
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                      <span className="mr-2">
                        If you’ve ever wanted to train a machine learning model
                        and integrate it with IFTTT, you now can with a new
                        offering from MateLabs. MateVerse, a platform where
                        novices can spin out machine...
                      </span>
                      <Link href="#" className="text-lightBlue-500">
                        Read More
                      </Link>
                    </p>
                    <div className="mt-6">
                      <Link href="#" className="inline-flex items-center">
                        <img
                          src="https://demos.creative-tim.com/notus-pro-react/static/media/michael.660d3e04.jpg"
                          className="rounded-full mr-4 w-12 h-12"
                          alt="..."
                        />
                        <div className="flex-1">
                          <div className="justify-between items-center">
                            <h6 className="text-md font-bold uppercase mt-0 mb-0 text-blueGray-500">
                              Paul Smith
                            </h6>
                            <small className="text-sm text-blueGray-500 mt-0">
                              Drawn on 23 April
                            </small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!mb-12 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
              <div className="items-center flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-4/12">
                  <img
                    src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4.639c2559.jpg"
                    className="w-full rounded-lg rounded-r-none"
                    alt="..."
                  />
                </div>
                <div className="px-4 relative w-full lg:w-8/12">
                  <div className="lg:pl-0 px-4 py-5 flex-auto">
                    <h3 className="text-3xl font-semibold text-blueGray-700 leading-tight">
                      <Link href="#">US venture investment ticks up in Q2</Link>
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                      <span className="mr-2">
                        Venture investment in U.S. startups rose sequentially in
                        the second quarter of 2017, boosted by large, late-stage
                        financings and a few outsized early-stage rounds in tech
                        and healthcare...
                      </span>
                      <Link href="#" className="text-lightBlue-500">
                        Read More
                      </Link>
                    </p>
                    <div className="mt-6">
                      <Link href="#" className="inline-flex items-center">
                        <img
                          src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1.26905a67.jpg"
                          className="rounded-full mr-4 w-12 h-12"
                          alt="..."
                        />
                        <div className="flex-1">
                          <div className="justify-between items-center">
                            <h6 className="text-md font-bold uppercase mt-0 mb-0 text-blueGray-500">
                              Jasmine Tailor
                            </h6>
                            <small className="text-sm text-blueGray-500 mt-0">
                              Drawn on 23 April
                            </small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

(QualitySafety as PageWithLayoutType).layout = HomeLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Quality Safety",
    },
  };
};

export default QualitySafety;
