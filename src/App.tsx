import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "@/context/AuthContext";
import IndexPage from "@/pages/IndexPage";
// import { Private, Public } from "@/pages/AuthenticatedRoute";

const ContactUsPage = lazy(() => import("@/pages/ContactUsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
