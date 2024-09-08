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
      </h6>
    </div>
  );
};

export default Footer;
