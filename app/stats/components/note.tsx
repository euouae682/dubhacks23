import Image from "next/image";

interface Note {
  author: String;
  img: String;
  date: String;
  subtitle: String;
  description: String;
}

export function Note({ author, img, date, subtitle, description }: Note) {
  return (
    <div className="my-3 p-5 rounded-xl bg-orange-100">
      <div className="flex gap-5 items-center mb-3 relative">
        <Image
          src=""
          alt="bison"
          width={80}
          height={80}
          className="rounded-xl"
        />
        <div className="font-bold text-orange-900">
          <h1 className="text-2xl">{`${author} Notes`}</h1>
          <h2>{date}</h2>
          <h2>{subtitle}</h2>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-6 h-6 absolute top-0.5 right-0.5 stroke-orange-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <p className="text-orange-900">{description}</p>
    </div>
  );
}
