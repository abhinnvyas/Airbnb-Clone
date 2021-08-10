import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p>{description}</p>
        <button
          className="text-sm text-white bg-black mt-5 rounded-lg p-3 cursor-pointer
        shadow-md transition transform duration-100 ease-out hover:scale-105 active:scale-95 hover:shadow-2xl"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
