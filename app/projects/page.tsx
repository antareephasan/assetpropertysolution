import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProjectGrid from '@/components/ProjectGrid';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Field Files — Selected Work',
  description:
    'Selected property preservation and field services files from ASSET PROPERTY SOLUTION LLC — securing, rehab, grounds programs and inspections across California and beyond.',
  alternates: { canonical: '/projects/' },
};

const documentation = [
  {
    label: 'Before / during / after',
    text: 'Every scope is photographed at the same angles so condition change is verifiable, not described.',
  },
  {
    label: 'Line-item close-out',
    text: 'Invoices match the approved scope. Any change is documented and approved before work continues.',
  },
  {
    label: 'One file, indexed',
    text: 'Photo sets, notes and sign-offs are delivered together — ready for review, audit or hand-off.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        index="03"
        label="Field files"
        titleLines={[
          'Selected work.',
          <>
            Real <span className="italic text-brass">conditions</span>.
          </>,
        ]}
        description="Anonymised files from recent work orders across California. Client names are withheld by agreement; full photo sets and documentation are available under NDA."
        meta={[
          { label: 'Files', value: '04 selected' },
          { label: 'Focus', value: 'Securing · Rehab · Grounds · Inspections' },
          { label: 'Delivery', value: 'Same-day reporting' },
        ]}
      />

      <section className="container-edge pb-24 lg:pb-32">
        <ProjectGrid projects={projects} />

        <div className="mt-20 border-t border-ink/15 pt-8 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow text-muted">
                <span className="text-brass">Documentation</span>
              </p>
              <p className="mt-4 max-w-[15rem] text-[12px] leading-relaxed text-muted">
                The photo set is the product. Everything else supports it.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-9">
              {documentation.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.07}>
                  <p className="eyebrow text-brass">0{i + 1}</p>
                  <h2 className="mt-3 text-[15px] font-medium text-ink">{item.label}</h2>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Your file, next."
        subtitle="Send the property details and the requirement. We will confirm scope, pricing and a dispatch window in writing."
        label="New work order"
      />
    </>
  );
}
