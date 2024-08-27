const INFO = {
    main: {
        title: "Allan Wang",
        name: "Allan Wang",
        email: "allanwang@cmail.carleton.ca",
        logo: "../ghost/logo.webp",
    },

    socials: {
        linkedin: "https://www.linkedin.com/in/allanwang-cu/",
        email: "https://www.microsoft.com/en-us/microsoft-365/outlook/log-in",
        github: "https://github.com/allan-wang9",
        resume: "../resume/AllanWang.pdf",
        updating: "../resume/ResumeUpdating.pdf"
    },

    homepage: {
        title: "Hi, I'm Allan!",
        description: [
            "Welcome to my portfolio site. I'm happy to see you here! ",
            " I am a Software Engineer with prior experiences in full stack software development. " +
            "I have accumulated over 2 years of professional work experience and I am currently a dev at Trend Micro, working on innovative cybersecurity applications.",
            "Prior to this, I graduated from Carleton University in 2023 with a Bachelors of Computer Science. " +
            "Through my academic journey, I have developed skills in web development, object-oriented software engineering and distributed systems. Learn more about my previous academic and professional work in the Experience section.",
            "Outside of coding, my hobbies are basketball, soccer (COYS), and stocks/derivatives trading.",
            "Feel free to view my resume and connect with me through my socials. Thanks for stopping by!"
        ]
    },

    enterprise: [
        {
            title: "Trend Micro",
            role: "Software Developer",
            duration: "May '24 - Present",
            description:
                "Industry leading unified cybersecurity and proactive risk management application.",
            logo: "../company/trend.jpg",
            linkText: "Trend Vision One @ Trend Micro",
            link: "https://www.trendmicro.com/en_ca/business/products/one-platform.html",
        },

        {
            title: "Nokia",
            role: "Software Developer Intern",
            duration: "Jan - Apr, Sept - Dec (2023)",
            description:
                "SaaS 5G security orchestration solution used by telecom service providers.",
            logo: "../company/nokia1.png",
            linkText: "NetGuard Cybersecurity Dome @ Nokia",
            link: "https://www.nokia.com/networks/security-portfolio/netguard/cybersecurity-dome/",
        },

        {
            title: "Nokia",
            role: "Software Engineer Intern",
            duration: "May - Aug (2023)",
            description:
                "SaaS eSIM/iSIM provisioning service enabling E2E profile lifecycle management.",
            logo: "../company/nokia2.jpg",
            linkText: "iSIM Secure Connect @ Nokia",
            link: "https://www.nokia.com/networks/security-portfolio/isim-secure-connect/",
        },

        {
            title: "Telesat",
            role: "Software Developer Intern",
            duration: "May - Dec (2023)",
            description:
                "Business applications powering Lightspeed LEO Network and its core operational services.",
            logo: "../company/telesat.png",
            linkText: "Lightspeed LEO @ Telesat",
            link: "https://www.telesat.com/leo-satellites/",
        },
    ],

    resume: [
        {
            title: "Trend Micro",
            role: "Software Developer",
            duration: "May 2024 - Present",
            description:
                "Working on Trend Micro's all-in-one cybersecurity solution to detect and respond to any attack surface vulnerability. \n" +
                "Full stack development using Go, Node.js, React and a suite of cloud services (AKS, Azure Service Bus).\n",
            skills: "Skills: React, TypeScript, Go, Node.js, MongoDB, Docker, Kubernetes",
            logo: "../company/trend.jpg",
            linkText: "Check out Trend Vision One @ Trend Micro!",
            link: "https://www.trendmicro.com/en_ca/business/products/one-platform.html",
        },

        {
            title: "Nokia",
            role: "Software Developer Intern",
            duration: "Sept 2023 - Dec 2023",
            description:
                "Built frontend components and features using React, TypeScript and Apollo Client to enhance user experience and interactivity.\n" +
                "Improved backend services by designing object-oriented TypeScript classes to leverage Microsoft Azure APIs (Sentinels, Log Analytics) to handle data fetching and storage with GraphQL and MongoDB.\n" +
                "Developed 50+ fully automated frontend and backend integration tests using Python and Robot Framework, reducing pipeline times on integration test jobs by 8%.\n",
            skills: "Skills: React, TypeScript, GraphQL, MongoDB, Python, Robot Framework, Docker, Kubernetes",
            logo: "../company/nokia1.png",
            linkText: "Check out NetGuard CyberSecurity Dome @ Nokia!",
            link: "https://www.nokia.com/networks/security-portfolio/netguard/cybersecurity-dome/",
        },

        {
            title: "Nokia",
            role: "Software Engineer Intern",
            duration: "May 2023 - Aug 2023",
            description:
                "Developed a functional and modular Typescript library with Jest unit testing and documentation to perform telecom encoding" +
                "and decoding services in accordance to universal mobile telecom standards.\n" +
                "Designed functional components with Angular and TypeScript to support rich user features such as inputs and reactive forms.\n" +
                "Increased security protocols by strengthening Nginx configurations and enabling HSTS to limit application vulnerabilities.\n",
            skills: "Skills: Angular, TypeScript, Java, Spring Boot, PostgreSQL",
            logo: "../company/nokia2.jpg",
            linkText: "Check out iSIM Secure Connect @ Nokia!",
            link: "https://www.nokia.com/networks/security-portfolio/isim-secure-connect/",
        },

        {
            title: "Nokia",
            role: "Software Developer Intern",
            duration: "Jan 2023 - Apr 2023",
            description:
                "Implemented full stack solutions using React, TypeScript and GraphQL to support the continuous development of Netguard" +
                "Cybersecurity Dome, Nokia’s first SaaS based cybersecurity application.\n" +
                "Refactored and resolved 40 code smells and critical vulnerabilities, leading to increased performance and security enhancements.\n" +
                "Streamlined an internal automation process by designing test suites in Python and Robot Framework to reduce manual testing.\n",
            skills: "Skills: React, TypeScript, GraphQL, Microsoft Azure, Docker, Kubernetes",
            logo: "../company/nokia1.png",
            linkText: "Check out NetGuard CyberSecurity Dome @ Nokia!",
            link: "https://www.nokia.com/networks/security-portfolio/netguard/cybersecurity-dome/",
        },

        {
            title: "Telesat",
            role: "Software Developer Intern",
            duration: "May 2022 - Dec 2022",
            description:
                "Architected a prototype full stack application using JavaScript (Node.js, Express), Pug and Webex API to facilitate call center" +
                "operations between satellite agents and customers, reducing queue times by 15%.\n" +
                "Developed an emailing service using C# and SQL to alert users of exceptions between internal applications and SQL Server " +
                "databases, preventing integration conflicts.\n" +
                "Maintained SQL Server databases, wrote SQL stored procedures, and created SSRS reports to update business requests and" +
                "manage the active server environments through monitoring, configurations and backups.\n",
            skills: "Skills: JavaScript, Node.js, SQL, Microsoft SQL Server, C#",
            logo: "../company/telesat.png",
            linkText: "Check out Lightspeed LEO @ Telesat!",
            link: "https://www.telesat.com/leo-satellites/",
        },

        {
            title: "Carleton University",
            role: "Software Developer (Contract)",
            duration: "Sept 2020 - Apr 2021",
            description:
                "Created frontend components with React for a course website used by 1000+ undergraduate students enrolled in the university’s" +
                "discrete mathematics courses, helping improve user experience and learning productivity.",
            logo: "../company/carleton.jpg",
            linkText: "Check out SCS @ Carleton!",
            link: "https://carleton.ca/scs/about-scs/",
        },
    ],

    projects: [
        {
            screenshot: "../project/ibkr.png",
            title: "IBKR Trading CLI",
            description:
                "A beginner friendly stock trading CLI. Integrates with a live or paper Interactive Brokers trading account to view, manage and trade stock.",
            linkText: "View Repository",
            link: "https://github.com/allan-wang9/interactive-brokers-trading-cli",
        },

        {
            screenshot: "../project/study.png",
            title: "Discrete Math Study Center",
            description:
                "Contributions towards a study center client app for Carleton's discrete mathematics courses. Used by over 1000 undergraduate CS students.",
            linkText: "View Repository",
            link: "https://github.com/allan-wang9/StudyCenter-Client",
        },

        {
            screenshot: "../project/green.jpg",
            title: "Vehicle Incentive Tracker",
            description:
                "Full stack application tracking Canada's incentive values and specifications for eco-friendly and zero emission vehicles.",
            linkText: "View Repository",
            link: "https://github.com/allan-wang9/vehicle-incentive-app",
        },
    ],
};

export default INFO;
