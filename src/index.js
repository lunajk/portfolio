import bwmap from './assets/backgrounds/bw-map.jpeg';
import nairobi from './assets/backgrounds/nairobi.png';
import whiteabstract from './assets/backgrounds/white-abstract.png';
import worldmap from './assets/backgrounds/world-map.png';

import logo from './assets/logo/logo-black.png';
import logotext from './assets/logo/logo-text-black.png';
import vdartLogo from './assets/logo/Vdart1.jpg';
import shaq from './assets/personal/shaq.png';

import backend from './assets/icons/backend.png';
import ux from './assets/icons/coding.png';
import api from './assets/icons/api.png';
import frontend from './assets/icons/frontend.png';
import web from './assets/icons/artificial-intelligence.png';
import prototyping from './assets/icons/prototyping.png';
import github from './assets/icons/github.png';
import close from './assets/icons/close.png';
import download from './assets/icons/download.png';
import downloadHover from './assets/icons/downloadHover.png';
import pineapple from './assets/icons/pineapple.png';
import pineappleHover from './assets/icons/pineappleHover.png';
import menu from './assets/icons/menu.png';
import deploy from './assets/icons/deployment.png';
import resume from './assets/icons/resume.png';
import send from './assets/icons/send.png';
import agile from './assets/icons/agile.png';
import security from './assets/icons/insurance.png';
import sendHover from './assets/icons/sendHover.png';
import docker from './assets/tech/docker.png';
import figma from './assets/tech/figma.png';
import git from './assets/tech/git.png';
import html from './assets/icons/html.png';
import javascript from './assets/tech/javascript.png';
import nodejs from './assets/tech/nodejs.png';
import reactjs from './assets/tech/reactjs.png';
import redux from './assets/tech/redux.png';
import tailwind from './assets/tech/tailwind.png';
import typescript from './assets/tech/typescript.png';

import postgresql from './assets/tech/postgresql.png';

import cloud from './assets/tech/trafic.png';
import python from './assets/tech/python.png';
import sql from './assets/tech/mysql-database.png';
import logs from './assets/tech/logo.png';
import rest from './assets/tech/http.png';
import apii from './assets/tech/api (1).png';
import jango from './assets/tech/django.png';
import cssss from './assets/tech/csss.png';

import coverhunt from './assets/company/coverhunt.png';
import dcc from './assets/company/dcc.png';

import college from './assets/company/college.png';
import microverse from './assets/logo/company.png';
import intern from './assets/projects/internship.png';
import test from './assets/projects/online-test.png';
import learn from './assets/projects/elearning.png';
import port from './assets/projects/portdocs.jpg';
import math from './assets/projects/math-magicians.png';
import movie from './assets/projects/movie-metro.png';
import nyeusi from './assets/projects/nyeusi.png';
import space from './assets/projects/space-hub.png';
import react from './assets/tech/atom.png';
export {
  bwmap,
  nairobi,
  whiteabstract,
  worldmap,
  logo,
  logotext,
  shaq,
  backend,
  ux,
  frontend,
  prototyping,
  github,
  close,
  download,
  downloadHover,
  pineapple,
  pineappleHover,
  menu,
  resume,
  send,
  sendHover,
  cssss,
  docker,
  figma,
  git,

  html,
  javascript,
  nodejs,
  postgresql,

  reactjs,
  redux,
  tailwind,
  typescript,

  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,

  microverse,
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
    {
    title: 'Full-Stack Web Development',
    icon: ux,
  },
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
    {
    title: 'REST API Development',
    icon: api,
  },
    {
    title: 'CI/CD Pipeline Automation',
    icon: deploy,
  },
    {
    title: 'Agile Team Leadership',
    icon: agile,
  },
      {
    title: 'Secure Authentication Systems',
    icon: security,
  },
      {
    title: 'AI-Proctored Test Platforms',
    icon: web,
  },


];

const technologies = [

  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: react,
  },
    {
    name: 'VS Code',
    icon: logs,
  },
    {
    name: 'Python',
    icon: python,
  },
    {
    name: 'Vercel and Render',
    icon: cloud,
  },
    {
    name: 'Rest API',
    icon: apii,
  },
    {
    name: 'My SQL',
    icon: sql,
  },
    {
    name: 'Django',
    icon: jango,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
    {
    name: 'Insomnia',
    icon: rest,
  },

  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [

  {
  title: 'Bachelor of Computer Science',
  company_name: 'Dr Umayal Ramanathan college For Women',
  icon: college,
  iconBg: '#1F2937',
  date: 'Aug 2022- Jun 2025',
},
      {
    title: 'Web Developer Intern',
    company_name: 'Futurik Technologies Madurai',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Sep 2023',
  },

  {
    title: 'Full-Stack Developer Intern & Team Lead',
    company_name: 'VDart Global Capability Centre Trichy',
    icon: vdartLogo,
    iconBg: '#333333',
    date: 'Dec 2024 – Present',
  },

];

const projects =  [
  {
    id: 'project-1',
    name: 'Skill Bridge Online Test Platform',
    description:
      'An AI-proctored online test platform with OTP-based authentication, real-time dashboards, bulk question uploads, and automated scoring. Delivered 15+ REST APIs, integrated real-time analytics, and deployed with Render/Vercel CI/CD.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'CI/CD', color: 'pink-text-gradient' },
    ],
repo: 'https://github.com/lunajk',
 image: test,
  },
  {
    id: 'project-2',
    name: 'Smart Intern Management System',
    description:
      'An internal HR tool for managing interns, attendance, and stipends with JWT-secured dashboards, REST APIs for onboarding/reporting, and automated offer/certificate generation. Improved admin workflow by 60%.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
    ],
   repo: 'https://github.com/lunajk',
    image: intern,
  },
  {
    id: 'project-3',
    name: 'Learning Management System',
    description:
      'A modular LMS with course management, quizzes, certification, and progress tracking. Included REST APIs for real-time performance data and responsive dashboards. Scalable via component-based architecture.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'Render CI/CD', color: 'pink-text-gradient' },
    ],
repo: 'https://github.com/lunajk',
 image: learn,
  },
    {
    id: 'project-4',
    name: 'Document Management System',
    description:
      'A document management platform for managing and tracking import/export product documents from foreign countries. Supports document uploads, role-based approvals, reconciliation reports, and audit history — enhancing compliance and documentation workflow for import operations.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
    ],

repo: 'https://github.com/lunajk',
 image: port,
  },
];

export { services, technologies, experiences, projects };
