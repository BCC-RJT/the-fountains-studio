export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-48 w-full rounded-xl object-cover md:h-56"
          loading="lazy"
        />
      ))}
    </div>
  );
}
