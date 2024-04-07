const StartGame = (props: { onClick: () => void }) => (
  <div className="flex flex-1 items-center justify-center p-4">
    <div className="w-full rounded-lg bg-white shadow md:max-w-4xl">
      <div className="m-4 flex h-12 items-center justify-between border-b border-gray-200">
        <div>
          <div className="font-mono text-xl font-bold text-gray-700">
            Game Ready
          </div>
          <div className="font-base text-sm text-gray-500">
            Here's How To Play
          </div>
        </div>
        <div>
          <div className="flex w-full items-center justify-center  rounded-full shadow-md">
            <label
              htmlFor="toogleA"
              className="flex cursor-pointer items-center"
            >
              <div className="flex items-center">
                <input id="toogleA" type="checkbox" className="hidden" />
                <div className="toggle__line h-10 w-20 rounded-full bg-gray-300 shadow-inner"></div>
                <div className="toggle__dot absolute flex h-10 w-10 items-center justify-center rounded-full bg-green-400 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="h-6 w-6"
                  >
                    <path
                      fill="#c8e6c9"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="px-6 font-mono text-myBlack">
        <p className="py-1">
          <strong>Drag and drop:</strong> Grab those objects or pictures and
          slide them over to one of the four options. Easy peasy!
        </p>
        <p className="py-1">
          <strong>Selecting an option:</strong> Drop them right where you think
          they belong.
        </p>
        <p className="py-1">
          <strong>Score:</strong> Keep an eye on that scorecard – it's gonna
          show off your cultural genius!
        </p>
        <p className="py-1">
          <strong>Learning:</strong> After the game, we'll spill the beans on
          each image, so you can learn and laugh along the way!
        </p>
        <p className="py-1">
          <strong>And the best part?</strong> You can replay again and again to
          sharpen your skills and maybe even discover something new each time!
        </p>
      </div>

      <div className="p-6 ">
        <button
          onClick={props.onClick}
          className="w-full rounded-lg bg-green-400 p-4 text-xl font-medium uppercase text-white shadow hover:bg-green-500"
        >
          Start the game
        </button>
      </div>
    </div>
  </div>
);

export default StartGame;
