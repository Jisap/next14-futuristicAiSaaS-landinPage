import logoImage from "@/assets/images/sphereal-logo.svg?url"; // No queremos el svg como un componente, sino como una url


export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div 
              className=" size-10 bg-gray-200 bg-[conic-gradient(from_45deg,_var(--color-violet-400),_var(--color-fuchsia-400),_var(--color-amber-300),_var(--color-teal-300),_var(--color-violet-400))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
              }}
              ></div>
            <div className="font-extrabold text-2xl">sphereal.ai</div>
          </div>
          <div></div>
          <div>
            <button className="size-10 rounded-lg border-2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 -translate-y-1"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/">
                <div className="w-4 h-0.5 bg-gray-100 translate-y-1"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>)
};

export default Header;
