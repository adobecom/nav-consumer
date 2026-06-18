import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '60px 40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Nav Consumer</h1>
      <p>Demo app for Adobe federated navigation and footer.</p>
      <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate('/nav-demo')}
          style={{
            padding: '12px 24px',
            background: '#1473e6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          React Nav Demo
        </button>
        <a
          href="navigation.html"
          style={{
            padding: '12px 24px',
            background: '#f5f5f5',
            color: '#2c2c2c',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            textDecoration: 'none',
          }}
        >
          Vanilla JS Nav Demo
        </a>
      </div>
    </main>
  );
}

export default Home;
