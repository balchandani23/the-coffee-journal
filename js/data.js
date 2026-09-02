/* =========================================================================
   THE COFFEE JOURNAL — MASTER DATABASE
   ========================================================================= */

const COFFEES = [
  {
    title: "Pink Lemonade",
    roaster: "Grey Soul Coffee Roasters",
    origin: "Kohima, Nagaland, India",
    category: "Anaerobic",
    flavorTags: ["Orange 🍊", "Green Grape", "Red Apple 🍎", "Dried Fig"],
    rating: 4.6,
    notes:
      "A vibrant cup bursting with juicy citrus acidity and green grape sweetness, settling down into rich dried fig undertones.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-08-23",
        tasteProfile: {
          acidity: 5.0,
          sweetness: 4.5,
          body: 4.5,
          clarity: 5.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Salawara Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Hassan, Karnataka, India",
    category: "Washed",
    flavorTags: ["Red Apple 🍎", "Pear 🍐", "Almond"],
    rating: 4.5,
    notes:
      "Crisp orchard fruit sweetness led by crisp red apple and ripe pear, framed with a gentle toasted almond finish.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-07-24",
        tasteProfile: {
          acidity: 4.0,
          sweetness: 4.0,
          body: 3.5,
          clarity: 4.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Sugar and Salt",
    roaster: "Coffeeverse",
    origin: "Karnataka, India",
    category: "Anaerobic",
    flavorTags: ["Kiwi 🥝", "Passionfruit", "Pomegranate"],
    rating: 4.6,
    notes:
      "An electric tropical cup. Tart kiwi and passionfruit punch through upfront, backed by juicy pomegranate sweetness.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-06-10",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 3.5,
          clarity: 4.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Champagne Naturals",
    roaster: "Coffeeverse",
    origin: "Yercaud, Tamil Nadu, India",
    category: "Natural",
    flavorTags: ["Fruity", "Wine 🍷"],
    rating: 4.7,
    notes:
      "Deeply fermented, vinous, and boozy with dark summer fruits and an intoxicating winey sweetness.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-05-16",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 4.0,
          clarity: 4.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Rum Barrel Aged",
    roaster: "Siolim",
    origin: "Chikmagalur, Karnataka, India",
    category: "Barrel",
    flavorTags: ["Milk Chocolate", "Jackfruit", "Molasses"],
    rating: 4.6,
    notes:
      "Heavy cask presence with buttery milk chocolate, ripe sweet jackfruit, and an intensely lingering molasses finish.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-25",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 5.0,
          body: 4.5,
          clarity: 3.5,
          aftertaste: 5.0,
        },
      },
    ],
  },
  {
    title: "Baarbara Estate - Intenso Yeast",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur, Karnataka, India",
    category: "Anaerobic",
    flavorTags: ["Strawberry 🍓", "Red Currant", "Rose 🌹"],
    rating: 4.6,
    notes:
      "Heady floral aroma of roses backed by tart strawberry and sparkling red currant acidity.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 3.0,
          clarity: 4.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Riverdale Estate - Aroma",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Tamil Nadu, India",
    category: "Anaerobic",
    flavorTags: [
      "Mango 🥭",
      "Tea Rose",
      "Raspberry",
      "Mandarin",
      "Berries 🍑🍒",
      "Pineapple 🍍",
    ],
    rating: 4.6,
    notes:
      "An intensely layered cup. Lush tropical mango, perfumed tea rose, ripe mandarin, and lingering sweet berries.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 3.5,
          clarity: 4.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Garigekhan Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur, Karnataka, India",
    category: "Washed",
    flavorTags: ["Kiwi 🥝", "Papaya", "Pomegranate", "Roasted Hazelnut"],
    rating: 4.5,
    notes:
      "Juicy tropical punch balanced by rich hazelnut oils, presenting a sweet and structured finish.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 4.0,
          clarity: 4.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Silver Oak Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Karnataka, India",
    category: "Blend",
    flavorTags: ["Hazelnut", "Honey 🍯", "Grapes 🍇"],
    rating: 4.2,
    notes:
      "A smooth, daily sipper with mellow grape sweetness, nutty hazelnut, and soft wildflower honey.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "MSP Orchardale Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Tamil Nadu, India",
    category: "Natural",
    flavorTags: ["Blood Orange 🍊", "Red Grapes", "Dark Chocolate"],
    rating: 4.6,
    notes:
      "Zesty blood orange acidity layered seamlessly with ripe grape sweetness and dense dark chocolate bitterness.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Monsoon Malabar",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Karnataka, India",
    category: "Monsooned",
    flavorTags: ["Cocoa Nibs", "Dark Chocolate", "Dried Fruit", "Nutty"],
    rating: 4.2,
    notes:
      "Heavy, ultra low-acid traditional monsooned cup with dark baker's chocolate, tobacco, and cocoa nib notes.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-04-15",
        tasteProfile: {
          acidity: 2.0,
          sweetness: 3.0,
          body: 4.5,
          clarity: 3.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Amruthavarshini Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Aldur, Karnataka, India",
    category: "Washed",
    flavorTags: ["Cherry 🍒", "Pineapple 🍍", "Roasted Almond", "Raisin"],
    rating: 4.2,
    notes:
      "Bright cherry candy and sweet pineapple balanced with dried raisins and toasted almond comfort.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-01-08",
        tasteProfile: {
          acidity: 4.0,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Winter Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Karnataka, India",
    category: "Blend",
    flavorTags: ["Cinnamon", "Cocoa", "Roasted Almonds", "Raisins"],
    rating: 4.2,
    notes:
      "Warm spices and rich comforting sweetness reminiscent of mulled spice, cocoa, and candied nuts.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-01-08",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.0,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Sampigehoney Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Manjarabad, Karnataka, India",
    category: "Natural",
    flavorTags: ["Orange Marmalade 🍊", "Dark Chocolate", "Black Raisins"],
    rating: 4.5,
    notes:
      "Sticky orange marmalade sweetness with a rich dark chocolate backbone and sun-dried black raisin notes.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-01-08",
        tasteProfile: {
          acidity: 2.5,
          sweetness: 4.0,
          body: 4.5,
          clarity: 3.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "13th Birthday Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "India",
    category: "Blend",
    flavorTags: ["Chocolate 🍫", "Cherry 🍒", "Strawberry 🍓", "Peach 🍑"],
    rating: 3.7,
    notes:
      "Berry-forward seasonal celebratory blend highlighting stone fruit sweetness and a baker's chocolate foundation.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-01-08",
        tasteProfile: {
          acidity: 4.0,
          sweetness: 4.0,
          body: 3.5,
          clarity: 3.0,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Raxidi Lobo Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Sakleshpur, Karnataka, India",
    category: "Washed",
    flavorTags: ["Mosambi", "Green Apple 🍏", "Plum"],
    rating: 4.7,
    notes:
      "Sparkling malic and citric acidity of fresh mosambi and green apple rounded out by deep ripe plum.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2026-01-01",
        tasteProfile: {
          acidity: 4.0,
          sweetness: 4.0,
          body: 3.5,
          clarity: 4.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Kalledevarapura Pulp Sun Dried",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur, Karnataka, India",
    category: "Natural",
    flavorTags: ["Brown Sugar", "Roasted Almonds", "Raisin"],
    rating: 4.5,
    notes:
      "Rich notes of brown sugar, roasted almond, and raisin unfold with a smooth, lingering finish.",
    recipes: [
      {
        method: "Cold Brew",
        lastBrewed: "2025-12-02",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Diamante",
    roaster: "Cream Chronicles",
    origin: "Lonya Grande, Peru",
    category: "Washed",
    flavorTags: ["Milk Chocolate", "Apricot", "Hazelnut"],
    rating: 4.4,
    notes:
      "Gentle stone fruit brightness accompanied by velvety milk chocolate and sweet roasted nut sweetness.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2025-10-30",
        tasteProfile: {
          acidity: 3.5,
          sweetness: 4.0,
          body: 4.0,
          clarity: 2.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "ST. Joseph Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Tamil Nadu, India",
    category: "Natural",
    flavorTags: ["Grapefruit", "Clove", "Toffee"],
    rating: 4.0,
    notes:
      "Roasted almonds, toffee sweetness, and gentle citrus create an inviting, full-bodied cup.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2025-10-01",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 4.0,
          body: 4.0,
          clarity: 3.5,
          aftertaste: 4.0,
        },
      },
    ],
  },
  {
    title: "Producer Series Ratnagiri Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur, Karnataka, India",
    category: "Anaerobic",
    flavorTags: [
      "Jasmine",
      "Custard Apple 🍎",
      "Forest Honey 🍯",
      "Earl Grey Tea",
    ],
    rating: 4.8,
    notes:
      "One of the most complex cups recorded: jasmine aroma, sweet custard apple, raw honey, and an exquisite tea finish.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2025-10-01",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 4.5,
          body: 3.5,
          clarity: 5.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Liora",
    roaster: "Fraction 9",
    origin: "Ratnagiri Estate, Karnataka, India",
    category: "Anaerobic",
    flavorTags: ["Raspberry Candy", "Red Grapes 🍇", "Velvet Cherry 🍒"],
    rating: 4.5,
    notes:
      "Intense confectionery sweetness of raspberry candy and maraschino cherries with juicy red grape acidity.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2025-09-08",
        tasteProfile: {
          acidity: 4.5,
          sweetness: 5.0,
          body: 4.0,
          clarity: 5.0,
          aftertaste: 4.5,
        },
      },
    ],
  },
  {
    title: "Whiskey Barrel Aged",
    roaster: "Siolim",
    origin: "Ratnagiri Estate, Karnataka, India",
    category: "Barrel",
    flavorTags: ["Caramel Chocolate", "Mixed Berries", "Malty"],
    rating: 5.0,
    notes:
      "Flawless barrel integration. Bourbon vanilla, rich malt liquorice, cocoa fudge, and dark summer berries.",
    recipes: [
      {
        method: "AeroPress",
        lastBrewed: "2025-08-27",
        tasteProfile: {
          acidity: 3.0,
          sweetness: 4.5,
          body: 4.5,
          clarity: 3.5,
          aftertaste: 5.0,
        },
      },
    ],
  },
  {
    title: "Blonde Caramel - Speciality Blend",
    roaster: "Toffee Coffee Roasters",
    origin: "Karnataka, India",
    category: "Blend",
    flavorTags: ["Butterscotch", "Caramel Fudge", "Roasted Pecans"],
    rating: 4.0,
    notes:
      "Dense crema, sweet caramelized brown sugar, and toasted nuts through a traditional moka pot.",
    recipes: [
      {
        method: "Moka Pot",
        lastBrewed: "2025-08-01",
        tasteProfile: {
          acidity: 2.0,
          sweetness: 4.5,
          body: 5.0,
          clarity: 2.5,
          aftertaste: 4.5,
        },
      },
    ],
  },
];

const BREW_METHODS = [
  {
    id: "aeropress",
    name: "AeroPress",
    type: "Immersion & Gentle Air Pressure",
    isFavorite: true,
    badgeText: "Daily Driver",
    summary:
      "Sweet, syrupy, and incredibly forgiving. Highlights origin florality with zero sediment.",
    image: "images/aero1.jpg",
    recipes: [
      {
        recipeTitle: "Daily Driver (Standard Inverted)",
        coffee: "16g",
        water: "240g",
        ratio: "1:15",
        grind: "Medium Fine",
        temperature: "92°C",
        brewTime: "2:10",
        steps: [
          "Rinse paper filter with hot water and set aside.",
          "Assemble AeroPress in inverted position with plunger set at number 4.",
          "Add 16g medium-fine coffee into the chamber.",
          "Pour 240g water at 92°C over 30 seconds, soaking all grounds evenly.",
          "Gently paddle stir 3 times back-and-forth; attach cap securely.",
          "At 1:35, carefully flip onto a sturdy warmed carafe.",
          "Press slowly for 35 seconds until you hear the soft hiss at 2:10.",
        ],
        notes:
          "Produces high natural sweetness, rounded body, and balanced stone-fruit clarity.",
        tasteNotes: ["Stone Fruit Sweetness", "Honeyed Body", "Clean Finish"],
      },
      {
        recipeTitle: "Competition Bloom & Bypass",
        coffee: "20g",
        water: "100g (Concentrate) + 100g Bypass",
        ratio: "1:10 + Bypass",
        grind: "Medium Coarse",
        temperature: "86°C",
        brewTime: "1:45",
        steps: [
          "Place two rinsed paper filters into the cap.",
          "Set AeroPress in standard (upright) position over a glass carafe.",
          "Add 20g medium-coarse grounds and level the coffee bed.",
          "Pour 100g water at 86°C vigorously in 15 seconds.",
          "Stir vigorously 10 times to hyper-extract delicate aromatics.",
          "Insert plunger and press steadily down at 1:00, completing the press by 1:30.",
          "Dilute (bypass) the concentrate with 100g clean water at 75°C and swirl.",
        ],
        notes:
          "Championship formula: tea-like mouthfeel, explosive florality, and delicate citrus acidity.",
        tasteNotes: ["Jasmine Florals", "Crisp Bergamot", "Silky Tea Texture"],
      },
    ],
  },
  {
    id: "french-press",
    name: "French Press",
    type: "Full Immersion Extraction",
    isFavorite: false,
    badgeText: "Classic Immersion",
    summary:
      "Rich, enveloping mouthfeel with deep chocolate sweetness and full aromatic oils.",
    image: "images/frenchpress.jpg",
    recipes: [
      {
        recipeTitle: "Hoffmann Clarity Immersion",
        coffee: "30g",
        water: "500g",
        ratio: "1:16.6",
        grind: "Medium (Not Extra Coarse)",
        temperature: "95°C",
        brewTime: "9:00",
        steps: [
          "Preheat beaker and add 30g medium ground coffee.",
          "Pour 500g boiling water rapidly, ensuring full saturation.",
          "Leave undisturbed for 4 minutes with no lid.",
          "At 4:00, gently stir the surface crust with a spoon so grounds sink.",
          "Skim off remaining floating foam and light silts using two spoons.",
          "Insert plunger on top just above the liquid level (do NOT plunge).",
          "Wait 5 minutes for all fines to settle at the bottom.",
          "Gently pour out the clear supernatant coffee into cups.",
        ],
        notes:
          "Virtually sediment-free French Press coffee that preserves complex terroir and juicy fruit notes.",
        tasteNotes: ["Clean Cocoa", "Red Berries", "Refined Texture"],
      },
      {
        recipeTitle: "Traditional Full-Bodied Steep",
        coffee: "35g",
        water: "500g",
        ratio: "1:14",
        grind: "Coarse",
        temperature: "93°C",
        brewTime: "4:30",
        steps: [
          "Add 35g coarse grounds to the glass carafe.",
          "Pour 500g water at 93°C in concentric circles.",
          "Stir thoroughly 5 times with a wooden or plastic paddle.",
          "Place lid with plunger pulled up to retain brewing heat.",
          "At 4:00, steadily push plunger all the way down in 30 seconds.",
          "Decant immediately to prevent over-extraction in the carafe.",
        ],
        notes:
          "Heavy velvet mouthfeel, roasted pecan warmth, and caramelized sugar presence.",
        tasteNotes: [
          "Dark Chocolate Fudge",
          "Roasted Pecans",
          "Heavy Velvet Body",
        ],
      },
    ],
  },
  {
    id: "moka-pot",
    name: "Moka Pot",
    type: "Steam Pressure Percolation",
    isFavorite: false,
    badgeText: "Stovetop Classic",
    summary:
      "Thick crema, caramelized sweetness, and intense syrupy concentration.",
    image: "images/moka.jpg",
    recipes: [
      {
        recipeTitle: "Specialty Low-Bitterness Method",
        coffee: "18g",
        water: "180g (Boiling preheat)",
        ratio: "1:10",
        grind: "Fine (Finer than drip, coarser than espresso)",
        temperature: "Off-the-boil water in base",
        brewTime: "2:30",
        steps: [
          "Preheat lower chamber with fresh boiling water up to just below the safety valve.",
          "Fill filter basket with 18g coffee; level with finger without tamping.",
          "Using a towel to hold the hot base, screw upper chamber securely.",
          "Place on stove over medium-low heat with lid wide open.",
          "Watch for rich, honey-toned stream flowing steadily from the column.",
          "The instant the stream pales in color and begins to sputter, immediately remove from heat.",
          "Submerge base in a bowl of cold water or run under cold tap to halt extraction immediately.",
        ],
        notes:
          "Eliminates scorching and ashiness; showcases caramel, toasted hazelnut, and dark cherry.",
        tasteNotes: ["Salted Caramel", "Dark Cherry", "Creamy Mouthfeel"],
      },
      {
        recipeTitle: "Classic Milk-Base Extraction",
        coffee: "20g",
        water: "200g",
        ratio: "1:10",
        grind: "Fine",
        temperature: "Hot water base",
        brewTime: "3:00",
        steps: [
          "Dose 20g medium-dark roast coffee evenly in the funnel.",
          "Assemble unit tightly with preheated water in bottom chamber.",
          "Brew over low heat until 80% of upper reservoir is filled.",
          "Pour into warmed cups; pair 1:1 with textured microfoam milk or condensed milk.",
        ],
        notes:
          "High strength, bold molasses sweetness, and remarkable density in milk beverages.",
        tasteNotes: ["Molasses", "Baker's Cocoa", "Warm Toffee"],
      },
    ],
  },
  {
    id: "south-indian-filter",
    name: "South Indian Filter",
    type: "Gravity Decoction Dripper",
    isFavorite: false,
    badgeText: "Traditional Heritage",
    summary:
      "Dense, viscous herbal decoction traditionally balanced with frothy scalded milk.",
    image: "images/sicf.jpg",
    recipes: [
      {
        recipeTitle: "Authentic 80:20 Chicory Decoction",
        coffee: "25g",
        water: "100g",
        ratio: "1:4",
        grind: "Fine (Powder-fine grind)",
        temperature: "96°C",
        brewTime: "15 to 20 mins",
        steps: [
          "Add 25g freshly ground coffee-chicory blend to upper brass chamber.",
          "Insert pierced pressing disc lightly on top to level bed; do not pack tight.",
          "Pour 100g water right off the boil evenly over the pressing disc.",
          "Cover with brass lid and let gravity filter uninterrupted for 15 minutes.",
          "Collect the thick, syrupy first-press decoction collected in the bottom vessel.",
          "Pour 40ml decoction into a Dabarah with 100ml hot scalded whole milk and jaggery/sugar.",
          "Pour back and forth between cup and Dabarah from height to create rich froth.",
        ],
        notes:
          "Traditional South Indian Kaapi profile: velvety body, earthy caramel sweetness, and rich foam.",
        tasteNotes: ["Jaggery Caramel", "Earthy Chicory", "Velvet Foam"],
      },
      {
        recipeTitle: "Specialty 100% Arabica Slow Drip",
        coffee: "20g (Pure Arabica Washed/Natural)",
        water: "100g",
        ratio: "1:5",
        grind: "Medium-Fine",
        temperature: "92°C",
        brewTime: "10 mins",
        steps: [
          "Add 20g 100% Arabica medium-fine grounds without chicory.",
          "Place tamper disc gently on top.",
          "Pour 100g water at 92°C.",
          "Cover and allow 10-minute drip extraction.",
          "Serve decoction over clear ice or enjoy black for a uniquely dense single-origin profile.",
        ],
        notes:
          "Clean, syrupy single-origin extraction with zero chicory bitterness and elevated citrus acidity.",
        tasteNotes: ["Cane Sugar", "Ripe Plum", "Silky Cocoa"],
      },
    ],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    type: "Slow Cold Water Steeping",
    isFavorite: false,
    badgeText: "Chilled Infusion",
    summary:
      "Zero astringency, smooth rounded body, and naturally elevated chocolate sweetness.",
    image: "images/cold-brew.jpg",
    recipes: [
      {
        recipeTitle: "12-Hour Ready-to-Drink Brew",
        coffee: "50g",
        water: "600g",
        ratio: "1:12",
        grind: "Coarse (Raw Sugar crystal size)",
        temperature: "Cold / Ambient Filtered Water",
        brewTime: "12 Hours",
        steps: [
          "Add 50g coarse coffee to a clean infusion vessel or mesh bag.",
          "Pour 600g chilled filtered water slowly to moisten all grounds.",
          "Stir with a long bar spoon until no dry pockets remain.",
          "Seal jar airtight and refrigerate at 4°C to 6°C for 12 hours.",
          "Strain brew through a fine metal sieve, then pass through paper filter.",
          "Serve straight over a single crystal-clear ice block with an orange peel twist.",
        ],
        notes:
          "Refreshing, crisp, notes of milk chocolate, sweet lemon verbena, and dark raisins.",
        tasteNotes: ["Milk Chocolate", "Orange Peel", "Sweet Dried Raisin"],
      },
      {
        recipeTitle: "24-Hour Rich Nitro Concentrate",
        coffee: "100g",
        water: "500g",
        ratio: "1:5 Concentrate",
        grind: "Medium-Coarse",
        temperature: "Ambient Room Temp (20°C)",
        brewTime: "24 Hours",
        steps: [
          "Combine 100g coffee grounds with 500g room-temperature water.",
          "Cover and steep at room temperature for 24 hours.",
          "Filter twice through dense cotton cloth or V60 paper.",
          "Bottle and keep refrigerated for up to 14 days.",
          "Dilute 1:1 with tonic water, sparkling water, or oat milk.",
        ],
        notes:
          "Dense, viscous liqueur-like concentration with high cocoa and vanilla presence.",
        tasteNotes: ["Vanilla Pod", "Dark Fudge", "Black Currant"],
      },
    ],
  },
  {
    id: "coffee-dripper-machine",
    name: "Coffee Dripper Machine",
    type: "Automated Showerhead Percolation",
    isFavorite: false,
    badgeText: "Consistent Batch",
    summary:
      "Temperature-regulated showerhead spray delivering uniform, balanced daily pots.",
    image: "images/dm.jpg",
    recipes: [
      {
        recipeTitle: "Golden Cup Standard Batch",
        coffee: "30g",
        water: "500g",
        ratio: "1:16.6",
        grind: "Medium (Table salt texture)",
        temperature: "Machine Controlled (93°C)",
        brewTime: "4:30",
        steps: [
          "Insert bleached paper basket filter; rinse with warm water and drain carafe.",
          "Dose 30g medium-ground coffee into the brew basket and shake flat.",
          "Fill water reservoir with 500g fresh filtered water (mineral level 75-120 ppm).",
          "Start machine and monitor the initial showerhead bloom.",
          "Once cycle completes at ~4:30, gently swirl thermal carafe before serving.",
        ],
        notes:
          "Balanced everyday cup highlighting sweet milk chocolate, red apple, and toasted nuts.",
        tasteNotes: [
          "Red Apple Crispness",
          "Toasted Almond",
          "Balanced Acidity",
        ],
      },
      {
        recipeTitle: "Manual Pre-Infusion Single-Origin Carafe",
        coffee: "36g",
        water: "600g",
        ratio: "1:16.6",
        grind: "Medium-Coarse",
        temperature: "Machine Controlled (94°C)",
        brewTime: "5:00",
        steps: [
          "Add 36g lightly roasted single-origin coffee to brew basket.",
          "Start machine showerhead for 30 seconds to wet grounds, then pause toggle for 45s bloom.",
          "Unpause machine to let remaining water shower continuously.",
          "Allow full drawdown into carafe; decant immediately into porcelain mugs.",
        ],
        notes:
          "Enhanced extraction efficiency unlocking delicate floral top-notes and clean fruit acidity.",
        tasteNotes: ["Peach Floral", "Earl Grey Tea", "Sweet Cane Sugar"],
      },
    ],
  },
];

/* =========================================================================
   GALLERY MASTER LIST: Add as many local photos as you like!
   Paginates 6 at a time with the View More button.
   ========================================================================= */

const GALLERY = [
  {
    local: "images/1.jpeg",
  },
  {
    local: "images/2.jpeg",
  },
  {
    local: "images/3.jpeg",
  },
  {
    local: "images/4.jpeg",
  },
  {
    local: "images/5.jpeg",
  },
  {
    local: "images/6.jpeg",
  },
  {
    local: "images/7.jpeg",
  },
  {
    local: "images/8.jpeg",
  },
  {
    local: "images/9.jpeg",
  },
  {
    local: "images/10.jpeg",
  },
  {
    local: "images/11.jpeg",
  },
  {
    local: "images/12.jpeg",
  },
  {
    local: "images/13.jpeg",
  },
  {
    local: "images/14.jpeg",
  },
  {
    local: "images/15.jpeg",
  },
  {
    local: "images/16.jpeg",
  },
  {
    local: "images/17.jpeg",
  },
  {
    local: "images/18.jpeg",
  },
  {
    local: "images/19.jpeg",
  },
  {
    local: "images/20.jpeg",
  },
  {
    local: "images/21.jpeg",
  },
  {
    local: "images/22.jpeg",
  },
  {
    local: "images/23.jpeg",
  },
  {
    local: "images/24.jpeg",
  },
  {
    local: "images/25.jpeg",
  },
  {
    local: "images/26.jpeg",
  },
  {
    local: "images/27.jpeg",
  },
  {
    local: "images/28.jpeg",
  },
  {
    local: "images/29.jpeg",
  },
  {
    local: "images/30.jpeg",
  },
  {
    local: "images/31.jpeg",
  },
  {
    local: "images/32.jpeg",
  },
  {
    local: "images/33.jpeg",
  },
  {
    local: "images/34.jpeg",
  },
  {
    local: "images/35.jpeg",
  },
  {
    local: "images/36.jpeg",
  },
  {
    local: "images/37.jpeg",
  },
  {
    local: "images/38.jpeg",
  },
  {
    local: "images/39.jpeg",
  },
  {
    local: "images/40.jpeg",
  },
  {
    local: "images/41.jpeg",
  },
];
