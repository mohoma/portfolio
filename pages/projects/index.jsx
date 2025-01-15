import Project from "@/components/Projects";

const Projects = () => {
    return (
        <div>
            <Project
                title="Goje 🍅"
                description="Pomodoro V2.0"
                link="https://goje.vercel.app"
                github="https://github.com/mohoma/goje"
                skills={['React', 'Tailwind', 'Vite', 'TypeScript']}
            >
            </Project>
        </div>
    )
}

export default Projects;