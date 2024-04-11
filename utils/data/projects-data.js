import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Project Title 1',
        description: "Project Description.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'MY ROLE',
        code: '', /*What do these do?*/
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Project Title 2',
        description: 'Project Description.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'MY ROLE',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Project Title 3',
        description: 'Project Description.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'MY ROLE',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Project Title 4',
        description: "Project Description.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'MY ROLE', /*Why out of order?*/
    },
    {
        id: 5,
        name: 'Project Title 5',
        description: "Project Description.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'MY ROLE', /*Why out of order?*/
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },