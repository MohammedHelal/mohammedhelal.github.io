import kanban from "../assets/kanban/kanban.png";
import photosnap from "../assets/photosnap/photosnap.png";
import mhstore from "../assets/mh-store/mh-store.png";
import designo from "../assets/designo/designo.png";
import coffeeroasters from "../assets/coffee-roasters/coffee-roasters.png";
import dine from "../assets/dine/dine.png";

("./src/assets/kanban");
export const PAGES = [
  {
    id: "kanban",
    landingImg: kanban,
    title: "Kanban",
    para: "Kanban Board Web App is a task management tool built using Next.js, TailwindCSS, and PostgreSQL, designed to streamline workflows through a responsive and dynamic user interface.",
    tags: ["Web app", "Full stack", "Next JS", "Tailwind CSS", "PostgreSQL"],
    background: `
    <p>Kanban Board Web App is a task management tool built using Next.js, TailwindCSS, and PostgreSQL, designed to streamline workflows through a responsive and dynamic user interface.</p>
    <p>Key Features:</p>
    <ul>
      <li><strong>Task & Board Management:</strong> Create multiple boards with customizable columns and tasks, each with detailed descriptions and subtasks</li>
      <li><strong>Interactive Modals:</strong> Use modal forms to efficiently create, edit, and delete boards and tasks</li>
      <li><strong>Database Integration:</strong> All data is stored in a PostgreSQL database, allowing for seamless updates and fetching of boards, tasks, and related details</li>
    </ul>
    `,
    github: "https://github.com/MohammedHelal/kanban",
    website: "https://kanban-zeta-ten.vercel.app/",
  },
  {
    id: "photsnap",
    landingImg: photosnap,
    title: "Photosnap",
    para: "Photo Snap is a 4-page promotional photo-sharing website developed with Next.js. It highlights responsive design and performance optimization to deliver a seamless user experience.",
    tags: ["Website", "Front-end", "Next JS", "Tailwind CSS"],
    tech: "HTML / CSS / JS",
    background: `
    <p>Photo Snap is a 4-page promotional photo-sharing website developed with Next.js. It highlights responsive design and performance optimization to deliver a seamless user experience.</p>
    <p>Key Features:</p>
    <ul>
      <li><strong>Responsive Design:</strong>
      <ul>
          <li>CSS Grid layout for photo stories and features pages</li>
          <li>Flexbox layout for a structured and user-friendly pricing section</li>
      </ul>
      </li>
      <li><strong>Performance Optimization:</strong>
      <ul>
          <li>Server-Side Rendering (SSR) for improved performance and SEO</li>
          <li>Image optimization and lazy loading to boost load times and reduce client-side storage</li>
      </ul>
      </li>
      <li><strong>Technology Stack:</strong> Built with Next.js, combining modern web development practices and efficient rendering techniques
     </ul>

    `,
    github: "https://github.com/MohammedHelal/photosnap",
    website: "https://photosnap-rose.vercel.app/",
  },
  {
    id: "mhstore",
    landingImg: mhstore,
    title: "MH store",
    para: "MH Store is a 3-page e-commerce website built with React, focusing on responsive design and a seamless shopping experience.",
    tags: ["E-Commerce", "Front-end", "React JS", "Tailwind CSS"],
    tech: "HTML / CSS / JS",
    background: `
      <p>MH Store is a 3-page e-commerce website built with React, focusing on responsive design and a seamless shopping experience.</p>
      <p>Key Features:</p>
      <ul>
        <li><strong>Responsive Layout:</strong> CSS Grid used for a visually appealing category layout across mobile, tablet, and desktop</li>
        <li><strong>Navigation:</strong> Smooth, dynamic navigationwith React Router</li>
        <li><strong>Advanced Filtering:</strong> Extensive product filtering by category, rating, and price for an improved user experience</li>
        <li><strong>Real-Time Features:</strong> Real-time updating of the cart and checkout sections for a dynamic shopping experience</li>
        <li><strong>API Integration:</strong> Product data fetched from the Fake Store API and dynamically displayed</li>
      </ul>
  `,
    github: "https://github.com/MohammedHelal/mh-store",
    website: "https://mohammedhelal.github.io/mh-store/",
  },
  {
    id: "designo",
    landingImg: designo,
    title: "Designo",
    para: "Designo is a multi-page responsive website developed for a web design company, emphasizing modern front-end development techniques and interactive design.",
    tags: ["Website", "Front-end", "React JS", "Tailwind CSS"],
    tech: "HTML / CSS / JS",
    background: `
      <p>Designo is a multi-page responsive website developed for a web design
      company, emphasizing modern front-end development techniques and interactive
      design.</p>
      <p>Key Features:</p>
      <ul>
        <li><strong>Responsive Design:</strong> Utilizes a combination of CSS Grid andFlexbox for a visually engaging and interactive layout</li>
        <li><strong>Navigation:</strong> Implemented using React Router for smooth,dynamic page transitions</li>
        <li><strong>Form Handling:</strong> Contact Us form built with robust statemanagement and error validation logic to ensure a seamless user experience</li>
        <li><strong>Technology Stack:</strong> Developed with React to create adynamic, single-page application experience</li>
      </ul>
    `,
    github: "https://github.com/MohammedHelal/designo",
    website: "https://mohammedhelal.github.io/designo/",
  },
  {
    id: "coffeeroasters",
    landingImg: coffeeroasters,
    title: "Coffee Roasters",
    para: "Coffee Roasters is a 3-page website that showcases premium coffee offerings and allows customers to customize their coffee delivery based on personal preferences.",
    tags: ["Website", "Front-end", "React JS", "Tailwind CSS"],
    tech: "HTML / CSS / JS",
    background: `
      <p>Coffee Roasters is a 3-page website that showcases premium coffee offerings and allows customers to customize their coffee delivery based on personal preferences.</p>
      <p>Key Features:</p>
      <ul>
        <li><strong>Navigation:</strong> Seamless page transitions with React Router</li>
        <li><strong>Interactive Form:</strong> A beautifully designed form with error validation that lets users select their custom coffee preferences</li>
        <li><strong>Responsive Design:</strong> Fully responsive layout, ensuring a great user experience across mobile, tablet, and desktop</li>
        <li><strong>Layout Design:</strong> CSS Flexbox used for clean, structured, and visually appealing design</li>
        <li><strong>Dynamic Modal:</strong> Dynamically updated modal confirming order placement and completion</li>
      </ul>
    `,
    github: "https://github.com/MohammedHelal/coffeeroasters",
    website: "https://mohammedhelal.github.io/coffeeroasters/",
  },
  {
    id: "dine",
    landingImg: dine,
    title: "Dine",
    para: "Dine is a 2-page restaurant website designed to offer a dynamic, interactive experience, utilizing modern front-end technologies.",
    tags: ["Website", "Front-end", "React JS", "Tailwind CSS"],
    tech: "HTML / CSS / JS",
    background: `
      <p>Dine is a 2-page restaurant website designed to offer a dynamic, interactive experience, utilizing modern front-end technologies.</p>
      <p>Key Features:</p>
      <ul>
        <li><strong>Dynamic Content:</strong> Content is dynamically updated using React state for a seamless user experience</li>
        <li><strong>Responsive Design:</strong> Beautifully crafted layout with Flexbox and precise positioning, fully responsive across devices.</li>
        <li><strong>Interactive Form:</strong> Features a reservation form with varied input fields and robust error validation</li>
        <li><strong>Dynamic Modal:</strong> A dynamically updated modal confirms successful reservations, enhancing user engagement</li>
      </ul>
    `,
    github: "https://github.com/MohammedHelal/dine-restaurant",
    website: "https://mohammedhelal.github.io/dine-restaurant/",
  },
];
