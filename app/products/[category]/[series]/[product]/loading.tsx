export default function Loading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb skeleton */}
      <div className="border-b border-neutral-100 h-10 bg-white flex items-center px-6 gap-2">
        <div className="h-2 w-16 bg-neutral-100 animate-pulse rounded" />
        <div className="h-2 w-2 bg-neutral-100 animate-pulse rounded" />
        <div className="h-2 w-20 bg-neutral-100 animate-pulse rounded" />
        <div className="h-2 w-2 bg-neutral-100 animate-pulse rounded" />
        <div className="h-2 w-24 bg-neutral-200 animate-pulse rounded" />
      </div>
      <div className="flex min-h-[calc(100vh-112px)]">
        {/* Image area */}
        <div className="w-full lg:w-[58%] xl:w-[62%] bg-[#f5f5f5] animate-pulse" />
        {/* Details panel */}
        <div className="hidden lg:block w-full lg:w-[42%] xl:w-[38%] px-12 py-10 border-l border-neutral-100 space-y-6">
          <div className="h-2 w-24 bg-neutral-100 animate-pulse rounded" />
          <div className="h-10 w-48 bg-neutral-200 animate-pulse rounded" />
          <div className="h-3 w-full bg-neutral-100 animate-pulse rounded" />
          <div className="h-3 w-3/4 bg-neutral-100 animate-pulse rounded" />
          <div className="pt-4 space-y-2">
            <div className="h-12 w-full bg-neutral-900 animate-pulse rounded-sm opacity-10" />
            <div className="h-10 w-full bg-neutral-100 animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
