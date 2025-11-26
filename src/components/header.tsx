import { HeaderProps } from "@/types/types";

const Header: React.FC<HeaderProps> = ({ title = "داشبورد" }) => {
  return (
    <header dir="rtl" className="w-full ">
      <div className=" mx-auto max-w-[90%] rtl flex justify-start items-center p-4">
        <h1 className="text-black w-fit font-bold text-2xl md:text-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
