import React from "react";
import { Check } from "lucide-react";

interface StepTrackerProps {
  currentStep: number;
}

export function StepTracker({ currentStep }: StepTrackerProps) {
  const steps = [
    { num: 1, label: "Account" },
    { num: 2, label: "Payment" },
    { num: 3, label: "Dashboard" },
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <div className="flex items-center justify-between relative">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
        
        {/* Active Line Progress */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 rounded-full z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Step Nodes */}
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.num;
          const isActive = currentStep === step.num;
          
          return (
            <div key={step.num} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-300
                  ${isCompleted ? "bg-emerald-500 border-emerald-500 text-white" : 
                    isActive ? "bg-white border-emerald-500 text-emerald-600" : 
                    "bg-white border-slate-200 text-slate-400"}
                `}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.num}
              </div>
              <span 
                className={`absolute -bottom-6 text-xs font-medium whitespace-nowrap
                  ${isCompleted || isActive ? "text-slate-900" : "text-slate-400"}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
