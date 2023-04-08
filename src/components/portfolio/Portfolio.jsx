import React, { useState } from "react";

import Section2 from "../shared/section2/Section2";
import Filters from "./filters/Filters";
import Showcase from "./showcase/Showcase";

import "./Portfolio.scss";

const projectsData = [
    {
        id: 1,
        name: "Youtube Clone",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/youtube.jpg"),
        },
        goto:"View",
        link:"https://jolly-puppy-0e924c.netlify.app/",
        technologyUsed:"Reactjs, RapidApi, TaliwindCSS"
    },
    {
        id: 2,
        name: "Lets Chat",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/chat.jpg"),
        },
        goto:"View",
        link:"https://velvety-haupia-f41530.netlify.app/",
        technologyUsed:"Reactjs, Firebase, SASS"

    },
    {
                id: 3,
                name: "MyBooks",
                tags: ["web-page"],
                media: {
                    thumbnail: require("../../images/portfolio/books.jpg"),
                },
                goto:"Details",
                technologyUsed:"Machine Learning"
            },
           
    {
        id: 4,
        name: "Sample Cards 4",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/comingsoon.jpg"),
        },
    },
    {
        id: 5,
        name: "Sample Cards 5",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/comingsoon.jpg"),
        },
    },
    {
        id: 6,
        name: "Sample Cards 6",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/comingsoon.jpg"),
        },
    },
    {
        id: 7,
        name: "Sample Cards 7",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/comingsoon.jpg"),
        },
    },
    {
        id: 8,
        name: "Sample Cards 8",
        tags: ["web-app",  "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/comingsoon.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section2
            id="portfolio"
            title="PROJECTS"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section2>
    );
};

export default Portfolio;


// import React, { useState } from "react";
// import Section from "../shared/section/section.jsx";
// import "./Portfolio.scss";
// import Filters from "./filters/Filters.jsx";
// import Showcase from "./showcase/Showcase.jsx";



// const projectsData = [
//     {
//         id: 1,
//         name: "Youtube Clone",
//         tags: ["web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/youtube.jpg"),
//         },
//         goto:"View",
//         link:"https://jolly-puppy-0e924c.netlify.app/",
//         technologyUsed:"Reactjs, RapidApi, TaliwindCSS"

//     },
//     {
//         id: 2,
//         name: "Let's Chat",
//         tags: ["web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/chat.jpg"),
//         },
//         goto:"View",
//         link:"https://velvety-haupia-f41530.netlify.app/",
//         technologyUsed:"Reactjs, Firebase, SASS"

//     },
//     {
//         id: 3,
//         name: "MyBooks",
//         tags: ["web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/books.jpg"),
//         },
//         goto:"Details",
//         technologyUsed:"Machine Learning"
//     },
   
//     {
//         id: 4,
//         name: "Education",
//         tags: ["education"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//         goto:"View"
//     },
   
//     {
//         id: 5,
//         name: "Education",
//         tags: ["education"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//         goto:"View"
//     },
   
//     {
//         id: 6,
//         name: "Education",
//         tags: ["education"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//         goto:"View"
//     },
   
//     {
//         id: 7,
//         name: "Education",
//         tags: ["education"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//         goto:"View"
//     },
   
//     {
//         id: 8,
//         name: "Education",
//         tags: ["education"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//         goto:"View"
//     },
   
// ];

// const Portfolio = () => {
//     const [projects, setProjects] = useState(projectsData);
//     const [transition, setTransition] = useState(false);

//     const filterProjects = (tag) => {
//         setTransition("zoomout");

//         setTimeout(() => {
//             if (tag !== "all") {
//                 const filteredProjects = projectsData.filter((f) =>
//                     f.tags.includes(tag)
//                 );
//                 setProjects(filteredProjects);
//             } else {
//                 setProjects(projectsData);
//             }
//             setTransition("zoomin");
//         }, 200);

//         setTimeout(() => {
//             setTransition(false);
//         }, 600);
//     };

//     return (
//         <Section
//             id="portfolio"
//             title="Check my Protfolio"
//             background="light"
//         >
//             <div className="portfolio-content-wrapper">
//                 <Filters filterProjects={(tag) => filterProjects(tag)} />
//                 <Showcase
//                     data={projects}
//                     transition={transition}
//                 />
//             </div>
//         </Section>
//     );
// };

// export default Portfolio;