import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/features/userSlice';


const PrivateRoute: React.FC = () => {

  const isAuthenticated = useSelector(selectToken);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;