import Navbar from '@/components/shared/Navbar';

const AuthPageLayout = ({Children}) => {
    return (
      <div className="container mx-auto">
        <Navbar />
        {Children}
      </div>
    );
};

export default AuthPageLayout;