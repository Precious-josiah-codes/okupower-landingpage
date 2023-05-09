import Image from "next/image";

const ServiceAudience = ({audienceType, audienceContent, audienceColor, audienceImage}) => {
    return ( 
        <div className={`${audienceColor} sm:w-[25rem] h-[16rem] flex relative`}>
            {/* image */}
            <div className="w-[10rem] bg-green-400 absolute h-[18rem] bottom-0">
                <Image
                    src={audienceImage}
                    alt="individuals"
                    className="relative object-cover w-full h-full "
                    width={600}
                    height={600}
                    priority
                />
            </div>
            {/* text content */}
            <div className="ml-[10rem] pl-3 sm:pl-6 my-auto">
                <h1 className="text-2xl font-semibold">{audienceType}</h1>
                <p className="capitalize">{audienceContent}</p>
                {/* <button className="w-fit py-3 sm:py-4 px-9 mt-3 sm:mt-6 bg-[#0A8C55] text-white rounded-md">Start</button> */}
            </div>
        </div>
    );
}

export default ServiceAudience;