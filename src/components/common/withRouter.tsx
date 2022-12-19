import { useLocation, useNavigate, useParams } from 'react-router-dom';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
export function withRouter<T extends object>(Container: React.ComponentType<T>) {
  function ComponentWithRouterProp(props: T) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Container {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}