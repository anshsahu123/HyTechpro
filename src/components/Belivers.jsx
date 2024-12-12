import person from "../assets/images/person.png"
import Carousel from './carousel'

const Belivers = () => {
  return (
    <div>
      <div className='bg-[#F1F1F1] w-screen py-10  left-0 h-72'>
        <h2 className='text-center text-[35px] text-[#3A424A] tracking-tighter mt-5'>Our Believers</h2>
        <Carousel/>
        <div className="flex items-center mt-20 py-10 justify-center gap-5 bg-[#013664] text-white text-left">
          <div><img className="rounded-full h-[150px] w-[150px]" src={person} alt="" /></div>
          <div>
            <p>HyTech Professionals added numerous automations to our Salesforce CRM including a whole new user interface for creating </p>
             <p>opportunities and PDF quotations. A very good result was achieved and all through the implementation I found HyTech <br />pleasant to work with and always ready to help</p>
             <p className="font-bold mt-5">Tervor Nipper</p>
             <p className="mt-1 text-[#AAA5A5]">National Opration Manager</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-between items-center py-10 px-10 translate-y-60">
        <p className="text-[27px] tracking-tighter ml-64 text-[#484848]">Looking for Best-Fit Solution for Your Business?</p>

        <button className="rounded-full flex py-2 hover:bg-white hover:text-[#29ABF1] bg-[#29ABF1] gap-4 items-center text-white text-[15px]">
          <div className="rounded-full bg-white p-2 hover:bg-[#29ABF1] ">
            <div className="rounded-full h-[7px] w-[7px] bg-[#29ABF1] hover:text-white"></div>
          </div>
          <p className="text-[17px]">Talk to Our Experts</p>
        </button>
      </div>
    </div>
  )
}

export default Belivers
