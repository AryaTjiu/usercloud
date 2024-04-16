import Lenis from "@studio-freight/lenis";
import { createContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export const LenisContextProvider = ({children}) => {
    const lenis = useRef();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            lenis.current = new Lenis();
            lenis.current.on("scroll", () => {});

            function raf(time) {
                lenis.current.raf(time);
                requestAnimationFrame(raf);
            }
            const rafId = requestAnimationFrame(raf);
            return () => {
                cancelAnimationFrame(rafId)
                if(lenis.current) {
                    lenis.current.destroy();
                    lenis.current = null
                }
            }
        }

    }, [])

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    )
}

export default LenisContext
