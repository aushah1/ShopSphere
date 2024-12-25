import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            ShopSphere was born fro a passion fro innovation Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Placeat, aspernatur. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Totam sed itaque
            iste quasi reprehenderit? Suscipit, qui.
          </p>
          <p>
            Since our inceptions , we've worked tirelessly to curate Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ea, doloremque. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Totam sed itaque
            iste quasi reprehenderit? Suscipit, qui.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at ShopSphere is to empower customer with choice , Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut
            laudantium quas dolor rerum autem quos provident ullam. Deserunt,
            numquam!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex felx-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            We meticulously select and vet each product Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Porro perferendis enim, molestiae
            asperiores modi accusantium quo!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience :</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            perferendis enim, molestiae asperiores modi accusantium quo!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">
            Our team of dedicated proffessionals is here to assit you the way .
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            perferendis enim, molestiae asperiores modi accusantium quo!
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
