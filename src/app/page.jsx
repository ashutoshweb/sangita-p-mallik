import { Author } from '@/components/sangita/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sangita/Hero'
import { Introduction } from '@/components/sangita/Introduction'
import { NavBar } from '@/components/sangita/NavBar'


import {SectionComponent} from "../components/sangita/common/SectionComponent";
import {DATA} from '@/components/sangita/data/SectionData.js'



export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <SectionComponent
          id="early-life"
          number ="1"
          sHeading="Early Life"
          heading = "Early Life and Education"
          bgColor = "bg-slate-100"
          data = {DATA.EDU_DATA}

      />

        <SectionComponent
            id="career"
            number ="1.1"
            sHeading="Career Beginnings and Vision"
            heading = "Career Beginnings and Vision"
            bgColor = ""
            containerSize="lg"
            data = {DATA.CAREER_DATA}

        />

        <SectionComponent
            id="resillience-and-sustainability"
            number ="2"
            sHeading="Organizational Resilience and Sustainability"
            heading = "Organizational Resilience and Sustainability"
            bgColor = "bg-slate-100"
            data = {DATA.RESANDSUS_DATA}

        />

        <SectionComponent
            id="youth-outreach"
            number ="3"
            sHeading="Youth, Education, and Outreach"
            heading = "Youth, Education, and Outreach"
            bgColor = ""
            containerSize="lg"
            data = {DATA.YOUTH_DATA}

        />

        <SectionComponent
            id="awards"
            number ="4"
            sHeading="Awards and Recognition"
            heading = "Awards and Recognition"
            bgColor = "bg-slate-100"
            data = {DATA.AWARDS_DATA}

        />

        <SectionComponent
            id="partnership"
            number =""
            sHeading="Partnerships and Collaborations"
            heading = "Partnerships and Collaborations"
            bgColor = ""
            containerSize="lg"
            data = {DATA.PARTNER_DATA}

        />

      <Author />
      <Footer />
    </>
  )
}
