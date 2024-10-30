import logoImage from "@/assets/images/sphereal-logo.svg?url"; // No queremos el svg como un componente, sino como una url
import { Button, ButtonProps } from "@/components/Button";


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
] satisfies {
    buttonVariant: ButtonProps["variant"];
    name: string;
    href: string;
}[]

export const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 flex justify-between items-center">
          {/* logo */}
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

          {/* nav-items */}
          <div className="h-full">
            <nav className="h-full">
              {navItems.map(({ name, href }) => (
                <a 
                  href={href}
                  key={href}
                  // dibuja antes y despues(último elemento) del name una linea vertical de 1px de color gray-200
                  className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center
                  before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0
                  last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* buttons */}
          <div className="hidden lg:flex gap-4">
            {loginItems.map(({ buttonVariant, name, href }) => (
              <Button 
                variant={buttonVariant}
              >
                <a href={href} key={name}>
                  {name}
                </a>
              </Button>
            ))}
          </div>
          <div className="flex items-center lg:hidden">
            {/* El linear gradient crea un fondo de color sólido que cubre el área de contenido del botón (content-box)*/}
            {/* El conic gradient aplica un degradado cónico a todo el boton incluyendo el borde (border-box) */}
            {/* Cada capa se limita a un area expecifica y por lo tanto se puede ver el border como un gradiente */}
            <button 
              className="
                size-10 rounded-lg relative border-2 border-transparent 
                [background:linear-gradient(_var(--color-gray-950),_var(--color-gray-950))_content-box,conic-gradient(from_45deg,_var(--color-violet-400),_var(--color-fuchsia-400),_var(--color-amber-300),_var(--color-teal-300),_var(--color-violet-400))_border-box]"
            >
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
