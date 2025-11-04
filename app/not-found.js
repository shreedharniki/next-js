export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#111827',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <a href="/" style={{ color: '#60A5FA', textDecoration: 'underline' }}>
        Go back home
      </a>
    </div>
  );
}
