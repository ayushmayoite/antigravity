import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConfiguratorProvider } from "@/components/configurator/ConfiguratorContext";
import { ConfiguratorLayout } from "@/components/configurator/ConfiguratorLayout";
import Link from "next/link";

export default function WorkstationConfiguratorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-neutral-400">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-neutral-700 transition-colors">Workstations</Link>
            <span>/</span>
            <span className="text-neutral-700">Advanced Configurator</span>
          </div>
        </section>

        <ConfiguratorProvider>
          <ConfiguratorLayout />
        </ConfiguratorProvider>
      </main>

      <Footer />
    </div>
  );
}
