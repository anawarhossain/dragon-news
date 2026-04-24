import Navbar from '@/components/shared/Navbar';

const AuthPageLayout = ({Children}) => {
    return (
        <div>
            <Navbar />
            {Children}
        </div>
    );
};

export default AuthPageLayout;