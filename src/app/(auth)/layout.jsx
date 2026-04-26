import Navbar from '@/components/shared/Navbar';

const AuthPageLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthPageLayout;