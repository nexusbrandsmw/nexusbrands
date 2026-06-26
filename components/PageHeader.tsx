interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  label?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-[#000f22] leading-tight">
          {title}
        </h1>

        {/* DESCRIPTION */}
        {subtitle && (
          <p className="mt-6 text-lg text-[#000f22]/70 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}