export interface ProductVariant {
  id: string;
  variantName: string; // e.g., "With Headrest", "Without Headrest"
  galleryImages: string[]; // Exactly 7 images for the split layout
  threeDModelUrl?: string; // Optional path to a .gltf or .glb file
}

export interface ProductInfo {
  overview: string;
  features: string[];
  dimensions: string;
  materials: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  flagshipImage: string;
  sceneImages: string[]; // Lifestyle/Contextual shots
  technicalDrawings?: string[]; // CAD-style line drawings
  documents?: string[]; // PDF spec sheets, brochures
  variants: ProductVariant[];
  detailedInfo: ProductInfo;
  metadata?: {
    source?: string;
    category?: string;
    bifmaCertified?: boolean;
    warrantyYears?: number;
    sustainabilityScore?: number;
    tags?: string[];
  };
}

export interface Series {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  series: Series[];
}

export const oandoCatalog: Category[] = [

  {
    id: "oando-workstations",
    name: "Workstations",
    description: "Modular workstation solutions for modern offices",
    series: [
      {
        id: "oando-workstations-series",
        name: "Workstations Series",
        description: "Premium workstations solutions",
        products: [
          {
            id: "curvivo",
            name: "Curvivo",
            description: "Curvivo office chairs for modern interiors and comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/curvivo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/curvivo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Curvivo office chairs for modern interiors and comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "adaptable",
            name: "Adaptable",
            description: "Adaptable modular office furniture designed for flexible workstations, modern offices, and collaborative spaces. Ideal for office furniture, modular office furniture, and workspace solutions.",
            flagshipImage: "/images/oando/adaptable/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/adaptable/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Adaptable modular office furniture designed for flexible workstations, modern offices, and collaborative spaces. Ideal for office furniture, modular office furniture, and workspace solutions.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "deskpro",
            name: "DeskPro",
            description: "DeskPro office workstations for efficient layouts. Discover modular desks for modern workspaces.",
            flagshipImage: "/images/oando/deskpro/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/deskpro/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "DeskPro office workstations for efficient layouts. Discover modular desks for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "sleek",
            name: "Sleek",
            description: "Sleek modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
            flagshipImage: "/images/oando/sleek/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/sleek/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Sleek modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "trio-2",
            name: "Trio",
            description: "Trio office chairs for comfort and daily productivity. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/trio-2/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/trio-2/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Trio office chairs for comfort and daily productivity. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "panel-pro",
            name: "Panel ProPanel ProPANELPRO shapes your workspace, making focus and teamwork feel effortlessUnique Design & Engineered JoineriesMulti-Purpose ScreenEffortless AccessCustomizable Components",
            description: "Panel Pro office partition systems for modular layouts and space division. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/panel-pro/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/panel-pro/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Panel Pro office partition systems for modular layouts and space division. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "x-bench",
            name: "X-BenchX-BenchX-Bench adapts with every setup, making flexibility and collaboration feel naturalRefined Edge DesignMulti-Purpose ScreenSturdy Leg & Beam ConstructionCustomizable Components",
            description: "X-Bench workstation system for collaborative offices. Discover modular benching for modern workspaces.",
            flagshipImage: "/images/oando/x-bench/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/x-bench/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "X-Bench workstation system for collaborative offices. Discover modular benching for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "fenix",
            name: "Fenix",
            description: "Fenix office chairs for durability and ergonomic comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/fenix/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/fenix/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Fenix office chairs for durability and ergonomic comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "workstations",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-tables",
    name: "Tables",
    description: "Conference tables, meeting tables, and office desks",
    series: [
      {
        id: "oando-tables-series",
        name: "Tables Series",
        description: "Premium tables solutions",
        products: [
          {
            id: "exquisite",
            name: "Exquisite",
            description: "Premium executive office furniture designed for modern cabins. Exquisite desk by a trusted office furniture manufacturer in India for luxury workspaces.",
            flagshipImage: "/images/oando/exquisite/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/exquisite/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Premium executive office furniture designed for modern cabins. Exquisite desk by a trusted office furniture manufacturer in India for luxury workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "exquisite-mt",
            name: "Exquisite",
            description: "Exquisite MT meeting table for boardrooms and offices. Modern office meeting table built for teamwork and productivity.",
            flagshipImage: "/images/oando/exquisite-mt/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/exquisite-mt/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Exquisite MT meeting table for boardrooms and offices. Modern office meeting table built for teamwork and productivity.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nextable",
            name: "NexTableNexTableBuilt for Mobility & DurabilityEffortless Folding & NestingSmooth Mobility with Lockable Casters",
            description: "Nextable height-adjustable tables for ergonomic comfort. Improve posture and productivity with One and Only sit-stand desks.",
            flagshipImage: "/images/oando/nextable/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nextable/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nextable height-adjustable tables for ergonomic comfort. Improve posture and productivity with One and Only sit-stand desks.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "verka",
            name: "Verka",
            description: "Verka lounge chair for receptions and breakout areas. Stylish office lounge chair and soft seating solution for modern offices.",
            flagshipImage: "/images/oando/verka/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/verka/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Verka lounge chair for receptions and breakout areas. Stylish office lounge chair and soft seating solution for modern offices.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cafe-sleek",
            name: "Sleek CafeSleek CafeLight Look, Lasting FunctionSlim Contemporary Design",
            description: "Cafe Sleek cafeteria chair for cafes and office pantries. Durable cafe chair designed for comfort and daily use.",
            flagshipImage: "/images/oando/cafe-sleek/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cafe-sleek/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cafe Sleek cafeteria chair for cafes and office pantries. Durable cafe chair designed for comfort and daily use.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "impulse",
            name: "Impulse",
            description: "Impulse workstation system for modular office layouts. Discover efficient space planning and premium design for modern workspaces.",
            flagshipImage: "/images/oando/impulse/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/impulse/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Impulse workstation system for modular office layouts. Discover efficient space planning and premium design for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "crest",
            name: "Crest",
            description: "Crest executive office table crafted for leadership spaces. Modular office furniture with premium finishes for modern corporate interiors.",
            flagshipImage: "/images/oando/crest/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/crest/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Crest executive office table crafted for leadership spaces. Modular office furniture with premium finishes for modern corporate interiors.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "opus-2",
            name: "Opus",
            description: "Opus 2 executive office desk crafted for premium interiors. Luxury office furniture designed for modern executive workspaces.",
            flagshipImage: "/images/oando/opus-2/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/opus-2/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Opus 2 executive office desk crafted for premium interiors. Luxury office furniture designed for modern executive workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "convesso",
            name: "Convesso",
            description: "Convesso conference table for meeting rooms. Stylish office meeting table designed for collaboration and modern workspace design.",
            flagshipImage: "/images/oando/convesso/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/convesso/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Convesso conference table for meeting rooms. Stylish office meeting table designed for collaboration and modern workspace design.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "high-cafe",
            name: "High-CafeHigh-CafeDesigned for Style, Built for Every DayReinforced Frame for Lasting Stability",
            description: "High Cafe bar chair for breakout and dining spaces. Modern seating solution ideal for cafeterias and collaborative office zones.",
            flagshipImage: "/images/oando/high-cafe/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/high-cafe/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "High Cafe bar chair for breakout and dining spaces. Modern seating solution ideal for cafeterias and collaborative office zones.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "uniflip",
            name: "Uniflip",
            description: "Uniflip training and flip tables for flexible learning spaces and meetings. Explore versatile table solutions for modern workspaces.",
            flagshipImage: "/images/oando/uniflip/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/uniflip/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Uniflip training and flip tables for flexible learning spaces and meetings. Explore versatile table solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "opus",
            name: "Opus",
            description: "Opus executive office desk combining luxury office furniture design with durability. Ideal for modern office furniture and cabin setups.",
            flagshipImage: "/images/oando/opus/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/opus/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Opus executive office desk combining luxury office furniture design with durability. Ideal for modern office furniture and cabin setups.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "sleek-meet",
            name: "Sleek-MeetSleek-MeetDesigned for Agile CollaborationIntegrated Wire Management optionsSleek Designer Leg",
            description: "Sleek Meet conference tables for modern meeting rooms. Discover tables for modern workspaces.",
            flagshipImage: "/images/oando/sleek-meet/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/sleek-meet/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Sleek Meet conference tables for modern meeting rooms. Discover tables for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "convene",
            name: "Convene",
            description: "Convene meeting table designed for conference rooms. Functional office meeting table supporting teamwork and productivity.",
            flagshipImage: "/images/oando/convene/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/convene/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Convene meeting table designed for conference rooms. Functional office meeting table supporting teamwork and productivity.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "wiesner",
            name: "Wiesner",
            description: "Wiesner office seating designed for comfort and durability. Explore modern seating solutions for modern workspaces.",
            flagshipImage: "/images/oando/wiesner/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/wiesner/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Wiesner office seating designed for comfort and durability. Explore modern seating solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "adaptable-2",
            name: "Adaptable",
            description: "Adaptable modular office furniture designed for flexible and scalable workspaces. Discover smart layouts that support productivity and modern offices.",
            flagshipImage: "/images/oando/adaptable-2/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/adaptable-2/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Adaptable modular office furniture designed for flexible and scalable workspaces. Discover smart layouts that support productivity and modern offices.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "trio",
            name: "Trio",
            description: "Trio ergonomic office chair for long working hours. Comfortable office seating solution from a leading office chairs manufacturer in India.",
            flagshipImage: "/images/oando/trio/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/trio/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Trio ergonomic office chair for long working hours. Comfortable office seating solution from a leading office chairs manufacturer in India.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "desk-meet",
            name: "Desk-MeetDesk-MeetDeskMeet: Adaptability Made EffortlessIntegrated Wire Management OptionUnique Leg Design",
            description: "Desk Meet conference table for productive discussions. Durable office table furniture ideal for modern meeting rooms and offices.",
            flagshipImage: "/images/oando/desk-meet/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/desk-meet/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Desk Meet conference table for productive discussions. Durable office table furniture ideal for modern meeting rooms and offices.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "crox",
            name: "Crox",
            description: "Crox visitor and cafe chair for offices and lounges. Comfortable seating solution for receptions and waiting areas.",
            flagshipImage: "/images/oando/crox/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/crox/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Crox visitor and cafe chair for offices and lounges. Comfortable seating solution for receptions and waiting areas.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "modulus",
            name: "Modulus",
            description: "Modulus modular office furniture for flexible layouts and efficient space planning. Explore modern solutions for modern workspaces.",
            flagshipImage: "/images/oando/modulus/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/modulus/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Modulus modular office furniture for flexible layouts and efficient space planning. Explore modern solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "presidency",
            name: "Presidency",
            description: "Presidency executive table designed for luxury boss cabins. Premium office furniture for modern corporate offices across India.",
            flagshipImage: "/images/oando/presidency/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/presidency/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Presidency executive table designed for luxury boss cabins. Premium office furniture for modern corporate offices across India.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "curvivo-meet",
            name: "Curvivo-MeetCurvivo-MeetCurvivo: Strength Meets Sculpted DesignPremium Leg Design with StabilityIntegrated Wire Management OptionUnique Curved Edge Design",
            description: "Curvivo Meet table for offices and training rooms. Smart modular office furniture built for collaboration and daily meetings.",
            flagshipImage: "/images/oando/curvivo-meet/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/curvivo-meet/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Curvivo Meet table for offices and training rooms. Smart modular office furniture built for collaboration and daily meetings.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "stake",
            name: "Stake",
            description: "Stake office seating chair offering ergonomic comfort and durability. Ideal office chair for daily workstations and meetings.",
            flagshipImage: "/images/oando/stake/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/stake/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Stake office seating chair offering ergonomic comfort and durability. Ideal office chair for daily workstations and meetings.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "inox",
            name: "Inox",
            description: "Inox metal office furniture with durable construction. Strong tables and storage solutions built for modern office furniture needs.",
            flagshipImage: "/images/oando/inox/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/inox/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Inox metal office furniture with durable construction. Strong tables and storage solutions built for modern office furniture needs.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "consulate",
            name: "Consulate",
            description: "Consulate executive office table with elegant styling and durability. Perfect modular office furniture for cabins and leadership spaces.",
            flagshipImage: "/images/oando/consulate/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/consulate/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Consulate executive office table with elegant styling and durability. Perfect modular office furniture for cabins and leadership spaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "crew",
            name: "Crew",
            description: "Crew collaborative office seating for teamwork spaces. Comfortable soft seating office solution for modern coworking environments.",
            flagshipImage: "/images/oando/crew/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/crew/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Crew collaborative office seating for teamwork spaces. Comfortable soft seating office solution for modern coworking environments.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "x-meet",
            name: "X-MeetX-MeetDesigned for Flexible WorkspacesClean & Intelligent Wire ManagementDistinctive & Stable Leg Design",
            description: "X Meet conference table for boardrooms and offices. Spacious and durable office meeting table for modern corporate setups.",
            flagshipImage: "/images/oando/x-meet/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/x-meet/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "X Meet conference table for boardrooms and offices. Spacious and durable office meeting table for modern corporate setups.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "sleek-tab",
            name: "Sleek",
            description: "Sleek Tab training and meeting table for offices. Flexible training table furniture for collaborative workstations and conference rooms.",
            flagshipImage: "/images/oando/sleek-tab/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/sleek-tab/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Sleek Tab training and meeting table for offices. Flexible training table furniture for collaborative workstations and conference rooms.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "letz-think",
            name: "Letz ThinkLetz ThinkDesigned for Smarter WorkspacesO-Shaped Design for CollaborationSturdy Gable-End Supports",
            description: "Letz Think training table for classrooms and offices. Flexible training table furniture for workshops, seminars, and learning spaces.",
            flagshipImage: "/images/oando/letz-think/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/letz-think/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Letz Think training table for classrooms and offices. Flexible training table furniture for workshops, seminars, and learning spaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "apex",
            name: "Apex",
            description: "Apex executive office desk offering modern design and durability. Ideal office table furniture for professional and corporate cabins.",
            flagshipImage: "/images/oando/apex/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/apex/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Apex executive office desk offering modern design and durability. Ideal office table furniture for professional and corporate cabins.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "tables",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-storage",
    name: "Storage",
    description: "Filing cabinets, lockers, and storage solutions",
    series: [
      {
        id: "oando-storage-series",
        name: "Storage Series",
        description: "Premium storage solutions",
        products: [
          {
            id: "prelam-locker",
            name: "Wooden LockerWooden LockerWhere Security Meets Warm Design.Clear Locker System with Sleek Design",
            description: "The wooden locker blends style and functionality, offering secure storage for everyday use in offices, gyms, and schools. Its thoughtful design ensures organized spaces while adding warmth to shared e",
            flagshipImage: "/images/oando/prelam-locker/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/prelam-locker/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "The wooden locker blends style and functionality, offering secure storage for everyday use in offices, gyms, and schools. Its thoughtful design ensures organized spaces while adding warmth to shared e",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "pedestal",
            name: "Prelam PedestalPrelam PedestalSecure. Sleek. FunctionalMultiple Locking Systems for Added SecurityCompact Storage with Maximum Utility",
            description: "Office pedestal storage unit for organized workstations. Compact office storage solution with secure drawers for everyday use.",
            flagshipImage: "/images/oando/pedestal/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/pedestal/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office pedestal storage unit for organized workstations. Compact office storage solution with secure drawers for everyday use.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "metal-pedestal",
            name: "Metal PedestalMetal PedestalSecure, Compact, Reliable.Multiple Locking Options for Flexible SecuritySpacious Storage for Effortless Organization",
            description: "Office pedestal storage units for desks and workstations. Discover compact and secure storage solutions for modern workspaces.",
            flagshipImage: "/images/oando/metal-pedestal/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/metal-pedestal/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office pedestal storage units for desks and workstations. Discover compact and secure storage solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "compactor",
            name: "Compactor",
            description: "High-density compactor storage systems for files and documents. Explore space-saving storage solutions for modern workspaces.",
            flagshipImage: "/images/oando/compactor/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/compactor/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "High-density compactor storage systems for files and documents. Explore space-saving storage solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "metal-locker",
            name: "Metal LockerMetal LockerBuilt Strong. Designed to Organize.Clear Identification, Zero ConfusionClear Locker System for Effortless Use",
            description: "Metal lockers for offices and institutions. Discover secure, durable, and space-efficient locker storage solutions for modern workspaces.",
            flagshipImage: "/images/oando/metal-locker/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/metal-locker/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Metal lockers for offices and institutions. Discover secure, durable, and space-efficient locker storage solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "prelam-storage",
            name: "Prelam StoragePrelam StorageOrganize Smart. Work Better.Flexible Storage for Every Space",
            description: "Office side units and storage cabinets for organized workspaces. Discover modern storage for modern workspaces.",
            flagshipImage: "/images/oando/prelam-storage/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/prelam-storage/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office side units and storage cabinets for organized workspaces. Discover modern storage for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "metal-storages",
            name: "Metal StoragesMetal StoragesSmart Storage for Modern WorkflowsScalable Storage Solutions",
            description: "Office side units for workspace organization. Discover modern side storage cabinets for modern workspaces.",
            flagshipImage: "/images/oando/metal-storages/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/metal-storages/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office side units for workspace organization. Discover modern side storage cabinets for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "heavy-duty-racks",
            name: "Heavy Duty RacksHeavy Duty RacksVertical Strength, Flexible Storage.Customizable for Every NeedSpacious Shelving for Maximum Storage",
            description: "Office storage racks for organized workspaces. Discover durable shelving and rack storage solutions for modern workspaces.",
            flagshipImage: "/images/oando/heavy-duty-racks/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/heavy-duty-racks/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office storage racks for organized workspaces. Discover durable shelving and rack storage solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "storage",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-soft-seating",
    name: "Soft Seating",
    description: "Lounge chairs, sofas, and casual seating",
    series: [
      {
        id: "oando-soft-seating-series",
        name: "Soft Seating Series",
        description: "Premium soft seating solutions",
        products: [
          {
            id: "accent",
            name: "Accent",
            description: "Accent office side and storage units for organized workspaces. Discover modern storage for modern workspaces.",
            flagshipImage: "/images/oando/accent/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/accent/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Accent office side and storage units for organized workspaces. Discover modern storage for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "solace",
            name: "Solace",
            description: "Solace ergonomic office chairs designed for posture support and daily comfort. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/solace/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/solace/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Solace ergonomic office chairs designed for posture support and daily comfort. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "como",
            name: "Como",
            description: "Como executive office desks for premium leadership spaces. Explore modern desks for modern workspaces.",
            flagshipImage: "/images/oando/como/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/como/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Como executive office desks for premium leadership spaces. Explore modern desks for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "padora",
            name: "Padora",
            description: "Padora office chairs for comfort and durability. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/padora/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/padora/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Padora office chairs for comfort and durability. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "trion",
            name: "Trion",
            description: "Trion modular office furniture for flexible layouts and modern workspace needs. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/trion/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/trion/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Trion modular office furniture for flexible layouts and modern workspace needs. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nordic-2",
            name: "Nordic",
            description: "Nordic office furniture inspired by clean lines and modern design. Discover workstations for modern workspaces.",
            flagshipImage: "/images/oando/nordic-2/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nordic-2/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nordic office furniture inspired by clean lines and modern design. Discover workstations for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "armora",
            name: "Armora",
            description: "Armora office storage cabinets for durability and workspace organization. Discover storage for modern workspaces.",
            flagshipImage: "/images/oando/armora/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/armora/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Armora office storage cabinets for durability and workspace organization. Discover storage for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nuvora",
            name: "Nuvora",
            description: "Nuvora marker board for offices. Ideal for meetings and brainstorming with a sleek and durable design for modern workspaces.",
            flagshipImage: "/images/oando/nuvora/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nuvora/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nuvora marker board for offices. Ideal for meetings and brainstorming with a sleek and durable design for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nook",
            name: "Nook",
            description: "Nook lounge seating for waiting areas and informal spaces. Discover soft seating for modern workspaces.",
            flagshipImage: "/images/oando/nook/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nook/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nook lounge seating for waiting areas and informal spaces. Discover soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "opera",
            name: "Opera",
            description: "Opera executive office furniture for premium aesthetics and durability. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/opera/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/opera/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Opera executive office furniture for premium aesthetics and durability. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "crossa",
            name: "Crossa",
            description: "Crossa office chair collection offering ergonomic comfort and modern design. Discover quality seating for modern workspaces.",
            flagshipImage: "/images/oando/crossa/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/crossa/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Crossa office chair collection offering ergonomic comfort and modern design. Discover quality seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "alonzo",
            name: "Alonzo",
            description: "Alonzo designer office chairs for comfort and modern interiors. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/alonzo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/alonzo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Alonzo designer office chairs for comfort and modern interiors. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "spectrum",
            name: "Spectrum",
            description: "Spectrum office furniture for flexible workspaces. Discover modern desks and seating for modern workspaces.",
            flagshipImage: "/images/oando/spectrum/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/spectrum/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Spectrum office furniture for flexible workspaces. Discover modern desks and seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "virello",
            name: "Virello",
            description: "Virello office chairs for comfort and durability. Discover ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/virello/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/virello/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Virello office chairs for comfort and durability. Discover ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "arco",
            name: "Arco",
            description: "Arco modern office furniture for stylish and functional workspaces. Discover contemporary designs for modern workspaces.",
            flagshipImage: "/images/oando/arco/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/arco/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Arco modern office furniture for stylish and functional workspaces. Discover contemporary designs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "esmor",
            name: "Esmor",
            description: "Esmor modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
            flagshipImage: "/images/oando/esmor/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/esmor/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Esmor modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cirq",
            name: "Cirq",
            description: "Cirq collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
            flagshipImage: "/images/oando/cirq/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cirq/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cirq collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "orb",
            name: "Orb",
            description: "Orb collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
            flagshipImage: "/images/oando/orb/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/orb/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Orb collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "tectara",
            name: "Tectara",
            description: "Tectara office workstations for efficient layouts. Discover modular workspace solutions for modern workspaces.",
            flagshipImage: "/images/oando/tectara/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/tectara/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Tectara office workstations for efficient layouts. Discover modular workspace solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "velto",
            name: "Velto",
            description: "Velto ergonomic office chairs for posture support and productivity. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/velto/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/velto/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Velto ergonomic office chairs for posture support and productivity. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cocoon",
            name: "Cocoon",
            description: "Cocoon acoustic seating for privacy and focus. Discover modern pod seating for modern workspaces.",
            flagshipImage: "/images/oando/cocoon/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cocoon/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cocoon acoustic seating for privacy and focus. Discover modern pod seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "moon",
            name: "Moon",
            description: "Moon lounge seating for waiting areas and relaxed office spaces. Discover soft seating for modern workspaces.",
            flagshipImage: "/images/oando/moon/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/moon/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Moon lounge seating for waiting areas and relaxed office spaces. Discover soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cone",
            name: "Cone",
            description: "Cone office seating for modern interiors. Discover stylish and comfortable chairs for modern workspaces.",
            flagshipImage: "/images/oando/cone/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cone/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cone office seating for modern interiors. Discover stylish and comfortable chairs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "rattique",
            name: "Rattique",
            description: "Rattique designer office seating for comfort and contemporary appeal. Discover stylish seating for modern workspaces.",
            flagshipImage: "/images/oando/rattique/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/rattique/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Rattique designer office seating for comfort and contemporary appeal. Discover stylish seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cove",
            name: "Cove",
            description: "Cove lounge seating for waiting areas and offices. Discover modern soft seating for modern workspaces.",
            flagshipImage: "/images/oando/cove/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cove/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cove lounge seating for waiting areas and offices. Discover modern soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "luxar",
            name: "Luxar",
            description: "Luxar executive office chairs for premium comfort. Discover leadership seating for modern workspaces.",
            flagshipImage: "/images/oando/luxar/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/luxar/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Luxar executive office chairs for premium comfort. Discover leadership seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "ceda",
            name: "Ceda",
            description: "Ceda executive office desk for leadership spaces. Discover premium workspace aesthetics for modern workspaces.",
            flagshipImage: "/images/oando/ceda/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/ceda/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Ceda executive office desk for leadership spaces. Discover premium workspace aesthetics for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "hush",
            name: "Hush",
            description: "Hush acoustic office seating for privacy and focused workspaces. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/hush/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/hush/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Hush acoustic office seating for privacy and focused workspaces. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "eclips",
            name: "Eclips",
            description: "Eclips executive office desk for premium workspaces. Explore durable design and modern aesthetics for modern workspaces.",
            flagshipImage: "/images/oando/eclips/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/eclips/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Eclips executive office desk for premium workspaces. Explore durable design and modern aesthetics for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "twig",
            name: "Twig",
            description: "Twig office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/twig/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/twig/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Twig office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "margas",
            name: "Margas",
            description: "Margas modular office furniture for flexible layouts and workspace efficiency. Explore modern solutions for modern workspaces.",
            flagshipImage: "/images/oando/margas/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/margas/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Margas modular office furniture for flexible layouts and workspace efficiency. Explore modern solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "lura",
            name: "Lura",
            description: "Lura office seating solutions for comfort and modern workspace appeal. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/lura/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/lura/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Lura office seating solutions for comfort and modern workspace appeal. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "embrace",
            name: "Embrace",
            description: "Embrace collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/embrace/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/embrace/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Embrace collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "halo",
            name: "Halo",
            description: "Halo ergonomic office chairs for superior comfort and posture support. Explore productivity-focused seating for modern workspaces.",
            flagshipImage: "/images/oando/halo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/halo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Halo ergonomic office chairs for superior comfort and posture support. Explore productivity-focused seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "relax",
            name: "Relax",
            description: "Relax lounge seating for waiting areas and informal office spaces. Explore soft seating for modern workspaces.",
            flagshipImage: "/images/oando/relax/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/relax/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Relax lounge seating for waiting areas and informal office spaces. Explore soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "arcana",
            name: "Arcana",
            description: "Arcana premium office furniture for executive spaces. Explore modern design and long-lasting performance for modern workspaces.",
            flagshipImage: "/images/oando/arcana/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/arcana/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Arcana premium office furniture for executive spaces. Explore modern design and long-lasting performance for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "plumb",
            name: "Plumb",
            description: "Plumb office furniture collection for modern design and functional workspaces. Explore solutions for modern workspaces.",
            flagshipImage: "/images/oando/plumb/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/plumb/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Plumb office furniture collection for modern design and functional workspaces. Explore solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "casca",
            name: "Casca",
            description: "Casca designer office seating combining comfort and durability. Explore stylish chairs for modern workspaces.",
            flagshipImage: "/images/oando/casca/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/casca/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Casca designer office seating combining comfort and durability. Explore stylish chairs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "adam",
            name: "Adam",
            description: "Adam office seating for modern workspaces. Discover durable and comfortable chairs for modern workspaces.",
            flagshipImage: "/images/oando/adam/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/adam/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Adam office seating for modern workspaces. Discover durable and comfortable chairs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "cozy",
            name: "Cozy",
            description: "Cozy lounge seating for relaxed office spaces and waiting areas. Discover modern soft seating for modern workspaces.",
            flagshipImage: "/images/oando/cozy/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/cozy/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cozy lounge seating for relaxed office spaces and waiting areas. Discover modern soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "covea",
            name: "Covea",
            description: "Covea lounge and waiting seating for offices. Discover stylish and comfortable seating for modern workspaces.",
            flagshipImage: "/images/oando/covea/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/covea/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Covea lounge and waiting seating for offices. Discover stylish and comfortable seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "soft-seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-seating",
    name: "Seating",
    description: "Ergonomic office chairs and task seating",
    series: [
      {
        id: "oando-seating-series",
        name: "Seating Series",
        description: "Premium seating solutions",
        products: [
          {
            id: "myel",
            name: "Myel",
            description: "Myel office chairs for daily comfort and productivity. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/myel/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/myel/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Myel office chairs for daily comfort and productivity. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "flip",
            name: "Flip",
            description: "Flip training tables for flexible learning spaces. Discover mobile and foldable tables for modern workspaces.",
            flagshipImage: "/images/oando/flip/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/flip/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Flip training tables for flexible learning spaces. Discover mobile and foldable tables for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nordic",
            name: "Nordic",
            description: "Nordic office furniture inspired by clean lines and modern workspace aesthetics. Explore designs for modern workspaces.",
            flagshipImage: "/images/oando/nordic/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nordic/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nordic office furniture inspired by clean lines and modern workspace aesthetics. Explore designs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "grace",
            name: "Grace",
            description: "Grace lounge seating for waiting areas and relaxed office spaces. Explore soft seating for modern workspaces.",
            flagshipImage: "/images/oando/grace/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/grace/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Grace lounge seating for waiting areas and relaxed office spaces. Explore soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "sway",
            name: "Sway",
            description: "Sway office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/sway/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/sway/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Sway office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "snap",
            name: "Snap",
            description: "Snap office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/snap/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/snap/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Snap office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "arvo",
            name: "Arvo",
            description: "Arvo modern office chairs for comfort and sleek workspace design. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/arvo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/arvo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Arvo modern office chairs for comfort and sleek workspace design. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "pinnacle",
            name: "Pinnacle",
            description: "Pinnacle executive office furniture for premium leadership spaces. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/pinnacle/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/pinnacle/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Pinnacle executive office furniture for premium leadership spaces. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "phoenix",
            name: "Phoenix",
            description: "Phoenix office chairs for durability and ergonomic support. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/phoenix/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/phoenix/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Phoenix office chairs for durability and ergonomic support. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "ember",
            name: "Ember",
            description: "Ember executive office furniture for premium leadership spaces. Discover modern design for modern workspaces.",
            flagshipImage: "/images/oando/ember/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/ember/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Ember executive office furniture for premium leadership spaces. Discover modern design for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "moonlight",
            name: "Moonlight",
            description: "Moonlight premium office seating for comfort and modern interiors. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/moonlight/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/moonlight/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Moonlight premium office seating for comfort and modern interiors. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "fluid",
            name: "Fluid",
            description: "Fluid-2 ergonomic office chair for posture support and productivity. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/fluid/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/fluid/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Fluid-2 ergonomic office chair for posture support and productivity. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "caneva",
            name: "Caneva",
            description: "Caneva office chair series for ergonomic comfort and modern appeal. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/caneva/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/caneva/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Caneva office chair series for ergonomic comfort and modern appeal. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "rider",
            name: "Rider",
            description: "Rider ergonomic office chairs for comfort, posture support, and productivity. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/rider/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/rider/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Rider ergonomic office chairs for comfort, posture support, and productivity. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "fluid-x",
            name: "Fluid XFluid XFLUID X eases your posture, so your focus stays uninterruptedAdjustable ArmrestLumbar Support",
            description: "Fluid-X ergonomic office chair for posture support and comfort. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/fluid-x/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/fluid-x/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Fluid-X ergonomic office chair for posture support and comfort. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "crotch",
            name: "Crotch",
            description: "Crotch ergonomic office chairs for posture support and comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/crotch/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/crotch/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Crotch ergonomic office chairs for posture support and comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "spino",
            name: "Spino",
            description: "Spino office chairs for daily comfort and productivity. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/spino/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/spino/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Spino office chairs for daily comfort and productivity. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "smile",
            name: "Smile",
            description: "Smile office chair collection for comfort and modern appeal. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/smile/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/smile/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Smile office chair collection for comfort and modern appeal. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "revoq",
            name: "Revoq",
            description: "Revoq office chairs for comfort and productivity. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/revoq/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/revoq/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Revoq office chairs for comfort and productivity. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "rio",
            name: "Rio",
            description: "Rio office furniture collection for modern and functional workspaces. Explore solutions for modern workspaces.",
            flagshipImage: "/images/oando/rio/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/rio/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Rio office furniture collection for modern and functional workspaces. Explore solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "flex",
            name: "Flex",
            description: "Flex office furniture for adaptable workspaces. Discover modular desks and seating for modern workspaces.",
            flagshipImage: "/images/oando/flex/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/flex/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Flex office furniture for adaptable workspaces. Discover modular desks and seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "canaret",
            name: "Canaret",
            description: "Canaret office seating for comfort and contemporary interiors. Explore quality chairs for modern workspaces.",
            flagshipImage: "/images/oando/canaret/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/canaret/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Canaret office seating for comfort and contemporary interiors. Explore quality chairs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "logica",
            name: "Logica",
            description: "Logica modular workstations for modern offices. Discover flexible layouts for modern workspaces.",
            flagshipImage: "/images/oando/logica/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/logica/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Logica modular workstations for modern offices. Discover flexible layouts for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "brim",
            name: "Brim",
            description: "Brim lounge seating for waiting areas and informal spaces. Explore soft seating for modern workspaces.",
            flagshipImage: "/images/oando/brim/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/brim/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Brim lounge seating for waiting areas and informal spaces. Explore soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "sullion",
            name: "Sullion",
            description: "Sullion office seating for modern interiors. Discover comfortable chairs for modern workspaces.",
            flagshipImage: "/images/oando/sullion/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/sullion/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Sullion office seating for modern interiors. Discover comfortable chairs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "dive",
            name: "Dive",
            description: "Dive collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
            flagshipImage: "/images/oando/dive/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/dive/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Dive collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "nuvic",
            name: "Nuvic",
            description: "Nuvic office chairs designed for comfort and posture support. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/nuvic/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/nuvic/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Nuvic office chairs designed for comfort and posture support. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "wing",
            name: "Wing",
            description: "Wing ergonomic office chairs for posture support and daily comfort. Explore modern seating for modern workspaces.",
            flagshipImage: "/images/oando/wing/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/wing/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Wing ergonomic office chairs for posture support and daily comfort. Explore modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "rock",
            name: "Rock",
            description: "Rock office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/rock/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/rock/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Rock office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "copse",
            name: "Copse",
            description: "Copse office storage solutions for organized workspaces. Discover cabinets and storage for modern workspaces.",
            flagshipImage: "/images/oando/copse/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/copse/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Copse office storage solutions for organized workspaces. Discover cabinets and storage for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "breeze",
            name: "Breeze",
            description: "Breeze office chairs for modern workspaces. Discover breathable ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/breeze/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/breeze/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Breeze office chairs for modern workspaces. Discover breathable ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "leaf",
            name: "Leaf",
            description: "Leaf collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/leaf/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/leaf/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Leaf collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "x-mesh",
            name: "X-MeshX-MeshErgonomic Comfort for Productive Workdays",
            description: "X-Mesh ergonomic office chair for breathability and comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/x-mesh/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/x-mesh/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "X-Mesh ergonomic office chair for breathability and comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "lexus",
            name: "Lexus",
            description: "Lexus executive office chairs for premium comfort and durability. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/lexus/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/lexus/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Lexus executive office chairs for premium comfort and durability. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "orbit",
            name: "Orbit",
            description: "Orbit office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/orbit/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/orbit/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Orbit office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "flare",
            name: "Flare",
            description: "Flare designer office seating combining comfort and modern style. Explore seating for modern workspaces.",
            flagshipImage: "/images/oando/flare/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/flare/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Flare designer office seating combining comfort and modern style. Explore seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "toro",
            name: "Toro",
            description: "Toro office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/toro/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/toro/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Toro office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "zilo",
            name: "Zilo",
            description: "Zilo modern office furniture for flexible and stylish workspaces. Explore solutions for modern workspaces.",
            flagshipImage: "/images/oando/zilo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/zilo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Zilo modern office furniture for flexible and stylish workspaces. Explore solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "fynn",
            name: "Fynn",
            description: "Fynn lounge seating for waiting areas and relaxed office spaces. Explore soft seating for modern workspaces.",
            flagshipImage: "/images/oando/fynn/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/fynn/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Fynn lounge seating for waiting areas and relaxed office spaces. Explore soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "caneva-high",
            name: "Caneva-HighCaneva-HighBalanced Comfort with Modern Simplicity Natural Cane Backrest with airy, timeless charm Solid Wood Legs with Timeless Stability",
            description: "Caneva high-back office chairs for executive comfort and ergonomic support. Discover seating for modern workspaces.",
            flagshipImage: "/images/oando/caneva-high/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/caneva-high/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Caneva high-back office chairs for executive comfort and ergonomic support. Discover seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "lisbo",
            name: "Lisbo",
            description: "Lisbo lounge seating for relaxed office spaces and modern interiors. Explore soft seating for modern workspaces.",
            flagshipImage: "/images/oando/lisbo/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/lisbo/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Lisbo lounge seating for relaxed office spaces and modern interiors. Explore soft seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "fusion",
            name: "Fusion",
            description: "Fusion modular office furniture for flexible layouts and efficient workspace planning. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/fusion/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/fusion/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Fusion modular office furniture for flexible layouts and efficient workspace planning. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "seating",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-educational",
    name: "Educational",
    description: "Classroom furniture and educational institution solutions",
    series: [
      {
        id: "oando-educational-series",
        name: "Educational Series",
        description: "Premium educational solutions",
        products: [
          {
            id: "performer",
            name: "Performer",
            description: "Performer office chair designed for comfort, durability, and daily productivity. Discover modern ergonomic seating for modern workspaces.",
            flagshipImage: "/images/oando/performer/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/performer/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Performer office chair designed for comfort, durability, and daily productivity. Discover modern ergonomic seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "connecta",
            name: "Connecta",
            description: "Connecta collaborative office furniture for teamwork and shared spaces. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/connecta/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/connecta/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Connecta collaborative office furniture for teamwork and shared spaces. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "wooden-bed",
            name: "Wooden Bed",
            description: "Wooden beds for institutional and staff accommodation. Discover durable furniture for modern workspaces.",
            flagshipImage: "/images/oando/wooden-bed/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/wooden-bed/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Wooden beds for institutional and staff accommodation. Discover durable furniture for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "audi-chair",
            name: "Audi Chair",
            description: "Audi ergonomic office chair designed for posture support and comfort. Discover modern seating for modern workspaces.",
            flagshipImage: "/images/oando/audi-chair/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/audi-chair/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Audi ergonomic office chair designed for posture support and comfort. Discover modern seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "xplorer",
            name: "Xplorer",
            description: "Xplorer office workstations for modern offices. Discover modular layouts and efficient workspace solutions for modern workspaces.",
            flagshipImage: "/images/oando/xplorer/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/xplorer/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Xplorer office workstations for modern offices. Discover modular layouts and efficient workspace solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "forma",
            name: "Forma",
            description: "Forma modular office furniture for flexible layouts and workspace efficiency. Discover solutions for modern workspaces.",
            flagshipImage: "/images/oando/forma/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/forma/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Forma modular office furniture for flexible layouts and workspace efficiency. Discover solutions for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "metal-bed",
            name: "Metal Bed",
            description: "Metal beds for hostels and institutions. Discover durable accommodation furniture for modern workspaces.",
            flagshipImage: "/images/oando/metal-bed/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/metal-bed/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Metal beds for hostels and institutions. Discover durable accommodation furniture for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "podium",
            name: "Podium",
            description: "Office podium furniture for presentations and meetings. Discover durable and modern podium designs for modern workspaces.",
            flagshipImage: "/images/oando/podium/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/podium/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office podium furniture for presentations and meetings. Discover durable and modern podium designs for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "academia",
            name: "Academia",
            description: "Academia educational furniture for schools and colleges. Discover durable desks and seating for modern workspaces.",
            flagshipImage: "/images/oando/academia/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/academia/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Academia educational furniture for schools and colleges. Discover durable desks and seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "magazine-rack",
            name: "Magazine Rack",
            description: "Office magazine racks and display units for organized reception areas. Discover storage for modern workspaces.",
            flagshipImage: "/images/oando/magazine-rack/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/magazine-rack/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Office magazine racks and display units for organized reception areas. Discover storage for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "classcraft",
            name: "Classcraft",
            description: "Classcraft classroom furniture for schools and institutes. Discover desks and seating for modern workspaces.",
            flagshipImage: "/images/oando/classcraft/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/classcraft/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Classcraft classroom furniture for schools and institutes. Discover desks and seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          },
          {
            id: "learnix",
            name: "Learnix",
            description: "Learnix classroom furniture for modern learning spaces. Discover desks and seating for modern workspaces.",
            flagshipImage: "/images/oando/learnix/1.png",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/oando/learnix/1.png"
                ]
              }
            ],
            detailedInfo: {
              overview: "Learnix classroom furniture for modern learning spaces. Discover desks and seating for modern workspaces.",
              features: [
                "Manufacturing",
                "Sustainability"
              ],
              dimensions: "Customizable",
              materials: [
                "Premium materials"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "educational",
              bifmaCertified: true,
              warrantyYears: 5
            }
          }
        ]
      }
    ]
  },
  {
    id: "oando-collaborative",
    name: "Collaborative Spaces",
    description: "Soft seating for dynamic team work and informal discussions",
    series: [
      {
        id: "oando-collaborative-series",
        name: "Collaborative Series",
        description: "Soft seating solutions for modern collaborative workspaces",
        products: [
          {
            id: "solace-lounge",
            name: "Solace Lounge",
            description: "Comfortable lounge seating for collaborative spaces",
            flagshipImage: "/images/products/softseating-solace-1.webp",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/products/softseating-solace-1.webp",
                  "/images/products/softseating-solace-2.webp"
                ]
              }
            ],
            detailedInfo: {
              overview: "Solace Lounge provides comfortable seating for collaborative workspaces, perfect for informal discussions and team meetings.",
              features: [
                "Ergonomic Design",
                "Modular Configuration",
                "Premium Upholstery",
                "Easy Maintenance"
              ],
              dimensions: "Multiple configurations available",
              materials: [
                "High-density foam",
                "Premium fabric",
                "Sturdy frame construction"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "collaborative",
              bifmaCertified: true,
              warrantyYears: 5,
              tags: ["collaborative", "soft-seating", "lounge"]
            }
          },
          {
            id: "cocoon-seating",
            name: "Cocoon Seating",
            description: "Private collaborative seating pods for focused discussions",
            flagshipImage: "/images/products/softseating-solace-1.webp",
            sceneImages: [],
            variants: [
              {
                id: "standard",
                variantName: "Standard Model",
                galleryImages: [
                  "/images/products/softseating-solace-1.webp"
                ]
              }
            ],
            detailedInfo: {
              overview: "Cocoon seating provides privacy and comfort for focused collaborative work in open office environments.",
              features: [
                "Sound Absorbing",
                "Privacy Panels",
                "Integrated Power",
                "Modular Design"
              ],
              dimensions: "Standard pod configuration",
              materials: [
                "Acoustic panels",
                "Premium upholstery",
                "Integrated technology"
              ]
            },
            metadata: {
              source: "oando.co.in",
              category: "collaborative",
              bifmaCertified: true,
              warrantyYears: 5,
              tags: ["collaborative", "privacy", "pods"]
            }
          }
        ]
      }
    ]
  }

];




