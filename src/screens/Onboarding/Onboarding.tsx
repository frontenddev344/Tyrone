import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { WelcomeStep } from "./steps/WelcomeStep";
import { StepListStep } from "./steps/StepListStep";
import { CategorySelectStep } from "./steps/CategorySelectStep";
import { BusinessInfoStep } from "./steps/BusinessInfoStep";
import { ToolCategoryStep } from "./steps/ToolCategoryStep";
import { RecommendedStackStep } from "./steps/RecommendedStackStep";

export const Onboarding = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleGetStarted = () => {
    setCurrentStep(2);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full ">
        {currentStep === 1 && <WelcomeStep onGetStarted={handleGetStarted} />}
        {currentStep === 2 && <StepListStep onNext={handleNext} />}
        {currentStep === 3 && <CategorySelectStep onNext={handleNext} />}
        {currentStep === 4 && (
          <BusinessInfoStep onBack={handleBack} onContinue={handleNext} />
        )}
        {currentStep === 5 && (
          <ToolCategoryStep onBack={handleBack} onContinue={handleNext} />
        )}
        {currentStep === 6 && (
          <RecommendedStackStep onBack={handleBack} />
        )}
        {/* Additional steps can be added here */}
      </div>
    </div>
  );
};