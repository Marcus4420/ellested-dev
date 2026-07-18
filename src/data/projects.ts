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
    name: 'preflight',
    description: {
      en: 'A local tool that spins up Floci\'s AWS emulator, runs your Terraform plan against it, and renders an interactive graph of what would be created, changed, or destroyed, so you can see the blast radius before touching real infrastructure.',
      da: 'Et lokalt værktøj, der starter Flocis AWS-emulator, kører din Terraform-plan mod den og viser en interaktiv graf over, hvad der ville blive oprettet, ændret eller slettet, så du kan se konsekvenserne før du rører den rigtige infrastruktur.',
    },
    status: 'Planned',
    context: 'Personal',
    techs: ['TypeScript', 'React', 'Terraform', 'Floci'],
  },
]
