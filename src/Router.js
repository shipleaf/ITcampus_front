import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './components/post/Top';
import CalendarComponent from './components/calendarcomponent/CalendarComponent';

const AppRouter = ({ setIsLoggedIn }) => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<CalendarComponent />} />

        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  