import InfoBox from "@/components/InfoBox";
import ContentInfoBox from "@/components/ContentInfoBox";
import Header from "../components/header";

export default function Home() {
  return (
    <div dir="rtl" className={`font-sahel bg-white w-[100wh] min-h-lvh p-4  `}>
      <Header title="داشبورد" />
      <InfoBox />
      <ContentInfoBox />
    </div>
  );
}
