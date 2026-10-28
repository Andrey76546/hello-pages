export function About() {
  return (
    <section className="card" aria-labelledby="about-title">
      <h2 id="about-title">О проекте</h2>
      <p>
        Этот сайт автоматически деплоится на <strong>GitHub Pages</strong>{' '}
        при push в <code>main</code>. Линтинг, проверка типов, тесты, сборка и
        публикация выполняются в <strong>GitHub Actions</strong>.
      </p>
    </section>
  )
}
