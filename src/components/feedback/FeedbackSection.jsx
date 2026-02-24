import { useState } from "react";
import styles from "./FeedbackSection.module.css";

export default function FeedbackSection() {

    const clients = [
        {
            name: "Lucas Almeida",
            age: "34 years old",
            image: "/client1.jpg",
            comment:
                "Before starting therapy, I struggled with anxiety for years. The team helped me understand my emotions and develop practical tools to manage stress. Today, I feel more confident and balanced."
        },
        {
            name: "Mariana Costa",
            age: "29 years old",
            image: "/client2.jpg",
            comment:
                "I never imagined psychological support could change my perspective so deeply. The sessions helped me rebuild my self-esteem and improve my relationships at work and at home."
        },
        {
            name: "Ricardo Mendes",
            age: "41 years old",
            image: "/client3.jpg",
            comment:
                "After facing burnout, I sought professional help here. The care and empathy I received made all the difference. I learned to set boundaries and prioritize my mental health."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
    };

    return (
        <section className={styles.feedbackSection}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.subtitle}>Feedback from</span>
                    <h2>Our Clients</h2>
                </div>

                <div className={styles.wrapper}>

                    {/* Lista de clientes */}
                    <div className={styles.clientsList}>
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                onClick={() => handleChange(index)}
                                className={`${styles.client} ${activeIndex === index ? styles.active : ""
                                    }`}
                            >
                                <img src={client.image} alt={client.name} />
                                <div>
                                    <h4>{client.name}</h4>
                                    <span>{client.age}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline */}
                    <div className={styles.timeline}>
                        <div className={styles.line}></div>
                        <div
                            className={styles.dot}
                            style={{ top: `${activeIndex * 140}px` }}
                        ></div>
                    </div>

                    {/* Comentário */}
                    <div
                        key={activeIndex}
                        className={styles.commentBox}
                    >
                        <div className={styles.quote}>❝</div>
                        <p>{clients[activeIndex].comment}</p>
                        <div className={styles.stars}>★★★★★</div>
                    </div>

                </div>
            </div>
        </section>
    );
}