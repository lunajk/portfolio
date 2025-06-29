
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/tech/javascript.png';
import typescript from '../assets/tech/typescript.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import tailwind from '../assets/tech/tailwind.png';
import nodejs from '../assets/tech/nodejs.png';
import react from '../assets/tech/atom.png';

import postgresql from '../assets/tech/postgresql.png';
import git from '../assets/tech/git.png';
import figma from '../assets/tech/figma.png';
import docker from '../assets/tech/docker.png';

import cloud from '../assets/tech/trafic.png';
import python from '../assets/tech/python.png';
import sql from '../assets/tech/mysql-database.png';
import logs from '../assets/tech/logo.png';
import rest from '../assets/tech/http.png';
import apii from '../assets/tech/api (1).png';
import jango from '../assets/tech/django.png';
// Project images
import test from '../assets/projects/online-test.png';
import project from '../assets/projects/project1.png';
import intern from '../assets/projects/internship.png';
import learn from '../assets/projects/elearning.png';

// (Also import other images/icons you use like coverhunt, leaderboard etc. if needed)

// Exports for asset imports (if you want to import them individually somewhere)
export {
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgresql,
  git,
  figma,
  docker,

  python,
  sql,
  logs,
  rest,
  apii,
  jango,
  cloud,
};


// Technologies array
export const technologies = [
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS', icon: nodejs },
  { name: 'Python', icon: python },
  { name: 'Django', icon: jango },
  { name: 'Rest API', icon: apii },
  { name: 'MySQL', icon: sql },
  { name: 'Vercel and Render', icon: cloud },
  { name: 'VS Code', icon: logs },
  { name: 'Insomnia', icon: rest },
  { name: 'Git', icon: git },
  { name: 'Figma', icon: figma },
  { name: 'Docker', icon: docker },
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'React Js', icon: react },
];


export const projects = [
  {
    id: 'project-1',
    name: 'OnLine Test Platform',
    description:
      'SKILL BRIDGE ONLINE TEST PLATFORM - An AI-proctored online test platform with OTP-based authentication, real-time dashboards, bulk question uploads, and automated scoring. Delivered 15+ REST APIs, integrated real-time analytics, and deployed with Render/Vercel CI/CD.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'CI/CD', color: 'pink-text-gradient' },
    ],
    image: test,
  },
  {
    id: 'project-2',
    name: ' Smart Intern Management',
    description:
      'SMART INTERN MANAGEMENT SYSTEM - An internal HR tool for managing interns, attendance, and stipends with JWT-secured dashboards, REST APIs for onboarding/reporting, and automated offer/certificate generation. Improved admin workflow by 60%.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
    ],
image: intern,
  },
  {
    id: 'project-3',
    name: 'E-Learning Website',
    description:
      'LEARNING MANAGEMENT SYSTEM - A modular LMS with course management, quizzes, certification, and progress tracking. Included REST APIs for real-time performance data and responsive dashboards. Scalable via component-based architecture.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'Render CI/CD', color: 'pink-text-gradient' },
      
    ],
image: learn,
  },
  {
    id: 'project-4',
    name: 'Document Management System',
    description:
      'DOCUMENT MANAGEMENT SYSTEM - A document management platform for managing and tracking import/export product documents from foreign countries. Supports document uploads, role-based approvals, reconciliation reports, and audit history — enhancing compliance and documentation workflow for import operations.',
    tags: [
      { name: 'React.js', color: 'blue-text-gradient' },
      { name: 'Django REST', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
    ],
image: project,
  },
];
