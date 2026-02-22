
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | One&Only Furniture',
  description: 'Tailored furniture solutions for every industry.',
};

export default function SolutionsPage({ params }: { params: { category: string } }) {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-serif mb-4 capitalize">
        {params.category.replace(/-/g, ' ')} Solutions
      </h1>
      <p className="text-neutral-500">
        Specialized solutions for {params.category} coming soon.
      </p>
    </div>
  );
}

