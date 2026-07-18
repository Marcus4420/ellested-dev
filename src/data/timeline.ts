import hrOnIcon from '../assets/timeline/hr-on.webp'
import fcbIcon from '../assets/timeline/fcb.png'
import dormIcon from '../assets/timeline/dorm.jpg'
import idaIcon from '../assets/timeline/ida.png'
import sduIcon from '../assets/timeline/sdu-logo.png'
import htxIcon from '../assets/timeline/htx.jpeg'
import fotexIcon from '../assets/timeline/fotex.png'
import energinetLogo from '../assets/timeline/energinet.svg'

interface Localized {
  en: string
  da: string
}

export interface TimelineEntry {
  dateRange: string
  title: Localized
  org: string
  bullets: { en: string[]; da: string[] }
  iconSrc?: string
  iconLabel?: string
  iconFit?: 'cover' | 'contain'
  link?: { label: Localized; href: string }
}

export const timeline: TimelineEntry[] = [
  {
    dateRange: 'Aug 2026 – Present',
    title: { en: 'Platform Engineer', da: 'Platform-ingeniør' },
    org: 'Energinet',
    iconSrc: energinetLogo,
    iconFit: 'contain',
    bullets: {
      en: [
        'Joining the platform team at Energinet, operator of Denmark’s electricity and gas transmission grid.',
        'Focus areas: Kubernetes platform operations, Terraform-driven infrastructure, CI/CD tooling, and observability.',
      ],
      da: [
        'Bliver en del af platformteamet hos Energinet, operatøren af Danmarks el- og gastransmissionsnet.',
        'Fokusområder: Drift af Kubernetes-platform, Terraform-drevet infrastruktur, CI/CD-værktøjer og observability.',
      ],
    },
  },
  {
    dateRange: 'Aug 2024 – Jul 2026',
    title: { en: 'Student Platform Engineer', da: 'Studerende Platform-ingeniør' },
    org: 'HR-ON',
    iconSrc: hrOnIcon,
    bullets: {
      en: [
        'Improved API performance, reducing response time from 28s to 1s, allowing sync in minutes instead of a day.',
        'Refactored and scaled the email service to reliably deliver 50,000+ emails and SMS daily.',
        'Implemented a new signature service, boosting compliance and reducing company costs by 50%.',
      ],
      da: [
        'Forbedrede API-performance og reducerede svartiden fra 28 sekunder til 1 sekund, så synkronisering nu tager minutter i stedet for en hel dag.',
        'Refaktorerede og skalerede email-servicen, så den pålideligt leverer 50.000+ emails og sms\'er dagligt.',
        'Implementerede en ny signatur-service, der styrkede compliance og reducerede virksomhedens omkostninger med 50%.',
      ],
    },
  },
  {
    dateRange: 'Oct 2023 – Ongoing',
    title: { en: 'Volunteer', da: 'Frivillig' },
    org: 'Foreningen Cancerramte Børn',
    iconSrc: fcbIcon,
    bullets: {
      en: [
        'Support families affected by cancer at special events.',
        'Organize family getaways, festive Christmas parties, and annual summer celebrations.',
        'Coordinate food, decorations, and gifts for children.',
      ],
      da: [
        'Støtter familier ramt af kræft ved særlige arrangementer.',
        'Arrangerer familieture, julefester og den årlige sommerfest.',
        'Koordinerer mad, pynt og gaver til børnene.',
      ],
    },
  },
  {
    dateRange: 'Sep 2023 – Dec 2025',
    title: { en: 'Volunteer', da: 'Frivillig' },
    org: 'Dorm Board',
    iconSrc: dormIcon,
    bullets: {
      en: [
        'Represented students to the housing association.',
        'Organized events and managed the budget.',
        'Ensured effective representation of student interests.',
      ],
      da: [
        'Repræsenterede de studerende over for boligforeningen.',
        'Arrangerede events og stod for budgettet.',
        'Sikrede effektiv varetagelse af de studerendes interesser.',
      ],
    },
  },
  {
    dateRange: 'Mar 2023',
    title: { en: 'Leadership course', da: 'Lederkursus' },
    org: 'IDA',
    iconSrc: idaIcon,
    bullets: {
      en: [
        'Completed a 4-day leadership course focused on practical management skills.',
        'Explored DISC, value-driven leadership, leadership vs. management, and constructive feedback.',
        'Collaborated with Poul-Erik Pedersen from BusinessGuides.',
      ],
      da: [
        'Gennemførte et 4-dages lederkursus med fokus på praktiske ledelseskompetencer.',
        'Arbejdede med DISC, værdibaseret ledelse, ledelse vs. management og konstruktiv feedback.',
        'Samarbejdede med Poul-Erik Pedersen fra BusinessGuides.',
      ],
    },
    link: { label: { en: 'Diploma', da: 'Diplom' }, href: '/LeaderDiploma.pdf' },
  },
  {
    dateRange: 'Sep 2022 – 2026',
    title: { en: 'Engineering degree in Software Technology', da: 'Ingeniøruddannelse i Softwareteknologi' },
    org: 'SDU',
    iconSrc: sduIcon,
    bullets: {
      en: [
        'Developed Java applications with JavaFX, Java Modules, Spring Boot, and JUnit.',
        'Designed and managed databases using PostgreSQL.',
        'Built dynamic web applications with Angular, PHP, and JavaScript/TypeScript.',
        'Applied software design principles using UML and ER diagrams.',
      ],
      da: [
        'Udviklede Java-applikationer med JavaFX, Java Modules, Spring Boot og JUnit.',
        'Designede og administrerede databaser med PostgreSQL.',
        'Byggede dynamiske webapplikationer med Angular, PHP og JavaScript/TypeScript.',
        'Anvendte softwaredesignprincipper med UML- og ER-diagrammer.',
      ],
    },
  },
  {
    dateRange: 'Aug 2018 – Jun 2021',
    title: { en: 'Higher Technical Exam (HTX)', da: 'Højere Teknisk Eksamen (HTX)' },
    org: 'HTX',
    iconSrc: htxIcon,
    bullets: {
      en: [
        'Major in Programming, Communication, and IT with a focus on Web Development.',
        'Worked with TypeScript, NodeJS, React+Next, Vue+Nuxt, and TailwindCSS.',
        'Built with Arduino and Processing.',
        'Received the "Fighter of the Year HTX" scholarship for contributions to social unity.',
        'Led and participated in student council and chairmanship.',
      ],
      da: [
        'Linje i Programmering, Kommunikation og IT med fokus på webudvikling.',
        'Arbejdede med TypeScript, NodeJS, React+Next, Vue+Nuxt og TailwindCSS.',
        'Byggede med Arduino og Processing.',
        'Modtog legatet "Fighter of the Year HTX" for bidrag til det sociale fællesskab.',
        'Ledede og deltog i elevrådet og bestyrelsesarbejdet.',
      ],
    },
  },
  {
    dateRange: 'Jun 2018 – Jul 2022',
    title: { en: 'NonFood Floor Manager', da: 'NonFood Salgsleder' },
    org: 'Føtex Holbæk',
    iconSrc: fotexIcon,
    bullets: {
      en: [
        'Managed NonFood Radio/TV department operations in the evening.',
        'Oversaw sales, customer guidance, warranty, and returns.',
      ],
      da: [
        'Stod for driften af NonFood Radio/TV-afdelingen om aftenen.',
        'Havde ansvar for salg, kundevejledning, garanti og returneringer.',
      ],
    },
  },
]
