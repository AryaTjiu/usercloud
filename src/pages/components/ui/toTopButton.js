import { faCaretUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import LenisContext from "../../../context/LenisContext";

export default function ToTopButton() {
    const lenis = useContext(LenisContext)
    const buttonRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(buttonRef.current, {
            yPercent : 200
        })

        const tl = gsap.timeline({scrollTrigger: {
            scrub : 1,
            start : '+=200',
            end : '+=20'
        }})

        tl.to(buttonRef.current, {
            yPercent : -50
        })

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
        }
    })

    function eventHandler() {
        if(lenis) {
            lenis.current.scrollTo(0,0)
        } else {
            console.log('lenis is not avaiable')
        }
    }

    return (
        <button className="w-16 xl:w-20 h-16 xl:h-20 bg-[#202020] grid place-content-center rounded-full fixed bottom-6 md:bottom-10 right-10 md:right-20 z-30" onClick={eventHandler} ref={buttonRef}>
            <FontAwesomeIcon icon={faChevronUp} className="text-nice-aquamarine text-2xl"/>
        </button>
    )
}