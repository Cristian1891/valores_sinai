// src/features/home/components/TestimonialesImpactoSection/TestimonialSkeleton.tsx

export function TestimonialSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-48 animate-pulse rounded-3xl bg-dark/10 dark:bg-white/5"
        />
      ))}
    </div>
  );
}