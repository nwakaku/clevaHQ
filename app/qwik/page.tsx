import React from 'react'
import Img from '../../public/phone.jpg'

const page = () => {
  return (
    <div>
      <section className='min-h-screen pt-28 bg-black flex justify-center items-center'>
        <div className="w-full max-w-7xl p-6 h-auto flex flex-col justify-between items-center space-y-12">
          <div className="flex w-full justify-between items-start space-x-6">
            <div className="right w-1/3 flex flex-col items-start gap-5">
              <h1 className="text-5xl sm:text-7xl text-white font-semibold">
                QwikServe
              </h1>
              <p className="text-lg sm:text-xl text-white">
                QwikServe is a business banking platform catering to merchants of all sizes in Nigeria. Syreos Business Banking offers simplified banking solutions designed to help businesses thrive.
              </p>
            </div>

            <div className="left w-1/3 flex flex-col items-end gap-5">
              <ul className="text-white">
                <li>UI/UX Design</li>
                {/* <li>Interaction Design</li> */}
                <li>
                  <a href="" className='text-[#DBFB8E] text-lg sm:text-xl font-semibold'>
                    Syreos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982260/qwikhome_dammu4.jpg" alt="Syreos Business Banking Platform" className='rounded-lg w-full max-w-4xl object-cover' />
          </div>
        </div>
      </section>

      <section className='min-h-screen bg-black flex flex-col justify-center items-center'>
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">About the project</h1>
          <p className="w-1/2 mt-4 font-semibold text-xl">
          A swift login process gets users in quickly and effortlessly, ensuring they can start enjoying your app without delay
          </p>
        </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982257/qwikneeds_clof3l.jpg" alt="Syreos Business Banking Platform" className='rounded-lg w-full max-w-4xl object-cover' />
          </div>
      </section>

      <div className="min-h-screen bg-black p-5 flex flex-col items-center justify-center text-white">
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">About the project</h1>
          <p className="w-1/2 mt-4 font-semibold text-xl">
          A swift login process gets users in quickly and effortlessly, ensuring they can start enjoying your app without delay
          </p>
        </div>

        <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4 ">
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982247/qwikproblem_df5ffm.png" alt="" className='rounded-lg' loading='lazy' />
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982247/qwikproblem2_hmfkt4.png" alt="" className='rounded-lg' loading='lazy' />
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982247/qwikproblem3_cspjno.png" alt="" className='rounded-lg' loading='lazy' />
        </div>
      </div>

      <section className='min-h-screen bg-black flex flex-col justify-center items-center'>
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">About the project</h1>
          <p className="w-1/2 mt-4 font-semibold text-xl">
          A swift login process gets users in quickly and effortlessly, ensuring they can start enjoying your app without delay
          </p>
        </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982257/qwikneeds_clof3l.jpg" alt="Syreos Business Banking Platform" className='rounded-lg w-full max-w-4xl object-cover' />
          </div>
      </section>
      
      <section className='min-h-screen bg-black flex flex-col justify-center items-center'>
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">About the project</h1>
          <p className="w-1/2 mt-4 font-semibold text-xl">
          A swift login process gets users in quickly and effortlessly, ensuring they can start enjoying your app without delay
          </p>
        </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735982252/qwiksolution_g0cj99.png" alt="Syreos Business Banking Platform" className='rounded-lg w-full max-w-4xl object-cover' />
          </div>
      </section>

      <div className="w-full bg-[#0A0A0A] p-8 flex flex-col gap-6 justify-center items-center ">
        <p className="font-semibold text-[#DBFB8E] ">View next case study</p>
        <h1 className=' text-5xl text-[#DBFB8E] ' >Qwikserve Delivery App</h1>
      </div>




      
    </div>
  )
}

export default page
