import { Menu, Transition } from "@headlessui/react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

interface MobileDropdownProps {
  address?: string;
  login: () => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const MobileDropdown = (props: MobileDropdownProps) => {
  return (
    <Menu>
      <Menu.Button>
        <Bars3CenterLeftIcon
          height={30}
          width={30}
          className="w-30 block rotate-180 rounded-xl text-black md:hidden"
        />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div>
          <Menu.Items>
            <div className="absolute -left-[100vw] top-14 mx-4 flex h-[100vh] w-screen flex-col border border-black bg-black/80 px-8 py-12 font-poppins text-black">
              {props.address && (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`w-full py-4 font-neutral text-xl text-white ${
                        active && " bg-black/10"
                      }`}
                      href={`/collector/${props.address}`}
                    >
                      My Profile
                    </a>
                  )}
                </Menu.Item>
              )}
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`w-full py-4 font-neutral text-xl text-white ${
                      active && " bg-black/10"
                    }`}
                    href="/assistant"
                  >
                    SnowGPT
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`w-full py-4 font-neutral text-xl text-white ${
                      active && " bg-black/10"
                    }`}
                    href="/collections"
                  >
                    Collections
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      if (!props.isLoggedIn) {
                        props.login();
                      } else {
                        props.logout();
                      }
                    }}
                    className="my-2 w-fit bg-white py-2 px-4 font-neutral text-xl text-black"
                  >
                    {!props.isLoggedIn ? "Connect Wallet" : "Disconnect Wallet"}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  );
};

export default MobileDropdown;
