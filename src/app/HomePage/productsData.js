// Shared product data for Categories and Product Detail pages
const productsData = [
  // Oil-seeds
  {
    id: 1,
    title: "Bold Peanuts",
    description:
      "Premium quality bold peanuts with rich flavor and crunchy texture. Perfect for snacking and cooking.",
    category: "Oilseeds",
    image: "/product/Bold-Peanuts.png",
    images: ["/product/Bold-Peanuts.png"],
    moreImage: [
      "/product/Bold-Peanuts.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 18,
    reviews: 35,
    highlights: [
      "Crunchy texture with rich flavor",
      "High-quality bold peanuts",
      "Great for snacks and recipes",
      "High oil content",
      "Naturally cholesterol free",
    ],
    features: [
      "Uniform size and color",
      "Handpicked for quality",
      "Perfect for roasting and frying",
      "Packed with antioxidants",
      "Non-GMO product",
    ],
    applications: "Ideal for snacking, baking, and confectionery.",
    aboutProduct: "Bold Peanuts offer a rich flavor and crunchy texture...",
    overview: "Bold Peanuts stand out for their rich flavor...",
    premiumQuality: "Our Bold Peanuts are packed with natural antioxidants...",
    specifications: `
• Counts per Ounce: 35/40, 38/42, 40/45, 40/50, 50/60, 60/70, 80/90, 90/100
• Moisture: 7% – 8% Max
• Admixture: 1% Max
• Foreign Material: 0.25% Max
• Oil Content: 48% – 52% Max
• Aflatoxin: < 20 ppb
`,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
   - Jute: 19 MT (50kg)
   - Vacuum: 19 MT (25kg)
`,
    nutritionalInfo: `
Rich in energy-boosting fats, protein, and essential minerals like potassium and iron.
`,
  },
  {
    id: 2,
    title: "TJ Peanuts",
    description:
      "Special TJ variety peanuts known for their exceptional taste and nutritional value. Ideal for healthy snacking.",
    category: "Oilseeds",
    image: "/product/TJ-Peanuts.png",
    images: ["/product/TJ-Peanuts.png"],
    moreImage: [
      "/product/TJ-Peanuts.png",
      "/product/related.3.1.jpg",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
    ],
    rating: 32,
    reviews: 51,
    highlights: [
      "Exceptional taste and nutrition",
      "Popular for healthy snacking",
      "Carefully selected TJ variety",
      "Low in saturated fat",
      "Rich in dietary fiber",
    ],
    features: [
      "Ideal for making chikki (peanut brittle)",
      "Consistent crunch in every bite",
      "No added sugar or salt",
      "Suitable for vegan diets",
      "Packed in food-grade material",
    ],
    applications: "Perfect for snacks and health foods.",
    aboutProduct:
      "TJ Peanuts are a special variety celebrated for their exceptional taste...",
    overview:
      "TJ Peanuts are a special variety celebrated for their exceptional taste...",
    premiumQuality:
      "Every TJ Peanut is carefully selected to ensure a consistent crunch...",
    specifications: `
• Counts per Ounce: 50/60, 60/70, 70/80, 80/90, 120/140
• Moisture: 7% – 8% Max
• Admixture: 1% Max
• Foreign Material: 0.25% Max
• Oil Content: 42% – 48% Max
• Aflatoxin: < 20 ppb
`,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
   - Jute: 19 MT (50kg)
   - Vacuum: 19 MT (25kg)
`,
    nutritionalInfo: `
High in oil, protein, potassium, manganese, iron, copper, and zinc — ideal for energy and health.
`,
  },
  {
    id: 3,
    title: "Java Peanuts",
    description:
      "Imported Java variety peanuts with distinctive flavor profile and smooth texture. Perfect for gourmet recipes.",
    category: "Oilseeds",
    image: "/product/Java-Peanuts.png",
    images: ["/product/Java-Peanuts.png"],
    moreImage: [
      "/product/Java-Peanuts.png",
      "/product/related.2.1.jpg",
      "/product/related.1.1.JPG",
      "/product/related.2.3.jpg",
    ],
    rating: 27,
    reviews: 28,
    highlights: [
      "Distinctive flavor profile",
      "Smooth texture",
      "Ideal for gourmet recipes",
      "Uniform size and shape",
      "High in vitamin E",
    ],
    features: [
      "Preferred by chefs for desserts",
      "Easy to roast and grind",
      "No artificial coloring",
      "Vacuum packed for freshness",
      "Suitable for gluten-free diets",
    ],
    applications: "Used in gourmet and specialty foods.",
    aboutProduct:
      "Java Peanuts feature a distinctive flavor and smooth texture...",
    overview:
      "Imported Java Peanuts are prized for their distinctive flavor...",
    premiumQuality:
      "Our Java Peanuts are vacuum packed to ensure maximum freshness...",
    specifications: `
• Counts per Ounce: 50/60, 60/70, 80/90, 120/140
• Moisture: 7% – 8% Max
• Admixture: 1% Max
• Foreign Material: 0.25% Max
• Oil Content: 42% – 48% Max
• Aflatoxin: < 20 ppb
`,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
   - Jute: 19 MT (50kg)
   - Vacuum: 19 MT (25kg)
`,
    nutritionalInfo: `
Packed with potassium, manganese, copper, and zinc — helps boost energy and support immune function.
`,
  },
  {
    id: 4,
    title: "Roasted Blanch Peanuts",
    description:
      "Carefully roasted and blanched peanuts with a delicate flavor and smooth texture. Great for baking and snacking.",
    category: "Oilseeds",
    image: "/product/Roasted-Blanch-Peanuts.png",
    images: ["/product/Roasted-Blanch-Peanuts.png"],
    moreImage: [
      "/product/Roasted-Blanch-Peanuts.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 21,
    reviews: 19,
    highlights: [
      "Delicate flavor",
      "Smooth texture",
      "Great for baking and snacking",
      "Skinless and easy to digest",
      "Low sodium content",
    ],
    features: [
      "Ready to use in recipes",
      "No added oils or fats",
      "Perfect for trail mixes",
      "Roasted to perfection",
      "Allergen tested",
    ],
    applications: "Ideal for baking and as a snack.",
    aboutProduct:
      "Roasted Blanch Peanuts are delicately roasted and blanched...",
    overview: "Roasted Blanch Peanuts are expertly roasted and blanched...",
    premiumQuality:
      "We use no added oils or fats in our Roasted Blanch Peanuts...",
    specifications: `
• Counts per Ounce: 41/51, 50/60, 60/70, 70/80
• Moisture: 5% Max
• Admixture: 1% Max
• Foreign Material: 0.5% Max
• Oil Content: 48% – 50%
• Aflatoxin: < 20 ppb
`,
    packagingShipping: `
• Poly Bags or Vacuum Packs: 25kg or 50kg
• 20’ FCL Capacity: 19 MT
`,
    nutritionalInfo: `
High in protein, roasted flavor, low sodium, and great for digestion.
`,
  },
  {
    id: 5,
    title: "Roasted Fada Peanuts",
    description:
      "Split and roasted peanuts with enhanced flavor and aroma. Perfect for garnishing and cooking applications.",
    category: "Oilseeds",
    image: "/product/Roasted-Split-Peanuts.png",
    images: ["/product/Roasted-Split-Peanuts.png"],
    moreImage: [
      "/product/Roasted-Split-Peanuts.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 29,
    reviews: 24,
    highlights: [
      "Enhanced flavor and aroma",
      "Perfect for garnishing",
      "Great for cooking",
      "Crispy and crunchy",
      "Rich in plant-based protein",
    ],
    features: [
      "Ideal for Indian chaats",
      "Quick energy source",
      "No trans fats",
      "Sealed for freshness",
      "Easy to sprinkle on dishes",
    ],
    applications: "Used for garnishing and cooking.",
    aboutProduct:
      "Roasted Split Peanuts are split and roasted for enhanced flavor...",
    overview:
      "Our Roasted Split Peanuts are split and roasted to enhance their natural flavor...",
    premiumQuality: "Sealed for freshness and a long shelf life...",
    specifications: `
• Counts per Ounce: 50/60, 60/70, 80/90
• Size: Split Peanuts
• Moisture: 7% Max
• Admixture: 1% Max
• Foreign Material: 0.5% Max
• Oil Content: 42% – 48%
• Aflatoxin: < 20 ppb
`,
    packagingShipping: `
• Jute, PP Woven or Vacuum Bags: 25kg / 50kg
• 20’ FCL Capacity: 19 MT
`,
    nutritionalInfo: `
Rich in protein and fiber, perfect for snacks and energy-boosting applications.
`,
  },
  {
    id: 6,
    title: "Soyabeans",
    description:
      "Soybeans are versatile legumes high in protein and oil content, widely used in food, feed, and oil production.",
    category: "Oilseeds",
    image: "/product/soyabean.png",
    images: ["/product/soyabean.png"],
    moreImage: [
      "/product/soyabean.png",
      "/product/related.11.1.jpg",
      "/product/related.11.2.jpg",
      "/product/related.11.3.jpg",
    ],
    rating: 18,
    reviews: 27,
    highlights: [
      "High protein content (35–40%)",
      "Used in oil, tofu, soy milk, and feed",
      "Non-GMO and premium grade",
      "Supports heart health",
      "Packed with fiber and isoflavones",
    ],
    features: [
      "Plant-based protein source",
      "Processed using advanced sorting",
      "Consistent grain size and quality",
      "Available in bulk and PP bags",
      "Ideal for vegan and vegetarian diets",
    ],
    applications: "Used in soy oil, tofu, flour, soy milk, and animal feed.",
    aboutProduct:
      "Soybeans are a staple in both the human and animal food industries. At Agrolla, we supply premium soybeans processed with utmost care and precision.",
    overview:
      "Agrolla’s soybeans are protein-rich legumes, known for their wide applications in plant-based diets, animal nutrition, and oil extraction industries.",
    premiumQuality:
      "Our soybeans are non-GMO, carefully sourced, and processed under stringent quality checks for global food and feed applications.",
    specifications: `
• Product Name: Soybeans
• HSN Code: 12019000
• Protein Content: 35% – 40%
• Moisture: 12% Max
• Oil Content: 18% – 20%
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (bulk options available)
• 20’ FCL Capacity: Approx. 20 MT
`,
    nutritionalInfo: `
Rich in plant protein, isoflavones, fiber, and essential oils. Contributes to heart health and muscle growth.
`,
  },
  {
    id: 7,
    title: "Sesame Seeds",
    description:
      "Tiny, oil-rich seeds used globally in baking, cooking, and oil production. Packed with healthy fats and minerals.",
    category: "Oilseeds",
    image: "/product/Sesame.png",
    images: ["/product/Sesame.png"],
    moreImage: [
      "/product/Sesame.png",
      "/product/related.14.1.jpg",
      "/product/related.14.2.jpeg",
      "/product/related.14.3.jpg",
    ],
    rating: 27,
    reviews: 25,
    highlights: [
      "Oil-rich and nutrient-dense",
      "Available in White, Black & Hulled varieties",
      "Used in sweets, tahini, and bakery",
      "High in calcium and antioxidants",
      "Improves digestion and heart health",
    ],
    features: [
      "Purity: 99% minimum",
      "Cold-pressed oil potential",
      "Low moisture (max 5%)",
      "Hygienically processed",
      "Available in custom packaging",
    ],
    applications:
      "Used in tahini, bakery products, Indian sweets, and oil extraction.",
    aboutProduct:
      "Sesame seeds are a global favorite for their nutty flavor and nutritional benefits. Agrolla offers varieties tailored for culinary and industrial use.",
    overview:
      "At Agrolla, our sesame seeds are processed with care to retain natural oil content, flavor, and purity. Ideal for snacks, health foods, and oils.",
    premiumQuality:
      "Advanced processing ensures flavor retention, minimal impurities, and top-grade sesame output ready for export markets.",
    specifications: `
• Product Name: Sesame Seeds
• HSN Code: 12074010
• Varieties: Hulled, Natural White, Black
• Purity: 99% Min
• Moisture: 5% Max
• Oil Content: 48% Min
`,
    packagingShipping: `
• Packaging: 25kg / 50kg PP Bags
• 20’ FCL Capacity: Approx. 19 MT
`,
    nutritionalInfo: `
Excellent source of calcium, healthy fats, and antioxidants. Supports bone health and digestive wellness.
`,
  },
  // --- Pulses ---
  {
    id: 8,
    title: "Green Moong Beans",
    description:
      "Protein-rich green moong beans perfect for sprouting and light meals.",
    category: "Pulses",
    image: "/product/green-mung.png",
    images: ["/product/green-mung.png"],
    moreImage: [
      "/product/green-mung.png",
      "/product/related.8.1.1.webp",
      "/product/related.8.1.2.webp",
      "/product/related.8.1.3.webp",
    ],
    rating: 12,
    reviews: 14,
    highlights: [
      "High protein and fiber",
      "Low glycemic index",
      "Popular in Indian cuisine",
      "Naturally gluten-free",
      "Quick to sprout",
    ],
    features: [
      "Can be sprouted or cooked",
      "Ideal for soups, dals, and salads",
      "Rich in iron and magnesium",
      "Mild and earthy flavor",
      "Easily digestible",
    ],
    applications:
      "Used in dals, soups, curries, and salads. Often sprouted for added nutrition.",
    aboutProduct:
      "Green Moong Beans are small, green legumes that are a powerhouse of protein and fiber. Ideal for vegetarians and health-conscious consumers, these beans are used widely in Indian cuisine and can be cooked or sprouted for added nutrition.",
    overview:
      "Packed with protein, fiber, and essential nutrients, Green Moong Beans are a versatile and nutritious choice. Their mild flavor makes them ideal for both savory and sprouted dishes.",
    premiumQuality:
      "Our Green Moong Beans are carefully sorted and packed for purity, ensuring top quality and freshness. Naturally gluten-free and easily digestible, they are ideal for daily meals and health-focused diets.",
    specifications: `
• Product Name: Green Moong Beans
• HSN Code: 07133110
• Purity: 99% Min
• Moisture: 12% Max
• Admixture: 0.5% Max
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Customized options available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Rich in protein, fiber, antioxidants, iron, and magnesium. Supports digestion and energy levels.
`,
  },
  {
    id: 9,
    title: "Yellow Moong Beans",
    description: "Split yellow moong beans great for dal and quick meals.",
    category: "Pulses",
    image: "/product/yellow-moong.jpg",
    images: ["/product/yellow-moong.jpg"],
    moreImage: [
      "/product/yellow-moong.jpg",
      "/product/related.9.1.1.jpg",
      "/product/related.9.1.2.jpeg",
      "/product/related.9.1.3.jpg",
    ],
    rating: 14,
    reviews: 15,
    highlights: [
      "Quick-cooking lentil",
      "Soft texture when cooked",
      "Mild, earthy flavor",
      "Low in fat, high in protein",
      "Excellent for light meals",
    ],
    features: [
      "Split and skinless for fast cooking",
      "Ideal for khichdi, dal, and soups",
      "Low in cholesterol",
      "Rich in folate and potassium",
      "Easy on the stomach",
    ],
    applications: "Perfect for making dal, soups, khichdi, and baby food.",
    aboutProduct:
      "Yellow Moong Beans are split green grams without skin, making them one of the easiest pulses to digest. These lentils cook quickly and are widely used in light and comforting dishes like dal and khichdi.",
    overview:
      "Yellow Moong Beans are soft, easy to cook, and nutritionally rich. Their mild taste and fast cooking time make them a staple in Indian households.",
    premiumQuality:
      "Our Yellow Moong Beans are double-cleaned and sorted for consistent size and superior texture. Naturally low in fat and rich in nutrients, they are perfect for everyday meals.",
    specifications: `
• Product Name: Yellow Moong Beans (Split Mung Beans)
• HSN Code: 07133190
• Moisture: 12% Max
• Foreign Matter: 0.5% Max
• Broken Kernels: 1% Max
• Protein Content: 24% Min
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Packed with protein, folate, and potassium. Low in fat and high in digestibility.
`,
  },
  {
    id: 10,
    title: "Black Eyed Beans",
    description: "Nutty black-eyed peas ideal for soups and salads.",
    category: "Pulses",
    image: "/product/black-eyed.jpg",
    images: ["/product/black-eyed.jpg"],
    moreImage: [
      "/product/black-eyed.jpg",
      "/product/related.10.1.webp",
      "/product/related.10.2.jpg",
      "/product/related.10.3.jpg",
    ],
    rating: 11,
    reviews: 13,
    highlights: [
      "Distinctive eye-shaped mark",
      "Mild, nutty flavor",
      "High in folate and fiber",
      "Great for stews and salads",
      "Rich source of protein",
    ],
    features: [
      "Quick-cooking legume",
      "Used in African, Indian, and Southern cuisines",
      "Adds texture to dishes",
      "No added preservatives",
      "Gluten-free and vegan",
    ],
    applications: "Ideal for salads, stews, curries, and rice dishes.",
    aboutProduct:
      "Black Eyed Beans, also known as lobia or cowpeas, are a distinctive legume with a nutty flavor and creamy texture. Widely used across global cuisines, they are a healthy source of plant-based protein and fiber.",
    overview:
      "Black Eyed Beans are nutritious legumes with a characteristic black spot. Their soft texture and high nutrient content make them ideal for various savory dishes.",
    premiumQuality:
      "Our Black Eyed Beans are naturally processed and sorted for size and purity. With no additives or preservatives, they bring natural nutrition and flavor to your kitchen.",
    specifications: `
• Product Name: Black Eyed Beans / Cowpeas
• HSN Code: 07133110
• Moisture: 12% Max
• Foreign Matter: 0.5% Max
• Broken Kernels: 1% Max
• Protein Content: 22% Min
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Custom available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Rich in plant-based protein, fiber, and essential minerals. Excellent for digestive health and energy.
`,
  },
  {
    id: 11,
    title: "Red Lentils",
    description: "Quick-cooking lentils perfect for curries and soups.",
    category: "Pulses",
    image: "/product/red-lentils.jpeg",
    images: ["/product/red-lentils.jpeg"],
    moreImage: [
      "/product/red-lentils.jpeg",
      "/product/related.11.1.1.webp",
      "/product/related.11.1.2.jpg",
      "/product/related.11.1.3.jpg",
    ],
    rating: 16,
    reviews: 17,
    highlights: [
      "Split and skinless lentils",
      "Cooks in under 20 minutes",
      "Sweet and earthy taste",
      "High in protein and iron",
      "Easily digestible",
    ],
    features: [
      "Bright orange-red color",
      "Turns golden when cooked",
      "Ideal for soups and Indian dals",
      "Rich in folate and fiber",
      "No soaking required",
    ],
    applications: "Used in dals, soups, curries, and stews.",
    aboutProduct:
      "Red Lentils are one of the most popular legumes in Indian and Middle Eastern cooking. Their fast cooking time and soft texture make them a go-to for soups, dals, and healthy one-pot meals.",
    overview:
      "Naturally rich in protein, iron, and dietary fiber, Red Lentils are a nutrient-packed ingredient perfect for balanced meals. Their gentle taste makes them ideal for all palates.",
    premiumQuality:
      "We supply premium-quality Red Lentils that are free from stones and dust, and undergo stringent quality checks. Packed for freshness and nutrition, they’re an essential part of any healthy pantry.",
    specifications: `
• Product Name: Red Lentils / Masoor Dal
• HSN Code: 07134000
• Moisture: 12% Max
• Foreign Matter: 0.5% Max
• Broken Kernels: 1% Max
• Protein Content: 25% Min
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Custom packaging available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
High in protein, iron, and dietary fiber. Great for heart and digestive health.
`,
  },
  // --- Other Grains -----
  {
    id: 12,
    title: "Maize",
    category: "Other Grains",
    image: "/product/maize.jpg",
    images: ["/product/maize.jpg"],
    moreImage: [
      "/product/maize.jpg",
      "/product/related.12.1.webp",
      "/product/related.12.2.jpg",
      "/product/related.12.3.jpeg",
    ],
    rating: 13,
    reviews: 12,
    description: "Maize grains used in cereal and snacks.",
    highlights: [
      "High in carbohydrates",
      "Naturally gluten-free",
      "Golden yellow grains",
      "Staple in many cuisines",
      "Used for flour and snacks",
    ],
    features: [
      "Ground into flour or eaten whole",
      "Used in popcorn, tortillas, and cornflakes",
      "Good energy source",
      "Contains essential vitamins and minerals",
      "Sustainably harvested",
    ],
    applications: "Used in snacks, flour, cereals, and animal feed.",
    aboutProduct:
      "Maize, or corn, is a globally important cereal grain used in everything from flour and breakfast cereals to snacks and animal feed. Its high starch content makes it an energy-rich crop suitable for a variety of uses.",
    overview:
      "Golden-yellow maize grains are a key ingredient in cuisines around the world. Versatile and naturally gluten-free, maize is used in everything from flatbreads to processed cereals.",
    premiumQuality:
      "Our maize is carefully sourced, dried, and cleaned to maintain top quality. Ideal for both domestic and industrial applications, it retains natural nutrition with no chemical additives.",
    specifications: `
• Product Name: Maize
• HSN Code: 10059000
• Moisture: 14% Max
• Foreign Matter: 1% Max
• Broken Kernels: 2% Max
• Aflatoxin: 20 ppb Max
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Custom packaging available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Rich in carbohydrates, fiber, and essential nutrients like vitamin B and antioxidants.
`,
  },
  {
    id: 13,
    title: "Barley",
    category: "Other Grains",
    image: "/product/barley.webp",
    images: ["/product/barley.webp"],
    moreImage: [
      "/product/barley.webp",
      "/product/related.13.1.jpg",
      "/product/related.13.2.webp",
      "/product/related.13.3.webp",
    ],
    rating: 14,
    reviews: 13,
    description: "Healthy barley grains for soups and brewing.",
    highlights: [
      "High in dietary fiber",
      "Nutty flavor",
      "Supports digestion",
      "Ideal for soups and stews",
      "Used in brewing industry",
    ],
    features: [
      "Whole grain with chewy texture",
      "Reduces cholesterol levels",
      "Helps regulate blood sugar",
      "Can be cooked or ground into flour",
      "Rich in antioxidants",
    ],
    applications: "Used in soups, health drinks, porridge, and brewing.",
    aboutProduct:
      "Barley is a nutrient-rich grain known for its high fiber content and health-promoting properties. Used in a variety of dishes including soups, stews, and health beverages, it's also a staple in the brewing industry.",
    overview:
      "Whole barley grains add a rich, nutty flavor and a chewy texture to meals. Their nutritional profile makes them popular among health-conscious consumers and food processors alike.",
    premiumQuality:
      "Our barley is 100% natural, triple-cleaned, and sourced from trusted farms. It’s perfect for home cooking, bulk food production, or fermentation-based industries.",
    specifications: `
• Product Name: Barley
• HSN Code: 100300
• Moisture: 12% Max
• Foreign Matter: 1% Max
• Protein Content: 9% Min
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Bulk packaging available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Excellent source of fiber, protein, selenium, and magnesium. Supports heart and digestive health.
`,
  },
  {
    id: 14,
    title: "Wheat",
    category: "Other Grains",
    image: "/product/wheat.jpg",
    images: ["/product/wheat.jpg"],
    moreImage: [
      "/product/wheat.jpg",
      "/product/related.14.1.1.jpg",
      "/product/related.14.1.2.webp",
      "/product/related.14.1.3.webp",
    ],
    rating: 18,
    reviews: 20,
    description: "Whole wheat used in flour and baking.",
    highlights: [
      "Main ingredient for flour",
      "Rich in complex carbs",
      "Used in breads and rotis",
      "Source of dietary fiber",
      "Essential grain for daily diets",
    ],
    features: [
      "Can be stone-ground or milled",
      "Used for whole wheat flour",
      "Ideal for bread, pasta, and chapati",
      "Balanced protein and starch content",
      "Harvested from high-yield crops",
    ],
    applications: "Used in bread, chapati, pasta, and baking products.",
    aboutProduct:
      "Wheat is a dietary staple around the world and the base for numerous everyday foods. Whole wheat contains the bran, germ, and endosperm, offering balanced nutrition and great baking results.",
    overview:
      "Wheat provides a dense source of complex carbs and proteins. Commonly ground into flour, it's used in baking and cooking across all continents.",
    premiumQuality:
      "Our wheat grains are stored and milled under hygienic conditions to preserve freshness and taste. No additives—just clean, natural nutrition for your home or business.",
    specifications: `
• Product Name: Wheat
• HSN Code: 10019910
• Moisture: 12% Max
• Foreign Matter: 1% Max
• Protein Content: 11% Min
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Custom packaging available)
• 20’ FCL Capacity: Approx. 24 MT
`,
    nutritionalInfo: `
Excellent source of energy, complex carbs, and fiber. Supports metabolism and daily energy needs.
`,
  },
  {
    id: 15,
    title: "Green Millet",
    category: "Other Grains",
    image: "/product/millet.png",
    images: ["/product/millet.png"],
    moreImage: [
      "/product/millet.png",
      "/product/related.9.1.jpeg",
      "/product/related.9.2.jpeg",
      "/product/related.9.3.jpg",
    ],
    rating: 18,
    reviews: 14,
    description: "Green millet used in porridge and flatbreads.",
    highlights: [
      "Thrives in dry conditions",
      "Naturally gluten-free",
      "High in magnesium",
      "Rich in fiber and protein",
      "Sustainably grown",
    ],
    features: [
      "Low glycemic index",
      "Good for diabetes management",
      "Can be cooked or ground",
      "Used in roti, porridge, and khichdi",
      "Long shelf life",
    ],
    applications: "Used in porridge, flatbreads, and animal feed.",
    aboutProduct:
      "Green Millet, or bajra, is a traditional grain known for its resilience and nutritional value. Popular in rural India and Africa, it forms the base for hearty and wholesome meals like rotis and porridges.",
    overview:
      "Green Millet offers excellent energy, fiber, and nutrition in a single grain. Its gluten-free nature makes it suitable for alternative diets and it’s also used in livestock feed.",
    premiumQuality:
      "Our millet is sustainably grown and harvested with care. Naturally rich and free from chemicals, it's packed to preserve freshness and nutrition for every use.",
    specifications: `
• Product Name: Green Millet / Bajra Seeds
• HSN Code: 10082100
• Moisture: 14% Max
• Protein Content: 8% Min
• Foreign Matter: 1% Max
`,
    packagingShipping: `
• Packaging: PP Bags – 25kg / 50kg (Customizable packaging available)
• 20’ FCL Capacity: Approx. 24–25 MT
`,
    nutritionalInfo: `
Naturally gluten-free and rich in fiber, protein, and minerals like magnesium and iron. Supports digestive and cardiovascular health.
`,
  },
  // --- Spices ---
  {
    id: 16,
    title: "Coriander Seeds - Eagle",
    category: "Spices",
    image: "/product/coriander-eagle.jpg",
    images: ["/product/coriander-eagle.jpg"],
    moreImage: [
      "/product/coriander-eagle.jpg",
      "/product/related.16.1.jpg",
      "/product/related.16.2.jpg",
      "/product/related.16.3.webp",
    ],
    rating: 19,
    reviews: 22,
    description: "Bold Eagle variety coriander seeds.",
    highlights: [
      "Bright golden-yellow color",
      "Bold size seeds",
      "High essential oil content",
      "Aromatic and flavorful",
      "Widely used in Indian cuisine",
    ],
    features: [
      "Grown in prime coriander zones",
      "Strong aroma & citrus flavor",
      "Machine-cleaned and sorted",
      "Available in bulk packaging",
      "Ideal for spice blends and grinding",
    ],
    applications: "Used in curries, masalas, pickles, and spice mixes.",
    aboutProduct:
      "Eagle-grade coriander seeds are bold, golden-yellow, and packed with flavor. Sourced from top Indian regions, they are ideal for grinding and use in masalas and seasoning blends.",
    overview:
      "Coriander Eagle seeds are bold, aromatic, and packed with natural oils—perfect for food manufacturers and spice processors.",
    premiumQuality:
      "Processed in-house with strict hygiene and quality checks. Packaged to preserve flavor and aroma for export and bulk use.",
    specifications: `
• Product Name: Coriander Seeds
• HSN Code: 09092110
• Moisture: 9% Max
• Admixture: 1% Max
• Foreign Material: 1% Max
• Purity: 98%–99%
• Aroma & Oil Content: High
`,
    packagingShipping: `
• Packaging: 25kg/50kg PP or Jute Bags (as per client request)
• Export Markets: UAE, Indonesia, Vietnam, Europe, USA
`,
    nutritionalInfo: `
Rich in antioxidants and essential oils. Helps digestion and adds aroma and flavor to food.
`,
  },
  {
    id: 17,
    title: "Coriander Seeds - Scooter",
    category: "Spices",
    image: "/product/coriander-scooter.jpg",
    images: ["/product/coriander-scooter.jpg"],
    moreImage: [
      "/product/coriander-scooter.jpg",
      "/product/related.17.1.jpg",
      "/product/related.17.2.webp",
      "/product/related.17.3.webp",
    ],
    rating: 16,
    reviews: 19,
    description: "Scooter variety coriander, aromatic and strong.",
    highlights: [
      "Medium size grains",
      "Mild greenish-yellow tone",
      "Balanced essential oil content",
      "Aromatic and fresh",
      "Common in masala blends",
    ],
    features: [
      "Natural drying process",
      "Cleaned and graded",
      "Mild yet rich aroma",
      "Perfect for spice blends",
      "Machine-processed and hygienic",
    ],
    applications: "Ideal for seasoning, spice powders, and oil extraction.",
    aboutProduct:
      "Scooter-grade coriander seeds offer balance between size and aroma, making them ideal for masala production and dry roasting applications.",
    overview:
      "Scooter coriander is a mid-grade spice with balanced flavor and consistent oil levels. Widely used in households and factories.",
    premiumQuality:
      "Sourced from top farms and cleaned using modern facilities to ensure purity and color consistency.",
    specifications: `
• Moisture: 9% Max
• Purity: 98%–99%
• Admixture: 1% Max
• Aroma: Moderate to High
`,
    packagingShipping: `
• Packaging: 25kg/50kg PP or Jute Bags
• Export Capacity: As per international demand
`,
    nutritionalInfo: `
Contains dietary fiber, vitamin C, and essential oils with digestive and anti-inflammatory benefits.
`,
  },
  {
    id: 18,
    title: "Coriander Seeds - Parrot",
    category: "Spices",
    image: "/product/coriander-parrot.jpg",
    images: ["/product/coriander-parrot.jpg"],
    moreImage: [
      "/product/coriander-parrot.jpg",
      "/product/related.18.1.jpg",
      "/product/related.18.2.webp",
      "/product/related.18.3.jpeg",
    ],
    rating: 17,
    reviews: 21,
    description: "Parrot variety coriander for grinding.",
    highlights: [
      "Smaller size grains",
      "Distinct greenish tint",
      "Strong and sharp aroma",
      "Popular in domestic kitchens",
      "Great for roasting and grinding",
    ],
    features: [
      "Finely graded",
      "Used in traditional spice blends",
      "Compact and dense seeds",
      "Custom packed",
      "Flavor-preserving packaging",
    ],
    applications: "Used in garam masala, spice pastes, and curry powders.",
    aboutProduct:
      "Parrot coriander seeds are compact with a greenish hue and are known for their strong aroma. Perfect for grinding into spice powders.",
    overview:
      "An affordable yet powerful spice, Parrot-grade coriander is a favorite among home cooks and small-scale food units.",
    premiumQuality:
      "Processed with care in hygienic facilities. Cleaned and sorted for minimal foreign matter.",
    specifications: `
• Moisture: 9% Max
• Foreign Material: 1% Max
• Purity: 98%–99%
• Aroma: High
`,
    packagingShipping: `
• Packaging: 25kg or 50kg PP/Jute Bags
• Global Distribution Available
`,
    nutritionalInfo: `
Natural antioxidant, rich in flavor oils and vitamins. Supports digestion and blood sugar control.
`,
  },
  {
    id: 19,
    title: "Coriander Seeds - Double Parrot",
    category: "Spices",
    image: "/product/coriander-parrot.jpg",
    images: ["/product/coriander-parrot.jpg"],
    moreImage: [
      "/product/coriander-parrot.jpg",
      "/product/related.18.1.jpg",
      "/product/related.18.2.webp",
      "/product/related.18.3.jpeg",
    ],
    rating: 18,
    reviews: 20,
    description: "Double Parrot variety coriander with premium aroma.",
    highlights: [
      "Finest grade seeds",
      "Uniform size and color",
      "Extra-high essential oil content",
      "Bright greenish-yellow tone",
      "Premium export quality",
    ],
    features: [
      "Extra cleaned and polished",
      "Ideal for premium spice products",
      "High oil retention",
      "Vacuum-sealed options",
      "Sorted by optical sorting",
    ],
    applications: "Used in spice export, curry powders, flavoring extracts.",
    aboutProduct:
      "Double Parrot coriander seeds are premium-grade with superior oil content and color. Ideal for global spice markets and processors.",
    overview:
      "Preferred for its consistency, high aroma, and strong flavor presence in export blends and branded masalas.",
    premiumQuality:
      "Carefully selected, polished, and packed to meet stringent export and hygiene standards.",
    specifications: `
• Moisture: 9% Max
• Foreign Matter: 1% Max
• Admixture: 1% Max
• Aroma & Oil: Extra High
• Purity: 99% Max
`,
    packagingShipping: `
• Packaging: Export-grade 25kg/50kg PP/Jute Bags
• Available in vacuum packaging
`,
    nutritionalInfo: `
Superior essential oil content. Promotes digestive health and boosts flavor in foods.
`,
  },
  {
    id: 20,
    title: "Coriander Seeds Fada (Eagle)",
    category: "Spices",
    image: "/product/coriander-fada.webp",
    images: ["/product/coriander-fada.webp"],
    moreImage: [
      "/product/coriander-fada.webp",
      "/product/related.20.1.jpg",
      "/product/related.20.2.jpg",
      "/product/related.20.3.webp",
    ],
    rating: 15,
    reviews: 18,
    description: "Fada cut Eagle coriander for quick use.",
    highlights: [
      "Split coriander seeds",
      "Faster flavor infusion",
      "Ideal for pickles and spice mixes",
      "Same quality as Eagle whole",
      "Shorter cooking time",
    ],
    features: [
      "Made from Eagle-grade coriander",
      "Cut for faster flavor release",
      "Pre-sorted and cleaned",
      "Vacuum-packed for freshness",
      "Available in bulk",
    ],
    applications: "Used in pickles, chutneys, spice rubs, and curry pastes.",
    aboutProduct:
      "Fada coriander is derived by splitting Eagle seeds. It releases flavor quickly and is perfect for time-efficient cooking and food processing.",
    overview:
      "Offers convenience with no compromise in aroma or taste. A must-have in fast-paced kitchens.",
    premiumQuality:
      "Processed from whole Eagle seeds with no loss of oil content. Hygienically packed for freshness.",
    specifications: `
• Cut: Fada (split)
• Origin: Eagle-grade Coriander
• Purity: 98%–99%
• Oil Content: High
`,
    packagingShipping: `
• Packaging: 25kg PP/Jute Bags
• Available as per bulk or retail demand
`,
    nutritionalInfo: `
Same nutritional and oil value as whole coriander seeds. Adds depth and aroma efficiently.
`,
  },
  {
    id: 21,
    title: "Cumin Seeds",
    category: "Spices",
    image: "/product/cumin-seed.png",
    images: ["/product/cumin-seed.png"],
    moreImage: [
      "/product/cumin-seed.png",
      "/product/related.21.1.webp",
      "/product/related.21.2.webp",
      "/product/related.21.3.jpg",
    ],
    rating: 18,
    reviews: 20,
    description: "Essential spice rich in aroma.",
    highlights: [
      "Warm earthy flavor",
      "Used globally in cuisines",
      "Promotes digestion",
      "Essential in spice mixes",
      "Natural source of antioxidants",
    ],
    features: [
      "Machine cleaned (98%–99% purity)",
      "Sun-dried and naturally processed",
      "Available in various grades",
      "Uniform grain size",
      "Rich in essential oils",
    ],
    applications:
      "Used in spice blends, curries, marinades, and herbal medicine.",
    aboutProduct:
      "Cumin seeds are valued for their distinctive flavor and aroma. A staple in Indian, Middle Eastern, and Mexican cuisine.",
    overview:
      "A key ingredient in garam masala and global spice mixes. Also used in Ayurvedic remedies.",
    premiumQuality:
      "Sorted and processed using hygienic methods for food-grade and herbal markets.",
    specifications: `
• Purity: 98%–99% (Machine Clean)
• Moisture: 10% Max
• Admixture: 1% Max
• Foreign Matter: 0.5% Max
• Form: Whole Seeds
`,
    packagingShipping: `
• Packaging: 25/50 kg PP or Jute Bags
• 20’ FCL Load: 13–14 MT | 40’ FCL: 25–26 MT
`,
    nutritionalInfo: `
Improves digestion, rich in iron, and supports immune function.
`,
  },
  {
    id: 22,
    title: "Fennel Seeds",
    category: "Spices",
    image: "/product/fennel.png",
    images: ["/product/fennel.png"],
    moreImage: [
      "/product/fennel.png",
      "/product/related.8.1.webp",
      "/product/related.8.2.jpeg",
      "/product/related.8.3.jpeg",
    ],
    rating: 17,
    reviews: 16,
    description:
      "Sweet and aromatic fennel seeds used in cooking and digestion.",
    highlights: [
      "Sweet licorice-like taste",
      "Aromatic and soothing",
      "Natural digestive aid",
      "Used in desserts and teas",
      "Bright yellow-green color",
    ],
    features: [
      "Rich in essential oils",
      "3–5 mm seed size",
      "Machine-cleaned (99%)",
      "Used in herbal blends",
      "Acts as natural mouth freshener",
    ],
    applications:
      "Used in herbal teas, desserts, mouth fresheners, and curries.",
    aboutProduct:
      "Fennel seeds are aromatic and flavorful. Known for their digestion-boosting properties and sweet flavor, they are used widely in food and health applications.",
    overview:
      "Fennel seeds enhance both flavor and health. They’re refreshing, fragrant, and packed with antioxidants.",
    premiumQuality:
      "Sourced from top farms and cleaned with advanced optical sorting for purity and visual appeal.",
    specifications: `
• Purity: 99%
• Admixture: 1% Max
• Moisture: 10% Max
• Size: 3–5 mm
• Color: Yellowish-Green
• Foreign Matter: 0.5% Max
`,
    packagingShipping: `
• Packaging: 25/50 kg PP or Jute Bags
• 20’ FCL: 13–14 MT | 40’ FCL: 25–26 MT
`,
    nutritionalInfo: `
Helps in digestion, relieves bloating, and provides antioxidant protection.
`,
  },
  {
    id: 23,
    title: "Fenugreek Seeds",
    category: "Spices",
    image: "/product/fenugreek-seeds.webp",
    images: ["/product/fenugreek-seeds.webp"],
    moreImage: [
      "/product/fenugreek-seeds.webp",
      "/product/related.23.1.jpg",
      "/product/related.23.2.jpg",
      "/product/related.23.3.webp",
    ],
    rating: 16,
    reviews: 14,
    description:
      "Bitter yet beneficial fenugreek seeds, great for seasoning and health.",
    highlights: [
      "Slightly bitter with maple aroma",
      "Used in pickles and spice blends",
      "Rich in iron and fiber",
      "Supports blood sugar control",
      "Also used in Ayurveda & cosmetics",
    ],
    features: [
      "Golden-brown in color",
      "Natural anti-inflammatory",
      "Can be sprouted or ground",
      "Machine-cleaned and sorted",
      "Sustainably harvested",
    ],
    applications:
      "Used in Indian curries, pickles, spice blends, hair oils, and cosmetics.",
    aboutProduct:
      "Fenugreek seeds are small golden seeds with strong flavor and therapeutic properties. A key ingredient in Indian spice racks and Ayurvedic formulations.",
    overview:
      "From cooking to skincare, fenugreek plays a powerful role with its nutrients and bioactive compounds.",
    premiumQuality:
      "Sorted to 99.9% purity with minimal foreign matter. Available in bulk and custom packaging.",
    specifications: `
• Purity: 99.90%
• Extraneous Matter: 2% Max
• Foreign Material: 1% Max
• Moisture: 10% Max
• Color: Yellowish-Green
• Size: 3–5 mm
`,
    packagingShipping: `
• Packaging: 50kg Bags or as per buyer requirements
• 20’ FCL Capacity: 24 MT
`,
    nutritionalInfo: `
High in fiber, protein, and antioxidants. Known for blood sugar and hormone regulation.
`,
  },
  {
    id: 40,
    title: "Tur Dal",
    description:
      "High-quality Tur Dal with a rich taste and high protein content. Ideal for soups, dals, and other Indian dishes.",
    category: "Pulses",
    image: "/product/Tur-Dal.png",
    images: ["/product/Tur-Dal.png"],
    moreImage: [
      "/product/Tur-Dal.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 20,
    reviews: 45,
    highlights: [
      "Rich in protein and fiber",
      "Perfect for making soups and dals",
      "High nutritional value",
      "Low in fat",
      "Non-GMO",
    ],
    features: [
      "Carefully sorted and cleaned",
      "High-quality pulses",
      "Rich in vitamins and minerals",
      "Easy to cook",
      "100% natural product",
    ],
    applications: "Ideal for soups, dals, curries, and stews.",
    aboutProduct:
      "Tur Dal is a high-protein pulse with a rich flavor, perfect for everyday cooking.",
    overview:
      "Our Tur Dal is cultivated with care to ensure high quality and rich taste.",
    premiumQuality:
      "Packed with protein and essential nutrients, Tur Dal is an excellent addition to your meals.",
    specifications: `
• Counts per Ounce: 30/40, 35/45, 40/50, 50/60
• Moisture: 8% Max
• Admixture: 2% Max
• Foreign Material: 0.5% Max
• Protein Content: 24% – 26%
• Aflatoxin: < 20 ppb
  `,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
 - Jute: 20 MT (50kg)
 - Vacuum: 20 MT (25kg)
  `,
    nutritionalInfo: `
Rich in protein, fiber, and essential vitamins like B1, B2, and folate.
  `,
  },
  {
    id: 41,
    title: "Channa Dal",
    description:
      "Channa Dal, known for its rich flavor and texture, is a staple ingredient for dals, soups, and snacks.",
    category: "Pulses",
    image: "/product/Channa-Dal.png",
    images: ["/product/Channa-Dal.png"],
    moreImage: [
      "/product/Channa-Dal.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 22,
    reviews: 50,
    highlights: [
      "High in fiber and protein",
      "Great for making Indian snacks and meals",
      "Rich flavor and texture",
      "Easy to digest",
      "Non-GMO",
    ],
    features: [
      "Sustainably sourced",
      "Rich in minerals and vitamins",
      "Perfect for both savory and sweet dishes",
      "Handpicked for quality",
      "Naturally gluten-free",
    ],
    applications:
      "Ideal for making dals, soups, fritters, and other Indian snacks.",
    aboutProduct:
      "Channa Dal is an excellent source of protein and fiber, used in many traditional dishes.",
    overview:
      "Channa Dal is an essential ingredient in Indian cooking, offering great taste and health benefits.",
    premiumQuality:
      "Our Channa Dal is sourced and processed to ensure the highest quality and flavor.",
    specifications: `
• Counts per Ounce: 30/40, 35/45, 40/50, 50/60
• Moisture: 9% Max
• Admixture: 1% Max
• Foreign Material: 0.3% Max
• Protein Content: 22% – 24%
• Aflatoxin: < 20 ppb
  `,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
 - Jute: 20 MT (50kg)
 - Vacuum: 20 MT (25kg)
  `,
    nutritionalInfo: `
Channa Dal is rich in protein, fiber, and essential minerals like calcium and iron.
  `,
  },
  {
    id: 42,
    title: "Urad Dal",
    description:
      "Urad Dal, a protein-rich lentil, is commonly used in dals and Indian desserts, known for its creamy texture.",
    category: "Pulses",
    image: "/product/Urad-Dal.png",
    images: ["/product/Urad-Dal.png"],
    moreImage: [
      "/product/Urad-Dal.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 18,
    reviews: 40,
    highlights: [
      "Rich in protein and fiber",
      "Ideal for making dals and desserts",
      "Helps in digestion",
      "Non-GMO",
      "Naturally gluten-free",
    ],
    features: [
      "Easy to cook",
      "Great for making creamy dals",
      "Full of essential vitamins",
      "Handpicked for premium quality",
      "Perfect for vegetarian and vegan diets",
    ],
    applications:
      "Perfect for making dals, chutneys, and desserts like dosa or idli.",
    aboutProduct:
      "Urad Dal is known for its rich texture, making it perfect for creamy dishes.",
    overview:
      "Our Urad Dal is packed with protein and ideal for a variety of delicious recipes.",
    premiumQuality:
      "The best quality Urad Dal for your daily needs, offering rich texture and great taste.",
    specifications: `
• Counts per Ounce: 30/40, 35/45, 40/50
• Moisture: 7% Max
• Admixture: 1.5% Max
• Foreign Material: 0.3% Max
• Protein Content: 25% – 27%
• Aflatoxin: < 20 ppb
  `,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
 - Jute: 19 MT (50kg)
 - Vacuum: 19 MT (25kg)
  `,
    nutritionalInfo: `
Urad Dal is high in protein, fiber, and contains essential nutrients like iron, potassium, and magnesium.
  `,
  },
  {
    id: 43,
    title: "Masoor Dal",
    description:
      "Masoor Dal is a rich source of protein and fiber, ideal for a variety of Indian and global dishes.",
    category: "Pulses",
    image: "/product/Masoor-Dal.png",
    images: ["/product/Masoor-Dal.png"],
    moreImage: [
      "/product/Masoor-Dal.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 20,
    reviews: 42,
    highlights: [
      "Rich in protein and fiber",
      "Good for making soups and dals",
      "Easy to digest",
      "Full of essential vitamins",
      "Non-GMO",
    ],
    features: [
      "Rich in iron and potassium",
      "Ideal for vegan and vegetarian diets",
      "Great for light and nutritious meals",
      "Handpicked for quality",
      "Packed with antioxidants",
    ],
    applications: "Best for making soups, dals, and salads.",
    aboutProduct:
      "Masoor Dal is easy to cook and provides a smooth texture, making it a popular choice for a variety of dishes.",
    overview:
      "Our Masoor Dal is perfect for those looking for a nutritious, quick-to-prepare meal.",
    premiumQuality:
      "Masoor Dal is packed with essential nutrients for a healthy and balanced diet.",
    specifications: `
• Counts per Ounce: 30/40, 35/45, 40/50
• Moisture: 8% Max
• Admixture: 2% Max
• Foreign Material: 0.5% Max
• Protein Content: 22% – 24%
• Aflatoxin: < 20 ppb
  `,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
 - Jute: 20 MT (50kg)
 - Vacuum: 20 MT (25kg)
  `,
    nutritionalInfo: `
Rich in protein, fiber, iron, and other essential vitamins.
  `,
  },
  {
    id: 44,
    title: "Cashew",
    description:
      "Premium quality cashews with rich flavor and crunchy texture. Perfect for snacking, cooking, and baking.",
    category: "Nuts",
    image: "/product/Cashew.png",
    images: ["/product/Cashew.png"],
    moreImage: [
      "/product/Cashew.png",
      "/product/related.2.1.jpg",
      "/product/related.1.3.jpeg",
      "/product/related.2.3.jpg",
    ],
    rating: 22,
    reviews: 50,
    highlights: [
      "Rich in healthy fats",
      "Great for snacking and cooking",
      "Contains antioxidants",
      "Helps improve heart health",
      "Non-GMO",
    ],
    features: [
      "Handpicked for premium quality",
      "Rich in vitamins and minerals",
      "Ideal for baking and cooking",
      "Supports heart health",
      "Naturally gluten-free",
    ],
    applications:
      "Perfect for snacking, baking, or adding to dishes for added crunch.",
    aboutProduct:
      "Cashews are a versatile snack that adds a delicious crunch to any dish.",
    overview:
      "Our premium cashews are packed with healthy fats and essential nutrients.",
    premiumQuality:
      "We offer only the highest quality cashews, handpicked and processed for the best flavor.",
    specifications: `
• Size: 180, 210, 240, 280, 320
• Moisture: 5% Max
• Admixture: 1% Max
• Foreign Material: 0.5% Max
• Oil Content: 47% – 50%
• Aflatoxin: < 20 ppb
  `,
    packagingShipping: `
• Jute/PP Bags: 25kg or 50kg
• Vacuum Packs: 25kg
• 20’ FCL Capacity:
 - Jute: 20 MT (50kg)
 - Vacuum: 20 MT (25kg)
  `,
    nutritionalInfo: `
Cashews are rich in healthy fats, protein, and essential minerals like magnesium and zinc.
  `,
  },
];

export default productsData;
