// /src/components/ui/Loader.jsx

export default function Loader() {
    return (
        <div style={styles.loaderContainer}>
            <div style={styles.spinner}></div>
        </div>
    );
}

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #333',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
};

// Add CSS animation in your global styles or use a CSS-in-JS solution
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);
