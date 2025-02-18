// /src/components/layout/Footer.jsx

export default function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '10px', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
}
