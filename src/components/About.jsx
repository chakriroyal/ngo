import eduImg from '../assets/education.png';
import healthImg from '../assets/health.png';
import womenImg from '../assets/women.png';


const About = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">About Us</h2>

      <p className="text-center mb-5">
        <strong>HopeForAll</strong> is a non-profit organization committed to uplifting underserved communities through access to education, healthcare, and empowerment programs.
        Since our founding, we’ve worked tirelessly to bring lasting change by fostering hope, dignity, and opportunity.
      </p>

      {/* Mission, Vision, What We Do */}
      <div className="row text-center mb-5 g-5">
        <div className="col-md-4 py-5 bg-light">
          <h5>🎯 Mission</h5>
          <p>To build a more inclusive and empowered society by supporting grassroots efforts and enabling sustainable development.</p>
        </div>
        <div className="col-md-4 py-5 bg-light">
          <h5>🌍 Vision</h5>
          <p>A world where every individual, regardless of background, has access to basic needs, education, and opportunity.</p>
        </div>
        <div className="col-md-4 py-5 bg-light">
          <h5>💡 What We Do</h5>
          <p>We run community schools, organize health camps, support women-led enterprises, and offer volunteering opportunities for change-makers.</p>
        </div>
      </div>

      {/* Cards: Focus Areas */}
      <h4 className="text-center mb-4">Our Focus Areas</h4>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={eduImg} className="card-img-top" alt="Education" />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">We provide access to quality education for children in remote and underserved areas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={healthImg} className="card-img-top" alt="Healthcare" />
            <div className="card-body">
              <h5 className="card-title">Healthcare</h5>
              <p className="card-text">Our medical camps and awareness drives improve community health and well-being.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={womenImg} className="card-img-top" alt="Women Empowerment" />
            <div className="card-body">
              <h5 className="card-title">Women Empowerment</h5>
              <p className="card-text">We support skill development, self-help groups, and leadership training for women.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Impact Statistics */}
      <div className="row text-center my-5">
        <div className="col-md-3">
          <h3 className="text-primary">500+</h3>
          <p>Children Educated</p>
        </div>
        <div className="col-md-3">
          <h3 className="text-success">100+</h3>
          <p>Health Camps</p>
        </div>
        <div className="col-md-3">
          <h3 className="text-warning">250+</h3>
          <p>Volunteers Engaged</p>
        </div>
        <div className="col-md-3">
          <h3 className="text-danger">20+</h3>
          <p>Rural Projects</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="lead">Meet our passionate team of changemakers who drive our mission forward.</p>
        <a href="#team" className="btn btn-outline-primary">Our Team</a>
      </div>
    </div>
  </section>
);

export default About;
