import Logo from '../../components/login_components/Logo'
import LoginFooter from '../../components/login_components/LoginFooter'
import ForgotPasswordForm from '../../components/login_components/ForgotPasswordForm'

const ForgotPasswordPage = () => {
  return (
    <div  className="min-h-screen bg-primary flex flex-col justify-between p-8">
        {/* logo */}
        <Logo />
        {/* center */}
        <ForgotPasswordForm/>
        {/* footer */}
        <LoginFooter/>
      
    </div>
  )
}

export default ForgotPasswordPage
