import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-semibold sm:text-lg">
          Not sure where to go? Perfect
        </p>

        <button
          className="text-purple-500 my-3 bg-white px-10 py-4 
        font-bold rounded-full shadow-md transition duration-150 hover:shadow-xl active:scale-90"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
