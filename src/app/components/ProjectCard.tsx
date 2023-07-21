function ProjectCard() {
    return (
      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className="rounded ml-4 px-5 py-4 bg-white shadow-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://images.unsplash.com/photo-1545864968-f6031e1790c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsaXRhcnklMjBkcm9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
        <h2 className={`my-3 text-2xl font-semibold text-stone-600`}>
          Project{' '}
          <span className="text-stone-600 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-stone-500`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </a>
      )
  }

  export default ProjectCard;