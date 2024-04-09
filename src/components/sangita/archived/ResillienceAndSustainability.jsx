import { Container } from '@/components/Container'

import { SectionHeading } from '@/components/SectionHeading'
import { GridPattern } from '@/components/GridPattern'


const data = [
    'Sangita P. Mallik\'s contributions to organizational resilience and sustainability have positioned her as a distinguished leader in the realm of energy infrastructure and quality management. Her work, deeply rooted in the principles of the Baldrige Performance Excellence Program and her leadership role at SANPEC, Inc., showcases a profound commitment to advancing sustainable practices and resilience within organizations and the broader community.',

    'At the core of Sangita\'s philosophy is the belief that organizational resilience is not merely about surviving in the face of disruptions but thriving through innovation, adaptability, and continuous improvement. This belief has driven her to implement strategies that enhance the robustness of energy systems against environmental, technological, and geopolitical challenges. Through SANPEC, Sangita has led initiatives focused on the design, engineering, and implementation of power grid systems that are not only efficient and reliable but also sustainable and adaptable to changing environmental conditions.',

    'Sangita\'s approach to sustainability extends beyond environmental considerations to encompass economic and social dimensions, aligning with the triple bottom line framework. She advocates for energy solutions that minimize ecological impact while maximizing social and economic benefits. This holistic perspective on sustainability has led to projects that prioritize renewable energy integration, energy efficiency, and the reduction of carbon footprints, contributing to the global transition towards cleaner energy sources.',

    'Under Sangita\'s guidance, SANPEC has become a model for how businesses can contribute to sustainable development goals. Her leadership has fostered a culture of innovation within the organization, encouraging the exploration of new technologies and methodologies that can further the cause of sustainability. Sangita\'s work in organizational resilience also involves a strong focus on education and capacity building. Recognizing the critical role of a skilled and informed workforce in achieving sustainability and resilience objectives, she has invested in training and development programs that equip employees with the knowledge and skills needed to navigate and lead in a rapidly evolving energy landscape.',

    'Moreover, Sangita\'s efforts extend beyond the confines of her organization. She actively engages with the wider community, sharing insights and best practices through speaking engagements, workshops, and mentorship programs. Her work with the Baldrige Foundation and as a member of the Mac Baldrige Society underscores her commitment to promoting excellence across industries. Through these platforms, Sangita advocates for the adoption of quality management principles that support organizational resilience and sustainability.',

    'Sangita\'s influence is also evident in her contributions to policy discussions and collaborations aimed at shaping a sustainable energy future. Her expertise has informed policy recommendations and strategic initiatives that seek to balance economic growth with environmental stewardship and social equity. By serving as a bridge between the private sector, government agencies, and non-profit organizations, Sangita plays a pivotal role in advancing a cohesive and comprehensive approach to sustainability and resilience.',

    'In summary, Sangita P. Mallik\'s work on organizational resilience and sustainability is characterized by a forward-thinking approach that integrates technical innovation with a commitment to environmental and social responsibility. Her leadership at SANPEC, coupled with her active involvement in quality management and sustainability advocacy, exemplifies how visionary leaders can drive meaningful change. Sangita\'s contributions not only enhance the resilience and sustainability of organizations but also inspire a broader movement towards a more sustainable and resilient future.'




];

export function ResillienceAndSustainability() {
  return (


    <section
      id="career"
      aria-labelledby="education-and-life-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20 bg-slate-100"
    >
        <Container >

        <SectionHeading number="1" id="education-title">
            Organizational Resilience and Sustainability
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Organizational Resilience and Sustainability
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
