import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WelcomeSection = (): JSX.Element => {
  // Data for feature list to enable mapping
  const features = [
    {
      text: "Free 14-day trial",
      icon: "/img-3.svg",
    },
    {
      text: "No credit card required",
      icon: "/img-6.svg",
    },
    {
      text: "Setup in under 5 minutes",
      icon: "/img-3.svg",
    },
  ];

  // Logo parts data for cleaner rendering
  const logoParts = [
    {
      src: "/subtract.svg",
      alt: "Subtract",
      className: "w-[29px] h-[34px] top-5 left-[131px]",
    },
    {
      src: "/subtract-1.svg",
      alt: "Subtract",
      className: "w-[33px] h-[34px] top-[19px] left-[165px]",
    },
    {
      src: "/vector-2.svg",
      alt: "Vector",
      className: "w-8 h-[34px] top-5 left-[202px]",
    },
    {
      src: "/vector.svg",
      alt: "Vector",
      className: "w-7 h-[35px] top-[19px] left-[241px]",
    },
    {
      src: "/vector-1.svg",
      alt: "Vector",
      className: "w-[23px] h-[34px] top-5 left-[291px]",
    },
    {
      src: "/vector-3.svg",
      alt: "Vector",
      className: "w-7 h-[33px] top-5 left-[97px]",
    },
    {
      src: "/vector-5.svg",
      alt: "Vector",
      className: "w-[29px] h-[34px] top-5 left-[318px]",
    },
    {
      src: "/vector-4.svg",
      alt: "Vector",
      className: "w-[5px] h-[34px] top-5 left-[277px]",
    },
    {
      src: "/group-1.png",
      alt: "Group",
      className: "w-[78px] h-[71px] top-0 left-0",
    },
  ];

  return (
    <Card className="w-full max-w-[596px] relative">
      <CardContent className="p-0">
        {/* Logo section */}
        <div className="relative w-[348px] h-[71px] mb-9">
          <div className="relative w-full h-full">
            {logoParts.map((part, index) => (
              <img
                key={`logo-part-${index}`}
                className={`absolute ${part.className}`}
                alt={part.alt}
                src={part.src}
              />
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="w-full max-w-[596px]">
          <div className="relative w-full">
            {/* Heading */}
            <h1 className="w-full max-w-[545px] mb-9 [font-family:'Ubuntu',Helvetica] font-bold text-white text-[48px] tracking-[0] leading-[60px]">
              Start Your Journey
            </h1>

            {/* Description */}
            <div className="w-full max-w-[595px] mb-11 opacity-90 [font-family:'Ubuntu',Helvetica] font-normal text-white text-[26.7px] tracking-[0] leading-[37.3px]">
              Join thousands of professionals using Transify
              <br />
              to break language barriers and connect
              <br />
              globally.
            </div>

            {/* Features list */}
            <div className="w-full max-w-[328px] space-y-[22px]">
              {features.map((feature, index) => (
                <div key={`feature-${index}`} className="flex items-center">
                  <img
                    className="w-6 h-6 mr-4"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <span className="[font-family:'Ubuntu',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[37.3px] whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
