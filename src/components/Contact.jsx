import React from 'react'

const Contact = () => {
  return (
    <div className='flex mx-44 px-4 pb-24'>
    <div className='grid grid-cols-2 shadow-2xl w-[1140px] h-[490px] px-14 pt-[65px] pb-[100px]'>
      <div className='flex flex-col gap-3 text-sm px-4'>
        <h2 className='font-bold text-4xl text-[#092A48]'>Request a Call back</h2>
        <p className='text-base text-[#6A6A6A]'>Nemo enim ip
          sam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem seq
        ui nesciunt. Neque porro quisquam est, qui dolorem ipsum quia do
        lor sit amet
        </p>
      </div>
      <div className='mt-7'>
        <form className='grid grid-cols-2 gap-6 '>
          <div className='flex flex-col px-2 font-normal space-y-2 text-sm '>
          <label htmlFor="">FULLNAME</label>
          <input type="text" className='border px-3 py-5 bg-[#EBEEF0] w-[222px] h-10' />
          </div>
          <div className='flex flex-col px-2 font-normal space-y-2 text-sm '>
          <label htmlFor="">LASTNAME</label>
          <input type="text" className='border-2 px-3 py-5 bg-[#EBEEF0] w-[222px] h-10' />
          </div>
          <div className='flex flex-col px-2 font-normal space-y-2 text-sm '>
          <label htmlFor="">PHONE NO.</label>
          <input type="text" className='border-2 px-3 py-5 bg-[#EBEEF0] w-[222px] h-10' />
          </div>
          <div className='flex flex-col px-2 font-normal space-y-2 text-sm '>
          <label for="business">BUSINESS TYPE</label>
          <select id="car" name="car" className='border-2 px-3 py-2 bg-[#EBEEF0] w-[222px] h-10 text-black appearance-none '>
          <option value="volvo">Business Types</option>
          <option value="saab">Sole Proprietorship</option>
          <option value="mercedes">Partnership</option>
          <option value="audi">Corporation</option>
        </select>
          </div>
          <input type="submit" 
  className='border col-span-2 text-white py-2 px-10 mt-3 justify-center font-medium cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-l' />
          
        </form>
      </div>
     
    </div>
    </div>
  )
}

export default Contact
