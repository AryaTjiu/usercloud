import { faArrowCircleRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroComponent() {
    return (
        <section className="w-full min-h-screen relative flex justify-center items-center text-center text-white 
        px-10 2xl:px-72">
            <div className="w-full h-20 absolute top-0 left-0 bg-[#C7FAFF] blur-[20rem]"></div>
            <div className="flex flex-col items-center justtify-center w-full md:w-[90%] xl:w-[50%]">
                <div className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-aquamarine to-nice-sky-blue">
                    Lorem ipsum dolor
                </div>
                <p className="text-sm md:text-base mt-6 mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sequi vitae aliquam! Dolor quasi voluptas nisi iste ut dolore, commodi placeat amet quaerat enim earum facilis harum architecto. Recusandae, quibusdam. 
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5 w-fit">
                    <button className="text-sm md:text-base bg-aquamarine border-2 border-aquamarine w-44 py-3 flex space-x-2 justify-center items-center rounded-md text-black group-hover:text-[#47525E] relative group">
                        <div className="bg-aquamarine p-1 w-full h-full blur group-hover:blur-md duration-200 absolute top-0 left-0 z-[1]"></div>
                        <FontAwesomeIcon className="z-[2]" icon={faCalendarAlt}/>
                        <span className="z-[2]">Schedule a Demo</span>
                    </button>
                    <button className="text-sm md:text-base flex justify-center items-center w-44 md:w-36 py-3 border-white border rounded-md duration-200 space-x-2 group hover:border-[#97A1AB]">
                        <span>
                            Learn More
                        </span>
                        <FontAwesomeIcon icon={faArrowCircleRight} className="group-hover:translate-x-1 duration-200"/>
                    </button>
                </div>
            </div>            
        </section>
    )
}