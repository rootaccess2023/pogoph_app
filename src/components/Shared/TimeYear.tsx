interface TimeYear {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export function TimeYear({ year, title, description, image }: TimeYear) {
  return (
    <div className="w-[28rem] my-auto">
      <div className="h-screen flex flex-col justify-center">
        <div className="h-[380px] w-full">
          <img src={image} alt="" />
        </div>
        <div className="h-[180px] flex flex-col justify-center px-4">
          <h1
            className="text-7xl font-[1000] text-red-700 -tracking-[0.06em]"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            {year}
          </h1>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
