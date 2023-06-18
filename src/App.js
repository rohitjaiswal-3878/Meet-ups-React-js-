import { Router, Routes, Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Fvoritespage from "./pages/Favorites";
import React from "react";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupPage />} />
        <Route path="/fav" element={<Fvoritespage />} />
      </Routes>
    </Layout>
  );
}

export default App;
