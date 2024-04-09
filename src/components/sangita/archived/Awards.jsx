import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const data = [
    'Sangita P. Mallik, co-founder and Executive Vice President of SANPEC Inc., ' +
    'has been a beacon of leadership and innovation in the energy sector, ' +
    'earning her widespread recognition and numerous awards.' +
    ' Her commitment to excellence, sustainability, and resilience has not only ' +
    'propelled SANPEC to new heights but has also garnered her prestigious accolades ' +
    'that highlight her contributions to the industry and beyond.',

    'Among her most notable achievements is the 2023 Baldrige Award for Leadership Excellence' +
    ' in the "Business" category, a testament to her visionary leadership and the impactful work ' +
    'of SANPEC under her guidance. This award, given by the Baldrige Foundation, ' +
    'recognizes leaders who have demonstrated an unwavering commitment to quality, ' +
    'performance excellence, and organizational sustainability. Sangita\'s '+
    'receipt of this award underscores her role as a transformative leader'+
    'who has significantly advanced engineering practices within the energy sector.',

    'Sangita\'s leadership and contributions have also been recognized by her induction' +
    ' into the Mac Baldrige Society, where she serves as a Trustee of the Baldrige Foundation’s ' +
    'Institute for Performance Excellence. This role not only honors her achievements ' +
    'but also positions her as a key influencer in shaping the future of organizational excellence and resilience.',

    'Her awards and recognitions extend beyond individual accolades,' +
    ' reflecting her ability to inspire her team and drive SANPEC towards ' +
    'achieving its mission of improving the resilience and reliability of power grid systems. ' +
    'Sangita\'s awards are a reflection of her dedication to fostering a culture of innovation, ' +
    'her strategic approach to managing change, and her commitment to building a sustainable future ' +
    'through education and outreach. ' +
    'Through these honors, Sangita P. Mallik\'s legacy as a leader and innovator continues ' +
    'to inspire and impact the energy sector and beyond.'

];

export function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20"
    >
      <Container >
        <SectionHeading number="1" id="awards-title">
          Awards
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Awards and Recognition
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
