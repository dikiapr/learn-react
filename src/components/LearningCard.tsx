type LearningCardProps = {
  number: number
  title: string
  description: string
}

const LearningCard = ({
  number,
  title,
  description,
}: LearningCardProps) => {
  return (
    <article className="learning-card">
      <span className="card-number">{number}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default LearningCard
