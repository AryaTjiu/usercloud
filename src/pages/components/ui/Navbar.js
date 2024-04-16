import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCalendar, faChevronDown, faChevronRight, faChevronUp, faCloud, faEthernet, faMoneyBill, faPager, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
    // gsap - timeline
    const tl = gsap.timeline({defaults : {
        duration : 0.1
    }})

    // close button
    const barsRef = useRef([]);

    function toCloseButton () {
        tl.to(barsRef.current[1], {
            x : 100,
            duration : 1
        }).to(barsRef.current[0], {
            y : 7,
            rotate : 45,
            duration : 1,
        }, '<').to(barsRef.current[2], {
            y : -7,
            rotate : -45,
            duration : 1,
        }, '<')
    }

    function unFocusHandler(type) {
        if(type == "animation") {
            tl.to(barsRef.current[0], {
                rotate : 0,
                y : -7,
                duration : 0.5,
            }, '<').to(barsRef.current[2], {
                rotate : 0,
                y : 7,
                duration : 0.5,
            }, '<').to(barsRef.current[1], {
                x : 0,
                duration : 0.5,
                ease : 'power4.in',
                onComplete : () => {
                    if(typeof window !== 'undefined') {
                        document.activeElement.blur()
                    }
                }
            }, '<')
        } else {
            if(typeof window !== 'undefined') {
                document.activeElement.blur()
            }
        }

    }

    // dropdown
    const listSection1Ref = useRef();
    const listSection2Ref = useRef();
    const dropdownMenu1Ref = useRef();
    const dropdownMenu2Ref = useRef();

    useEffect(() => {
        function openDropdown (currentRef) {
            tl.to(currentRef, {
                display : 'flex',
            }).to(currentRef, {
                opacity: 100,
                y : 10,
                duration : 0.05
            }, '<')
        }

        function closeDropdown (currentRef) {
            tl.to(currentRef, {
                opacity : 0,
                y : -5,
                duration : 0.05
            }).to(currentRef, {
                display : 'none'
            })
        }

        listSection1Ref.current.addEventListener('mouseenter', () => openDropdown(dropdownMenu1Ref.current))
        listSection1Ref.current.addEventListener('mouseleave', () => closeDropdown(dropdownMenu1Ref.current))
        listSection2Ref.current.addEventListener('mouseenter', () => openDropdown(dropdownMenu2Ref.current))
        listSection2Ref.current.addEventListener('mouseleave', () => closeDropdown(dropdownMenu2Ref.current))
        return () => {
            listSection1Ref.current.removeEventListener('mouseenter', () => console.log(dropdownMenu1Ref.current))
            listSection1Ref.current.removeEventListener('mouseleave', () => closeDropdown(dropdownMenu1Ref.current))
            listSection2Ref.current.removeEventListener('mouseenter', () => console.log(dropdownMenu2Ref.current))
            listSection2Ref.current.removeEventListener('mouseleave', () => closeDropdown(dropdownMenu2Ref.current))
        }
    }, [])

    return (
        <>  
            <header className="w-full px-6 md:px-20 2xl:px-72 py-6 flex justify-between items-center text-white z-10 absolute">
                <div className="flex items-center space-x-10 2xl:space-x-16">
                    <span className="text-4xl font-thin z-10">USER</span>
                    <ul className="hidden md:flex items-center md:space-x-4 2xl:space-x-7 text-[#848484] text-sm">
                        <li className="group relative w-fit" ref={listSection1Ref}>
                            <button href={"#"} className="hover:text-white hover:bg-[#2E3238] p-2 rounded-md duration-200 flex items-center space-x-2 group">
                                <span>
                                    Solutions
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} className="group-hover:rotate-[180deg] duration-200"/>
                            </button>
                            <div className="absolute hidden top-4 pt-10  duration-200" ref={dropdownMenu1Ref}>
                                <div className="flex p-4 flex-col space-y-5 bg-[#303030] rounded-3xl opacity-100 duration-200 left-2 w-[30rem]" >
                                    <div className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-aquamarine w-fit to-nice-sky-blue">
                                        LOREM IPSUM
                                    </div>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faCalendar} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Automated Bookkeeping</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faMoneyBill} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Tax</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faCalendar} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Catch Up Pro</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="w-full flex justify-between p-2 py-3 rounded-md bg-[#555856]">
                                        <div>
                                            <span className="text-white">
                                                Lorem ipsum dolor sit.
                                            </span>
                                            <p className="text-[#b5b5b5]">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                        <button className="border border-[#dfdfdf] rounded-md w-32 flex justify-center items-center space-x-2 text-white group hover:text-grey-100 hover:border-grey-100 duration-200">
                                            <span>Read More</span>
                                            <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 duration-200"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href={"#"} className="hover:text-white hover:bg-[#2E3238] p-2 rounded-md duration-200">
                                Pricing
                            </Link>
                        </li>
                        <li className="group relative w-fit" ref={listSection2Ref}>
                            <button className="hover:text-white hover:bg-[#2E3238] p-2 rounded-md duration-200 flex items-center space-x-2 group">
                                <span>
                                    Company
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} className="group-hover:rotate-[180deg] duration-200"/>
                            </button>
                            <div className="absolute hidden top-4 pt-10 duration-200" ref={dropdownMenu2Ref}>
                                <div className="p-4 flex flex-col space-y-5 bg-[#303030] rounded-3xl opacity-0 group-hover:opacity-100 duration-200 left-2 w-[30rem]">
                                    <div className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-nice-red-1 w-fit to-[#BD4DF6]">
                                        LOREM IPSUM
                                    </div>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faBars} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">FAQs</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faPager} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Blog</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faUsers} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Careers</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faEthernet} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Security</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faCloud} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Our Story</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                        <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                            <FontAwesomeIcon icon={faBandcamp} className="text-lg text-[#c8c8c8]"/>
                                        </div>
                                        <div className="text-grey-100 flex flex-col space-y-1">
                                            <span className="text-[#dbdbdb]">Brand kit</span>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="w-full flex justify-between p-2 py-3 rounded-md bg-[#555856]">
                                        <div>
                                            <span className="text-white">
                                                Lorem ipsum dolor sit.
                                            </span>
                                            <p className="text-[#b5b5b5]">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                        <button className="border border-[#dfdfdf] rounded-md w-32 flex justify-center items-center space-x-2 text-white group hover:text-grey-100 hover:border-grey-100 duration-200">
                                            <span>Read More</span>
                                            <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 duration-200"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="hidden md:flex items-center space-x-10">
                    <li className="hidden xl:inline-block text-aquamarine hover:text-white text-sm duration-200 group">
                        <Link href={"#"} className="group-hover:bg-[#2E3238] p-2 rounded-md duration-200">Schedule a Demo</Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <button className="bg-white border border-white hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-black duration-200">
                                Contact Us
                            </button>
                        </Link>
                    </li>
                </ul>

                {/* mobile */}
                <button className="group md:hidden" onClick={toCloseButton}>
                    <div className="w-12 h-12 flex flex-col justify-center items-center space-y-[5px] bg-[#303030] rounded-2xl z-10 group-focus:hidden">
                        <div className="h-[2px] w-6 bg-white z-10"></div>
                        <div className="h-[2px] w-6 bg-white z-10"></div>
                        <div className="h-[2px] w-6 bg-white z-10"></div>
                    </div>
                    <div className="w-12 h-12 hidden group-focus:flex flex-col justify-center items-center space-y-[5px] bg-[#303030] rounded-2xl z-10 overflow-hidden" onClick={() => unFocusHandler('animation')}>
                        <div className="h-[2px] w-6 bg-white z-10" ref={(ref) => barsRef.current[0] = ref}></div>
                        <div className="h-[2px] w-6 bg-white z-10" ref={(ref) => barsRef.current[1] = ref}></div>
                        <div className="h-[2px] w-6 bg-white z-10" ref={(ref) => barsRef.current[2] = ref}></div>
                    </div>
                    <ul className="w-full min-h-[75vh] bg-[#202020] absolute -top-[400vh] group-focus:top-0 left-0 pt-20 overflow-x-hidden duration-500">
                        <li className="border-b border-[#303030] w-full px-5">
                            <div href={"#"} className="w-full py-5 px-5 flex items-center justify-between text-[#d7d7d7] bg-[#282828] rounded-xl">
                                <span>
                                    Solutions
                                </span>
                                {/* <FontAwesomeIcon icon={faChevronDown} className="duration-200"/> */}
                            </div>
                            <div className="flex mt-3 mb-5 p-5 flex-col space-y-2 bg-[#303030] rounded-2xl opacity-100 duration-200 left-2 w-full text-sm text-left">
                                <div className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-aquamarine w-fit to-nice-sky-blue">
                                    LOREM IPSUM
                                </div>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faCalendar} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Automated Bookkeeping</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faMoneyBill} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Tax</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faCalendar} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Catch Up Pro</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <div className="w-full flex justify-between p-2 py-3 rounded-md bg-[#555856]">
                                    <div>
                                        <span className="text-white">
                                            Lorem ipsum dolor sit.
                                        </span>
                                        <p className="text-[#b5b5b5]">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </p>
                                    </div>
                                    <div className="border border-[#dfdfdf] rounded-md w-32 flex justify-center items-center space-x-1 text-white group hover:text-grey-100 hover:border-grey-100 duration-200 text-xs">
                                        <span>Read More</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 duration-200"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="border-b border-[#303030] w-full px-5 py-2">
                            <div href={"#"} className="w-full py-5 px-5 flex items-center justify-between text-[#d7d7d7] bg-[#282828] rounded-xl">
                                <span>
                                    Pricing
                                </span>
                            </div>
                        </li>
                        <li className="border-b border-[#303030] w-full px-5 mt-2">
                            <div href={"#"} className="w-full py-5 px-5 flex items-center justify-between text-[#d7d7d7] bg-[#282828] rounded-xl">
                                <span>
                                    Company
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} className="duration-200"/>
                            </div>
                            <div className="flex mt-3 mb-5 p-5 flex-col space-y-2 bg-[#303030] rounded-2xl opacity-100 duration-200 left-2 w-full text-sm text-left">
                                <div className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-nice-red-1 w-fit to-[#BD4DF6]">
                                    LOREM IPSUM
                                </div>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faBars} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">FAQs</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faPager} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Blog</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faUsers} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Careers</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faEthernet} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Security</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faCloud} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Our Story</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"#"} className="flex space-x-3 items-center p-2 rounded-md hover:bg-[#434644] duration-200">
                                    <div className="p-2 px-3 rounded-md bg-[#393939] border border-[#7d7d7d]">
                                        <FontAwesomeIcon icon={faBandcamp} className="text-lg text-[#c8c8c8]"/>
                                    </div>
                                    <div className="text-grey-100 flex flex-col space-y-1">
                                        <span className="text-[#dbdbdb]">Brand kit</span>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </Link>
                                <div className="w-full flex justify-between p-2 py-3 rounded-md bg-[#555856]">
                                    <div>
                                        <span className="text-white">
                                            Lorem ipsum dolor sit.
                                        </span>
                                        <p className="text-[#b5b5b5]">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </p>
                                    </div>
                                    <div className="border border-[#dfdfdf] rounded-md w-32 flex justify-center items-center space-x-2 text-white group hover:text-grey-100 hover:border-grey-100 duration-200">
                                        <span>Read More</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="group-hover:translate-x-1 duration-200"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <div className="w-full flex justify-center py-5 text-[#d7d7d7] space-x-2" onClick={() => unFocusHandler('none')}>
                            <span>Close</span>
                        </div>
                    </ul>
                </button>
            </header>
        </>
    )
}