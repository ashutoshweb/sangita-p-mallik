import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const data = [
    'Sangita P. Mallik\'s work in the realms of youth, education, and outreach stands as a testament to her belief in the transformative power of knowledge and community engagement. As the co-founder and Executive Vice President of SANPEC, Inc., Sangita has not only led the company to the forefront of energy infrastructure innovation but has also dedicated herself to nurturing the next generation of leaders and thinkers. Her efforts in this area reflect a deep commitment to creating a more sustainable, resilient, and equitable world through education and empowerment.' ,

    'Sangita\'s approach to youth and education is holistic, recognizing that the challenges of the 21st century—ranging from climate change to technological disruption—require a new kind of leadership. She has been instrumental in developing programs that bridge the gap between academic knowledge and real-world application, ensuring that young people are equipped with the skills and understanding necessary to navigate and shape the future. Through partnerships with educational institutions, Sangita has facilitated the integration of sustainability and resilience into curricula, fostering a culture of innovation and critical thinking among students.' ,

    'Her outreach initiatives extend beyond the classroom, involving community-based projects that offer hands-on learning experiences. These projects not only serve as a platform for youth to apply their knowledge but also encourage them to engage with their communities, promoting values of service and collaboration. Sangita\'s work in this area demonstrates a recognition of the importance of community in personal and professional development, as well as the role of young people in driving social change.' ,

    'Moreover, Sangita\'s commitment to education and outreach is evident in her advocacy for accessible and inclusive learning opportunities. She has been a vocal proponent of programs that aim to reduce barriers to education, particularly for underrepresented and disadvantaged groups. By supporting scholarships, mentorship programs, and internships, Sangita has helped open doors for countless individuals, providing them with the resources and support needed to pursue their aspirations.' ,

    'Sangita\'s influence also extends to the broader educational landscape through her involvement with the Baldrige Foundation and other quality and performance excellence organizations. In these roles, she has championed the adoption of excellence models in educational settings, arguing for a systemic approach to improving quality and outcomes in schools and universities. Her efforts have contributed to a growing recognition of the importance of leadership, strategic planning, and stakeholder engagement in educational excellence.' ,

    'In addition to her work with youth and educational institutions, Sangita\'s outreach initiatives have encompassed a wide range of community engagement activities. From environmental conservation projects to initiatives aimed at improving public health and welfare, her work has had a tangible impact on communities. Sangita believes in the power of collective action and has consistently sought to mobilize resources and expertise to address community needs.',

    'Sangita P. Mallik\'s contributions to youth, education, and outreach reflect a profound understanding of the interconnectedness of these areas with the broader goals of sustainability and resilience. Through her visionary leadership and unwavering commitment to empowerment and community service, Sangita has made a lasting impact on the lives of young people and on the communities in which they live. Her work serves as an inspiring example of how dedication, innovation, and collaboration can create a brighter future for all.'

];

export function Youth() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20"
    >
      <Container size="lg">
        <SectionHeading number="1" id="awards-title">
            Youth, Education, and Outreach
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Youth, Education, and Outreach
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
