import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

export interface Language {
  name: string;
  logo_url: string;
  alt_text: string;
}

export interface Tech {
  name: string;
  logo_url: string;
  alt_text: string;
}

export interface Tools {
  name: string;
  logo_url: string;
  alt_text: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public skills: Language[] = [
    { name: "TypeScript", logo_url: "assets/skills/typescript.svg", alt_text: "TypeScript logo" },
    { name: "Java", logo_url: "assets/skills/java.svg", alt_text: "Java logo" },
    { name: "Rust", logo_url: "assets/skills/rust.svg", alt_text: "Rust logo" },
    { name: "Arduino", logo_url: "assets/skills/arduino.svg", alt_text: "Arduino logo" },
  ];

  public techs: Tech[] = [
    { name: "Angular", logo_url: "assets/skills/angular.svg", alt_text: "Angular logo" },
    { name: "React", logo_url: "assets/skills/react.svg", alt_text: "React logo" },
    { name: "NextJS", logo_url: "assets/skills/next-js.svg", alt_text: "NextJS logo" },
    { name: "Java Spring Boot", logo_url: "assets/skills/Spring.svg", alt_text: "Spring Boot logo" },
    { name: "Laravel", logo_url: "assets/skills/laravel.svg", alt_text: "Laravel logo" },
  ];

  public tools: Tools[] = [
    { name: "Docker", logo_url: "assets/skills/docker.svg", alt_text: "Docker logo" },
    { name: "Kubernetes", logo_url: "assets/skills/kubernets.svg", alt_text: "Kubernetes logo" },
    { name: "Git", logo_url: "assets/skills/git.svg", alt_text: "Git logo" },
    { name: "Linux", logo_url: "assets/skills/linux.svg", alt_text: "Linux logo" },
    { name: "Terraform", logo_url: "assets/skills/terraform.svg", alt_text: "Terraform logo" },
  ];
}
