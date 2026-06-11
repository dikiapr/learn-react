import { useState } from 'react'
import Header from '../components/Header'
import LearningCard from '../components/LearningCard'

const lessons = [
  {
    title: 'Component',
    description: 'Potongan UI yang dapat digunakan kembali di berbagai tempat.',
  },
  {
    title: 'Props',
    description: 'Data yang dikirim dari parent component ke child component.',
  },
  {
    title: 'State',
    description: 'Data milik component yang dapat berubah saat aplikasi digunakan.',
  },
]

const HomePage = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const toggleLesson = (title: string) => {
    setCompletedLessons((currentLessons) =>
      currentLessons.includes(title)
        ? currentLessons.filter((lesson) => lesson !== title)
        : [...currentLessons, title],
    )
  }

  return (
    <>
      <Header />

      <main className="home-page" id="home">
        <section className="hero-section">
          <p className="eyebrow">Pelajaran pertama</p>
          <h1>Mulai membangun dengan React</h1>
          <p>
            Halaman ini tersusun dari beberapa component kecil. Dengan pola ini,
            kode lebih mudah dibaca, dirawat, dan digunakan kembali.
          </p>
          <p className="progress">
            Progres: {completedLessons.length} dari {lessons.length} materi
            selesai
          </p>
        </section>

        <section className="card-list" id="materi" aria-label="Daftar materi">
          {lessons.map((lesson, index) => (
            <LearningCard
              key={lesson.title}
              number={index + 1}
              title={lesson.title}
              description={lesson.description}
              isCompleted={completedLessons.includes(lesson.title)}
              onToggle={() => toggleLesson(lesson.title)}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default HomePage
