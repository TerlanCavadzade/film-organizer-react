import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

import "./styles.css";
import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import CollectionList from "./components/CollectionPageLayout/CollectionList";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/collection/" element={<CollectionList />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
      </Routes>
    </Layout>
  );
}
