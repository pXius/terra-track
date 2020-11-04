// React Core
import React from 'react';
// Styling
import '../../css/style.css';
import Header from '../organism/Header';

function HomePage() {
  return (
    <div className="grid">
      <Header />
      <div className="body home-body">
        <form>
          <label>
            Parcel ID:
            <input type="text" />
          </label>
          <input type="submit" value="Track" />
        </form>
      </div>
    </div>
  );
}

export default HomePage;
