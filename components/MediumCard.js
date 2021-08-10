import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer transition transform duration-200 ease-out hover:scale-105">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h1 className="text-2xl mt-3">{title}</h1>
    </div>
  );
}

export default MediumCard;
