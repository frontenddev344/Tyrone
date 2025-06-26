import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

interface AccountCreationSectionProps {
  onCreateAccount?: () => void;
}

export const AccountCreationSection = ({ onCreateAccount }: AccountCreationSectionProps): JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAccount?.();
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="w-full max-w-[597px] mx-auto py-10">
      <div className="mb-4">
        <h1 className="font-bold text-[40px] leading-[48px] text-gray-900 font-['Ubuntu',Helvetica]">
          Create your account
        </h1>
        <p className="font-normal text-[21.3px] leading-8 text-gray-600 font-['Ubuntu',Helvetica] mt-2">
          Get started with Transify today - it&#39;s free!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        <div className="flex gap-4 w-full">
          <div className="flex-1 space-y-2">
            <label className="font-medium text-[18.7px] leading-[26.7px] text-gray-700 font-['Ubuntu',Helvetica]">
              First name
            </label>
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2">
                <img
                  className="w-[19px] h-[21px]"
                  alt="User icon"
                  src="/img.svg"
                />
              </div>
              <Input
                className="pl-16 h-[67px] rounded-[10.67px] text-[21.3px] font-['Ubuntu',Helvetica] border-gray-300"
                defaultValue="John"
                placeholder="First name"
              />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <label className="font-medium text-[18.7px] leading-[26.7px] text-gray-700 font-['Ubuntu',Helvetica]">
              Last name
            </label>
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2">
                <img
                  className="w-[19px] h-[21px]"
                  alt="User icon"
                  src="/img.svg"
                />
              </div>
              <Input
                className="pl-16 h-[67px] rounded-[10.67px] text-[21.3px] font-['Ubuntu',Helvetica] border-gray-300"
                defaultValue="Doe"
                placeholder="Last name"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-[18.7px] leading-[26.7px] text-gray-700 font-['Ubuntu',Helvetica]">
            Email address
          </label>
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <img
                className="w-[21px] h-[21px]"
                alt="Email icon"
                src="/img-1.svg"
              />
            </div>
            <Input
              className="pl-16 h-[67px] rounded-[10.67px] text-[21.3px] font-['Ubuntu',Helvetica] border-gray-300"
              defaultValue="john@company.com"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-[18.7px] leading-[26.7px] text-gray-700 font-['Ubuntu',Helvetica]">
            Company (optional)
          </label>
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <img
                className="w-[16px] h-[21px]"
                alt="Building icon"
                src="/img-5.svg"
              />
            </div>
            <Input
              className="pl-16 h-[67px] rounded-[10.67px] text-[21.3px] font-['Ubuntu',Helvetica] border-gray-300"
              defaultValue="Your company"
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-[18.7px] leading-[26.7px] text-gray-700 font-['Ubuntu',Helvetica]">
            Password
          </label>
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <img
                className="w-[19px] h-[21px]"
                alt="Password icon"
                src="/img-8.svg"
              />
            </div>
            <Input
              type="password"
              className="pl-16 pr-14 h-[67px] rounded-[10.67px] text-[21.3px] font-['Ubuntu',Helvetica] border-gray-300"
              defaultValue="Create a strong password"
              placeholder="Create a strong password"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
              <img
                className="w-6 h-[21px]"
                alt="Eye icon"
                src="/img-7.svg"
              />
            </div>
          </div>
          <p className="text-base text-gray-500 font-['Ubuntu',Helvetica]">
            Password must be at least 8 characters long
          </p>
        </div>

        <div className="flex items-start space-x-3 pt-4">
          <Checkbox
            id="terms"
            className="rounded-[3.33px] border-[#767676] border-[1.33px] mt-1"
          />
          <div className="font-['Ubuntu',Helvetica] text-[18.7px] leading-[26.7px]">
            <label htmlFor="terms" className="text-gray-600">
              I agree to the{" "}
              <span className="font-medium text-[#32cd32] cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#32cd32] cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>
        </div>

        <Button 
          type="submit"
          className="w-full h-16 bg-[#32cd32] hover:bg-[#2db82d] rounded-[10.67px] font-bold text-[21.3px] font-['Ubuntu',Helvetica]"
        >
          <span>Create Account</span>
          <img
            className="ml-2 w-[19px] h-[21px]"
            alt="Arrow right icon"
            src="/button---img.svg"
          />
        </Button>
      </form>

      <div className="mt-12">
        <Card className="flex justify-center items-center h-[66px] rounded-[10.67px] border-gray-300 cursor-pointer hover:bg-gray-50">
          <img
            className="w-[15px] h-[15px] mr-3"
            alt="Google icon logo"
            src="/google-icon-logo-svgrepo-com.svg"
          />
          <span className="font-medium text-[18.7px] text-gray-700 font-['Ubuntu',Helvetica]">
            Google
          </span>
        </Card>
      </div>

      <div className="mt-14 text-center">
        <p className="font-['Ubuntu',Helvetica] text-[18.7px]">
          <span className="text-gray-600">Already have an account? </span>
          <span className="font-medium text-[#32cd32] cursor-pointer" onClick={handleSignIn}>
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
};