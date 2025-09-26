import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackDetails from './components/FeedbackDetails';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<FeedbackForm setFeedbacks={setFeedbacks} />} />
      <Route path="/feedbacks" element={<FeedbackList feedbacks={feedbacks} />} />
      <Route path="/feedback/:id" element={<FeedbackDetails feedbacks={feedbacks} />} />
    </Routes>
  );
}

export default App;
