import Logo from '../../components/login_components/Logo'
import LoginFooter from '../../components/login_components/LoginFooter'
import PasswordSentCard from '../../components/login_components/PasswordSent'

const PasswordSentPage = () => {
  return (
    <div  className="min-h-screen bg-primary flex flex-col justify-between p-8">
        {/* logo */}
        <Logo />
        {/* center */}
        <div className="flex w-full max-w-4xl mx-auto lg:flex-row flex-col gap-6 items-center justify-center relative">

        <PasswordSentCard/>
        </div>
        {/* footer */}
        <LoginFooter/>
      
    </div>
  )
}

export default PasswordSentPage
