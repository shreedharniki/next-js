'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#111827',
      color: 'white',
      padding: '20px'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚠️ Something went wrong!</h2>
      <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={() => reset()} // reloads the route
        style={{
          padding: '10px 20px',
          backgroundColor: '#2563EB',
          borderRadius: '6px',
          cursor: 'pointer',
          border: 'none',
          color: 'white'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
