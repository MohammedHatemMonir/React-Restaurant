import "./PopupBox.scss";

const PopupBox = ({
  title,
  img,
  desc,
  Oldprice,
  newPrice,
  stars,
  onClose,
}) => {
  {
    /* <h1 className="text-9xl">test</h1> */
  }

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto `}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-4">
            <span className="font-bold text-xl">Buy Card Modal</span>
            <button
              onClick={onClose}
              className="float-right text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <p>Content of the modal goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
