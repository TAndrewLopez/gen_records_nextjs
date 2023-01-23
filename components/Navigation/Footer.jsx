import { GithubIcon, SpotifyIcon } from "../icons";
import { openInNewTab } from "../helperFuncs";

const Footer = ({ twClass }) => {
  return (
    <footer className={twClass}>
      <a
        className="flex cursor-pointer"
        onClick={() =>
          openInNewTab("https://github.com/TAndrewLopez/gen_records_nextjs")
        }>
        <GithubIcon
          twClass={
            "w-6 sm:w-8 fill-white hover:fill-sec ease-in-out duration-300"
          }
        />
      </a>
      <div className="flex flex-col justify-center items-center text-xs sm:text-base mx-10">
        <p>&copy; 2019–2023 Generational Records</p>
      </div>

      <a
        className="flex cursor-pointer group"
        onClick={() => openInNewTab("https://developer.spotify.com/")}>
        <SpotifyIcon
          twClass={
            "w-6 sm:w-8 fill-white group-hover:fill-sec ease-in-out duration-300"
          }
        />
      </a>
      <div className="flex justify-between text-xs"></div>
    </footer>
  );
};

export default Footer;
