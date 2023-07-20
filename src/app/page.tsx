import Card from "./components/card";

export default function Home() {
  return (
    <main className="bg-stone-400 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
