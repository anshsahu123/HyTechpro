import define from "../assets/images/HyTechPro-define.png"
import deploy from "../assets/images/HyTechPro-deploy.png"
import transform from "../assets/images/HyTechPro-transform.png"
import Analize from "../assets/images/HyTechPro-analyze.png"
import evaluate from "../assets/images/HyTechPro-Evaluate.png"
import support from "../assets/images/HyTechPro-support.png"
import Hytech from "../assets/images/Salesfore_HytechPro.png"
import Microsoft from "../assets/images/Microsoft_HytechPro_9.png"
import Devops from "../assets/images/DevOps_HytechPro.png"
import digital from "../assets/images/Digital Transformation_HytechPro.png"
import Mobile from"../assets/images/mobile.png"
import Businessintel from "../assets/images/Business Intelligence_HytechPro.png"
import cms from "../assets/images/CMS_HytechPro.png"
import Mobility from "../assets/images/Mobility_HytechPro.png"
import Design from "../assets/images/Design_HytechPro.png"
const Approach = () => {
    return (
        <div className="mt-20">
            <div>
                <div className="flex ml-60 pt-20">
                    <li className="flex list-none items-center border-l absolute h-[67px] text-white pl-5 rounded-l-full bg-gradient-to-r from-[#193750] to-[#158DCB] ...  ">
                        <li className="text-lg">OUR APPROACH</li>
                        <div className="h-5 w-5 ml-1 bg-[#1589C5] rotate-45"></div>
                    </li>
                    <ul className="flex justify-between py-2 pl-52 gap-8 border pr-8 border-black rounded-full">
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={define} alt="" /></div>
                            <li>Define</li>
                        </li>
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={Analize} alt="" /></div>
                            <li>Analize</li>
                        </li>
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={evaluate} alt="" /></div>
                            <li>Evaluate</li>
                        </li>
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={transform} alt="" /></div>
                            <li>Transform</li>
                        </li>
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={deploy} alt="" /></div>
                            <li>Deploy</li>
                        </li>
                        <li className="flex items-center">
                            <div><img className="h-[50px] w-[50px]" src={support} alt="" /></div>
                            <li> Support</li>
                        </li>
                    </ul>
                </div>
                <p className="mt-20 text-center text-3xl font-bold">What We Do</p>
                <section>
                    <div className="flex justify-center -ml-20 text-center">
                        <div className="flex flex-col gap-y-10 mt-8 ">
                            <div className="flex text-right gap-2 ml-24">
                                <div className="ml-10"><a className="text-2xl text-black" href="">Salesforce</a><p>we all know how bunsinesses </p> <p>offering even well..</p></div>
                                <div><img className="  border border-black rounded-sm hover:bg-blue-300 hover:scale-105 hover:text-white" src={Hytech} alt="" /></div>
                            </div>
                            <div className="flex text-right ml-24">
                                <div><a className="text-2xl text-black" href="">Microsoft</a> <p>Microsoft is innately beneficial for </p> <p> businesses, given… </p></div>
                                <div><img className="border border-black rounded-sm ml-4" src={Microsoft} alt="" /></div>
                            </div>
                            <div className="flex  text-right ml-32">
                                <div><a className="text-2xl text-black" href="">Devops</a><p>Keeping up with the velocity of </p> <p> change and instrumenting… </p></div>
                                <img className="border h-[50px] w-[50px] rounded-sm border-black ml-1" src={Devops} alt="" />
                            </div>
                            <div className="flex text-right ml-24">
                                <div><a className="text-2xl text-black" href="">Digital Transformation </a><p> Uncertainties in business landscape </p> <p> stare organizations… </p></div>
                                <img className="border h-[50px] w-[50px] rounded-sm border-black ml-1" src={digital} alt="" />
                            </div>
                        </div>
                        
                        <div>
                           <img className="h-[550px] w-[350px] ml-10" src={Mobile} alt="" />
                        </div>

                        <div className="flex flex-col gap-y-10 mt-8 items-start">
                            <div className="flex text-left gap-1">
                                <img className="border h-[50px] w-[50px] rounded-sm border-black ml-1" src={Businessintel} alt="" />
                                <div><a className="text-2xl text-black" href="">Business Intelligenc</a> <p>Businesses seeing data as their </p><p> prime currency are on…</p></div>
                            </div>
                            <div className="flex text-left gap-1">
                                <img className="border h-[50px] w-[50px] border-black rounded-sm ml-1" src={cms} alt="" />
                                <div><a className="text-2xl text-black" href="">CMS </a><p>A choice of a great CMS is all what </p><p> you need to build…</p></div>
                            </div>
                            <div className="flex text-left  gap-1">
                                <img className="border h-[50px] w-[50px] border-black rounded-sm ml-1" src={Mobility} alt="" />
                                <div><a className="text-2xl text-black " href="">Mobility </a><p>“There are some pretty good apps </p><p> out there and we styled…</p></div>
                            </div>
                            <div className="flex text-left gap-1">
                                <img className="border h-[50px] w-[50px] border-black ml-1 rounded-sm" src={Design} alt="" />
                                <div><a className="text-2xl text-black" href="">Design</a> <p>We know that you understand your </p><p> organization like none…</p></div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Approach
