import { TimeYear } from "../components";
import year2003 from "../assets/timeline/year2003.svg";
import year2004 from "../assets/timeline/year2004.svg";
import year2016 from "../assets/timeline/year2016.svg";
import year2017 from "../assets/timeline/year2017.svg";
import year2018 from "../assets/timeline/year2018.svg";
import year2019 from "../assets/timeline/year2019.svg";
import year2020 from "../assets/timeline/year2020.svg";
import year2021 from "../assets/timeline/year2021.svg";
import year2022 from "../assets/timeline/year2022.svg";
import year2023 from "../assets/timeline/year2023.svg";
import year2024 from "../assets/timeline/year2024.svg";
import { IoArrowBackCircle } from "react-icons/io5";
import { useMenuStore, usePogoStore, useViewStore } from "../stores";

export function Timeline() {
  const toggleTimelineOpen = useMenuStore((state) => state.toggleTimelineOpen);
  const setZoom = useViewStore((state) => state.setZoom);
  const setPitch = useViewStore((state) => state.setPitch);
  const setSelectedPogo = usePogoStore((state) => state.setSelectedPogo);

  const handleClick = () => {
    toggleTimelineOpen();
    setSelectedPogo({
      latitude: 12.8797,
      longitude: 121.7744,
    });
    setPitch(0);
    setZoom(5);
  };
  return (
    <div className="relative grid items-center">
      <div className="h-screen w-screen flex items-center">
        <div className="w-[390rem] flex items-center gap-2">
          <TimeYear
            image={year2003}
            year="2003"
            title="The Emergence of POGOs"
            description="In 2003, the Philippines recognized online gaming's potential, initiating offshore gambling operations and establishing the foundation for industry growth."
          />
          <TimeYear
            image={year2004}
            year="2004-2015"
            title="Early Development and Expansion"
            description="Between 2004 and 2015, the Philippines’ offshore gaming industry grew steadily, attracting Chinese investors and establishing strong regulations."
          />
          <TimeYear
            image={year2016}
            year="2016"
            title="The Beginning of POGO Regulation"
            description="In 2016, the Philippine government regulated offshore gaming under PAGCOR, implementing licensing systems, ensuring tax revenue, and legitimizing POGO operations."
          />
          <TimeYear
            image={year2017}
            year="2017"
            title="The POGO Boom"
            description="The POGO industry boomed in 2017, attracting foreign investments, boosting tax revenue, and creating jobs filled largely by Chinese workers."
          />
          <TimeYear
            image={year2018}
            year="2018"
            title="Industry Growth and Rising Concerns"
            description="By 2018, POGOs thrived economically but raised concerns over crime, trafficking, job displacement, and social tensions from rising rents and foreign workers."
          />
          <TimeYear
            image={year2019}
            year="2019"
            title="Peak Prosperity and Tensions"
            description="In 2019, POGOs peaked with high revenues and occupancy but faced rising crime concerns and escalating diplomatic tensions with China."
          />
          <TimeYear
            image={year2020}
            year="2020"
            title="Pandemic Setback and Issues"
            description="The pandemic in 2020 severely impacted POGOs, causing closures and revenue loss, while illegal operations and foreign worker criticisms persisted."
          />
          <TimeYear
            image={year2021}
            year="2021"
            title="New Taxes and Struggles"
            description="In 2021, new taxes on POGOs aimed to address financial shortfalls, but the industry struggled amid COVID-19, regulation, and crime."
          />
          <TimeYear
            image={year2022}
            year="2022"
            title="Decline and Office Vacancies"
            description="In 2022, POGOs declined sharply as firms closed, vacating office spaces. Regulatory actions and global economic factors fueled the downturn."
          />
          <TimeYear
            image={year2023}
            year="2023"
            title="Regulation Overhaul and Decline"
            description="In 2023, stricter PAGCOR regulations, diplomatic pressure from China, and ongoing criminal probes led to the further decline of POGOs."
          />
          <TimeYear
            image={year2024}
            year="2024"
            title="The POGO Ban and Industry Collapse"
            description="In 2024, President Marcos banned POGOs, ending the controversial industry amid ongoing crime, foreign interference, and its rapid decline."
          />
        </div>
        <IoArrowBackCircle
          onClick={() => handleClick()}
          className="z-50 size-8 text-red-700 fixed top-4 left-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
