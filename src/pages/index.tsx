import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 bg-[#304269]">
        <div className="col-span-4 p-4 ml-14">
          <h1 className="text-white text-2xl">
          MP Labs
          </h1>
          <p className="text-white text-base">
          Software house
          </p>
        </div>
        <div className="col-span-2 p-4 space-x-4 ">
          <a className="text-white">Solutions</a>
          <a className="text-white">Company</a>
          <a className="text-white">About Us</a>
          <button className="bg-[#D9E8F5] w-28 h-12">Contact Us</button>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-[#F26101] h-0.5">
        <div className="col-span-1 p-4 ml-14" />
      </div>

      <div className="grid grid-cols-4 mt-16 gap-4">
        <div className="col-span-1 p-4 ml-14 ">
            <h1 className="text-6xl font-bold">
              Custom Software Development
            </h1>
        </div>
        <div className=" flex flex-col col-start-3 p-4 content-center justify-center">
          <div className=" flex flex-col p-4">
              <h1 className="text-2xl font-bold">
                On demand
              </h1>
              <p>
                We create custom software solutions for your business.
              </p>
            </div>
        </div>
        <div className="col-span-1 col-start-4 flex content-center justify-center ">
          <div className="grid grid-cols-4 flex flex-col p-4 ">
            <div className=" flex flex-col p-4 col-span-4 content-center justify-center ">
                <h1 className="text-2xl font-bold min-w-full col-span-6">
                  Maintence code
                </h1>
                <p className="max-w-fit col-span-4">
                  We create custom software solutions for your business.
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-[#304269] h-0.5 mx-14 my-14" />
    </>
  )
}

export default Home
