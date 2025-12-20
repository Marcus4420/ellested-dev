import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  image_url?: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  context: "Personal" | "Academic";
  techs: string[];
  github_url?: string;
  isFavorite: boolean;
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[] = [
    {
      name: "Portfolio Website",
      image_url: 'assets/projects/portfolio.png',
      description: "A website to showcase my projects and skills",
      status: "In Progress",
      context: "Personal",
      techs: ['Angular', 'Tailwind', 'Cloudflare'],
      github_url: 'https://github.com/Marcus4420/my_portfolio',
      isFavorite: true,
      demoUrl: 'https://ellested.dev'
    },
    {
      name: "Internship webscraper",
      image_url: 'assets/projects/internship.png',
      description: "A website that scrapes multiple job boards for internships and displays them in one place... Maybe I found you here?",
      status: "In Progress",
      context: "Personal",
      techs: ['Angular', 'Tailwind', 'Cloudflare Worker', 'Cheerio', 'Bun'],
      github_url: 'https://github.com/Marcus4420/internshipwebapp',
      isFavorite: false,
      demoUrl: 'https://internship.ellested.dev'
    },
    {
      name: "Product Information Management system",
      image_url: 'assets/projects/pim.png',
      description: "A web application that allows users to manage product information",
      status: "Completed",
      context: "Academic",
      techs: ['Java', 'PostgreSQL', 'JavaFX'],
      github_url: 'https://github.com/Marcus4420/PIM_second_semester',
      isFavorite: false,
    },
    {
      name: "Beer Bros",
      image_url: 'assets/projects/beerbros.png',
      description: "A web application that allows users to manage a beer brewing machine",
      status: "Completed",
      context: "Academic",
      techs: ['Java', 'PostgreSQL', 'JavaFX'],
      github_url: 'https://github.com/BeerBrewersSem3/SEMPRO3',
      isFavorite: true,
    },
    {
      name: "Tauri Codepad",
      image_url: 'assets/projects/comingsoon.jpg',
      description: "A code editor application that runs on the desktop",
      status: "In Progress",
      context: "Personal",
      techs: ['React', 'Rust', 'Tauri'],
      github_url: 'https://github.com/Marcus4420/tauri-notepad',
      isFavorite: false,
    },
    {
      name: "Level Up Library",
      image_url: 'assets/projects/lul.png',
      description: "Gaming-review database - Like IMDB but for games",
      status: "Completed",
      context: "Academic",
      techs: ['Laravel', 'Supabase', 'JavaScript'],
      github_url: 'https://github.com/msundby/Level-Up-Library-Webtechnologies-SDU',
      isFavorite: false,
    },
    {
      name: "DroneDudes",
      image_url: 'assets/projects/dronedudes.png',
      description: "A software system for controlling an assembly system simulation, supporting drone production and multiple robot scalability.",
      status: "Completed",
      context: "Academic",
      techs: ['Java Spring Boot', 'Angular', 'Tailwind', 'PostgreSql'],
      github_url: 'https://github.com/DroneDudes/SEMPRO4',
      isFavorite: true,
    },
  ];

  public getProjects() {
    return this.projects;
  }
}
