import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    
      <main className="bg-stone-600 flex min-h-screen flex-col items-center justify-around p-24">
        <div>
          <h2 className="text-stone-200 text-5xl font-semibold text-center mb-12">
            What We Do
          </h2>
          <p className={`px-32 mb-32 text-center text-md text-stone-100`}>
          We are a team of dedicated volunteers who are passionate about utilizing advanced technology to provide reliable and affordable solutions for humanitarian purposes. Our team consists of individuals with diverse backgrounds and skill sets, including engineers, software developers, pilots, and logistics experts. We work closely with other organizations to understand their specific needs and design custom solutions to meet those needs. 
          We provide training and support to individuals interested in learning how to fly drones, and we work to promote safe and responsible drone operation.
          </p>
        </div>
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
