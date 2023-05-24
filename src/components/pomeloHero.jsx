import pom from "../assets/pom-title.svg";
import mouse from "../assets/mouse.svg";


function PomeloHero() {
  return (
    <section className="pomelobg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={pom} alt="pomelo" className="img-fluid animate__animated animate__slideInLeft animate__fast" />
            <h6 className="mt-5">The secure, reliable, and user-friendly payment processing solution your business deserves. Pomelo helps firms and Government organizations become more accessible to their customers.</h6>
            <a
              className="btn btn-primary btn-green rounded-pill px-5 py-4 mt-5"
              href="#startbuilding" style={{background: 'linear-gradient(117.04deg, #008631 -13.79%, #FFE600 131.52%)'}}
            >
              Get started
            </a>
            <div className="mt-5 animate__animated animate__pulse animate__infinite">
              <a href="#startbuilding"><img src={mouse} alt="mouse" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PomeloHero;
