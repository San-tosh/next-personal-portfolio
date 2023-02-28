export interface PortfolioType {
    id: string;
    title: string;
    img: string;
    category: string;
    keyword: string[];
    liveUrl?: string;
}

export const portfolio: PortfolioType[] =[
    {
        id: "01",
        title: "Clothing App",
        img: "/images/portfolio-01.png",
        category: "Web App",
        keyword: ["React","Minimal Design","Firebase"],
        liveUrl: "https://my-main--sprightly-trifle-204035.netlify.app/"
    },
    {
        id: "02",
        title: "Fashion Shopping App",
        img: "/images/portfolio-02.png",
        category: "Web App",
        keyword: ["React","UI-UX","MERN"],
        liveUrl: "https://poetic-starlight-9344b8.netlify.app/"
    },
    {
        id: "02",
        title: "Secret Share App",
        img: "/images/portfolio-03.png",
        category: "Web App",
        keyword: ["React","Nest.js","Tailwind"],
        liveUrl: "https://incandescent-toffee-fc14e5.netlify.app/"
    }
];