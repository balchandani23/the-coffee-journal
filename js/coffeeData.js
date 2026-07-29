const coffeeData = [
  {
    id: "TCJ • 001",
    name: "Seethargundu Estate-Light",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Kerela",
    process: "Washed",
    brew: "Cold Brew",
    roast: "Light",
    rating: "★★★★★",
    date: "1100-1200 mt",
    reviewTitle: "Bright, Elegant & Endlessly Drinkable.",
    review: "One of the coffees that made me appreciate lighter roasts. Vibrant notes of orange and peach blend effortlessly with a delicate black tea finish, creating a cup that's crisp, refreshing, and beautifully balanced from the first sip to the last."
},

{
    id: "TCJ • 002",
    name: "Baarbara Estate, KA",
    roaster: "WAQA",
    origin: "Chikmagalur",
    process: "Washed",
    brew: "Cold Brew",
    roast: "Medium-Light",
    rating: "★★★★★",
     date: "3850-5350 ft",
    reviewTitle: "Sweet, Smooth & Wonderfully Balanced.",
    review: "A comforting medium-light roast that delivers gentle sweetness without overwhelming acidity. The cup feels clean, rounded, and approachable, making it equally enjoyable as a relaxed morning brew or an easy everyday cold brew."
},

{
    id: "TCJ • 003",
    name: "Blonde Caramel - Speciality Blend",
    roaster: "Toffee Coffee Roasters",
    origin: "Single",
    process: "Washed",
    brew: "Cold Brew, Moka Pot",
    roast: "Medium",
    rating: "★★",
     date: "3000 ft",
    reviewTitle: "Pleasant, But Missing Character.",
    review: "An approachable cup with soft caramel sweetness, but it never develops the depth or complexity I was hoping for. Easy to drink, yet it fades quickly from memory compared to the more expressive coffees in my collection."
},

{
    id: "TCJ • 004",
    name: "Hidden Falls Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Shevaroy Hills Tamil Nadu",
    process: "Natural",
    brew: "Cold Brew",
    roast: "Light",
    rating: "★★★★★",
     date: "1000-1380 mt",
    reviewTitle: "Juicy, Lively & Beautifully Expressive.",
    review: "A vibrant natural processed coffee bursting with fruit-forward character and remarkable clarity. Every sip feels bright and energetic, while the clean finish keeps the sweetness lingering long after the cup is empty."
},

{
    id: "TCJ • 005",
    name: "Thogarihunkal Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagaluraka",
    process: "Washed",
    brew: "Cold Brew",
    roast: "Medium",
    rating: "★★★★★",
     date: "1000-1400 mt",
    reviewTitle: "Comforting, Sweet & Exceptionally Reliable.",
    review: "Rich notes of brown sugar, roasted almonds, and gentle fruit sweetness create a cup that's smooth, balanced, and easy to return to every day. A dependable medium roast that never feels heavy yet remains deeply satisfying."
},

{
    id: "TCJ • 006",
    name: "Kalledevarapura Pulp Sun Dried",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur@KA",
    process: "Pulp Sun Dried",
    brew: "Cold Brew",
    roast: "Medium",
    rating: "★★★★★",
     date: "1280-1340 mt",
    reviewTitle: "Sweet, Comforting & Wonderfully Rounded.",
    review: "A coffee that strikes a beautiful balance between sweetness and body. Rich notes of brown sugar, roasted almond and raisin unfold with a smooth, lingering finish, making every cup feel warm, familiar and deeply satisfying."
},

{
    id: "TCJ • 007",
    name: "Frozen Cherry Naturals",
    roaster: "Coffeeverse",
    origin: "Baarbara Estate",
    process: "Anaerobic",
    brew: "Aeropress, French Press",
    roast: "Medium-Light",
    rating: "★★★",
     date: "4000 ft",
    reviewTitle: "Bold Experiment, Mixed Results.",
    review: "The anaerobic processing delivers an unmistakably fruity and fermented character that immediately stands out. While the cup is adventurous and memorable, its intensity occasionally overshadows the balance I usually look for in everyday brews."
},

{
    id: "TCJ • 008",
    name: "Project Young Gun",
    roaster: "SUBKO",
    origin: "Kerehaklu Estate",
    process: "76 Hrs Anoxic Naturals",
    brew: "Aeropress, French Press",
    roast: "Light",
    rating: "★★★★★",
     date: "1154 mt",
    reviewTitle: "Vibrant, Adventurous & Full of Life.",
    review: "An expressive coffee that rewards curiosity with layers of bright fruit, floral elegance and remarkable clarity. Every brew feels dynamic and evolving, proving why experimental processing can produce truly unforgettable cups."
},

{
    id: "TCJ • 009",
    name: "ST. Joseph Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Palni Hills",
    process: "Washed",
    brew: "Aeropress, French Press",
    roast: "Medium-Dark",
    rating: "★★★★★",
     date: "1300-1400 mt",
    reviewTitle: "Rich, Chocolatey & Exceptionally Smooth.",
    review: "A beautifully comforting medium-dark roast where roasted almonds, toffee sweetness and gentle citrus create an inviting cup. Full-bodied without becoming heavy, it's a coffee that feels equally suited to slow mornings and relaxed evenings."
},

{
    id: "TCJ • 010",
    name: "Warsanlyngdoh Coffee Collective",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Khasi Hills@MG",
    process: "Natural",
    brew: "Aeropress, French Press",
    roast: "Medium",
    rating: "★★★★★",
     date: "800-1500 mt",
    reviewTitle: "Wild, Fruity & Wonderfully Distinct.",
    review: "Unlike most Indian coffees I've brewed, this one carries an unmistakable fruit-forward personality. The natural process brings vibrant berry sweetness and lively acidity together in a cup that's refreshing, memorable and unlike anything else on my shelf."
},

{
    id: "TCJ • 011",
    name: "M.S. Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur@KA",
    process: "Washed",
    brew: "Aeropress, French Press",
    roast: "Medium",
    rating: "★★★★★",
     date: "900-1500 mt",
    reviewTitle: "Balanced, Familiar & Always Dependable.",
    review: "There's something reassuring about this coffee. Gentle sweetness, mellow acidity and a smooth cocoa-forward finish make it incredibly easy to enjoy day after day. It's not flashy, but its consistency is exactly what makes it memorable."
},

{
    id: "TCJ • 012",
    name: "Whiskey Barrel Aged",
    roaster: "Siolim",
    origin: "Ratnagiri Estate",
    process: "Natural",
    brew: "Aeropress, French Press",
    roast: "Medium",
    rating: "★★★★★★",
    date: "1350 mt",
    reviewTitle: "Bold, Unexpected & Completely Unforgettable.",
    review: "One of the most distinctive coffees I've ever brewed. The whiskey barrel aging adds layers of caramel, dark chocolate and subtle oak without overpowering the coffee itself, creating a cup that's bold, elegant and unlike anything else in my collection."
},

{
    id: "TCJ • 013",
    name: "Liora",
    roaster: "Fraction 9",
    origin: "Chikmagalur",
    process: "Lab Microbes Fermentation 27 Days Slow Dry",
    brew: "Aeropress, French Press",
    roast: "Light",
    rating: "★★",
     date: "1350 mt",
    reviewTitle: "Creative Processing, Modest Reward.",
    review: "An ambitious experimental coffee with plenty of character, but the processing dominates the cup more than I'd have liked. While it's fascinating to taste, it never quite finds the balance that makes me want to brew it again."
},

{
    id: "TCJ • 014",
    name: "Producer Series Ratnagiri Estate - YC 01",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Ratnagiri Estate",
    process: "76 Hrs Fermentation",
    brew: "Aeropress, French Press",
    roast: "Medium",
    rating: "★★★★★",
     date: "1500 mt",
    reviewTitle: "Complex, Floral & Remarkably Refined.",
    review: "Every cup reveals something new. Delicate jasmine florals, gentle honey-like sweetness and a refined tea-like finish come together beautifully, making this one of the most sophisticated and rewarding coffees I've had the pleasure of brewing."
},

{
    id: "TCJ • 015",
    name: "Diamante",
    roaster: "Crema Chronicles",
    origin: "Lonya Grande, Peru",
    process: "Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "1650-1950 mt",
    reviewTitle: "Elegant, Vibrant & Beautifully Expressive.",
    review: "My first memorable coffee from Peru, and it immediately stood out for its clarity and balance. Bright fruit notes, gentle sweetness and a clean finish create a cup that's vibrant without ever becoming overwhelming."
},

{
    id: "TCJ • 015",
    name: "Diamante",
    roaster: "Crema Chronicles",
    origin: "Lonya Grande, Peru",
    process: "Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "1650-1950 mt",
    reviewTitle: "Elegant, Vibrant & Beautifully Expressive.",
    review: "My first memorable coffee from Peru, and it immediately stood out for its clarity and balance. Bright fruit notes, gentle sweetness and a clean finish create a cup that's vibrant without ever becoming overwhelming."
},

{
    id: "TCJ • 017",
    name: "Amruthavarshini Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Anaerobic Naturals",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "1000-1220 mt",
    reviewTitle: "Silky, Sweet & Beautifully Layered.",
    review: "A wonderfully balanced anaerobic coffee where fruit sweetness meets gentle chocolate notes with impressive clarity. Rich enough to stay interesting, yet refined enough to remain incredibly easy to drink from the first sip to the last."
},

{
    id: "TCJ • 018",
    name: "Winter Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur, Pulney Hills",
    process: "Natural, Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "1300-1400 mt",
    reviewTitle: "Comforting, Cozy & Made for Slow Mornings.",
    review: "Everything about this blend feels inviting. Gentle sweetness, mellow spice and chocolate-forward richness come together effortlessly, making it the kind of coffee that pairs perfectly with quiet winter mornings and unhurried conversations."
},

{
    id: "TCJ • 019",
    name: "Sampigehoney Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Washed",
    brew: "Aeropress",
    roast: "Medium-Dark",
    rating: "★★★★★",
     date: "1158-1160 mt",
    reviewTitle: "Rich, Chocolatey & Comfortingly Familiar.",
    review: "A classic washed coffee with deep cocoa sweetness, roasted nuts and a smooth body that never feels overwhelming. It's the kind of dependable cup that reminds me why beautifully executed traditional coffees never go out of style."
},

{
    id: "TCJ • 020",
    name: "13TH Birthday Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "KA, TN",
    process: "Natural, Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "1129-1280 mt",
    reviewTitle: "Celebratory, Balanced & Wonderfully Crafted.",
    review: "A blend that showcases how thoughtfully selected coffees can complement one another. Bright fruit, comforting chocolate and gentle sweetness create a remarkably harmonious cup that's both approachable and memorable."
},

{
    id: "TCJ • 021",
    name: "Thogarihunkal",
    roaster: "TULUM",
    origin: "Chikmagalur, Kieni Kenya",
    process: "Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "4200 ft",
    reviewTitle: "A Beautiful Meeting of Two Origins.",
    review: "Blending Indian and Kenyan coffees is never an easy balance, yet this one feels remarkably cohesive. Bright berry-like acidity from Kenya meets the comforting sweetness of Indian coffee, resulting in a cup that's lively, layered and incredibly enjoyable."
},

{
    id: "TCJ • 022",
    name: "Baarbara Estate - Intenso Yeast",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Baarbara Estate",
    process: "Natural",
    brew: "Aeropress",
    roast: "Light",
    rating: "★★★★★",
     date: "1170-1600 mt",
    reviewTitle: "Experimental Yet Surprisingly Elegant.",
    review: "The Intenso Yeast fermentation introduces vibrant fruit complexity without feeling overpowering. Every sip reveals layers of tropical sweetness, floral aromatics and remarkable clarity, making it one of Blue Tokai's most memorable experimental releases."
},

{
    id: "TCJ • 023",
    name: "Riverdale Estate - Aroma",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Tamil Nadu",
    process: "Natural",
    brew: "Aeropress",
    roast: "Light",
    rating: "★★★★★",
     date: "1100-1432 mt",
    reviewTitle: "Bright, Delicate & Wonderfully Aromatic.",
    review: "An elegant light roast where floral aromas and juicy fruit sweetness take center stage. Its clean structure and silky finish make every cup feel refined, rewarding slow brewing with exceptional clarity and balance."
},

{
    id: "TCJ • 024",
    name: "Garigekhan Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Washed",
    brew: "Aeropress",
    roast: "Light",
    rating: "★★★★★",
     date: "1100-1400 mt",
    reviewTitle: "Classic Washed Coffee Done Right.",
    review: "This coffee proves that simplicity executed well can be extraordinary. Crisp acidity, gentle sweetness and a clean finish come together in a beautifully balanced cup that's equally approachable for newcomers and rewarding for seasoned coffee lovers."
},

{
    id: "TCJ • 025",
    name: "Silver Oak Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "KA, TN",
    process: "Natural, Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "900-1450 mt",
    reviewTitle: "Smooth, Reliable & Effortlessly Versatile.",
    review: "A thoughtfully crafted blend that delivers comforting chocolate sweetness, subtle fruit notes and an exceptionally smooth finish. Whether brewed casually or with precision, it consistently produces a balanced cup that's easy to appreciate."
},

{
    id: "TCJ • 026",
    name: "MSP Orchardale Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Tamil Nadu",
    process: "Natural",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
    date:"1400-1524 mt",
    reviewTitle: "Bright Fruit Wrapped in Silky Sweetness.",
    review: "An expressive natural coffee that immediately stands out with its vibrant fruit character and syrupy sweetness. Despite its complexity, the cup remains clean and beautifully balanced, making it both exciting to explore and incredibly easy to enjoy."
},

{
    id: "TCJ • 027",
    name: "Monsoon Malabar",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Monsooned",
    brew: "Aeropress",
    roast: "Medium-Dark",
    rating: "★★★★★",
     date: "1200-1260 mt",
    reviewTitle: "Earthy, Bold & Unmistakably Indian.",
    review: "Unlike any conventional washed coffee, Monsoon Malabar offers an earthy richness with mellow spice, woody sweetness and an incredibly smooth body. Its unique monsooning process creates a cup that's distinctive, comforting and full of character."
},

{
    id: "TCJ • 028",
    name: "Attikan Estate",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "KA",
    process: "Washed",
    brew: "Aeropress",
    roast: "Medium-Dark",
    rating: "★★★★★",
    date: "1200-1650 mt",
    reviewTitle: "The Coffee I Always Come Back To.",
    review: "If there's one coffee that defines consistency, it's Attikan Estate. Rich chocolate sweetness, roasted nuts and gentle citrus create an incredibly dependable cup that's equally satisfying on rushed mornings and slow weekend brews."
},

{
    id: "TCJ • 029",
    name: "Dhak Blend",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Natural",
    brew: "Aeropress",
    roast: "Dark",
    rating: "★★★★★",
    date: "900-1150 mt",
    reviewTitle: "Dark Without Losing Its Balance.",
    review: "Deep cocoa, roasted nuts and caramelized sweetness define this bold blend, yet it avoids the bitterness often associated with darker roasts. Full-bodied and comforting, it's a coffee that remains smooth from beginning to end."
},

{
    id: "TCJ • 030",
    name: "Vienna Roast",
    roaster: "Blue Tokai Coffee Roasters",
    origin: "Chikmagalur",
    process: "Washed",
    brew: "Aeropress",
    roast: "Dark",
    rating: "★★★★★",
     date: "1100 mt",
    reviewTitle: "Classic, Bold & Comfortingly Familiar.",
    review: "A traditional dark roast done with restraint. Rich bittersweet chocolate, toasted nuts and a lingering smoky finish create a cup that's bold enough for dark roast lovers while remaining remarkably smooth and well rounded."
},

{
    id: "TCJ • 031",
    name: "Signature",
    roaster: "Araku Coffee",
    origin: "Araku Valley",
    process: "Natural, Washed",
    brew: "Aeropress",
    roast: "Medium",
    rating: "★★★★★",
     date: "3280-3610 mt",
    reviewTitle: "A Beautiful Finish to the Journey.",
    review: "Araku's Signature blend captures everything I enjoy about specialty coffee—clarity, balance and effortless drinkability. Gentle fruit sweetness, soft cocoa and an elegant finish come together in a cup that's memorable without trying too hard."
},

];