import { Container } from '@/components/Container'

import { SectionHeading } from '@/components/SectionHeading'
import { GridPattern } from '@/components/GridPattern'


const data = [
    'Sangita P. Mallik\'s career is a narrative of ambition, innovation, and a steadfast commitment to transforming the energy sector. Her journey from an eager graduate to a visionary leader in the field of electric power transmission and distribution encapsulates a blend of technical acumen, strategic foresight, and a deep-seated desire to contribute to a sustainable future.',

    'Upon completing her education with a focus on electrical engineering, Sangita embarked on her professional path in an industry poised at the cusp of significant transformation. The early stages of her career were characterized by a keen interest in the technical challenges of power grid systems and a recognition of the critical need for sustainable energy solutions. Sangita\'s initial roles involved hands-on engineering tasks, where she applied her academic knowledge to practical challenges, quickly distinguishing herself through her problem-solving skills and innovative approach to complex issues.' ,

    'Sangita\'s vision began to take shape as she observed the broader implications of energy systems on environmental sustainability and societal well-being. She understood early on that the future of energy lay in resilience and sustainability—principles that must underpin the development and modernization of global power infrastructures. This realization drove Sangita to explore and advocate for the integration of renewable energy sources, smart grid technologies, and energy efficiency measures as foundational elements of a resilient power grid.',

    'Driven by this vision, Sangita transitioned from technical roles to leadership positions, where she could exert a greater influence on the strategic direction of energy projects. Her career trajectory saw her leading teams in designing, engineering, and implementing projects that not only enhanced the reliability and efficiency of power distribution systems but also prioritized environmental sustainability. Sangita\'s leadership was marked by a collaborative approach, fostering innovation and knowledge sharing among her teams and with external partners to drive forward the adoption of cutting-edge solutions in the energy sector.',

    'A pivotal moment in Sangita\'s career was the co-founding of SANPEC, Inc., a venture that embodied her commitment to engineering excellence and sustainable business practices. Through SANPEC, Sangita has been able to realize her vision on a larger scale, influencing the energy sector\'s evolution towards greater resilience and sustainability. The company specializes in the design, engineering, testing, and quality management of electric power, lighting, and renewable energy infrastructures, reflecting Sangita\'s holistic approach to energy systems.',

    'Under Sangita\'s leadership, SANPEC has become a beacon of innovation and sustainability in the energy sector. Her vision extends beyond the technical aspects of power systems to encompass the development of a future-ready workforce and the promotion of sustainable community practices. Sangita believes in the power of education and outreach to inspire the next generation of engineers and environmental stewards, dedicating time and resources to mentoring and teaching initiatives.',

    'Sangita\'s career beginnings and her visionary leadership at SANPEC highlight her profound impact on the energy sector. Her journey from an engineer passionate about sustainable energy solutions to an executive leading a company at the forefront of the industry\'s transformation exemplifies the potential for individual vision and determination to drive meaningful change. Sangita P. Mallik\'s story is not just one of personal achievement but a testament to the role visionary leaders play in shaping a more sustainable and resilient future for all.'



];

export function Career() {
  return (


    <section
      id="career"
      aria-labelledby="career-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20 "
    >
        <Container size="lg">

        <SectionHeading number="1" id="career-title">
          Career
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Career Beginnings and Vision
        </p>

        {data.map(d =>
              <p className="mt-4 text-lg tracking-tight text-slate-900">
                {d}
              </p>


        )}
      </Container>
    </section>

  )
}
