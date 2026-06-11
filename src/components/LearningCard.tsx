type LearningCardProps = {
  number: number
  title: string
  description: string
  isCompleted: boolean
  onToggle: () => void
}

const LearningCard = ({
  number,
  title,
  description,
  isCompleted,
  onToggle,
}: LearningCardProps) => {
  return (
    <article className={`learning-card ${isCompleted ? 'completed' : ''}`}>
      <span className="card-number">{number}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="lesson-button" type="button" onClick={onToggle}>
        {isCompleted ? 'Batalkan selesai' : 'Tandai selesai'}
      </button>
    </article>
  )
}

export default LearningCard
