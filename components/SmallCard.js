import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center space-y-3 rounded-xl transition-all hover:bg-gray-200 cursor-pointer">
      <Image
        className="rounded-lg"
        src={img}
        width="50"
        height="50"
        objectFit="contain"
      />
      <div className="flex flex-col ml-3">
        <h1>{location}</h1>
        <h1>{distance}</h1>
      </div>
    </div>
  );
}

export default SmallCard;
