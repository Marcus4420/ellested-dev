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
      en: 'A Go CLI and GitHub Action that starts Floci\'s local AWS emulator in CI, points Terraform at it, and tears it down after, so infrastructure changes get tested without touching real cloud or burning credentials.',
      da: 'Et Go CLI og GitHub Action, der starter Flocis lokale AWS-emulator i CI, peger Terraform mod den og lukker den ned bagefter, så infrastrukturændringer bliver testet uden at røre den rigtige cloud eller bruge kreditter.',
    },
    status: 'Planned',
    context: 'Personal',
    techs: ['Go', 'Terraform', 'GitHub Actions', 'Floci'],
  },
]
