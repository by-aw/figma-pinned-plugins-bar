export default function IconLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      target="_blank"
      className="hover:bg-white/80 rounded-full p-2 bg-white"
      href={href}
    >
      {children}
    </a>
  );
}
