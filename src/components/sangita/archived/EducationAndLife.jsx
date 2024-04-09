import { Container } from '@/components/Container'

import { SectionHeading } from '@/components/SectionHeading'
import { GridPattern } from '@/components/GridPattern'


const data = [
    'Sangita P. Mallik\'s journey from a curious child fascinated by the wonders ' +
    'of nature and technology to becoming a luminary in the energy sector is a testament' +
    ' to the power of education, determination, and vision. Born and raised in a family ' +
    'that valued education and community service above all, ' +
    'Sangita\'s early life was imbued with lessons on the importance of hard work, ' +
    'perseverance, and the pursuit of knowledge for the betterment of society.',

    'From a young age, Sangita exhibited an insatiable curiosity about the world around her.' +
    ' She was particularly drawn to the sciences, where the laws of physics and chemistry explained ' +
    'the mysteries of the natural world. This early passion for science was nurtured by her family and teachers, ' +
    'who recognized her potential and encouraged her to explore these interests further.',

    'Sangita\'s educational journey was marked by excellence ' +
    'and a relentless quest for knowledge. She excelled in her studies, ' +
    'consistently standing out for her analytical skills and ability to grasp complex concepts quickly. ' +
    'Sangita\'s academic prowess earned her a place in a prestigious engineering college, ' +
    'where she dove into the world of electrical engineering. It was here that Sangita\'s' +
    ' path to becoming an energy sector innovator truly began.',

    'During her college years, Sangita was exposed to the challenges and opportunities in the field of energy. ' +
    'She learned about the critical role of energy systems in driving economic growth and improving quality of life, ' +
    'as well as the environmental implications of traditional energy production methods. ' +
    'These insights fueled Sangita\'s desire to contribute to the development of sustainable and resilient energy systems.'+
    'She dedicated herself to mastering the technical knowledge and skills required to make a meaningful impact in this field.',

    'Sangita\'s education was not limited to the classroom. ' +
    'She sought out internships and research opportunities that ' +
    'allowed her to apply her learning in real-world settings. ' +
    'These experiences provided Sangita with a practical understanding of the ' +
    'energy sector\'s complexities and the innovative solutions required to address its challenges.',

    'Upon completing her education, Sangita embarked on a professional journey that would see her applying her' +
    ' expertise to improve the resilience and reliability of power grid systems. ' +
    'Her academic background in electrical engineering, combined with her passion for ' +
    'sustainability, positioned her to make significant contributions to the field. ' +
    'Sangita\'s work has been driven by a belief in the power of technology and innovation ' +
    'to create energy systems that are not only efficient and reliable but also environmentally responsible.',

    'Throughout her career, Sangita has remained committed to lifelong learning.' +
    ' She has continued to expand her knowledge and skills, ' +
    'staying abreast of the latest developments in energy technology and sustainability practices. ' +
    'This commitment to education and professional growth has been a key factor in Sangita\'s success as a ' +
    'leader in the energy sector.',

    'Sangita P. Mallik\'s early life and education laid the foundation for her remarkable career.' +
    ' Her story is a powerful reminder of the importance of nurturing young talent and the transformative ' +
    'impact of education on individual lives and society as a whole.' +
    ' Through her achievements, Sangita continues to inspire the next generation of engineers' +
    ' and environmental stewards, demonstrating that with knowledge, passion, and determination, ' +
    'it is possible to make a lasting difference in the world.'



];

export function EducationAndLife() {
  return (



    <section
      id="education"
      aria-labelledby="education-and-life-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20 bg-slate-100"
    >
        <Container >

        <SectionHeading number="1" id="education-title">
            Early Life and Education
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Education and Early Life
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
