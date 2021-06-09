import cards from '../../styles/meal-data';
import styles from '../../styles/meal.module.scss';

export default function CardsPage() {
  // console.log('cards', cards);
  return (
    <div>
      <section className={styles.card_container}>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
}

function Card({ image, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img src={image} alt='' className={styles.card__image} />
        <h2 className={styles.card__title}>{title} </h2>
        <p className={styles.card__description}>{description}</p>
      </div>
      <button className={styles.card__btn}>View Recipe</button>
    </div>
  );
}
