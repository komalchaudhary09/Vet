import Layout from "../component/layout/Layout";
import Banner from "../assets/images/front.jpeg";
import { Link } from "react-router-dom";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div
        className="dashboard"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="dashboard-content">
          <h1>
            A vet for the <br />
            <span>Animal People</span>
          </h1>

          <Link to="/login" className="start-btn">
            Get Start
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;