export const projectCategories = ['All', 'Securing', 'Rehab', 'Grounds', 'Inspections'] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'All'>;

export type ProjectStat = { value: string; label: string };

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  location: string;
  assetType: string;
  category: ProjectCategory;
  clientType: string;
  year: string;
  summary: string;
  cover: string;
  coverAlt: string;
  coverPosition?: string;
  brief: string[];
  approach: string[];
  quote: string;
  result: string[];
  scope: string[];
  stats: ProjectStat[];
  gallery: ProjectGalleryImage | null;
};

export const projects: Project[] = [
  {
    slug: 'craftsman-hold',
    index: '01',
    title: 'Craftsman Hold',
    location: 'Pasadena, California',
    assetType: 'Vacant single-family residence',
    category: 'Securing',
    clientType: 'Regional loan servicer',
    year: '2026',
    summary:
      'An open rear entry, overgrown lot and no utility service. Secured, cleared and documented inside 48 hours of intake.',
    cover: '/images/hero-sunset.jpg',
    coverAlt: 'Craftsman home at dusk after securing and grounds clearance',
    coverPosition: 'center',
    brief: [
      'The referral arrived with two open items: an unsecured rear entry and a neighbour complaint about overgrowth. There was no occupancy, no utility service, and no current condition record on file.',
      'The instruction was narrow — make the asset safe, make the documentation defensible, and leave the period detailing that carries the house’s value untouched.',
    ],
    approach: [
      'A two-person crew arrived inside the dispatch window and completed an exterior and interior condition sweep before lifting a tool. Every room, opening and utility point was photographed and logged against the work order.',
      'The rear entry was braced and re-keyed to a single client code, with a lockbox installed for future access. Debris left the property in one haul, the lot was cut back to the property line, and the plumbing system was drained and tagged.',
      'The close-out report paired before-and-after frames with a line-item invoice and a short deferred-repair note. No change orders, no open items.',
    ],
    quote: 'Secured, cleared and documented — with the original detailing intact.',
    result: [
      'Rear entry secured and re-keyed same day',
      'Debris removed in a single haul',
      'Grounds cut back and stabilised',
      'Winterization completed with tags posted',
    ],
    scope: [
      'Occupancy verification',
      'Interior & exterior condition report',
      'Emergency securing & re-key',
      'Lockbox installation',
      'Debris removal',
      'Grounds stabilisation',
      'Plumbing winterization',
    ],
    stats: [
      { value: '36h', label: 'Intake to secure' },
      { value: '48', label: 'Photos delivered' },
      { value: '0', label: 'Open items' },
    ],
    gallery: {
      src: '/images/house.jpg',
      alt: 'Front elevation of the residence after close-out',
      caption: 'Front elevation at close-out, after grounds clearance and lockbox installation.',
      position: 'center 60%',
    },
  },
  {
    slug: 'northridge-turn',
    index: '02',
    title: 'Northridge Turn',
    location: 'Northridge, California',
    assetType: 'REO single-family residence',
    category: 'Rehab',
    clientType: 'Private investor',
    year: '2025',
    summary:
      'Roof repairs, drywall, paint and code corrections on a 1,900 sq ft REO — brought to listing condition in eleven working days.',
    cover: '/images/house.jpg',
    coverAlt: 'Single-family home prepared for listing after repair and paint',
    coverPosition: 'center 55%',
    brief: [
      'A 1,900 sq ft REO had been off-market for two years. The roof had two active leaks, the interior needed drywall and paint, and the city had an open violation for missing detectors.',
      'The investor needed a listing-ready asset without a general contractor’s markup or an open-ended schedule.',
    ],
    approach: [
      'We scoped the work in one visit, priced it line by line, and sequenced trades so the property was never left open or half-finished overnight.',
      'Roof repairs were completed first, followed by drywall, paint and a full smoke and CO detector installation. The city re-inspection was coordinated and closed, and a final clean was completed the morning of photography.',
      'Every stage was photographed. The close-out package included the inspection sign-off, trade invoices and a room-by-room before-and-after set.',
    ],
    quote: 'Eleven working days from first scope to listing photography.',
    result: [
      'Roof leaks repaired and flashed',
      'Interior drywall and paint completed',
      'Code violation closed with the city',
      'Property delivered clean and photo-ready',
    ],
    scope: [
      'Roof repair & flashing',
      'Drywall repair',
      'Interior paint',
      'Smoke & CO detector installation',
      'Code violation remediation',
      'Final clean',
    ],
    stats: [
      { value: '11', label: 'Working days' },
      { value: '6', label: 'Trades coordinated' },
      { value: '100%', label: 'Photo documented' },
    ],
    gallery: {
      src: '/images/hero-sunset.jpg',
      alt: 'Front approach of the repaired residence at dusk',
      caption: 'Front approach after paint, detector compliance and final clean.',
      position: 'center 45%',
    },
  },
  {
    slug: 'vermont-corridor',
    index: '03',
    title: 'Vermont Corridor',
    location: 'South Los Angeles, California',
    assetType: 'Mixed-use commercial building',
    category: 'Grounds',
    clientType: 'Asset management firm',
    year: '2025',
    summary:
      'A six-week grounds and perimeter program for a vacant mixed-use building — overgrowth, illegal dumping and repeated forced entry brought under control.',
    cover: '/images/hero-office.jpg',
    coverAlt: 'Commercial building and parking apron at dusk',
    coverPosition: 'center 60%',
    brief: [
      'A vacant mixed-use building on a busy corridor had become a dumping point. Overgrowth blocked the sidewalk, the rear gate had been forced twice, and the owner was receiving weekly complaints.',
      'A one-off clean-out would have failed within a month. The asset needed a recurring perimeter program with a paper trail.',
    ],
    approach: [
      'We cleared the perimeter and removed accumulated debris in the first week, then repaired the gate and exterior lighting and set a fixed weekly visit schedule.',
      'Each visit followed the same photo checklist: frontage, rear access, gate, lighting, waste area and any new damage. Reports went out the same day, with a standing note on anything that required owner approval.',
      'After six weeks, complaints had stopped and the property was handed to a broker with a complete maintenance record.',
    ],
    quote: 'A clean-out solves a week. A program solves the asset.',
    result: [
      'Perimeter cleared and maintained weekly',
      'Rear gate repaired and lighting restored',
      'Illegal dumping stopped',
      'Six-week photo record handed to broker',
    ],
    scope: [
      'Perimeter clearance',
      'Recurring grounds maintenance',
      'Debris removal & hauling',
      'Gate & board-up repair',
      'Exterior lighting check',
      'Weekly photo reporting',
    ],
    stats: [
      { value: '6', label: 'Weeks on program' },
      { value: '12', label: 'Site visits' },
      { value: '96', label: 'Photos indexed' },
    ],
    gallery: null,
  },
  {
    slug: 'golden-hill-duplex',
    index: '04',
    title: 'Golden Hill Duplex',
    location: 'San Diego, California',
    assetType: 'Multi-family duplex',
    category: 'Inspections',
    clientType: 'Regional lender',
    year: '2026',
    summary:
      'Two-unit occupancy and condition inspection ahead of a note sale — verified utilities, indexed photos and findings that held up to review.',
    cover: '/images/hero-sunset.jpg',
    coverAlt: 'Residential street elevation at dusk before note sale',
    coverPosition: 'center 70%',
    brief: [
      'Ahead of a note sale, the lender needed a current picture of a two-unit duplex: occupancy, condition, utilities and any deferred maintenance that could affect valuation.',
      'The file held a two-year-old inspection and no evidence of what had changed since.',
    ],
    approach: [
      'Both units were inspected on the same visit, with unit-level photo sets and separate condition notes. Occupancy was verified, meters photographed, and utility status confirmed at the point of service.',
      'We flagged water staining at the rear unit ceiling, a non-functioning exterior light and a missing unit address plate. None were repaired under this order — the report documented them with context and an estimated scope.',
      'The summary memo was structured for a valuation reviewer: findings first, photos indexed, no interpretation beyond the evidence.',
    ],
    quote: 'The report told the lender exactly what it was buying.',
    result: [
      'Occupancy verified at both units',
      'Utilities and meters documented',
      'Deferred maintenance flagged with context',
      'Summary memo ready for valuation review',
    ],
    scope: [
      'Unit-by-unit occupancy check',
      'Interior & exterior condition',
      'Utility and meter verification',
      'Safety hazard documentation',
      'Indexed photo delivery',
      'Summary memo',
    ],
    stats: [
      { value: '2', label: 'Units inspected' },
      { value: '64', label: 'Indexed photos' },
      { value: '1', label: 'Summary memo' },
    ],
    gallery: {
      src: '/images/house.jpg',
      alt: 'Street elevation of the duplex at the time of inspection',
      caption: 'Street elevation at the time of inspection. Both units were documented separately.',
      position: 'center 65%',
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return projects[0];
  return projects[(currentIndex + 1) % projects.length];
}
