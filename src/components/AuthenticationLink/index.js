import {Link} from 'react-router-dom'
import './AuthenticationLink.css'

function AuthenticationLink({ url, children }) {
  return (
    <div className="authentication-link">
      <Link to={url} className="link">
        {children}
      </Link>
    </div>
  )
}

export default AuthenticationLink;
