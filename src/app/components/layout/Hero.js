import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everyting
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Anyone who says that money cannot buy happiness has clearly never
          spent their money on pizza.
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" bg-primary flex items-center gap-2 text-white px-5 py-2 rounded-lg uppercase">
            Order Now <Right className="size-6" />
          </button>
          <button className="flex items-center gap-2 py-2 text-gray-700 font-semibold">
            Learn More <Right className="size-6" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza1.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="pizza"
        />
      </div>
    </section>
  );
};

export default Hero;
