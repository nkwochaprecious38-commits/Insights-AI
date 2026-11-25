import Image from "next/image";

/** Insights AI brand mark (public/brand/logo-symbol.png) with the wordmark set in Manrope. */
export function LogoMark({ size = 32, tile = false }: { size?: number; tile?: boolean }) {
  const mark = (
    <Image
      src="/brand/logo-symbol.png"
      alt={tile ? "" : "Insights AI"}
      width={400}
      height={380}
      priority
      style={{ width: tile ? size * 0.78 : size, height: "auto" }}
    />
  );
  if (!tile) return mark;
  return (
    <span className="flex flex-shrink-0 items-center justify-center rounded-lg bg-white" style={{ width: size, height: size }}>
      {mark}
    </span>
  );
}

export default function Logo({
  size = 32,
  tile = false,
  textClassName = "text-[#172B4D]",
  showText = true,
}: {
  size?: number;
  tile?: boolean;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} tile={tile} />
      {showText && (
        <span
          className={`text-[17px] font-extrabold ${textClassName}`}
          style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
        >
          Insights AI
        </span>
      )}
    </span>
  );
}
