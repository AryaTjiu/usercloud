import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-10 md:px-16 xl:px-20 2xl:px-72 pt-20 text-white bg-[#161616] space-y-10">
            <div className="flex flex-col md:flex-row justify-between space-y-20 md:space-y-0">
                <div className="flex flex-col space-y-7">
                    <h2 className="text-[45px] font-thin">USER</h2>
                    <p className="text-xs text-grey-100">
                        Lorem ipsum, dolor sit<br/> 
                        amet consectetur adipisicing<br/> 
                        elit. lorem AZ, 856743
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    <div className="sparce-y-3 md:space-y-6">
                        <h6 className="font-semibold">
                            Solutions
                        </h6>
                        <ul className="text-grey-100 space-y-1">
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Automated Bookkeeping</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Cath Up Pro</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Tax</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Pricing</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <h6 className="font-semibold">
                            Company
                        </h6>
                        <ul className="text-grey-100 space-y-1">
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>FAQs</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Careers</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Security</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Our Story</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Brand</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Press</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className="text-sm flex flex-col group w-fit">
                                    <span>Contact</span>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-white duration-500"></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-grey-100 py-6 flex justify-between text-sm text-grey-100">
                <div className="flex space-x-2">
                    <span>Inspired By : </span>
                    <Link href={'https://www.uplinq.com/'} className="text-aquamarine flex flex-col w-fit group">
                        <span>
                            uplinq
                        </span>
                        <div className="w-0 h-[1px] bg-white group-hover:w-full duration-500"></div>
                    </Link>
                </div>
                <div className="flex space-x-2">
                    <Link href={'#'} className="flex flex-col w-fit group">
                        <span>
                            Terms
                        </span>
                        <div className="w-0 h-[1px] bg-white group-hover:w-full duration-500"></div>
                    </Link> 
                    <Link href={'#'} className="flex flex-col w-fit group">
                        <span>
                            Privacy
                        </span>
                        <div className="w-0 h-[1px] bg-white group-hover:w-full duration-500"></div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}