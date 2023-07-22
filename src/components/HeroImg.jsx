function HeroImg() {
  return (
    <div className="relative max-w-full ">
      <img src="/images/HeroImg.jpg" alt="" />
      <div className="absolute top-0 w-full md:w-1/2 left-0  h-full flex flex-col justify-center  p-6">
        <h1 className="flex flex-col flex-wrap text-white text-2xl md:text-7xl font-bold mb-4 ">
          <span>Shopping And </span>
          <span>Department Store </span>
        </h1>
        <p className="text-gray-200 text-1xl md:text-2xl md:mb-8">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="bg-green-950 text-white font-bold rounded-3xl md:w-[200px] w-[150px] p-2 md:p-3">
          Learn More
        </button>
      </div>
    </div>
  );
}
export default HeroImg;
