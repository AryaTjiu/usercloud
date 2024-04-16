import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CallToActionComponent() {
    return (
        <section className="w-full py-32 md:py-48 xl:py-72 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-5 text-center w-[85%] md:w-[40%]">
                <h3 className="text-3xl md:text-5xl font-semibold text-white">Lorem ipsum dolor sit amet.</h3>
                <p className="text-grey-100">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus corrupti necessitatibus, eligendi eaque nemo delectus illo rem quo, cumque officia dolorem. Delectus, praesentium culpa. Labore nostrum voluptates pariatur debitis exercitationem.
                </p>
                <button className="relative w-fit group">
                    <div className="absolute rounded-md bg-nice-aquamarine blur w-full h-full group-hover:blur-md duration-200"></div>
                    <div className="w-44 py-3 flex justify-center items-center space-x-2 bg-nice-aquamarine rounded-md">
                        <FontAwesomeIcon icon={faCalendarAlt} className="z-[1]"/>
                        <span className="z-[1]">
                            Lorem ipsum
                        </span>
                    </div>
                </button>
            </div>
        </section>
    )
}