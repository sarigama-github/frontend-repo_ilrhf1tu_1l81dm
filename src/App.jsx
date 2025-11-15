import React, { useState } from 'react'
import Diagram from './Diagram'

function Section({ title, summary, children, icon }) {
  return (
    <section className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
      <div className="flex items-start gap-3">
        {icon}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">{title}</h2>
          {summary && <p className="text-gray-600 mt-2 leading-relaxed">{summary}</p>}
        </div>
      </div>
      {children && <div className="mt-6 text-gray-700 leading-relaxed space-y-3">{children}</div>}
    </section>
  )
}

function Pill({ label }) {
  return <span className="inline-block rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 border border-blue-100">{label}</span>
}

function Card({ title, points }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'organs', label: 'Organs' },
    { id: 'process', label: 'Step-by-step' },
    { id: 'biochem', label: 'Biochemistry' },
    { id: 'micro', label: 'Microbiome' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-sm" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Digestive System Explorer</h1>
          </div>
          <nav className="flex gap-2 overflow-x-auto">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-semibold transition ${
                  active === t.id
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8">
        <Section
          title="An illustrated, college-level guide"
          summary="Follow food from bite to bowel with clear visuals and precise science. Built for high school seniors, detailed enough for first-year biology."
          icon={<span className="text-3xl">📘</span>}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Section title="System map" summary="A simplified anatomical map to anchor your understanding." icon={<span className="text-3xl">🗺️</span>}>
            <Diagram />
            <div className="mt-4 flex flex-wrap gap-2">
              {['Mouth', 'Esophagus', 'Stomach', 'Liver', 'Pancreas', 'Small intestine', 'Large intestine', 'Rectum'].map(l => (
                <Pill key={l} label={l} />
              ))}
            </div>
          </Section>

          {active === 'overview' && (
            <Section title="Core functions" summary="Ingestion, mechanical and chemical digestion, absorption, elimination." icon={<span className="text-3xl">⚙️</span>}>
              <div className="grid grid-cols-1 gap-4">
                <Card
                  title="Mechanical vs. Chemical"
                  points={[
                    'Mechanical: mastication, gastric churning, segmentation/peristalsis in intestines.',
                    'Chemical: enzymatic hydrolysis of macromolecules into absorbable monomers.',
                    'Hormonal and neural control coordinate timing and secretion volume.',
                  ]}
                />
                <Card
                  title="Key regulators"
                  points={[
                    'Enteric nervous system (myenteric + submucosal plexuses) integrates local reflexes.',
                    'Hormones: gastrin, secretin, CCK, GIP/GLP-1 modulate secretion and motility.',
                    'Autonomics: vagal parasympathetic tone generally increases motility/secretions.',
                  ]}
                />
              </div>
            </Section>
          )}

          {active === 'organs' && (
            <Section title="Organs and roles" summary="From accessory glands to absorptive villi." icon={<span className="text-3xl">🧩</span>}>
              <div className="grid gap-4">
                <Card title="Stomach" points={[
                  'Parietal cells secrete HCl and intrinsic factor; chief cells release pepsinogen.',
                  'Mucous cells protect epithelium; tight junctions + bicarbonate create mucosal barrier.',
                  'Absorbs limited substances (ethanol, aspirin); most absorption occurs later.',
                ]} />
                <Card title="Liver" points={[
                  'Produces bile (bile acids/salts, cholesterol, phospholipids, pigments) for lipid emulsification.',
                  'Receives portal blood; hepatocytes perform metabolism (glycogen, urea, detox).',
                  'Bile stored/concentrated in gallbladder; released via CCK-stimulated contraction.',
                ]} />
                <Card title="Pancreas" points={[
                  'Exocrine acini secrete zymogens (trypsinogen, chymotrypsinogen) and enzymes (amylase, lipase).',
                  'Duct cells secrete bicarbonate (secretin-stimulated) to neutralize gastric acid in duodenum.',
                  'Trypsin (activated by enterokinase) triggers zymogen cascade.',
                ]} />
                <Card title="Small intestine" points={[
                  'Duodenum: mixing, pH neutralization, introduction of bile/pancreatic enzymes.',
                  'Jejunum: primary site for nutrient absorption; abundant plicae and long villi.',
                  'Ileum: vitamin B12 and bile salt reabsorption (enterohepatic circulation); Peyer\'s patches.',
                ]} />
                <Card title="Large intestine" points={[
                  'Water and electrolyte reclamation; fermentation products absorbed (SCFAs).',
                  'Haustra enable segmentation; minimal enzymatic digestion by host.',
                  'Dense microbiota; mucus layer and immune sampling via M cells.',
                ]} />
              </div>
            </Section>
          )}

          {active === 'process' && (
            <Section title="Step-by-step digestion" summary="From mouth to stool." icon={<span className="text-3xl">⏱️</span>}>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Oral phase: mastication increases surface area; salivary amylase (starch) and lingual lipase begin hydrolysis.</li>
                <li>Swallowing: coordinated by medullary centers; epiglottis prevents aspiration; primary peristalsis in esophagus.</li>
                <li>Gastric phase: stretch and peptides stimulate gastrin; acid activates pepsin; churning forms chyme.</li>
                <li>Duodenal signaling: acid and fat trigger secretin and CCK → pancreatic HCO3− and enzyme secretion + bile delivery.</li>
                <li>Intestinal phase: brush-border enzymes (disaccharidases, peptidases) finalize monomers for transporters.</li>
                <li>Absorption: monosaccharides via SGLT1/GLUT2; di/tri-peptides via PEPT1; lipids via micelles → chylomicrons.</li>
                <li>Colon: microbiota ferment fiber to SCFAs (acetate, propionate, butyrate) fueling colonocytes; water reclaimed.</li>
                <li>Defecation: rectal stretch reflex; internal sphincter relaxes involuntarily, external voluntarily controlled.</li>
              </ol>
            </Section>
          )}

          {active === 'biochem' && (
            <Section title="Key biochemistry" summary="Enzymes, pH windows, and transport." icon={<span className="text-3xl">🧪</span>}>
              <div className="grid md:grid-cols-2 gap-4">
                <Card title="Enzyme highlights" points={[
                  'Salivary amylase: pH ~6–7; inactivated in stomach acid.',
                  'Pepsin: pH optimum ~1.5–2; cleaves peptide bonds next to aromatic residues.',
                  'Pancreatic lipase: requires colipase and bile salts; produces 2-MAG + free fatty acids.',
                  'Trypsin/chymotrypsin/elastase: proteolysis into oligopeptides; activated in lumen.',
                ]} />
                <Card title="Transporters & absorption" points={[
                  'Carbs: SGLT1 (Na+-glucose) at apical; GLUT2 basolateral efflux.',
                  'Proteins: PEPT1 for di-/tri-peptides; amino acid-specific carriers.',
                  'Lipids: diffusion from micelles → re-esterification → chylomicrons via lymphatics.',
                  'Vitamins/minerals: B12–IF complex in ileum; iron via DMT1 (duodenum) regulated by hepcidin.',
                ]} />
              </div>
            </Section>
          )}

          {active === 'micro' && (
            <Section title="Gut microbiome" summary="Community, metabolites, and host interactions." icon={<span className="text-3xl">🦠</span>}>
              <div className="grid gap-4">
                <Card title="Composition & roles" points={[
                  'Dominant phyla: Firmicutes, Bacteroidetes; composition shaped by diet, antibiotics, and host genetics.',
                  'Produce short-chain fatty acids (butyrate supports colonocytes; propionate influences gluconeogenesis).',
                  'Train immune system: tolerance vs. inflammation via Treg/Th17 balance and microbial-associated molecular patterns.',
                ]} />
                <Card title="Clinical notes" points={[
                  'Dysbiosis linked to IBS, IBD, obesity, and metabolic syndrome; evidence is correlative and evolving.',
                  'Antibiotic stewardship and fiber-rich diets support resilience.',
                  'Fecal microbiota transplantation reserved for recurrent C. difficile; ongoing trials for other conditions.',
                ]} />
              </div>
            </Section>
          )}
        </div>

        <Section title="Quick review" summary="Check your understanding with high-yield prompts." icon={<span className="text-3xl">✅</span>}>
          <ul className="list-disc pl-5 space-y-2">
            <li>What hormones coordinate pancreatic bicarbonate and enzyme release, and what triggers them?</li>
            <li>Trace dietary lipid from ingestion to entry into the bloodstream.</li>
            <li>Explain how the mucosal barrier prevents autodigestion in the stomach.</li>
            <li>Where are B12 and bile salts absorbed, and what happens if this segment is diseased?</li>
          </ul>
        </Section>

        <footer className="pt-8 text-center text-gray-500 text-sm">Made with curiosity and clarity.</footer>
      </main>
    </div>
  )
}

export default App
