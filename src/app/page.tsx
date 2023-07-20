import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    
      <main className="bg-stone-600 flex min-h-screen flex-col items-center justify-around p-24">
        <div>
          <h2 className="text-stone-200 text-5xl font-semibold text-center mb-12">
            What We Do
          </h2>
          <p className={`px-32 text-center text-md text-stone-100`}>
            Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why.
          </p>
        </div>
        <div className="mb-32 flex text-center lg:mb-0 lg:text-left">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    
      <Footer/>
    
    </>
  )
}
