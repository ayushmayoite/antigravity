import Image from "next/image";

export function ClientCard({ client }: { client: any }) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-24 h-16">
        <Image
          src={client.image}
          alt={client.client_name}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold text-stone-800">{client.client_name}</p>
      <p className="text-xs text-stone-400 uppercase tracking-wide">
        {client.city} · {client.sector}
      </p>
      <p className="text-sm text-stone-600 text-center">{client.description}</p>
    </div>
  );
}
