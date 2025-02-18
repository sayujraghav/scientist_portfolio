// /src/components/ui/ResearchIntro.jsx

export default function ResearchIntro() {
    return (
        <section style={styles.container}>
            <h1 style={styles.title}>Our Research</h1>
            <p style={styles.description}>
                We are dedicated to pushing the boundaries of knowledge through innovative research. 
                Our team works on cutting-edge projects that aim to solve real-world problems.
            </p>
        </section>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "40px",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        color: "white",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "20px auto",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1.2rem",
        lineHeight: "1.6",
    },
};
