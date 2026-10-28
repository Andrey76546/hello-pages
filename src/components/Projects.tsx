const projects = [
  { name: 'Go CLI', description: 'Публикация бинарников в Releases' },
  { name: 'Go GUI', description: 'Fyne + MSYS2 + три раннера' },
  { name: 'Hello Pages', description: 'Деплой на GitHub Pages' },
]

export function Projects() {
  return (
    <section className="card" aria-labelledby="projects-title">
      <h2 id="projects-title">Проекты серии</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.name}>
            <strong>{project.name}</strong>
            <span>{project.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
