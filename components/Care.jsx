'use client';
import { careTitle, careSubtitle, careList } from "../utils/data";
import imageFour from "../public/assets/image-four.svg";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

const Care = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">{careTitle}</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>
      </FadeIn>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((care, i) => (
            <FadeIn delay={0.2} direction="left" key={i}>
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <Image 
                src={care.img}
                alt={care.title}
                width={100}
                height={100}
                className="h-[88px] w-[68px]"
                />
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                  {care.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                    {care.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} direction="right" >
          <Image 
          src={imageFour}
          alt="plants"
          width={100}
          height={100}
          className="h-auto w-auto"
          />
        </FadeIn>
      </div>
    </div>
  )
};

export default Care;