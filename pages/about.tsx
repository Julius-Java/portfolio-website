import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import aboutImg from "@/public/aboutImgNoBg.png";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/Education";
import Link from "next/link";

const about = () => {
    return (
        <>
            <Head>
                <title>Julius Java | About</title>
                <meta name="description" content="Julius Java's About Page." />
            </Head>
            <TransitionEffect />
            <main className="p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8">
                <AnimatedHeading
                    text="Unveiling the Story Behind the Creator: <br/> Discover More About Me"
                    className="text-black text-7xl lg:text-5xl sm:text-4xl xs:text-3xl mb-14 font-extrabold w-full text-center dark:text-light"
                />
                <section className="grid grid-cols-8 gap-16 sm:gap-8 dark:text-light">
                    <div className="col-span-3 flex flex-col gap-8 xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className="text-black/75 text-2xl font-semibold dark:text-light">
                            Biography
                        </h2>

                        <p className="text-dark font-semibold text-lg dark:text-light">
                            I am a devoted Frontend React JS Developer who
                            thrives on the excitement of unraveling the
                            mysteries of technology. My expertise spans HTML,
                            CSS, Javascript, and React JS, empowering me to
                            craft immersive, responsive interfaces that bring
                            web applications to life.
                        </p>

                        <p className="text-dark font-semibold text-lg dark:text-light">
                            Beyond the code, I actively contribute to the
                            vibrant NewDev Platform, where I champion
                            collaboration and accountability. My unique blend of
                            creativity, communication skills, problem-solving
                            abilities, and teamwork ensures that my web
                            creations not only engage but also delight users.
                        </p>

                        <p className="text-dark font-semibold text-lg dark:text-light">
                            Feel free to reach out to me at{" "}
                            <Link href={"mailto:juliusjava@gmail.com"}>
                                juliusjava00@gmail.com
                            </Link>{" "}
                            for discussions on web technologies. My insatiable
                            curiosity fuels my passion for development, making
                            me a valuable asset in the ever-evolving web
                            landscape. Connect with me on LinkedIn, Twitter for
                            the latest updates on my exciting projects.
                        </p>
                    </div>

                    <div className="col-span-3 relative shadow-xl shadow-dark  h-max rounded-3xl border-2 border-dark bg-light p-8 transition-all duration-500 hover:shadow-lg dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                        <Image
                            src={aboutImg}
                            className="w-full h-auto rounded-2xl"
                            alt="Emmanuel Julius"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col items-end gap-40 xl:col-span-8 xl:flex-row xl:justify-center md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-6xl md:text-6xl sm:text-4xl xs:text-2xl font-bold">
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h3 className="text-dark/75 text-xl md:text-lg sm:text-sm font-medium capitalize dark:text-light text-center">
                                Projects completed
                            </h3>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-6xl md:text-6xl sm:text-4xl xs:text-2xl font-bold">
                                <AnimatedNumbers value={2} />+
                            </span>
                            <h3 className="text-dark/75 text-xl md:text-lg sm:text-sm font-medium capitalize dark:text-light text-center">
                                Years of experience
                            </h3>
                        </div>
                    </div>
                </section>

                <section>
                    <Skills />
                </section>

                <section className="my-20 mb-60 min-h-screen">
                    <Experience />
                </section>

                <section className="my-20 mb-60 min-h-screen">
                    <Education />
                </section>
            </main>
        </>
    );
};

export default about;
