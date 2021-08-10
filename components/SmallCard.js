import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer transition transform duration-200 ease-out hover:bg-gray-100 hover:scale-105 "
    >
      {/* left */}
      <div className="relative w-16 h-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
