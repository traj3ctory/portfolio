import notFound from '../asset/img/404.gif'
/**
* @author traj3ctory
* @function NotFound
**/
const NotFound = () => (
  <section className="not_found">
    <img src={notFound} alt="notfound" className="img-fluid" />
  </section>
)

export default NotFound;