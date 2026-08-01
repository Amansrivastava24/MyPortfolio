import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgressBar from '../components/ui/ScrollProgressBar';
import BackToTopButton from '../components/ui/BackToTopButton';
import CursorGlow from '../components/ui/CursorGlow';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-background bg-noise overflow-hidden">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
