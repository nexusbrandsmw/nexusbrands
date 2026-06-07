import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = "/header-bg.jpg",
}: PageHeaderProps) {
  return (
    <section
      className="relative w-full h-[320px] md:h-[300px] flex items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020f22]/80" />

      {/* CONTENT */}
      <div className="relative w-full px-6 md:px-16 lg:px-24">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-extrabold">
          {title}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <div className="mt-4 max-w-2xl">

            <p className="text-white/80">
              {subtitle}
            </p>

            {/* 🔥 NEW LINE UNDER SUBTITLE */}
            <div className="mt-4 w-16 h-[3px] bg-[#4ebd45] rounded-full"></div>

          </div>
        )}

      </div>
    </section>
  );
}