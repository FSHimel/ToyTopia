import insta from "../assets/insta.png";
import facebook from "../assets/fb.png";
import linkedIN from "../assets/in.png";
const Footer = () => {
  return (
    <div className="bg-linear-to-r from-[#ccfff5] to-[#f2ffcc]">
      <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/fshimel_here/" target="_blank">
              <img src={insta} alt="" className="h-7" />
            </a>
            <a href="https://www.facebook.com/fshimel304" target="_blank">
              <img src={facebook} alt="" className="h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-fahim-shahriar-himel-3a48b9322/"
              target="_blank"
            >
              <img src={linkedIN} alt="" className="h-7" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ToyTopia
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
