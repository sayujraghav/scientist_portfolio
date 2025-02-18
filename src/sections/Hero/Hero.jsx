// /src/components/ui/Hero.jsx

export default function Hero() {
    return (
        <section style={styles.heroContainer}>
            <h1 style={styles.title}>Welcome to My Website</h1>
            <p style={styles.subtitle}>Building amazing experiences with React</p>
            <button style={styles.button}>Get Started</button>
        </section>
    );
}

const styles = {
    heroContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: 'white',
        padding: '20px',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        background: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

export { Hero };
