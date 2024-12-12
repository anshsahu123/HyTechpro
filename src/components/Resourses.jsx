import { VscArrowCircleRight } from "react-icons/vsc";
import digital from "../assets/images/digital-transform.png"
const Resourses = () => {
    return (
        <section className=" left-0 pb-16 h-full">
            <div className="flex w-screen  left-0  h-[76%]">
                <div className="w-[40%] bg-[#013664] h-[530px] ">
                    <div className="p-2  w-[500px] absolute drop-shadow-lg shadow-2xl translate-x-60 bg-white mt-28">
                        <img className="h-[500px]" src={digital} alt="" />
                    </div>
                </div>
                <div className="w-[60%] bg-[#F2F2F2]">
                    <div className="text-left ml-40 mt-10 flex flex-col gap-y-10">
                        <h2 className="text-3xl">Resources</h2>
                        <div className="flex text-white gap-5 ">
                            <button className="bg-[#29ABF1] rounded-sm w-40">Blog</button><button className="bg-[#013664] rounded-sm w-40">Case Studies</button><button className="bg-[#013664] rounded-sm w-40">White Papers</button>
                        </div>
                        <p><a className="text-[#013664] text-[22px] leading-3 tracking-tighter" href="#">Digital Transformation: How to Use Technology to Drive <br /> Innovation and Growth</a></p>
                        <p className="leading-5 tracking-tighter text-[19px]">Digital transformation is a process that allows organizations to use <br /> digital technologies to improve their effici</p>
                        <div className="flex justify-between mt-10  ">
                            <button className="rounded-full px-8 border-[#275493] text-[#275493] hover:bg-[#275493] hover:text-white">Read More</button>
                            <div className="flex items-center justify-between mr-44 gap-2">
                                <p>View All</p>
                                <div className="rounded-full border"><VscArrowCircleRight className="text-[45px] rounded-none" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="  pt-36 translate-x-52 text-left">
                    <p className=" text-[22px] tracking-tighter">Life After Salesforce Implementation, Now What ?</p>
                    <p>Life After Salesforce Implementation, Now What ?</p>
                    <div className="flex items-center gap-2 mt-10 translate-x-96">
                        <p>View All</p>
                        <div className="rounded-full border"><VscArrowCircleRight className="text-[45px] rounded-none" /></div>
                    </div>
                </div>
                <div className="flex flex-col ml-80 mt-14 border-l-[1px] border-gray-400 pl-10 text-left">
                    <p className="text-3xl">Infographics</p>
                    <div className="mt-10">
                    <p><a className="text-[#013664] text-[22px] leading-3 tracking-tighter" href="">How To Upgrade Your Business With Salesforce?</a></p>
                    <p className=" tracking-tighter text-[19px]">Salesforce has been stretching the possibilities of business growth <br /> right from its inception in 1</p>
                    </div>
                    <div className="flex justify-between mt-10 gap-64">
                            <button className="rounded-full px-8 border-[#275493] text-[#275493] hover:bg-[#275493] hover:text-white">Read More</button>
                            <div className="flex items-center justify-between mr-44 gap-2">
                                <p>View All</p>
                                <div className="rounded-full border"><VscArrowCircleRight className="text-[45px] rounded-none" /></div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Resourses;
