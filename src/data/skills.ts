import goIcon from '../assets/skills/go.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import rustIcon from '../assets/skills/rust.svg'
import javaIcon from '../assets/skills/java.svg'
import kubernetesIcon from '../assets/skills/kubernets.svg'
import dockerIcon from '../assets/skills/docker.svg'
import terraformIcon from '../assets/skills/terraform.svg'
import linuxIcon from '../assets/skills/linux.svg'
import awsIcon from '../assets/skills/aws.svg'
import gitIcon from '../assets/skills/git.svg'
import reactIcon from '../assets/skills/react.svg'

export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  key: 'languages' | 'platform' | 'tools'
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'languages',
    skills: [
      { name: 'Go', icon: goIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Rust', icon: rustIcon },
      { name: 'Java', icon: javaIcon },
    ],
  },
  {
    key: 'platform',
    skills: [
      { name: 'Kubernetes', icon: kubernetesIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Terraform', icon: terraformIcon },
      { name: 'AWS', icon: awsIcon },
      { name: 'Linux', icon: linuxIcon },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', icon: gitIcon },
      { name: 'React', icon: reactIcon },
    ],
  },
]
