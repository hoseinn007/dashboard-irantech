import { toPersianNumber } from "@/utils/persianNumber";
import React from "react";

const ProgressBar = () => {
  const steps = [
    { id: 1, label: "مشخصات فردی", status: "completed", icon: "icon-user-tie" },
    { id: 2, label: "سوابق شغلی", status: "active", icon: "icon-hammer" },
    { id: 3, label: "ارزیابی عوامل", status: "pending", icon: "icon-man" },
    { id: 4, label: "سوابق پزشکی", status: "pending", icon: "icon-file-zip" },
    { id: 5, label: "معاینه‌‌ها", status: "pending", icon: "icon-eyedropper" },
    { id: 6, label: "آزمایش‌ها", status: "pending", icon: "icon-lab" },
    { id: 7, label: "پاراکلینیک", status: "pending", icon: "icon-home3" },
    { id: 8, label: "مشاوره‌ها", status: "pending", icon: "icon-mic" },
    { id: 9, label: "نظریه نهایی", status: "pending", icon: "icon-stopwatch" },
  ];

  const getStepStyles = (status: string, isFirstOrLast: boolean) => {
    const baseStyles =
      "flex font-sahel items-center justify-center w-8 h-8 rounded-full border-2 font-semibold text-sm";

    if (isFirstOrLast) {
      const diamondStyles =
        "w-8 h-8 transform rotate-45 flex items-center justify-center border-2 font-semibold text-sm";

      if (status === "completed") {
        return `${diamondStyles} bg-blue-500 border-blue-500 text-white`;
      } else if (status === "active") {
        return `${diamondStyles} bg-green-500 border-green-500 text-white`;
      } else {
        return `${diamondStyles} bg-white border-gray-300 text-gray-400`;
      }
    }

    if (status === "completed") {
      return `${baseStyles} bg-blue-500 border-blue-500 text-white`;
    } else if (status === "active") {
      return `${baseStyles} bg-green-500 border-green-500 text-white`;
    } else {
      return `${baseStyles} bg-white border-gray-300 text-gray-400`;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getConnectorStyles = (currentStep: number, nextStep: number) => {
    if (currentStep === 1) {
      return "border-t-2 border-blue-500 border-solid"; // Solid after step 1
    } else if (currentStep >= 2) {
      return "border-t-2 border-gray-300 border-dashed"; // Dashed after step 2
    }
    return "border-t-2 border-gray-300 border-dashed !pb-2";
  };

  const getStepNumber = (stepId: number, isFirstOrLast: boolean) => {
    if (isFirstOrLast) {
      return (
        <span className="transform -rotate-45">{toPersianNumber(stepId)}</span>
      );
    }
    return toPersianNumber(stepId);
  };

  return (
    <div
      className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
      dir="rtl"
    >
      <div className="flex items-center w-full">
        {/* First Diamond */}
        <div className="flex flex-col items-center ">
          <div className={getStepStyles(steps[0].status, true)}>
            {getStepNumber(steps[0].id, true)}
          </div>
          <div className="mt-2 text-xs text-gray-600 text-center">
            <i className={`${steps[0].icon}`} />
            {steps[0].label}
          </div>
        </div>

        {/* Connector after first diamond */}
        <div className={`flex-1 h-0 mb-6 ${getConnectorStyles(1, 2)}`} />

        {/* Steps 2 to 8 */}
        {steps.slice(1, 8).map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`${getStepStyles(step.status, false)} min-w-15`}>
                {getStepNumber(step.id, false)}
              </div>
              <div className="mt-2 text-xs text-gray-600 text-center">
                <i className={`${step.icon} ml-1`} />
                {step.label}
              </div>
            </div>

            {/* Connector after each step (except last) */}
            {index < 6 && (
              <div
                className={`flex-1 h-0 mb-6 ${getConnectorStyles(
                  step.id,
                  step.id + 1
                )}`}
              />
            )}
          </React.Fragment>
        ))}

        {/* Connector before last diamond */}
        <div className={`flex-1 h-0 mb-6 ${getConnectorStyles(8, 9)}`} />

        {/* Last Diamond */}
        <div className="flex flex-col items-center">
          <div className={getStepStyles(steps[8].status, true)}>
            {getStepNumber(steps[8].id, true)}
          </div>
          <div className="mt-2 text-xs text-gray-600 text-center">
            {steps[8].label}
          </div>
        </div>
      </div>

      {/* Status Legend */}
      {/* <div className="flex gap-6 mt-8 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-600">تکمیل شده</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">فعال</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div>
          <span className="text-gray-600">در انتظار</span>
        </div>
      </div> */}
    </div>
  );
};

export default ProgressBar;
