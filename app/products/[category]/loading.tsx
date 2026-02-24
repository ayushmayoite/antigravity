export default function Loading() {
  return (
    <div className="w-full bg-white min-h-screen pt-24 md:pt-[104px]">
      {/* Hero skeleton */}
      <div className="w-full h-[40vh] min-h-[300px] bg-neutral-100 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>

      {/* Header skeleton */}
      <div className="container px-6 2xl:px-0 py-12 md:py-16">
        <div className="w-full max-w-2xl">
          <div className="h-10 md:h-14 w-3/4 bg-neutral-100 animate-pulse rounded-sm mb-6" />
          <div className="h-6 w-full max-w-md bg-neutral-50 animate-pulse rounded-sm" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="container px-6 2xl:px-0 pb-24 flex gap-16">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="h-4 w-24 bg-neutral-100 animate-pulse rounded-sm mb-8" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-6 w-full bg-neutral-50 animate-pulse rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Product cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="aspect-4/3 bg-neutral-100 animate-pulse rounded-xl" />
              <div className="space-y-2 mt-2">
                <div className="h-5 w-3/4 bg-neutral-100 animate-pulse rounded-sm" />
                <div className="h-4 w-1/2 bg-neutral-50 animate-pulse rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
