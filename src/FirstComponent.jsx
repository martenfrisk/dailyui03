import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';
import './assets/main.css';
import { ReactComponent as PokalImg } from './img/SVG/pokal2.svg';



const FirstComponent = () => {
    const [ state, setState ] = useState([false])
    const champYears = ["1912", "1915", "1917", "1920", "1955", "1959", "1964", "1966", "2002", "2005", "2019"]
    const trophyRepeater = 
        champYears.map((i) =>
            <div className="mt-4 sm:mt-12"><PokalImg className="text-blue-100 fill-current w-20 h-20" /><div className="text-white text-center font-serif">{i}</div></div>
        )
    useEffect(() => {
        const timer = setTimeout(() => {
            setState(true)
        }, 5500) // 7500
        return () => clearTimeout(timer)
    }, [])
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col sm:flex-row items-center h-screen w-screen">
        <div className="block text-3xl  sm:text-5xl md:text-6xl text-blue-100 text-left mt-32 sm:mt-20 sm:mt-0 font-serif w-screen sm:w-1/2 pl-10 md:ml-4">
          <Typewriter 
              options={{
                  cursor: "",
                  delay: 150,
              }} 
              onInit={(typewriter) => {
                  typewriter.typeString('<span class="wrapper"><p>År <span class="text-yellow-500">1891,</span></p><p>på <span class="text-yellow-500">Alberget 4A.</span></p></span>')
                  .start()
              }}
          />
        </div>
        {state === true ? 
          <div>
              <FadeIn className="mt-10 grid h-auto px-5 grid-cols-4 grid-rows-3 " delay="300">
                  {trophyRepeater}
              </FadeIn>
              <FadeIn delay="3500">
                  <div className="mt-12 sm:mt-12 w-full text-center text-blue-100">Djurgår'n genom åren<br />ˬ</div>
              </FadeIn>
          </div> 
          :
          <div></div>
        }
      </div>


      <div>
        <div className="lg:py-12 lg:flex lg:justify-center mx-4 my-12 lg:my-0">
            <div className="bg-blue-200 shadow-xl lg:mx-8 lg:flex lg:max-w-3xl  lg:rounded-lg">
                <div className="lg:w-1/3 ">
                    <div className="h-64 bg-cover bg-center lg:rounded-tr-none lg:rounded-br-none lg lg:h-full lg:rounded-tl-lg lg:rounded-bl-lg" style={{ backgroundImage: 'url(' + require('./img/card1.jpg') + ')'}}></div>
                </div>
                <div className="py-6 lg:py-12 px-6 max-w-xl lg:max-w-5xl lg:w-2/3">
                    <h2 className="text-3xl text-blue-900 font-bold">I över <span className="text-blue-600">hundra år</span></h2>
                    <p className="mt-4 text-blue-800 text-justify">Djurgårdens idrottsförening bildades på ett litet kafé i kvarteret Alberget på Djurgården den 12 mars 1891. Åtta år senare, 1899, blev den allt populärare idrotten fotboll en del av verksamheten där det bärgats tolv SM-guld och fem cuptitlar genom åren.</p>
                </div>
            </div>
        </div> 
        <div className="lg:py-12 lg:flex lg:justify-center mx-4 mb-12">
            <div className="bg-blue-200 lg:mx-8 lg:flex lg:max-w-3xl shadow-xl lg:rounded-lg">
                <div className="lg:w-1/3">
                    <div className="h-64 bg-cover bg-center lg:rounded-tr-none lg:rounded-br-none lg lg:h-full lg:rounded-tl-lg lg:rounded-bl-lg" style={{ backgroundImage: 'url(' + require('./img/card2.jpg') + ')'}}></div>
                </div>
                <div className="py-6 lg:py-12 px-6 max-w-xl lg:max-w-5xl lg:w-2/3">
                    <h2 className="text-3xl text-blue-900 font-bold">Blåränderna går <span className="text-blue-600">aldrig ur</span></h2>
                    <p className="mt-4 text-blue-800 text-justify">I en instruktion för matchtröjans utseende från 1905 står bland annat: ”Blus på längden randig mörkblå och ljusblå, byxor svart med revärer”. De svarta byxorna hängde inte med länge, det spelades till slut mest i blåa byxor (vita har också kommit och gått). Men den blårandiga tröjan – genom tiderna både smal- och bredrandig – hänger ortfarande med och är för evigt förknippad med en av Sveriges allra mest anrika fotbollsföreningar genom tiderna.</p>
                </div>
            </div>
        </div> 
    </div>
    </div>
  )
}

export default FirstComponent