import {Link} from 'react-router-dom'
import './LoginLink.css'

function LoginLink({ url, children }) {
  return (
    <div className="authentication-link">
      <Link to={url} className="link">
        {children}
      </Link>
    </div>
  )
}

export default LoginLink;
