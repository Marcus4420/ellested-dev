import portfolioImg from '../assets/projects/portfolio.png'
import internshipImg from '../assets/projects/internship.png'
import pimImg from '../assets/projects/pim.png'
import beerbrosImg from '../assets/projects/beerbros.png'
import lulImg from '../assets/projects/lul.png'
import dronedudesImg from '../assets/projects/dronedudes.png'

export interface Project {
  name: string
  imageUrl: string
  description: { en: string; da: string }
  status: 'In Progress' | 'Completed' | 'On Hold'
  context: 'Personal' | 'Academic'
  techs: string[]
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Portfolio Website',
    imageUrl: portfolioImg,
    description: {
      en: 'This site is a personal portfolio built with React, TypeScript, and Tailwind.',
      da: 'Denne side er en personlig portfolio bygget med React, TypeScript og Tailwind.',
    },
    status: 'In Progress',
    context: 'Personal',
    techs: ['React', 'TypeScript', 'Tailwind', 'Cloudflare'],
    githubUrl: 'https://github.com/Marcus4420/ellested-dev',
    demoUrl: 'https://ellested.dev',
  },
  {
    name: 'Internship webscraper',
    imageUrl: internshipImg,
    description: {
      en: 'A website that scrapes multiple job boards for internships and displays them in one place... Maybe I found you here?',
      da: 'En hjemmeside der scraper flere jobopslagstavler for praktikpladser og samler dem ét sted... Måske fandt jeg dig her?',
    },
    status: 'In Progress',
    context: 'Personal',
    techs: ['Angular', 'Tailwind', 'Cloudflare Worker', 'Cheerio', 'Bun'],
    githubUrl: 'https://github.com/Marcus4420/internshipwebapp',
    demoUrl: 'https://internship.ellested.dev',
  },
  {
    name: 'Product Information Management System',
    imageUrl: pimImg,
    description: {
      en: 'A web application that allows users to manage product information.',
      da: 'En webapplikation der lader brugere administrere produktinformation.',
    },
    status: 'Completed',
    context: 'Academic',
    techs: ['Java', 'PostgreSQL', 'JavaFX'],
    githubUrl: 'https://github.com/Marcus4420/PIM_second_semester',
  },
  {
    name: 'Beer Bros',
    imageUrl: beerbrosImg,
    description: {
      en: 'A web application that allows users to manage a beer brewing machine.',
      da: 'En webapplikation der lader brugere styre en ølbrygningsmaskine.',
    },
    status: 'Completed',
    context: 'Academic',
    techs: ['Java', 'PostgreSQL', 'JavaFX'],
    githubUrl: 'https://github.com/BeerBrewersSem3/SEMPRO3',
  },
  {
    name: 'Level Up Library',
    imageUrl: lulImg,
    description: {
      en: 'A gaming-review database, like IMDB but for games.',
      da: 'En database til spilanmeldelser, ligesom IMDB, men til spil.',
    },
    status: 'Completed',
    context: 'Academic',
    techs: ['Laravel', 'Supabase', 'JavaScript'],
    githubUrl: 'https://github.com/msundby/Level-Up-Library-Webtechnologies-SDU',
  },
  {
    name: 'DroneDudes',
    imageUrl: dronedudesImg,
    description: {
      en: 'A software system for controlling an assembly system simulation, supporting drone production and multiple robot scalability.',
      da: 'Et softwaresystem til at styre en simulering af et samlebåndssystem, der understøtter droneproduktion og skalering med flere robotter.',
    },
    status: 'Completed',
    context: 'Academic',
    techs: ['Java Spring Boot', 'Angular', 'Tailwind', 'PostgreSQL'],
    githubUrl: 'https://github.com/DroneDudes/SEMPRO4',
  },
]
