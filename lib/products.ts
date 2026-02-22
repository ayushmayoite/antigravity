// Product interface is defined here, so we don't import it.
export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    price: string;
    description: string;
    images: string[];
    features: string[];
    specs: { label: string; value: string }[];
    related: string[];
    badge?: string;      // "Bestseller" | "Premium" | "New"
    tagline?: string;    // Short marketing tagline
    warranty?: string;   // "5 Years" etc
}

export const products: Product[] = [
    // --- Chairs (Legacy entries removed in favor of imported products) ---
    // Fluid, Fluid X, Myel, Spino are now loaded from products_imported.ts
    {
        id: "cafeteria-1",
        slug: "cafeteria-seating",
        name: "Cafeteria Seating",
        category: "Cafe",
        price: "₹4,500",
        description: "Vibrant and durable seating for cafeterias and breakout zones. Easy to clean and stackable.",
        images: ["/products/chair-cafeteria.jpg"],
        features: ["Stackable", "Easy Clean", "Vibrant Colors", "Durable"],
        specs: [{ label: "Material", value: "Polypropylene" }],
        related: ["classy-series"]
    },
    // Classy Series removed

    // --- Workstations ---
    {
        id: "deskpro-1",
        slug: "deskpro-system",
        name: "DeskPro System",
        category: "Workstations",
        price: "₹25,000 per seat",
        description: "A highly modular workstation system designed for productivity. Integrated cable management and privacy screens.",
        images: ["/products/deskpro-workstation-1.jpg"],
        features: ["Modular", "Cable Management", "Privacy Screen", "Customizable Colors"],
        specs: [{ label: "Table Top", value: "25mm PLPB" }, { label: "Legs", value: "Powder Coated" }],
        related: ["linear-workstation", "myel-executive-chair"]
    },
    {
        id: "linear-1",
        slug: "linear-workstation",
        name: "Linear Workstation",
        category: "Workstations",
        price: "₹22,000 per seat",
        description: "Clean lines and open design. The Linear Workstation is perfect for modern, collaborative offices.",
        images: ["/products/linear-workstation-1.jpg"],
        features: ["Linear Layout", "Shared Legs", "Cost Effective"],
        specs: [{ label: "Width", value: "1200mm per seat" }],
        related: ["deskpro-system"]
    },
    {
        id: "60x30-1",
        slug: "60x30-modular",
        name: "60x30 Modular System",
        category: "Workstations",
        price: "PO A",
        description: "A robust partitioning system based on 60mm and 30mm profiles. Ideal for creating cubicles and semi-private spaces.",
        images: ["/products/60x30-workstation-1.jpg"],
        features: ["High Partition", "Glass Options", "Pinup Boards", "Raceways"],
        specs: [{ label: "Thouckness", value: "60mm" }],
        related: ["tcs-workspace"]
    },
    {
        id: "tcs-1",
        slug: "tcs-workspace",
        name: "TCS Workspace",
        category: "Workstations",
        price: "PO A",
        description: "A custom-designed workspace solution tailored for large corporate requirements.",
        images: ["/products/tcs-workspace-1.jpg"],
        features: ["Custom Dimensions", "Corporate Branding", "Heavy Duty"],
        specs: [{ label: "Usage", value: "IT / Corporate" }],
        related: ["honda-office"]
    },
    {
        id: "honda-1",
        slug: "honda-office",
        name: "Honda Office Setup",
        category: "Workstations",
        price: "PO A",
        description: "Premium office setup showcasing our capabilities in delivering large-scale infrastructure projects.",
        images: ["/products/honda-office-1.jpg"],
        features: ["Turnkey Solution", "Premium Finishes"],
        specs: [{ label: "Client", value: "Honda" }],
        related: ["deskpro-system"]
    },

    // --- Meeting Tables ---
    {
        id: "meet-exec",
        slug: "executive-meeting-table",
        name: "Executive Meeting Table",
        category: "Meeting Tables",
        price: "₹1,50,000",
        description: "A grand meeting table for the boardroom. Features power connectivity and a premium finish.",
        images: ["/products/meeting-table-10pax.jpg"],
        features: ["Power Box", "Wire Manager", "Premium Veneer", "10-12 Seater"],
        specs: [{ label: "Size", value: "3000 x 1200 mm" }],
        related: ["compact-meeting-table"]
    },
    {
        id: "meet-compact",
        slug: "compact-meeting-table",
        name: "Compact Meeting Table",
        category: "Meeting Tables",
        price: "₹45,000",
        description: "A round or square meeting table for huddle rooms and small discussions.",
        images: ["/products/meeting-table-6pax.jpg"],
        features: ["Compact", "Stable Base", "Modern Look"],
        specs: [{ label: "Seating", value: "4-6 Pax" }],
        related: ["executive-meeting-table"]
    },
    {
        id: "conf-setup",
        slug: "conference-setup",
        name: "Conference Video Setup",
        category: "Meeting Tables",
        price: "PO A",
        description: "Specialized table designed for video conferencing, ensuring everyone is visible.",
        images: ["/products/meeting table top render.jpg"],
        features: ["V-Shape", "Integrated Tech", "Acoustics"],
        specs: [{ label: "Type", value: "Video Conference" }],
        related: ["executive-meeting-table"]
    },

    // --- Soft Seating ---
    {
        id: "3",
        slug: "solace-lounge-chair",
        name: "Solace Lounge",
        category: "Soft Seating",
        price: "₹85,000",
        description: "Crafted calm. A plush soft seating collection designed for lobbies and collaborative breakout zones.",
        images: ["/products/solace-chair-1.jpg", "/products/softseating-solace-1.jpg"],
        features: ["Premium Upholstery", "Acoustic Comfort", "Modular"],
        specs: [{ label: "Configuration", value: "Lounge" }],
        related: ["myel-executive-chair"]
    },

    // --- Storage ---
    {
        id: "stor-1",
        slug: "cabin-drawer",
        name: "Cabin Drawer Unit",
        category: "Storage",
        price: "₹8,500",
        description: "Essential mobile pedestal for under-desk storage. Lockable and durable.",
        images: ["/products/cabin drawer close up render.jpg"],
        features: ["3 Drawers", "Central Lock", "Castors"],
        specs: [{ label: "Material", value: "Metal / Laminate" }],
        related: ["office-storage"]
    },
    {
        id: "stor-2",
        slug: "office-storage",
        name: "Office Storage System",
        category: "Storage",
        price: "₹25,000",
        description: "Full-height storage units and filing cabinets to keep your office organized.",
        images: ["/products/cabin electrical render .jpg"],
        features: ["Adjustable Shelves", "Lockable", "Modular"],
        specs: [{ label: "Height", value: "2100mm" }],
        related: ["cabin-drawer"]
    },

    // --- Others ---
    {
        id: "pod-1",
        slug: "nuvora-pod",
        name: "Nuvora Pod",
        category: "Others",
        price: "₹3,50,000",
        description: "A private acoustic pod for focused work or phone calls. Soundproof and ventilated.",
        images: ["/products/nuvora-pod-1.jpg"],
        features: ["Soundproof", "Ventilation", "Lighting", "Power Socket"],
        specs: [{ label: "Size", value: "1 Pax" }],
        related: ["nuvora-pod-2"]
    },
    {
        id: "pod-2",
        slug: "nuvora-pod-2",
        name: "Nuvora Pod 2",
        category: "Others",
        price: "PO A",
        description: "Larger acoustic pod variations.",
        images: ["/products/nuvora-pod-2.jpg"],
        features: ["Soundproof", "Ventilation"],
        specs: [{ label: "Variant", value: "Model 2" }],
        related: ["nuvora-pod"]
    },
    {
        id: "pod-3",
        slug: "nuvora-pod-3",
        name: "Nuvora Pod 3",
        category: "Others",
        price: "PO A",
        description: "Larger acoustic pod variations.",
        images: ["/products/nuvora-pod-3.jpg"],
        features: ["Soundproof", "Ventilation"],
        specs: [{ label: "Variant", value: "Model 3" }],
        related: ["nuvora-pod"]
    },
    {
        id: "tray-1",
        slug: "paper-tray",
        name: "Paper Tray",
        category: "Others",
        price: "₹1,500",
        description: "Desk accessory for organizing documents.",
        images: ["/products/dauble paper tray.jpg"],
        features: ["Double Tray", "Stackable"],
        specs: [{ label: "Material", value: "Plastic/Mesh" }],
        related: ["deskpro-system"]
    },

    // --- Projects ---
    {
        id: "proj-1",
        slug: "project-dmrc",
        name: "DMRC Office",
        category: "Projects",
        price: "Project",
        description: "Office setup for Delhi Metro Rail Corporation.",
        images: ["/photos/DMRC/hero.jpg"],
        features: ["Large Scale", "Government"],
        specs: [{ label: "Location", value: "Delhi" }],
        related: []
    },
    {
        id: "proj-2",
        slug: "project-titan",
        name: "Titan Corporate",
        category: "Projects",
        price: "Project",
        description: "Corporate office for Titan.",
        images: ["/photos/Titan/hero.jpg"],
        features: ["Corporate", "Workstations"],
        specs: [{ label: "Location", value: "Bangalore" }],
        related: []
    },
    {
        id: "proj-3",
        slug: "project-usha",
        name: "Usha International",
        category: "Projects",
        price: "Project",
        description: "Office interior for Usha International.",
        images: ["/photos/Usha/hero.jpg"],
        features: ["Corporate", "Design"],
        specs: [{ label: "Location", value: "Gurgaon" }],
        related: []
    },
    {
        id: "proj-4",
        slug: "project-abdul-hai",
        name: "Abdul Hai Office",
        category: "Projects",
        price: "Project",
        description: "Private office setup.",
        images: ["/projects/abdul-hai/IMG_20191114_130520.webp"],
        features: ["Private", "Luxury"],
        specs: [{ label: "Type", value: "Private Office" }],
        related: []
    },

    // --- AFC India Products (Added) ---
    // Workstations
    {
        id: "afc-ws-1",
        slug: "curvivo-workstation",
        name: "Curvivo",
        category: "Workstations",
        price: "PO A",
        description: "Organic shapes for fluid workspaces. Curvivo breaks the rigidity of traditional offices with its smooth curves.",
        images: ["/products/deskpro-workstation-1.jpg"], // Placeholder using existing high-quality asset
        features: ["Curved Design", "Organic Layout", "Collaborative"],
        specs: [{ label: "Material", value: "Premium Laminate" }],
        related: ["deskpro-system"]
    },
    {
        id: "afc-ws-2",
        slug: "sleek-workstation",
        name: "Sleek",
        category: "Workstations",
        price: "PO A",
        description: "Minimalist design implementation for maximum focus. The Sleek system disappears into the room.",
        images: ["/products/linear-workstation-1.jpg"], // Placeholder
        features: ["Minimalist", "Hidden Cable Tray", "Slim Profile"],
        specs: [{ label: "Legs", value: "Aluminum Profile" }],
        related: ["linear-workstation"]
    },
    {
        id: "afc-ws-3",
        slug: "adaptable-system",
        name: "Adaptable",
        category: "Workstations",
        price: "PO A",
        description: "A future-proof workstation system that grows with your team. Reconfigurable and robust.",
        images: ["/products/60x30-workstation-1.jpg"], // Placeholder
        features: ["Future Proof", "Reconfigurable", "Heavy Duty"],
        specs: [{ label: "load", value: "Tested for 150kg" }],
        related: ["60x30-modular"]
    },

    // Chairs
    {
        id: "afc-ch-1",
        slug: "snap-chair",
        name: "Snap",
        category: "Chairs",
        price: "PO A",
        description: "Snaps into action. A versatile task chair designed for agility and comfort.",
        images: ["/products/chair-mesh-office.jpg"], // Placeholder
        features: ["Synchro Tilt", "Lumbar Support", "Breathable Mesh"],
        specs: [{ label: "Mechanism", value: "Auto-weight sensing" }],
        related: ["arvo-chair"]
    },
    {
        id: "afc-ch-2",
        slug: "arvo-chair",
        name: "Arvo",
        category: "Chairs",
        price: "PO A",
        description: "Precision engineering meets ergonomic excellence. Arvo is built for long work sessions.",
        images: ["/products/chair-executive-1.jpg"], // Placeholder
        features: ["High Back", "Headrest", "4D Armrests"],
        specs: [{ label: "Base", value: "Chrome Star Base" }],
        related: ["snap-chair"]
    },
    {
        id: "afc-ch-3",
        slug: "pinnacle-chair",
        name: "Pinnacle",
        category: "Chairs",
        price: "PO A",
        description: "The peak of executive seating. Luxurious materials and commanding presence.",
        images: ["/products/chair-leather-tan.jpg"], // Placeholder
        features: ["Leather Upholstery", "Knee Tilt", "Chrome Details"],
        specs: [{ label: "Material", value: "Genuine Leather Contact" }],
        related: ["phoenix-chair"]
    },
    {
        id: "afc-ch-4",
        slug: "phoenix-chair",
        name: "Phoenix",
        category: "Chairs",
        price: "PO A",
        description: "Rise above the ordinary. A modern executive chair with a distinctive silhouette.",
        images: ["/products/chair-executive-2.jpg"], // Placeholder
        features: ["Unique Design", "Integrated Arms", "Tilt Lock"],
        specs: [{ label: "Finish", value: "Matte Black" }],
        related: ["pinnacle-chair"]
    },
    {
        id: "afc-ch-5",
        slug: "ember-chair",
        name: "Ember",
        category: "Chairs",
        price: "PO A",
        description: "Warmth and comfort combined. Ideally suited for meeting rooms and guest seating.",
        images: ["/products/chair-visitor-1.jpg"], // Placeholder
        features: ["Cushioned", "Fabric Upholstery", "Visitor Friendly"],
        specs: [{ label: "Legs", value: "Cantilever" }],
        related: ["nordic-chair"]
    },
    {
        id: "afc-ch-6",
        slug: "nordic-chair",
        name: "Nordic",
        category: "Chairs",
        price: "PO A",
        description: "Scandanavian inspired minimalism. Perfect for breakout zones and casual meetings.",
        images: ["/products/chair-cafeteria.jpg"], // Placeholder
        features: ["Wooden Legs", "Shell Design", "Minimalist"],
        specs: [{ label: "Style", value: "Nordic" }],
        related: ["ember-chair"]
    },
    {
        id: "afc-ch-7",
        slug: "flip-chair",
        name: "Flip",
        category: "Chairs",
        price: "PO A",
        description: "Flexible seating for training rooms. Flip the seat and nest them away to save space.",
        images: ["/products/chair-mesh-office.jpg"], // Placeholder
        features: ["Nesting", "Castors", "Writing Tablet Optional"],
        specs: [{ label: "Storage", value: "Nestable" }],
        related: ["snap-chair"]
    },

    // Tables
    {
        id: "afc-tb-1",
        slug: "exquisite-table",
        name: "Exquisite",
        category: "Meeting Tables",
        price: "PO A",
        description: "A statement piece for the executive cabin. Rich veneers and impeccable detailing.",
        images: ["/products/meeting-table-10pax.jpg"], // Placeholder
        features: ["Premium Veneer", "Built-in Connectivity", "Heavy Base"],
        specs: [{ label: "Finish", value: "Walnut / Oak" }],
        related: ["collaborate-table"]
    },
    {
        id: "afc-tb-2",
        slug: "collaborate-table",
        name: "Collaborate",
        category: "Meeting Tables",
        price: "PO A",
        description: "Designed for teamwork. The Collaborate table brings people together effortlessly.",
        images: ["/products/meeting-table-6pax.jpg"], // Placeholder
        features: ["Cable Management", "Durable Top", "Various Sizes"],
        specs: [{ label: "Shape", value: "Rectangular / Racetrack" }],
        related: ["exquisite-table"]
    }
];

export const categories = ["Workstations", "Chairs", "Meeting Tables", "Soft Seating", "Storage", "Projects", "Task Chair"];
