import Lenis from "@studio-freight/lenis";
import FeaturesComponent from "./components/FeaturesComponent";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/ui/Navbar";
import ToTopButton from "./components/ui/toTopButton";
import { useEffect } from "react";
import { LenisContextProvider } from "../context/LenisContext";
import CallToActionComponent from "./components/CallToAction";
import Footer from "./components/ui/Footer";


export default function Index() {
    return (
        <LenisContextProvider>
            <main className="bg-darkTheme w-full overflow-hidden">
                <Navbar/>
                <ToTopButton/>
                <HeroComponent/>
                <FeaturesComponent/>
                <CallToActionComponent/>
                <Footer/>
            </main>
        </LenisContextProvider>
    )
}