import { SectionBoasVindas } from "@/components/SectionBoasVindas";
import { SectionHero } from "@/components/SectionHero";
import { SectionPrice } from "@/components/SectionPrice";
import { SectionService } from "@/components/SectionService";
import { SectionTestemonial } from "@/components/SectionTestemonial";
import { SectionTime } from "@/components/SectionTime";
import { SectionVideo} from "@/components/SectionVideo"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero/>
      <SectionBoasVindas/>
      <SectionService/>
      <SectionVideo/>
      <SectionTime/>
      <SectionPrice/>
      <SectionTestemonial/>
    </>
  );
}
