import React from 'react';

const Syre = () => {
  return (
    <div>
      <main className='min-h-screen pt-28 bg-black flex justify-center items-center'>
        <div className="w-full max-w-7xl p-6 h-auto flex flex-col justify-between items-center space-y-12">
          <div className="flex w-full justify-between items-start space-x-6 lg:flex-row flex-col">
            <div className="right lg:w-3/5 flex flex-col items-start gap-5">
              <h1 className="text-5xl sm:text-7xl text-white font-semibold">
                Syreos
              </h1>
              <p className="text-lg sm:text-xl text-white">
                Syreos is a business banking platform catering to merchants of all sizes in Nigeria. Syreos Business Banking offers simplified banking solutions designed to help businesses thrive.
              </p>
            </div>

            <div className="left lg:w-2/5 flex flex-col items-end gap-5">
              <ul className="text-white list-disc">
                <li>UI/UX Design</li>
                <li>Interaction Design</li>
                <li className='list-none'>
                  <a href="" className='text-[#DBFB8E]'>
                    Syreos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735886204/Rectangle_10_qghcjw.jpg" alt="Syreos Business Banking Platform" className='rounded-lg w-full object-cover' />
          </div>
        </div>
      </main>

      <div className="min-h-screen bg-black p-5 flex flex-col items-center justify-center text-white">
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">About the project</h1>
          <p className="w-1/2 mt-4 font-semibold text-xl">
          A swift login process gets users in quickly and effortlessly, ensuring they can start enjoying your app without delay
          </p>
        </div>

        <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4 ">
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735892062/login_sz07gh.png" alt="" className='rounded-lg' loading='lazy' />
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735892062/signup_xkhb9a.png" alt="" className='rounded-lg' loading='lazy' />
          <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735892062/dashboard_pqaew6.png" alt="" className='rounded-lg' loading='lazy' />
        </div>
      </div>

      <div className="min-h-screen sm:mb-8 md:mb-8 flex flex-col items-center justify-center ">
        <div className="w-full items-start ">
          <h1 className=' text-4xl font-semibold ' >
            User Problem
          </h1>

          <p className="text-xl w-1/2 font-semibold"> These user problems highlight the diverse range of financial management challenges faced by Nigerian business owners across different sectors, which need to be addressed through comprehensive solutions.
          About 24.5% stated that they had cashflow & Payment management problem </p>
        </div>

        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#121212] w-full p-6 rounded-lg">Item 1</div>
          <div className="bg-[#121212] w-full p-6 rounded-lg">Item 2</div>
          <div className="bg-[#121212] w-full p-6 rounded-lg">Item 3</div>
          <div className="bg-[#121212] w-full p-6 rounded-lg">Item 4</div>
        </div>

      </div>

      {/* User needs */}

      <div className="min-h-screen mt-12 sm:mt-0 flex flex-col items-center justify-center ">
        <div className="w-full items-start ">
          <h1 className=' text-4xl font-semibold ' >
            User needs
          </h1>

          <p className="text-xl w-1/2 font-semibold"> Empowering Businesses with the best payment option  </p>
        </div>

        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#121212] w-full p-8 rounded-lg">
            <h1 className="text-xl font-semibold ">
              Payment management, income and expense tracking
            </h1>
            <p className='mt-8' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum temporibus deserunt quo. Veniam corrupti voluptatum quo sed beatae reiciendis, atque unde obcaecati cupiditate iste adipisci impedit sequi quae veritatis.
            </p>
          </div>

          <div className="bg-[#121212] w-full p-8 rounded-lg">
            <h1 className="text-xl font-semibold ">
              Payment management, income and expense tracking
            </h1>
            <p className='mt-8' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum temporibus deserunt quo. Veniam corrupti voluptatum quo sed beatae reiciendis, atque unde obcaecati cupiditate iste adipisci impedit sequi quae veritatis.
            </p>
          </div>

          <div className="bg-[#121212] w-full p-8 rounded-lg">
            <h1 className="text-xl font-semibold ">
              Payment management, income and expense tracking
            </h1>
            <p className='mt-8' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum temporibus deserunt quo. Veniam corrupti voluptatum quo sed beatae reiciendis, atque unde obcaecati cupiditate iste adipisci impedit sequi quae veritatis.
            </p>
          </div>

          <div className="bg-[#121212] w-full p-8 rounded-lg">
            <h1 className="text-xl font-semibold ">
              Payment management, income and expense tracking
            </h1>
            <p className='mt-8' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum temporibus deserunt quo. Veniam corrupti voluptatum quo sed beatae reiciendis, atque unde obcaecati cupiditate iste adipisci impedit sequi quae veritatis.
            </p>
          </div>
        </div>

      </div>

      {/* Our solution */}

      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="w-full items-start ">
          <h1 className=' text-4xl font-semibold ' >
            Our Solution
          </h1>

          <p className="text-xl w-1/2 font-semibold"> We designed an application with AR features that would analyze users’ skin and recommend the right products. Also users can try virtual make-up before buying it which would reduce wrong purchases. </p>
        </div>
    


      <div className="min-h-screen w-full mt-12 bg-blue-500 flex justify-center items-center p-6">
  {/* Container */}
  <div className="w-full flex flex-col sm:flex-row md:flex-row justify-around items-center">
    {/* Phone 1 */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735930023/Change_This_5_kjhbo1.png"
        alt="Phone 1"
        className="rounded-lg shadow-lg w-[250px] sm:w-[300px] mt-0"
      />
    </div>
    {/* Phone 2 */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735929945/Change_This_3_ajdmuj.png"
        alt="Phone 2"
        className="rounded-lg shadow-lg w-[250px] sm:w-[300px] mt-12"
      />
    </div>
    {/* Phone 3 */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735929678/Change_This_1_vuvc5b.png"
        alt="Phone 3"
        className="rounded-lg shadow-lg w-[250px] sm:w-[300px] mt-24"
      />
    </div>
  </div>
</div>
</div>

      <div className="min-h-screen bg-black p-5 flex flex-col items-center justify-center text-white">
              <div className="w-full items-start justify-center p-3 ">
                <h1 className="text-4xl font-semibold ">Enabling the seamless experience.</h1>
                <p className="w-full sm:w-1/2 mt-4 font-semibold text-xl">
                Behind every transaction, there is a story worth knowing. And behind these stories are the need for human connection and relationships.
                This is why Pesa cares more than just powering global money transfers. They're helping Borderless Nomads strengthen ties with the worlds they care most about, one transaction at a time.
                </p>
              </div>

              <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4 ">
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_22_qrpcpc.png" alt="" className='rounded-lg' loading='lazy' />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_21_pspjiu.png" alt="" className='rounded-lg' loading='lazy' />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_23_lgvqjv.png" alt="" className='rounded-lg' loading='lazy' />
              </div>
              <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4 ">
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_22_1_pxiebl.png" alt="" className='rounded-lg' loading='lazy' />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_21_1_wqkw58.png" alt="" className='rounded-lg' loading='lazy' />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735931982/Rectangle_23_1_y2e2tw.png" alt="" className='rounded-lg' loading='lazy' />
              </div>
      </div>

      <main className='min-h-screen pt-28 bg-black flex justify-center items-center'>
        <div className="w-full max-w-7xl p-6 h-auto flex flex-col justify-between items-center space-y-12">
          <div className="flex w-full justify-between items-start space-x-6">
            <div className="right w-full sm:w-1/2 flex flex-col items-start gap-5">
              <h1 className="text-5xl sm:text-7xl text-white font-semibold">
                Behind the transaction
              </h1>
              <p className="text-lg sm:text-xl text-white">
              Behind every transaction, there is a story worth knowing. And behind these stories are the need for human connection and relationships.
              This is why Syreos cares more than just powering global money transfers. They're helping business giants strengthen ties with the costumers they care most about, one transaction at a time.
              </p>
            </div>
          </div>

          <div className="image mt-6 w-full max-w-4xl rounded-lg">
            <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1735932007/laptop_nc56rg.jpg" alt="Syreos Business Banking Platform" className='rounded-lg w-full object-cover' loading='lazy' />
          </div>
        </div>
      </main>

      <div className="w-full bg-[#0A0A0A] p-8 flex flex-col gap-6 justify-center items-center ">
        <p className="font-semibold text-[#DBFB8E] ">View next case study</p>
        <h1 className=' text-5xl text-[#DBFB8E] ' >Qwikserve Delivery App</h1>
      </div>





    </div>
  );
};

export default Syre;
