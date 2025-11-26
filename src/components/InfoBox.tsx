const InfoBox: React.FC = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-row max-w-[90%] mx-auto bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-100"
    >
      {/* User Info Section */}
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-500">
          <span>👤</span>
        </div>
        <div className="text-right flex flex-col gap-2">
          <h2 className="text-xl font-bold text-gray-800">
            سیدامیر حسین مغانلو
          </h2>
          <span className="flex flex-row justify-between gap-2 text-gray-300">
            <p className="text-gray-500">
              <span>۰۰۴۸۳۴۵۶۰۹</span>
              <i className="icon-user" />
            </p>
            <p className="text-gray-500">
              <span>۰۹۱۹۶۴۵۲۳۱۱</span>
              <i className="icon-phone" />
            </p>
          </span>
        </div>
        <div className="text-right flex flex-col gap-2">
          <span>نام سرویس: </span>
          <span dir="rtl" className=" ltr">
            سرویس تستی
          </span>
        </div>
        <div className="text-right flex flex-col gap-2">
          <div>
            <span>سازمان: </span>
            <span>بهداشت</span>
          </div>
          <div>
            <span>شغل: </span>
            <span>کارمند</span>
          </div>
        </div>
        <div className="text-right flex flex-col gap-2">
          <div>
            <span>سن: </span>
            <span>۳۰</span>
          </div>
          <div>
            <span>تاریخ پذیرش: </span>
            <span dir="ltr" className=" ltr">
              ۱۴۰۴/۰۸/۰۸
            </span>
          </div>
        </div>
        <div className="text-right flex flex-col gap-2">
          <div>
            <span>شماره پرونده: </span>
            <span>۱۲۳۴۵۶</span>
          </div>
          <div>
            <span>شماره فرم: </span>
            <span>۱۲۳۴۵۶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
