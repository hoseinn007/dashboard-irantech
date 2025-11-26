import JobInformation from "./jobInformation";
import ProgressBar from "./progressBar";

const ContentInfoBox: React.FC = () => {
  return (
    <div className="max-w-[90%] mx-auto bg-blue-50 rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
      <div className="flex flex-row items-center  gap-2 w-full">
        <i className="icon-arrow-up2 w-10 h-10 bg-white flex items-center justify-center rounded-lg" />
        <span>سرویس معاینات بدون استخدام</span>
      </div>
      <ProgressBar />
      <JobInformation />
    </div>
  );
};

export default ContentInfoBox;
