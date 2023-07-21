import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <>
    
      <main className="bg-stone-600 flex min-h-screen flex-col items-center justify-around p-24">
        <About/>
        <Statistics/>
        <h2 className="text-stone-200 text-5xl font-semibold text-center mb-12">
            Projects
          </h2>
        <div className="mb-32 flex text-center lg:mb-0 lg:text-left">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </main>
    
      <Footer/>
    
    </>
  )
}
