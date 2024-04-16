import { faArrowCircleRight, faCalendar, faCalendarAlt, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";

export default function FeaturesComponent () {
    return (
        <>
            <section className="w-full min-h-screen px-10 2xl:px-72 flex flex-col items-center justify-center space-y-20 md:space-y-32 mb-28 md:mb-0">
                <div className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-aquamarine to-nice-sky-blue">
                    Why us?
                </div>  
                <div className="md:flex md:flex-wrap items-center justify-center space-y-24 md:space-y-0 md:gap-20 xl:gap-0 xl:space-x-20 2xl:space-x-40 text-white">
                    <div className="flex flex-col items-center justify-center space-y-5 text-center w-full md:w-[40%] xl:w-[20%]">
                        <div className="w-16 h-16 rounded-full bg-[#1A2027] flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="text-aquamarine"/>
                        </div>
                        <h4 className="text-2xl font-semibold text-aquamarine">Lorem ipsum</h4>
                        <p className="text-grey-100">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci consequuntur sint exercitationem eum, asperiores quas tempore cupiditate rem facilis atque 
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-5 text-center w-full md:w-[40%] xl:w-[20%]">
                        <div className="w-16 h-16 rounded-full bg-[#1A2027] flex items-center justify-center">
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-aquamarine"/>
                        </div>
                        <h4 className="text-2xl font-semibold text-aquamarine">Lorem ipsum</h4>
                        <p className="text-grey-100">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci consequuntur sint exercitationem eum, asperiores quas tempore cupiditate rem facilis atque 
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-5 text-center w-full md:w-[40%] xl:w-[20%]">
                        <div className="w-16 h-16 rounded-full bg-[#1A2027] flex items-center justify-center">
                            <FontAwesomeIcon icon={faTruck} className="text-aquamarine"/>
                        </div>
                        <h4 className="text-2xl font-semibold text-aquamarine">Lorem ipsum</h4>
                        <p className="text-grey-100">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci consequuntur sint exercitationem eum, asperiores quas tempore cupiditate rem facilis atque 
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full px-10 md:px-20 xl:px-32 2xl:px-72 py-28 md:py-44 flex flex-col-reverse xl:flex-row items-start xl:items-center justify-between xl:space-x-28 text-white">
                <div className="flex flex-col space-y-5 w-full xl:w-[50%]">
                    <h2 className="text-5xl text-nice-sky-blue font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-grey-100"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae animi eum consequuntur, praesentium voluptas voluptate asperiores aliquam, quaerat, molestiae ut! Eius excepturi.
                    </p>
                    <button className="w-44 py-3 bg-nice-sky-blue flex justify-center items-center rounded-md text-black group space-x-2 z-[1] relative">
                        <div className="bg-nice-sky-blue blur w-full h-full rounded-md absolute top-0 left-0 z-0 group-hover:blur-md duration-200"></div>
                        <span className="z-[1]">
                            Learn More
                        </span>
                        <FontAwesomeIcon className="z-[1] group-hover:translate-x-1 duration-200" icon={faArrowCircleRight}/>
                    </button>
                </div>
                <Tilt className="w-full xl:w-[40%] mb-5 xl:mb-0" tiltMaxAngleX="7" tiltMaxAngleY="7" transitionSpeed={10000}>
                    <img src="/img/portofolio/userone/img1.png"/>
                </Tilt>
            </section>
            <section className="w-full px-10 md:px-20 xl:px-32 2xl:px-72 py-28 md:py-44 flex flex-col xl:flex-row items-start xl:items-center justify-between xl:space-x-28 text-white">
                <Tilt className="w-full xl:w-[80%] mb-5 xl:mb-0" tiltMaxAngleX="3" tiltMaxAngleY="3" transitionSpeed={10000}>
                    <img src="/img/portofolio/userone/img2.png"/>
                </Tilt>
                <div className="flex flex-col space-y-5 w-full xl:w-[75%]">
                    <h2 className="text-5xl text-nice-aquamarine font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-grey-100"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae animi eum consequuntur, praesentium voluptas voluptate asperiores aliquam, quaerat, molestiae ut! Eius excepturi.
                    </p>
                    <button className="w-44 py-3 bg-nice-aquamarine flex justify-center items-center rounded-md text-black group space-x-2 z-[1] relative">
                        <div className="bg-nice-aquamarine blur w-full h-full rounded-md absolute top-0 left-0 z-0 group-hover:blur-md duration-200"></div>
                        <span className="z-[1]">
                            Learn More
                        </span>
                        <FontAwesomeIcon className="z-[1] group-hover:translate-x-1 duration-200" icon={faArrowCircleRight}/>
                    </button>
                </div>
            </section>
            <section className="w-full px-10 md:px-20 xl:px-32 2xl:px-72 py-28 md:py-44 flex flex-col-reverse xl:flex-row items-start xl:items-center justify-between xl:space-x-28 text-white">
                <div className="flex flex-col space-y-5 w-full xl:w-[75%]">
                    <h2 className="text-5xl text-[#1bd3dc] font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-grey-100"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae animi eum consequuntur, praesentium voluptas voluptate asperiores aliquam, quaerat, molestiae ut! Eius excepturi.
                    </p>
                    <button className="w-44 py-3 bg-[#1bd3dc] flex justify-center items-center rounded-md text-black group space-x-2 z-[1] relative">
                        <div className="bg-[#1bd3dc] blur w-full h-full rounded-md absolute top-0 left-0 z-0 group-hover:blur-md duration-200"></div>
                        <span className="z-[1]">
                            Learn More
                        </span>
                        <FontAwesomeIcon className="z-[1] group-hover:translate-x-1 duration-200" icon={faArrowCircleRight}/>
                    </button>
                </div>
                <Tilt className="w-full xl:w-[80%] mb-5 xl:mb-0" tiltMaxAngleX="2" tiltMaxAngleY="2" transitionSpeed={10000}>
                    <img src="/img/portofolio/userone/img3.png"/>
                </Tilt>
            </section>
            <section className="w-full px-10 md:px-20 xl:px-32 2xl:px-72 py-28 md:py-44 flex flex-col xl:flex-row items-start xl:items-center justify-between xl:space-x-28 text-white">
                <Tilt className="w-full xl:w-[80%] mb-5 xl:mb-0" tiltMaxAngleX="3" tiltMaxAngleY="3" transitionSpeed={10000}>
                    <img src="/img/portofolio/userone/img4.png"/>
                </Tilt>
                <div className="flex flex-col space-y-5 w-full xl:w-[75%]">
                    <h2 className="text-5xl text-[#30b9ff] font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-grey-100"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae animi eum consequuntur, praesentium voluptas voluptate asperiores aliquam, quaerat, molestiae ut! Eius excepturi.
                    </p>
                    <button className="w-44 py-3 bg-[#30b9ff] flex justify-center items-center rounded-md text-black group space-x-2 z-[1] relative">
                        <div className="bg-[#30b9ff] blur w-full h-full rounded-md absolute top-0 left-0 z-0 group-hover:blur-md duration-200"></div>
                        <span className="z-[1]">
                            Learn More
                        </span>
                        <FontAwesomeIcon className="z-[1] group-hover:translate-x-1 duration-200" icon={faArrowCircleRight}/>
                    </button>
                </div>
            </section>
        </>
    )
}