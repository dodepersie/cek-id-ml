import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <h6 className="text-md text-center">
        By{" "}
        <Link
          href="https://tiktok.com/@t4kezy"
          target="_blank"
          className="underline"
        >
          @t4kezy
        </Link>
        . WDP 1K hanya di{" "}
        <Link
          href="https://xcashshop.com"
          target="_blank"
          className="underline"
        >
          Xcashshop
        </Link>
      </h6>
    </div>
  );
};

export default Footer;
