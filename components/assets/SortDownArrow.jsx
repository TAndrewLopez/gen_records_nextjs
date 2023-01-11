const SortDownArrow = ({ twClass }) => {
  return (
    <svg
      className={twClass}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path
        className="fa-primary"
        d="M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.4 136.8C145.9 477.3 152.1 480 160 480c7.055 0 14.15-2.702 19.5-8.109l132.4-136.8C329.2 317.8 316.9 288 292.3 288z"
      />
      <path
        className="fa-secondary opacity-30"
        d="M27.66 223.1h264.7c24.6 0 36.89-29.77 19.54-47.12l-132.5-136.8c-5.352-5.406-12.39-8.109-19.45-8.109c-7.053 0-14.12 2.703-19.53 8.109L8.119 176.9C-9.229 194.2 3.055 223.1 27.66 223.1zM159.9 111.1l46.5 48.01H113.5L159.9 111.1z"
      />
    </svg>
  );
};

export default SortDownArrow;