import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <h1>Classic Margherita Pizza </h1>
      <p>
        Description: A timeless favorite, the Margherita pizza is adorned with rich tomato sauce,
        tangy mozzarella, and fresh basil leaves, delivering a burst of traditional Italian flavors
        in every bite.
      </p>
      <div>
        <Image src={"/pizza1.png"} layout={"fill"} objectFit={"contain"} alt="pizza" />
      </div>
    </section>
  );
};

export default Hero;
