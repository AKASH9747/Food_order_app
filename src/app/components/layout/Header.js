import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={""} className="text-primary font-semibold text-2xl">
        AKASH'S PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menue</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link href={""} className="bg-primary text-white px-6 py-2 rounded-lg">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
