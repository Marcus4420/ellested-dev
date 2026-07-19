export interface Project {
  name: string
  imageUrl?: string
  description: { en: string; da: string }
  status: 'Planned' | 'In Progress' | 'Completed' | 'On Hold'
  context: 'Personal' | 'Academic'
  techs: string[]
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Preflight',
    imageUrl: '/projects/preflight.png',
    description: {
      en: 'A tool that runs your Terraform plan against local AWS, Azure, or GCP emulators (Floci) and renders an interactive graph of what would be created, changed, or destroyed, so you can see the blast radius before touching real infrastructure. Includes a CI mode that gates pull requests and exports the graph as a self-contained HTML report, with real cloud credentials scrubbed so a run can never touch a live account.',
      da: 'Et værktøj, der kører din Terraform-plan mod lokale AWS-, Azure- eller GCP-emulatorer (Floci) og viser en interaktiv graf over, hvad der ville blive oprettet, ændret eller slettet, så du kan se konsekvenserne før du rører den rigtige infrastruktur. Har et CI-mode, der gater pull requests og eksporterer grafen som en selvstændig HTML-rapport, med rigtige cloud-credentials fjernet så en kørsel aldrig kan ramme en rigtig konto.',
    },
    status: 'In Progress',
    context: 'Personal',
    techs: ['TypeScript', 'React', 'Terraform', 'Docker', 'AWS', 'Azure', 'GCP', 'GitHub Actions', 'Floci'],
    githubUrl: 'https://github.com/Marcus4420/preflight',
  },
]
