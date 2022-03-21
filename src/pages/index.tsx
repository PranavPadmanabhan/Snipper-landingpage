import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center  justify-start box-border overflow-hidden  sm:box-border">
      <Head>
        <title>NextJS </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col items-center justify-start sm:overflow-x-scroll snap-proximity  snap-y  ">
      <Header />
        <section className="relative h-[100vh] w-[100vw] flex  flex-col items-center justify-start bg-background bg-no-repeat bg-cover snap-start bg-fixed flex-shrink-0 pt-[8vh] sm:pt-[15vh]" >
          <h1 className="text-black font-bold text-[45px] max-w-[60%] text-center sm:text-[5vw] ">Gorgeous Code Snippets</h1>
          <p className="text-gray-700 font-light max-w-[75%] text-[18px] text-center mt-[0.5vw] mb-[0.5vw] sm:max-w-[60%] sm:text-[25px] sm:mt-[0.5vh] sm:mb-[0.5vh]">With Snipper,create fully creatable code snippets in a matter of seconds right from your browser</p>
          <div className="w-[85%] h-[8%] max-h-[55px] rounded-[8px] flex items-center justify-center bg-black mt-[1.8vw] sm:max-w-[20%] sm:mt-[2vh] sm:h-[15%] sm:max-h-[60px]">
            <span className="text-white text-[18px] font-bold">Get Started &#160;- <span className="text-gray-500 font-light">&#160;it's free</span></span>
          </div>
          <h1 className="text-gray-900 text-[18px] font-light my-[1.9vw] z-10 sm:my-[1vh] sm:text-[25px]">No credit card required</h1>
          <img src="/Snippet Image.png" alt="" className="absolute bottom-0 h-[40%] w-[90%]" />
        </section>
        <section className="relative h-[100vh] flex flex-col items-center justify-start w-[100vw] bg-white bg-no-repeat bg-cover snap-start flex-shrink-0 sm: sm:flex-row-reverse sm:px-[20px]">
          <img src="/Customizable Image.png" className="w-[85%] my-[5vh] ml-[20px] sm:w-[35%]" />
          <div className="flex flex-col w-[100%] h-[50%] pl-[20px]">
            <h1 className="text-black text-left text-[30px] font-bold max-w-[95%]">A fully<br /> customizable code<br /> snippet editor</h1>
            <p className="text-left text-[15px] max-w-[95%] my-[10px]">Fully customize color the scheme of your code snippet, or use our own premade color schemes,Export your snippets in JPG, PDF, PNG, or any of the other 10+ common extensions</p>
            <div className="flex items-center justify-center bg-black w-[60%] h-[30%] max-h-[55px] rounded-[8px] mt-[10px]">
              <span className="text-white text-[17px] font-bold">Get Started &#160;- <span className="text-gray-400 font-light">&#160;it's free</span></span>
            </div>
          </div>
          <div className="absolute bottom-2 flex flex-col items-start justify-center w-[100%] px-[20px]">
            <img src="/Logo.svg" className="w-[30%] max-w-[100px]" />
            <div className="flex items-center items-center justify-evenly w-[90%]">
              <h1 className="">Terms and Conditions</h1>
              <h1 className="">Privacy Policy</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
