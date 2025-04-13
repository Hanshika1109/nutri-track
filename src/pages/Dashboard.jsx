import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          backgroundColor: '#43a047',
          color: 'white',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ marginBottom: '2rem' }}>NutriTrack</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/" style={linkStyle}>🏡 Home</Link>
          <Link to="/profile" style={linkStyle}>👤 My Profile</Link>
          <Link to="/meal-plan" style={linkStyle}>🍽️ Smart Meal Plan</Link>
          <Link to="/progress" style={linkStyle}>📈 My Progress</Link>
          <Link to="/settings" style={linkStyle}>⚙️ Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '2rem' }}>
        {/* Slogan */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: '#2e7d32', marginBottom: '0.5rem' }}>
            Fuel your body! Feed your goals! Feel the change!
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Welcome to your wellness hub, where your journey to a healthier you begins!
          </p>
        </div>

        {/* Greeting */}
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>
          👋 Hello [Your Name], here's a snapshot of your day!
        </h2>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <DashboardCard
            title="🍎 Calories In Today"
            value="1,480 kcal"
            message="Right on track! Keep those choices smart and tasty."
          />
          <DashboardCard
            title="🏃 Workout Time"
            value="30 mins"
            message="Every move counts. You're doing amazing!"
          />
          <DashboardCard
            title="💧 Water Intake"
            value="2.0 L"
            message="Hydration heroes stay energized all day!"
          />
          <DashboardCard
            title="🥗 Meals Logged"
            value="3 of 4"
            message="Great progress! One more to go for a perfect score!"
          />
        </div>
      </main>
    </div>
  );
}

function DashboardCard({ title, value, message }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: '0.5rem', color: '#2e7d32' }}>{title}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{value}</p>
      <p style={{ fontSize: '0.95rem', color: '#666' }}>{message}</p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '14px',
  padding: '1.5rem',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
  transition: 'transform 0.3s',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.5rem 0',
};

export default Dashboard;
