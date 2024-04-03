const StartGame = (props: { onClick: () => void }) => (
  <div className="flex flex-1 items-center justify-center p-4">
    <div className="w-full rounded-lg bg-white shadow md:max-w-4xl">
      <div className="m-4 flex h-12 items-center justify-between border-b border-gray-200">
        <div>
          <div className="text-xl font-bold text-gray-700">
            Game Initialised
          </div>
          <div className="font-base text-sm text-gray-500">
            Waiting for more players...
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
                <div className="toggle__dot absolute flex h-10 w-10 items-center justify-center rounded-full bg-red-400 shadow">
                  <svg
                    className="h-6 w-6 text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="my-6 flex h-16 items-center justify-between rounded-lg  border border-gray-100 p-4 shadow-md">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png"
              alt="Logo"
            />
            <div className="ml-2">
              <div className="text-sm font-semibold text-gray-600">
                NewAussie3001
              </div>
              <div className="text-sm font-light text-gray-500">Level 6</div>
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center rounded-full bg-green-300 p-2 shadow-md hover:bg-red-500">
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
            </button>
          </div>
        </div>
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
