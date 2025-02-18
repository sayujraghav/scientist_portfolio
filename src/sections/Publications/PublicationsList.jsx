// /src/pages/Publications.jsx

import { useState, useEffect } from "react";

export default function Publications() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        // Simulated fetch request for publications data
        const fetchPublications = async () => {
            const data = [
                { id: 1, title: "React Best Practices", author: "John Doe", year: 2023 },
                { id: 2, title: "Advanced JavaScript Patterns", author: "Jane Smith", year: 2022 },
                { id: 3, title: "Modern UI Design Principles", author: "Alex Johnson", year: 2021 },
            ];
            setPublications(data);
        };

        fetchPublications();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Publications</h1>
            <ul style={styles.list}>
                {publications.map((pub) => (
                    <li key={pub.id} style={styles.listItem}>
                        <h2>{pub.title}</h2>
                        <p>
                            <strong>Author:</strong> {pub.author}
                        </p>
                        <p>
                            <strong>Year:</strong> {pub.year}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "20px",
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        padding: "15px",
        marginBottom: "10px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};
