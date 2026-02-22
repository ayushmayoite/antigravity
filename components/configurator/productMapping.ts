import { ConfigState } from "./ConfiguratorContext";

export interface RecommendedProduct {
    name: string;
    slug: string;
    image: string;
}

/**
 * Get recommended products based on configurator selections
 * Maps layout and seating configuration to specific catalog products
 */
export function getRecommendedProducts(config: ConfigState): RecommendedProduct[] {
    const { layout, seatingCount, furnitureType } = config;
    const products: RecommendedProduct[] = [];

    // Meeting furniture recommendations
    if (furnitureType === "meeting") {
        if (seatingCount >= 10) {
            products.push({
                name: "Meeting Table 10-Pax",
                slug: "meeting-table-10pax",
                image: "/products/meeting-table-10pax.jpg",
            });
        } else if (seatingCount >= 8) {
            products.push({
                name: "Meeting Table 8-Pax",
                slug: "meeting-table-8pax",
                image: "/products/meeting-table-8pax.jpg",
            });
        } else {
            products.push({
                name: "Meeting Table 6-Pax",
                slug: "meeting-table-6pax",
                image: "/products/meeting-table-6pax.jpg",
            });
        }
        return products;
    }

    // Cabin furniture recommendations
    if (furnitureType === "cabin" || layout === "private-cabins") {
        products.push({
            name: "Executive Cabin Desk",
            slug: "cabin-executive",
            image: "/products/cabin electrical render .jpg",
        });
        return products;
    }

    // Desking layout-based recommendations
    if (layout === "linear") {
        if (seatingCount >= 4 && seatingCount <= 6) {
            products.push({
                name: "Linear Workstation System",
                slug: "linear-workstation",
                image: "/products/linear-workstation-1.jpg",
            });
            products.push({
                name: "Linear Bench Desking",
                slug: "linear-bench",
                image: "/products/linear-workstation-2.jpg",
            });
        }
    } else if (layout === "cluster-4") {
        products.push({
            name: "DeskPro 4-Person Cluster",
            slug: "deskpro-cluster-4",
            image: "/products/deskpro-workstation-1.jpg",
        });
    } else if (layout === "cluster-6") {
        products.push({
            name: "DeskPro 6-Person Cluster",
            slug: "deskpro-cluster-6",
            image: "/products/deskpro-workstation-2.jpg",
        });
    } else if (layout === "l-shape") {
        products.push({
            name: "L-Shape Workstation",
            slug: "l-shape-desk",
            image: "/products/60x30-workstation-1.jpg",
        });
    } else if (layout === "u-shape") {
        products.push({
            name: "U-Shape Executive Desk",
            slug: "u-shape-desk",
            image: "/products/60x30-workstation-2.jpg",
        });
    } else if (layout === "hybrid-mix") {
        products.push({
            name: "Hybrid Workstation Mix",
            slug: "hybrid-workstation",
            image: "/products/deskpro-workstation-3.jpg",
        });
    }

    // Default recommendation if no specific match
    if (products.length === 0) {
        products.push({
            name: "DeskPro Modular Workstation",
            slug: "deskpro-modular",
            image: "/products/deskpro-workstation-1.jpg",
        });
    }

    return products;
}

