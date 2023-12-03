import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'CHAVO',
    description: 'Yapayzeka Kayıt Moderasyon Komutları',
    link: 'https://discord.com/api/oauth2/authorize?client_id=1031644654443188304&permissions=8&scope=bot+applications.commands',
    iconURL: 'https://cdn.discordapp.com/attachments/1166409607363698769/1180893109983383582/beed7eef32c739b69c2502e98587bdb5_1.png?ex=657f1369&is=656c9e69&hm=e1ac441645331c98ee79557cfa3f0da1998aa8390346ff930d679163d2bb0deb&',
  },
  {
    name: 'TreFax',
    description: 'Panel Sistemli Uptime Botu.',
    link: 'https://discord.com/api/oauth2/authorize?client_id=1074354202685472829&permissions=8&scope=bot%20applications.commands',
    iconURL: 'https://cdn.discordapp.com/attachments/1166409607363698769/1180893553686220851/51b530cabb8019c85959e6a8c8510e4c.png?ex=657f13d3&is=656c9ed3&hm=62a0325135c4cda8a1e293a943c75fc95b42d73a002062b7e503ac9744702d28&',
  },
];

export const githubUsername = 'baranchavo';
export const discordId = '525816524729221162';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/' + discordId,
    iconURL: BsDiscord,
  },

];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Tailwindcss',
    iconURL: SiTailwindcss,
  },
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Firebase',
    iconURL: SiFirebase,
  },
];
