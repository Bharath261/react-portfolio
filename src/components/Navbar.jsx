import logo from "../assets/BkLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ profile, setProfile }) => {
  const handleClick = (platform) => {
    if (platform === 'linkedin') {
      window.open("https://www.linkedin.com/in/bharath-kumar-b7058427b", "_blank");
    } else if (platform === 'github') {
      window.open("https://github.com/Bharath261/", "_blank");
    }
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="flex items-center gap-2">
        <span className={profile === "frontend" ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold" : ""}>SD</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={profile === "data-analyst"}
            onChange={() => setProfile(profile === "frontend" ? "data-analyst" : "frontend")}
          />
          <div className="w-10 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-white-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-grey-700 toggle-btn"></div>
        </label>
        <span className={profile === "data-analyst" ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold" : ""}>DA</span>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin onClick={() => handleClick('linkedin')} style={{ cursor: 'pointer'}}/>
        {/*<FaGithub onClick={() => handleClick('github')} style={{ cursor: 'pointer'}}/>*/}  
      </div>
      
    </nav>
  );
};

export default Navbar;
