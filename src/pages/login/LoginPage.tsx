import Logo from '../../components/login_components/Logo';
import LoginFooter from '../../components/login_components/LoginFooter';
import LoginForm from '../../components/login_components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-between p-8">
      {/* Logo */}
      <Logo />
      {/* Center */}
      <LoginForm/>
      {/* Footer */}
      <LoginFooter/>
    </div>
  );
};

export default LoginPage;
