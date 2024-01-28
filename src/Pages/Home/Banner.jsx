import Lottie from "lottie-react";
import bannerAnimation from "../../assets/Animation/banner-animation.json";

const Banner = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-5">
      <h2 className=" text-center  text-4xl">
        <span className="font-bold">BlogCraft: </span>Your Gateway to Seamless{" "}
        <br /> <span className="font-bold">Blogging and Creative </span>
        Expression
      </h2>
      <p className=" text-center mt-3">
        Embark on a seamless blogging journey with our innovative features that
        empower your creativity. <br /> From sleek templates to powerful editing
        tools, <br /> BlogCraft ensures your content stands out. Share your
        unique voice with the world in just a few clicks.
      </p>

      <div className=" flex justify-center ">
        <Lottie animationData={bannerAnimation} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
