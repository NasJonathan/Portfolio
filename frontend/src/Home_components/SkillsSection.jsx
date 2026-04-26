import {
  RiFlutterFill,
  RiJavascriptFill,
  RiCss3Fill,
  RiReactjsLine,
  RiHtml5Fill,
} from "react-icons/ri";
import { SiOdoo, SiCanva, SiMysql } from "react-icons/si";
import { DiPython, DiGithubBadge } from "react-icons/di";
import { BsFiletypeXml } from "react-icons/bs";

const skillIcons = [
  { icon: RiFlutterFill, color: "#3177b0ed" },
  { icon: RiJavascriptFill, color: "#f0de1e" },
  { icon: RiCss3Fill, color: "#0a4e80" },
  { icon: RiReactjsLine, color: "#61DAFB" },
  { icon: RiHtml5Fill, color: "#E34F26" },
  { icon: SiOdoo, color: "#834873" },
  { icon: SiCanva, color: "#00C4CC" },
  { icon: SiMysql, color: "#0d5e70" },
  { icon: DiPython, color: "#3776AB" },
  { icon: DiGithubBadge, color: "#FFFFFF" },
  { icon: BsFiletypeXml, color: "#FF6600" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="relative max-w-5xl mx-auto w-full overflow-hidden border border-purple-800 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/50 to-[#180027]/80 rounded-3xl p-4 md:p-12 text-white shadow-xl">
        {/* Background glows */}
        <div className="absolute pointer-events-none top-10 -z-1 left-20 size-48 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[120px]"></div>
        <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-48 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[120px]"></div>

        {/* Left content */}
        <div className="flex flex-col items-center md:items-start max-md:text-center md:max-w-md">
          <a
            href="#skills"
            className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-purple-300 bg-purple-200/15"
          >
            <span className="bg-purple-600 text-white text-md px-3.5 py-1 rounded-full font-semibold">
              Mijn
            </span>
            <p className="flex items-center gap-1 text-md font-semibold">
              <span>vaardigheden</span>
            </p>
          </a>

          <h1 className="text-2xl md:text-3xl font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
            KENNIS EN SOFTSKILLS
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-lg mt-4 text-start">
            Deze iconen vertegenwoordigen de technologieën en tools waar ik mee
            heb gewerkt of inspiratie uit haal. Mijn skillset omvat frontend,
            backend, tools en softskills — altijd groeiend, altijd
            gebruikersgericht.
          </p>

          <p className="text-sm md:text-base text-slate-300 max-w-lg mt-4 font-bold ">
            Softskills die ik goed heb ontwikkeld en belangrijk.
          </p>
          <div className="flex  gap-1 text-sm  py-2 border-b border-purple-300">
            <p className="text-xs font-semibold italic text-purple-200  text-start">
              Communicatie, Samenwerken, Probleemoplossend vermogen,
              Creativiteit en Kritisch denken
            </p>
          </div>
        </div>

        {/* Right icon grid */}
        <div className=" max-md:mt-10 grid grid-cols-3 gap-3 bg-white/5 p-10 rounded-2xl backdrop-blur-sm">
          {skillIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Icon size={32} color={item.color} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
