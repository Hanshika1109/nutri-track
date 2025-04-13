import React from 'react';
import { Link } from 'react-router-dom';

function JoinPage() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background: 'linear-gradient(to bottom right, #81c784, #aed581)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Fuel Your Body, Feed Your Goals
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '500px',
            lineHeight: '1.5',
          }}
        >
          Welcome to NutriTrack — where every login is a step closer to a healthier you.
        </p>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '85%',
            maxWidth: '400px',
            padding: '2rem',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#388e3c',
              fontWeight: 700,
            }}
          >
            Log In to Thrive
          </h2>
          <form action="/login" method="post">
            <input
              type="email"
              placeholder="Email address"
              required
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '1.2rem',
                border: '1px solid #c8e6c9',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
            />
            <input
              type="password"
              placeholder="Your secret sauce (password)"
              required
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '1.2rem',
                border: '1px solid #c8e6c9',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#388e3c',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
            >
              Let’s Get Nourishing
            </button>
          </form>
          <div
            style={{
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            <p>
              New here?{' '}
              <Link
                to="/join"
                style={{
                  color: '#388e3c',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Start Your Nutrition Journey
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
