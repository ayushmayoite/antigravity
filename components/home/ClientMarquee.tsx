const CLIENTS_ROW_1 = [
  "Adani Power",
  "Adecco",
  "Indian Bank",
  "Amara Raja",
  "Ambuja Neotia",
  "Annapurna Finance",
  "Asian Paints",
  "Azim Premji Foundation",
  "BBC Media Action",
  "BHEL",
  "Bureau of Indian Standards",
  "BNP Paribas",
  "BSPHCL",
  "Bandhan Bank",
  "Big Bazaar",
  "Government of Bihar",
  "Indian Army",
  "Birla School",
  "CIMP",
  "CRI Pumps",
  "Canara Bank",
  "CARE",
  "Coca-Cola",
  "Corporation Bank",
  "DMRC",
  "Dalmia Bharat Cement",
  "Essel Utilities",
  "FHI 360",
  "Franklin Templeton Investments",
  "D. Goenka School",
  "Government of India",
  "HDFC",
];

const CLIENTS_ROW_2 = [
  "HelpAge India",
  "Hyundai",
  "IDBI Bank",
  "ITC Limited",
  "Income Tax Department",
  "IndianOil",
  "JSW",
  "Janalakshmi",
  "L&T",
  "Maruti Suzuki",
  "NTPC",
  "SAIL",
  "State Bank of India",
  "SITI Networks",
  "Shriram",
  "Sonalika International",
  "Survey of India",
  "Syndicate Bank",
  "Tata Steel",
  "Tata Motors",
  "Titan",
  "United Nations",
  "Usha",
  "Ujjivan Small Finance Bank",
  "UNICEF",
  "NABARD",
  "United Spirits",
  "Vodafone",
  "World Health Organization",
  "ZTE",
];

export function ClientMarquee() {
  return (
    <section className="w-full bg-neutral-900 border-t border-neutral-800 py-16 md:py-24 overflow-hidden">
      <div className="container px-6 2xl:px-0 mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 text-center font-semibold">
          Trusted by India&apos;s Leading Organizations
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative select-none">
        {/* Row 1 - scrolling left */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div
              key={`row1-${i}`}
              className="flex items-center whitespace-nowrap px-4"
            >
              {CLIENTS_ROW_1.map((client) => (
                <div
                  key={client}
                  className="mx-6 text-xl md:text-3xl font-light tracking-tight text-neutral-500 hover:text-white transition-colors duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 - scrolling right */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div
              key={`row2-${i}`}
              className="flex items-center whitespace-nowrap px-4"
            >
              {CLIENTS_ROW_2.map((client) => (
                <div
                  key={client}
                  className="mx-6 text-xl md:text-3xl font-light tracking-tight text-neutral-500 hover:text-white transition-colors duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Edge fade gradients for premium feel */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-neutral-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-neutral-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
