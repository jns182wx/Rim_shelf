// data.js — High Dive Rum Guide
// 44 rums across 7 categories. All content sourced from the High Dive rum shelf inventory.

const RUM_DATA = {

  categories: [
    {
      id: "cat-1",
      name: "White & Light Mixing Rum",
      slug: "white-light-mixing-rum",
      emoji: "🥂",
      color: "#1A85A0",
      count: 6,
      short: "Clean, bright rums built for mixing. The workhorses of daiquiris, mojitos, and light punches.",
      description: "These are the clean, lighter-bodied rums you reach for when the rum is meant to support the drink rather than stomp across the bar wearing tiny molasses boots. They usually bring mild sugarcane, vanilla, light fruit, or faint grassy notes, but their main job is balance. This is the category for daiquiris, mojitos, rum and soda, light punches, and cocktails where brightness matters more than barrel depth.\n\nThis does not mean boring or low quality. Some white rums are simple workhorses, while others are carefully blended and surprisingly complex. In a practical bar setup, this shelf means clean, flexible, mixable, and not trying to punch your tongue through the back wall.",
      rum_slugs: ["bacardi-superior","planteray-3-stars","denizen-3-year","hamilton-white-stache","hamilton-breezeway","probitas-white"]
    },
    {
      id: "cat-2",
      name: "Spanish-Style Aged Rum",
      slug: "spanish-style-aged-rum",
      emoji: "🥃",
      color: "#B87333",
      count: 6,
      short: "Smooth, barrel-aged rums from Puerto Rico, Venezuela, Guatemala, and beyond. Caramel, vanilla, oak — approachable and crowd-friendly.",
      description: "This category covers smoother, barrel-aged rums from places like Puerto Rico, Guatemala, Venezuela, and similar Spanish-influenced rum traditions. These often lean toward caramel, vanilla, oak, baking spice, orange peel, dried fruit, and a rounder finish. They are usually less funky than Jamaican rum and less earthy than agricole, which makes them very approachable for people whose only previous rum experience involved plastic cups and regret.\n\nThese are good for sipping, spirit-forward cocktails, rum old fashioneds, or drinks where you want age and smoothness without heavy funk or smoke. Some can be sweetened or very polished, so smooth does not always mean deep, but they are crowd-friendly and useful.",
      rum_slugs: ["diplomatico-reserva-exclusiva","don-q-gold","bacardi-reserva-ocho","havana-club-anejo","ron-zacapa-23","ron-del-barrilito"]
    },
    {
      id: "cat-3",
      name: "Jamaican Funk & Pot-Still Rum",
      slug: "jamaican-funk-pot-still-rum",
      emoji: "🍌",
      color: "#2E7D32",
      count: 7,
      short: "Bold, aromatic Jamaican rums with fruit, funk, and pot-still weight. Essential for tiki, punches, and mai tais.",
      description: "This is where rum stops behaving politely. Jamaican rum is famous for bold fruit, molasses, overripe banana, pineapple, spice, and that wild fermented funk people either love immediately or stare at like it just crawled out of the drain. Pot-still character is often heavier, richer, and more aromatic than lighter column-still rums.\n\nThese are excellent when you want the rum to actually announce itself in a cocktail. They are essential for tiki drinks, punches, mai tais, jungle birds, and anything that needs backbone. Not all Jamaican rum is extreme, but this category exists because Jamaican bottles generally bring more personality than the average smooth aged rum.",
      rum_slugs: ["planteray-xaymaca","worthy-park-109","appleton-signature","appleton-12-year","hamilton-jamaican-pot-still-black","wray-nephew-overproof","smith-cross-jamaica"]
    },
    {
      id: "cat-4",
      name: "Demerara / Guyana Rum",
      slug: "demerara-guyana-rum",
      emoji: "⚓",
      color: "#6D4C41",
      count: 5,
      short: "Dark, rich rums from Guyana with deep molasses, brown sugar, and burnt caramel. The bass line of tiki cocktails.",
      description: "Demerara rum comes from Guyana and is known for deep, dark, rich flavors: brown sugar, molasses, toffee, burnt caramel, dried fruit, spice, and sometimes a smoky or earthy edge. These rums often feel heavier and darker than Spanish-style aged rum, but less fruity-funky than Jamaican rum. Basically, this is the category for when a cocktail needs a bass line.\n\nDemerara rums are especially important in tiki and classic rum drinks because they add weight, depth, and that dark sugar richness that makes the whole thing feel finished. The overproof ones can be powerful, so treat them like a useful tool rather than a dare issued by a bad uncle.",
      rum_slugs: ["hamilton-86-demerara","el-dorado-3-year","el-dorado-5-year","el-dorado-12-year","lemon-hart-151"]
    },
    {
      id: "cat-5",
      name: "Dark, Navy & Overproof Blends",
      slug: "dark-navy-overproof-blends",
      emoji: "🏴‍☠️",
      color: "#455A64",
      count: 7,
      short: "The serious mixing artillery shelf. Dark, strong, or blended for impact — zombies, navy grogs, dark punches, and floats.",
      description: "This is the serious mixing artillery shelf. These rums are usually darker, stronger, richer, or blended for intensity. Some are navy-style blends, some are blackstrap-style, some are overproof, and some are just built to survive citrus, syrups, bitters, ice, and human overconfidence. They can bring molasses, burnt sugar, oak, spice, dried fruit, black tea, and sometimes a little roughness around the edges.\n\nThis is not always the shelf for delicate sipping. It is the shelf for drinks that need impact: zombies, navy grogs, dark rum swizzles, tiki builds, floats, and anything where the rum has to remain visible after the rest of the cocktail ingredients form a committee.",
      rum_slugs: ["planteray-oftd","planteray-original-dark","planteray-mister-fogg","cruzan-black-strap","hamilton-lost-voyage","goslings-black-seal","pussers-admiralty"]
    },
    {
      id: "cat-6",
      name: "Cane-Juice Spirits",
      slug: "cane-juice-spirits",
      emoji: "🌿",
      color: "#558B2F",
      count: 9,
      short: "Agricole, cachaça, clairin, arrack, and charanda — fresh sugarcane spirits that taste like fields, not caramel. Grassy, earthy, expressive.",
      description: "This category is for rum-adjacent and cane-based spirits made from fresh sugarcane juice or related traditions rather than the more common molasses base. These can taste grassy, herbal, earthy, floral, funky, mineral, smoky, or vegetal. They are often less vanilla-caramel dessert and more raw agricultural cane character, which is praise, even if it sounds like something a field would mutter during a storm.\n\nThis category is broad on purpose. Rhum agricole from Martinique, cachaça from Brazil, clairin from Haiti, Batavia arrack from Indonesia, and charanda from Mexico are not the same thing. But they belong together because they behave differently from standard molasses rums and bring a more direct, expressive cane profile.",
      rum_slugs: ["rhum-jm-vsop","rhum-jm-terroir-volcanique","novo-fogo-silver","novo-fogo-barrel-aged","batavia-arrack","uruapan-charanda","rhum-clement-agricole-blanc","clairin-communal","rhum-clement-select-barrel"]
    },
    {
      id: "cat-7",
      name: "Flavored, Spiced & Rum Liqueurs",
      slug: "flavored-spiced-rum-liqueurs",
      emoji: "🍍",
      color: "#AD1457",
      count: 4,
      short: "Coconut, pineapple, spiced, and craft-flavored rums. Casual, sweet, and built for fun rather than rum nerd points.",
      description: "This is the shelf for rums that have been intentionally flavored, sweetened, spiced, infused, or turned into something more casual and dessert-friendly. Coconut, pineapple, vanilla, baking spice, and other added flavors are common here. They are usually not meant to be judged by the same standards as pure aged rum, because that would be like judging a milkshake for not being a steak.\n\nThese bottles are useful when you want a specific flavor quickly: coconut for tropical drinks, pineapple for tiki builds, spiced rum for easy highballs or party drinks, and local craft oddities when you want something with personality. The tradeoff is that they can be sweeter, less flexible, or less transparent about the base rum.",
      rum_slugs: ["captain-morgan-spiced","planteray-stiggins-pineapple","malibu-original","thistle-finch-necronomnomrum"]
    }
  ],

  rums: [

    // ── White & Light Mixing Rum ──────────────────────────────────────────

    {
      id: 1,
      name: "Bacardí Superior White Rum",
      slug: "bacardi-superior",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Puerto Rico",
      short: "The reliable mixing workhorse — mild, clean, and built for mojitos, Cuba libres, and any situation where the rum should stay politely in the background.",
      two_sentence: "Bacardí Superior is the go-to light rum for everyday mixing. Expect mild sweetness, a hint of vanilla, faint citrus, and very little funk — it does its job without making it a whole thing.",
      description: "Bacardí Superior is the familiar light rum workhorse: clean, soft, and intentionally unobtrusive. It is not here to impress the rum nerds polishing their tasting glasses under moonlight, but it does exactly what it is supposed to do in mojitos, Cuba libres, light rum-and-soda builds, and party-speed mixed drinks. Expect a mild sweetness, a little vanilla, faint citrus, and very little funk or barrel character.",
      flavor_tags: ["Clean", "Mild", "Vanilla", "Light citrus", "Soft"],
      best_for: ["Mojito", "Cuba Libre", "Rum & Soda", "Light punches", "Daiquiri"]
    },
    {
      id: 2,
      name: "Planteray 3 Stars White Rum",
      slug: "planteray-3-stars",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Caribbean blend",
      short: "A more flavorful white rum than the standard supermarket template — bright, fruity, and lightly grassy for daiquiris that actually taste like rum.",
      two_sentence: "Planteray 3 Stars blends Caribbean rum styles for more character than your average light rum. It is the go-to daiquiri bottle when you want actual rum flavor without turning the drink into a dissertation on fermentation.",
      description: "Planteray 3 Stars is a more flavorful white rum than the basic supermarket light-rum template. It blends Caribbean rum styles into something bright, slightly fruity, lightly grassy, and much more cocktail-friendly than its pale color suggests. This is a strong daiquiri bottle because it gives the drink actual rum flavor without turning the whole thing into a dissertation on fermentation.",
      flavor_tags: ["Bright", "Fruity", "Grassy", "Caribbean blend", "Cocktail-forward"],
      best_for: ["Daiquiri", "Mojito", "Light punches", "Rum sour", "Mixing base"]
    },
    {
      id: 3,
      name: "Denizen 3 Year Aged White Rum",
      slug: "denizen-3-year",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Guyana / Jamaica blend",
      short: "An aged-then-filtered white rum with more body and depth than basic light rum — extra structure for daiquiris and punches without adding dark color.",
      two_sentence: "Denizen 3 Year is aged for extra body and character but kept clear for clean mixing. Think soft tropical fruit, light oak, and subtle spice — more depth than neutral white rum without the color.",
      description: "Denizen 3 Year is an aged white rum, meaning it has more body and character than a totally neutral light rum, but it is still designed for clean mixing. It works well when you want a daiquiri, mojito, or punch to have a little more depth without getting darker, heavier, or aggressively funky. Think soft tropical fruit, light oak, subtle spice, and enough structure to be useful without yelling at the lime juice.",
      flavor_tags: ["Soft tropical", "Light oak", "Subtle spice", "Structured", "Aged-white"],
      best_for: ["Daiquiri", "Mojito", "Light punches", "Rum sour", "Clear mixing base"]
    },
    {
      id: 4,
      name: "Hamilton 87 White 'Stache Rum",
      slug: "hamilton-white-stache",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Caribbean blend",
      short: "A bartender-friendly house white rum with real texture and enough body to stand up in classic sours without turning every cocktail into a production.",
      two_sentence: "Hamilton White 'Stache is built to be useful rather than fancy — a clean, well-bodied white rum suited for daiquiris and classic sours. It gives you real rum texture without making every glass a showcase event.",
      description: "Hamilton White 'Stache is a bartender-friendly white rum built to be useful rather than fancy. It has a clean profile with enough body to stand up in classic cocktails, especially daiquiris and other simple sour-style drinks. It is a good 'house white rum' candidate because it gives you real rum texture without forcing every cocktail to become a showcase event, which is merciful because sometimes a drink can just be a drink.",
      flavor_tags: ["Clean", "Textured", "Balanced", "Bartender-friendly", "Reliable"],
      best_for: ["Daiquiri", "Rum sour", "House white rum", "Mojito", "Simple builds"]
    },
    {
      id: 5,
      name: "Hamilton Breezeway Blend Rum",
      slug: "hamilton-breezeway",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Caribbean blend",
      short: "A light tropical-style blend with more personality than plain white rum and less weight than dark rum — perfect for punches and easy Caribbean highballs.",
      two_sentence: "Hamilton Breezeway sits in the friendly middle zone of the shelf: more personality than neutral white rum, less weight than anything dark. It works beautifully in punches, highballs, and tropical builds where you want Caribbean warmth without heaviness.",
      description: "Hamilton Breezeway Blend is a light tropical-style mixing rum with more personality than a plain white rum but less weight than a dark or navy blend. It belongs in the bright, easy-drinking side of the shelf: punches, highballs, tropical builds, and cocktails where you want a little Caribbean warmth without making the drink heavy. It is friendly, flexible, and built for movement, like a beach drink that remembered it still had a job.",
      flavor_tags: ["Tropical", "Light", "Warm", "Flexible", "Easy-drinking"],
      best_for: ["Punches", "Highball", "Tropical cocktails", "Casual mixing", "Beach builds"]
    },
    {
      id: 6,
      name: "Probitas White Blended Rum",
      slug: "probitas-white",
      category: "White & Light Mixing Rum",
      category_slug: "white-light-mixing-rum",
      origin: "Barbados / Jamaica blend",
      short: "A brilliant example of white rum done right — crisp, slightly funky, and beautifully blended from Barbados and Jamaica for daiquiris that actually taste like rum.",
      two_sentence: "Probitas blends Barbados and Jamaican rum styles into something crisp, lightly funky, and perfectly balanced. It has enough character to taste like real rum without overwhelming the drink — the quiet correction to anyone who thinks white rum is always boring.",
      description: "Probitas is one of the best examples of how white rum does not have to mean invisible rum. It blends Barbados and Jamaican styles into something crisp, fruity, lightly funky, and beautifully suited for daiquiris. It has enough character to taste like rum instead of sweetened air, but it remains clean and balanced. If someone thinks white rum is always boring, this is the bottle you use to quietly correct them without starting a courtroom drama.",
      flavor_tags: ["Crisp", "Lightly funky", "Fruity", "Barbados-Jamaica", "Balanced"],
      best_for: ["Daiquiri", "Rum sour", "Ti' Punch style", "Light tiki", "Mixing showcase"]
    },

    // ── Spanish-Style Aged Rum ─────────────────────────────────────────────

    {
      id: 7,
      name: "Diplomático Reserva Exclusiva",
      slug: "diplomatico-reserva-exclusiva",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Venezuela",
      short: "Rich, sweet Venezuelan aged rum with caramel, vanilla, baking spice, and dark fruit — extremely approachable for sipping or spirit-forward builds.",
      two_sentence: "Diplomático Reserva Exclusiva is Venezuela's most approachable ambassador: smooth, rich, and dessert-forward with caramel, vanilla, orange peel, and baking spice. Use it where you want a round, sweet aged rum profile rather than sharp funk or dry oak.",
      description: "Diplomático Reserva Exclusiva is rich, soft, sweet-leaning Venezuelan rum with lots of dessert-like character: caramel, vanilla, orange peel, baking spice, and dark fruit. It is easy to sip and very approachable, which is why people often love it before they start arguing about dosage and production details like civilization has failed them personally. Use it where you want a round, smooth, sweet aged rum profile rather than sharp funk or dry oak.",
      flavor_tags: ["Caramel", "Vanilla", "Orange peel", "Baking spice", "Sweet", "Dark fruit"],
      best_for: ["Sipping", "Rum Old Fashioned", "Spirit-forward cocktails", "Introduction to aged rum", "Dessert cocktails"]
    },
    {
      id: 8,
      name: "Don Q Gold Rum",
      slug: "don-q-gold",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Puerto Rico",
      short: "Puerto Rico's practical middle-ground rum — mild vanilla, soft spice, and a cleaner profile suited for highballs and simple mixed builds.",
      two_sentence: "Don Q Gold is a Puerto Rican gold rum that sits usefully between light and dark. Mild barrel color, light vanilla, and soft spice make it reliable for highballs and mixed drinks without demanding a grand occasion.",
      description: "Don Q Gold is a Puerto Rican gold rum that sits in the practical middle ground between light mixing rum and deeper aged rum. It brings mild barrel color, light vanilla, soft spice, and a cleaner profile than heavier Caribbean styles. It is useful in simple mixed drinks, rum highballs, and cocktails where you want a little more warmth than white rum without dragging in a giant molasses sofa.",
      flavor_tags: ["Vanilla", "Soft spice", "Mild oak", "Gold", "Clean"],
      best_for: ["Rum & Cola", "Rum highball", "Simple builds", "Casual mixing", "Entry-level aged rum"]
    },
    {
      id: 9,
      name: "Bacardí Reserva Ocho Rum",
      slug: "bacardi-reserva-ocho",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Puerto Rico",
      short: "The more mature, polished side of Bacardí — 8 years of oak, vanilla, and dried fruit give it real depth for rum old fashioneds and spirit-forward cocktails.",
      two_sentence: "Bacardí Reserva Ocho brings more oak, vanilla, dried fruit, and sipping weight than its younger sibling. It works well in rum old fashioneds and spirit-forward cocktails when you want polish over funk.",
      description: "Bacardí Reserva Ocho is a smoother, more mature expression from the Bacardí side of the shelf. Compared with Bacardí Superior, it brings more oak, vanilla, dried fruit, spice, and sipping weight. It works in rum old fashioneds, spirit-forward tropical cocktails, and drinks where you want the rum to feel polished but still familiar. It is not a funk bomb; it is the neatly dressed cousin who pays taxes on time.",
      flavor_tags: ["Oak", "Vanilla", "Dried fruit", "Spice", "Polished"],
      best_for: ["Rum Old Fashioned", "Sipping", "Spirit-forward cocktails", "Stirred builds", "On the rocks"]
    },
    {
      id: 10,
      name: "Havana Club Añejo Clásico",
      slug: "havana-club-anejo",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Puerto Rico (US version)",
      short: "A smooth gold rum with vanilla, toasted sugar, and mild spice — accessible and dependably useful in Cuba libres and rum punches.",
      two_sentence: "Havana Club Añejo Clásico, in its US-market form, is a Puerto Rican aged-style rum with a smooth gold profile. Vanilla, toasted sugar, and mild spice make it reliable for simple stirred drinks and classic highballs.",
      description: "Havana Club Añejo Clásico, in the U.S. market context, is a Puerto Rican aged-style rum with a smooth gold profile. Expect vanilla, toasted sugar, light oak, and mild spice. It works well in Cuba libres, rum punches, and simple stirred or built drinks where you want an easy aged rum backbone. It is accessible, not especially wild, and therefore useful, which is more than can be said for most human planning documents.",
      flavor_tags: ["Vanilla", "Toasted sugar", "Mild spice", "Light oak", "Smooth"],
      best_for: ["Cuba Libre", "Rum punch", "Simple highball", "Rum & Cola", "Easy builds"]
    },
    {
      id: 11,
      name: "Ron Zacapa 23 Sistema Solera",
      slug: "ron-zacapa-23",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Guatemala",
      short: "A luxurious Guatemalan solera-aged rum known for its smooth, sweet, dessert-like profile — caramel, vanilla, cocoa, and dried fruit for sipping or elegant cocktails.",
      two_sentence: "Ron Zacapa 23 is a polished Guatemalan solera rum with deeply smooth, sweet character. Caramel, vanilla, dried fruit, cocoa, and soft oak make it a rewarding sipper and a crowd-pleasing introduction to aged spirits.",
      description: "Ron Zacapa 23 is a polished Guatemalan solera-style aged rum known for its smooth, sweet, dark profile. It often gives notes of caramel, vanilla, dried fruit, cocoa, baking spice, and soft oak. It is built for sipping and for people who enjoy rounded, dessert-like aged spirits. It is not the driest or most austere rum on the shelf, but it is very approachable and has a luxurious feel without needing a pirate hat, thank mercy.",
      flavor_tags: ["Caramel", "Cocoa", "Dried fruit", "Vanilla", "Solera", "Smooth"],
      best_for: ["Sipping", "Rum Old Fashioned", "Spirit-forward builds", "Dessert cocktail", "After-dinner"]
    },
    {
      id: 12,
      name: "Likely Ron del Barrilito 3 Stars",
      slug: "ron-del-barrilito",
      category: "Spanish-Style Aged Rum",
      category_slug: "spanish-style-aged-rum",
      origin: "Puerto Rico",
      short: "A dry, oaky Puerto Rican aged rum that brings structure and refinement — more serious than casual gold rum, excellent in rum old fashioneds.",
      two_sentence: "Ron del Barrilito 3 Stars is a serious Puerto Rican aged rum in the dry, refined lane — oaky, structured, and more austere than sweetened Spanish-style expressions. Best for sipping or cocktails where the rum needs to bring backbone, not syrup.",
      description: "The handwritten 'Ron Bar' is most likely Ron del Barrilito 3 Stars, though this one deserves a tiny uncertainty flag. If it is Ron del Barrilito, it belongs firmly in the Puerto Rican aged rum lane: dry-to-medium, oaky, refined, and more serious than casual gold rum. It is useful for sipping, rum old fashioneds, and drinks where a Spanish-style aged rum should bring structure instead of syrupy sweetness. If the bottle turns out to be Ron Barceló, it still stays in the same category as Dominican Spanish-style aged rum.",
      flavor_tags: ["Dry", "Oak", "Refined", "Structured", "Puerto Rican"],
      best_for: ["Sipping", "Rum Old Fashioned", "Spirit-forward cocktails", "On the rocks", "Classic builds"]
    },

    // ── Jamaican Funk & Pot-Still Rum ─────────────────────────────────────

    {
      id: 13,
      name: "Planteray Xaymaca Special Dry Rum",
      slug: "planteray-xaymaca",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "A dry, aromatic Jamaican rum with fruit, spice, and genuine funk — enough personality for tiki cocktails without going completely feral.",
      two_sentence: "Planteray Xaymaca Special Dry shows off classic Jamaican character in a composed, cocktail-friendly form. Fruit, molasses, spice, and noticeable funk make it excellent in tiki drinks and mai tais without detonating the room.",
      description: "Planteray Xaymaca Special Dry is a Jamaican rum designed to show off dry, aromatic Jamaican character without going completely feral. It has fruit, spice, molasses, and noticeable funk, but it is still composed enough for cocktails where balance matters. It is great when you want Jamaican flavor in a drink without immediately detonating the room with overripe banana and industrial magic.",
      flavor_tags: ["Funky", "Dry", "Fruity", "Spice", "Aromatic", "Jamaican"],
      best_for: ["Tiki drinks", "Mai Tai", "Rum punch", "Jamaican mixing", "Daiquiri variation"]
    },
    {
      id: 14,
      name: "Worthy Park 109 Jamaica Dark Rum",
      slug: "worthy-park-109",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "A bold, dark Jamaican rum with serious muscle — rich molasses, dark fruit, roastiness, and pot-still weight that holds up in anything that needs real backbone.",
      two_sentence: "Worthy Park 109 is a dark Jamaican rum built for cocktails that need structural weight. Rich molasses, dark fruit, roastiness, and pot-still power make it essential in tiki builds and dark rum punches.",
      description: "Worthy Park 109 is a dark Jamaican rum with serious muscle: rich molasses, dark fruit, spice, roastiness, and pot-still weight. It has enough proof and flavor to stand up in tiki drinks, punches, and dark-rum builds where weaker bottles quietly disappear like cowards. This is not a delicate background rum; it is a structural beam with a Jamaican accent.",
      flavor_tags: ["Bold", "Molasses", "Dark fruit", "Roasted", "Pot-still", "Muscular"],
      best_for: ["Tiki builds", "Dark rum punch", "Zombie", "Overproof applications", "Rum mixing anchor"]
    },
    {
      id: 15,
      name: "Appleton Estate Signature Blend Rum",
      slug: "appleton-signature",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "A very useful Jamaican aged blend — classic orange peel, baking spice, and mild funk in a restrained, approachable form perfect for everyday mai tais.",
      two_sentence: "Appleton Estate Signature is the accessible gateway to Jamaican rum character: orange peel, baking spice, soft molasses, and mild funk. It handles mai tais, punches, and everyday Jamaican rum mixing without demanding an advanced degree.",
      description: "Appleton Estate Signature is a very useful Jamaican aged blend that brings classic Jamaican character in a restrained, approachable form. Expect orange peel, baking spice, soft molasses, mild funk, and enough oak to make it feel complete. It is a strong general-purpose Jamaican rum for mai tais, punches, and everyday mixing when you want flavor but not a full pot-still riot.",
      flavor_tags: ["Orange peel", "Baking spice", "Mild funk", "Soft molasses", "Approachable", "Jamaican"],
      best_for: ["Mai Tai", "Rum punch", "Tiki drinks", "General Jamaican mixing", "Accessible funk"]
    },
    {
      id: 16,
      name: "Appleton Estate 12 Year Old Rare Casks",
      slug: "appleton-12-year",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "The more mature, elegant sibling of the Appleton lineup — richer oak, dried fruit, and refined Jamaican backbone for sipping or expensive-feeling cocktails.",
      two_sentence: "Appleton Estate 12 Year brings richer oak, dried fruit, orange peel, and toasted spice to the Jamaican rum profile. It sips beautifully on its own and makes cocktails feel properly considered rather than hastily assembled.",
      description: "Appleton Estate 12 is the more mature, deeper, and more polished sibling of the Appleton lineup. It brings richer oak, dried fruit, orange peel, spice, toasted sugar, and a refined Jamaican backbone. It can sip neatly, but it also makes cocktails feel expensive in a way that may or may not be financially responsible. Use it when you want Jamaican character with elegance instead of chaos wearing a fruit hat.",
      flavor_tags: ["Oak", "Dried fruit", "Orange peel", "Toasted spice", "Refined", "Elegant"],
      best_for: ["Sipping", "Premium cocktails", "Rum Old Fashioned", "Mai Tai upgrade", "On the rocks"]
    },
    {
      id: 17,
      name: "Hamilton Jamaican Pot Still Black Rum",
      slug: "hamilton-jamaican-pot-still-black",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "Dark, funky, and unapologetically intense — heavy molasses, roasted sugar, and earthy funk for tiki builds where a small pour reshapes everything.",
      two_sentence: "Hamilton Jamaican Pot Still Black is an intensely dark and funky modifier. Heavy molasses, roasted sugar, and earthy funk can reshape a tiki drink dramatically — a little goes a very long way.",
      description: "Hamilton Jamaican Pot Still Black is dark, funky, and unapologetically intense. It brings heavy molasses, roasted sugar, overripe fruit, earthy funk, and enough color to make cocktails look like they have secrets. It is especially useful as a bold modifier in tiki drinks and dark rum cocktails. A little can reshape a drink dramatically, like adding a bass amplifier to a polite chamber ensemble.",
      flavor_tags: ["Intense", "Molasses", "Roasted", "Earthy funk", "Dark", "Pot-still"],
      best_for: ["Tiki modifier", "Dark rum float", "Punches", "Zombie", "Bold builds"]
    },
    {
      id: 18,
      name: "Wray & Nephew White Overproof Rum",
      slug: "wray-nephew-overproof",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "The overproof Jamaican legend — intensely aromatic, grassy, and funky. Built for punch applications and controlled blasts of Jamaican electricity.",
      two_sentence: "Wray & Nephew White Overproof is the iconic Jamaican overproof rum: clear, strong, and packed with grassy, fruity, funky character. It is built for punch, overproof cocktails, and small additions where maximum Jamaican impact is the entire point.",
      description: "Wray & Nephew White Overproof is a Jamaican legend for a reason. It is clear, strong, intensely aromatic, and packed with grassy, fruity, funky cane character. It is not smooth in the cozy sipping sense, and that is not the point. It is built for punch, overproof applications, high-energy cocktails, and tiny amounts where you want a blast of Jamaican electricity. Handle it with respect unless you enjoy being corrected by your own drink.",
      flavor_tags: ["Overproof", "Grassy", "Funky", "Intense", "White Jamaican", "Aromatic"],
      best_for: ["Punch base", "Overproof float", "Gunfire", "Tiki accent", "Traditional Jamaican cocktails"]
    },
    {
      id: 19,
      name: "Smith & Cross Traditional Jamaica Rum",
      slug: "smith-cross-jamaica",
      category: "Jamaican Funk & Pot-Still Rum",
      category_slug: "jamaican-funk-pot-still-rum",
      origin: "Jamaica",
      short: "Navy-strength Jamaican pot-still rum with banana, pineapple, and warm fermented funk — powerful enough to announce itself in any cocktail it joins.",
      two_sentence: "Smith & Cross is a navy-strength Jamaican rum with big pot-still character: banana, pineapple, spice, molasses, and funky warmth. It makes itself known in tiki builds and classic rum cocktails even when surrounded by citrus, syrups, and other assertive ingredients.",
      description: "Smith & Cross is a navy-strength Jamaican rum with big pot-still character: banana, pineapple, spice, molasses, and warm fermented funk. It is beloved in tiki and classic rum cocktails because it makes itself known even when surrounded by citrus, syrups, bitters, and assorted bar nonsense. It is powerful but not crude, and it gives drinks a huge aromatic lift. This bottle is what happens when rum decides subtlety is optional.",
      flavor_tags: ["Banana", "Pineapple", "Navy strength", "Pot-still", "Funky", "Aromatic"],
      best_for: ["Tiki drinks", "Mai Tai", "Rum punch", "Jungle Bird", "Classic Jamaica cocktails"]
    },

    // ── Demerara / Guyana Rum ─────────────────────────────────────────────

    {
      id: 20,
      name: "Hamilton 86 Demerara River Rum",
      slug: "hamilton-86-demerara",
      category: "Demerara / Guyana Rum",
      category_slug: "demerara-guyana-rum",
      origin: "Guyana",
      short: "A deep, reliable Guyana rum with dark molasses, brown sugar, and earthy richness — the working baseline for tiki drinks that need Demerara weight.",
      two_sentence: "Hamilton 86 Demerara River is a workhorse Guyana rum with deep molasses, brown sugar, dark fruit, and earthy richness. It makes cocktails feel properly built, especially tiki drinks and classics needing that dark Demerara foundation.",
      description: "Hamilton 86 Demerara River is a workhorse Guyana rum with deep molasses, brown sugar, dark fruit, and earthy richness. It is one of those bottles that makes cocktails feel properly built, especially tiki drinks, dark rum punches, and classics needing Demerara weight. It is not overly precious, which is good, because bars need bottles that work hard instead of simply posing in backlit glass shelves.",
      flavor_tags: ["Molasses", "Brown sugar", "Dark fruit", "Earthy", "Demerara", "Rich"],
      best_for: ["Tiki drinks", "Dark rum punch", "Zombie", "Navy Grog", "Demerara foundation"]
    },
    {
      id: 21,
      name: "El Dorado 3 Year Old Rum",
      slug: "el-dorado-3-year",
      category: "Demerara / Guyana Rum",
      category_slug: "demerara-guyana-rum",
      origin: "Guyana",
      short: "An aged-then-filtered Guyana white rum with gentle Demerara sweetness and texture — more body than basic light rum without adding dark color.",
      two_sentence: "El Dorado 3 Year is an aged white rum from Guyana — light in color but with soft Demerara sweetness and rounder body than plain light rum. It works in daiquiris, punches, and lighter cocktails where more texture is welcome.",
      description: "El Dorado 3 Year is a filtered aged white rum from Guyana, giving you some of the softness and texture of aging while staying clear and mixable. It is cleaner and lighter than the older El Dorado bottlings, but it still carries a gentle Demerara sweetness and roundness. Use it in daiquiris, mojitos, punches, and lighter cocktails where you want more body than basic white rum without adding dark color.",
      flavor_tags: ["Light", "Demerara sweetness", "Soft", "Clear", "Textured"],
      best_for: ["Daiquiri", "Mojito", "Light punches", "Clear mixing base", "Accessible Demerara"]
    },
    {
      id: 22,
      name: "El Dorado 5 Year Old Rum",
      slug: "el-dorado-5-year",
      category: "Demerara / Guyana Rum",
      category_slug: "demerara-guyana-rum",
      origin: "Guyana",
      short: "A versatile medium-aged Demerara rum with caramel, oak, and brown sugar depth — the all-purpose aged mixing rum that handles nearly everything.",
      two_sentence: "El Dorado 5 Year is a medium-aged Demerara rum that sits between light and heavy — caramel, vanilla, oak, and brown sugar depth without the weight of older expressions. It handles rum-and-coke builds, punches, and tiki recipes without demanding ceremony.",
      description: "El Dorado 5 is a medium-aged Demerara rum with caramel, oak, vanilla, mild spice, and brown sugar depth. It is very useful as an all-purpose aged mixing rum when you want richness without jumping all the way to a heavier 12-year profile. It can handle simple rum-and-coke style drinks, punches, tiki recipes, and casual sipping without demanding a velvet chair and dramatic lighting.",
      flavor_tags: ["Caramel", "Vanilla", "Brown sugar", "Mild spice", "Versatile", "Oak"],
      best_for: ["Rum & Cola", "Punches", "Tiki mixing", "Casual sipping", "All-purpose aged rum"]
    },
    {
      id: 23,
      name: "El Dorado 12 Year Old Rum",
      slug: "el-dorado-12-year",
      category: "Demerara / Guyana Rum",
      category_slug: "demerara-guyana-rum",
      origin: "Guyana",
      short: "A rich, plush Guyana aged rum with toffee, molasses, and dried fruit — good for sipping and spirit-forward cocktails that need serious dark Demerara depth.",
      two_sentence: "El Dorado 12 Year is richer, darker, and more rounded than its younger siblings. Toffee, molasses, dried fruit, oak, and soft Demerara heaviness make it a satisfying sipper and a serious addition to spirit-forward rum cocktails.",
      description: "El Dorado 12 is richer, darker, and more rounded than the younger El Dorado rums. Expect molasses, toffee, dried fruit, oak, vanilla, and a soft Demerara heaviness. It works as a sipper for people who enjoy a plush aged rum, but it also brings serious depth to spirit-forward cocktails. This is the comfortable leather chair of the Guyana section, minus the part where someone insists on talking about cigars.",
      flavor_tags: ["Toffee", "Molasses", "Dried fruit", "Oak", "Plush", "Rich"],
      best_for: ["Sipping", "Spirit-forward cocktails", "Rum Old Fashioned", "Premium punches", "On the rocks"]
    },
    {
      id: 24,
      name: "Lemon Hart 151 Overproof Demerara Rum",
      slug: "lemon-hart-151",
      category: "Demerara / Guyana Rum",
      category_slug: "demerara-guyana-rum",
      origin: "Guyana",
      short: "A high-proof Demerara rum built for impact — dark sugar, molasses, and burnt caramel at 151 proof, the classic tiki float tool.",
      two_sentence: "Lemon Hart 151 is a high-proof Demerara rum that does not gently suggest flavor — it dominates. Dark sugar, molasses, burnt caramel, and a powerful backbone make it the essential tool for overproof tiki applications.",
      description: "Lemon Hart 151 is a high-proof Demerara rum built for impact. It brings dark sugar, molasses, burnt caramel, spice, and a powerful alcoholic backbone that can dominate if used carelessly. In tiki drinks, it is a classic tool for adding depth, heat, and that unmistakable dark Demerara punch. Use it in measured amounts, because this bottle does not gently suggest flavor; it files paperwork and annexes the cocktail.",
      flavor_tags: ["Overproof", "Dark sugar", "Burnt caramel", "Molasses", "Spice", "Intense"],
      best_for: ["Overproof float", "Zombie", "Tiki punch", "Dark & Stormy variation", "Measured accent"]
    },

    // ── Dark, Navy & Overproof Blends ─────────────────────────────────────

    {
      id: 25,
      name: "Planteray O.F.T.D. Overproof Rum",
      slug: "planteray-oftd",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "Multi-Caribbean blend",
      short: "A big, dark, overproof blend built for cocktail force — molasses, dried fruit, and spice at high proof for tiki builds where impact is the brief.",
      two_sentence: "Planteray O.F.T.D. is an overproof dark blend that brings molasses, brown sugar, dried fruit, and serious heat to high-energy cocktails. A great tool for tiki recipes calling for dark overproof rum — not something to free-pour while trusting your future self.",
      description: "Planteray O.F.T.D. is a big, dark, overproof blend built for flavor and force. It brings molasses, brown sugar, dried fruit, spice, and heat, with enough intensity to power through tiki builds and strong punches. It is a great cocktail tool when a recipe calls for dark overproof rum, but it is not something to free-pour while trusting your future self. Future self is usually an unreliable witness.",
      flavor_tags: ["Overproof", "Molasses", "Dried fruit", "Spice", "Heat", "Dark blend"],
      best_for: ["Tiki builds", "Zombie", "Punch power", "Overproof float", "Strong cocktails"]
    },
    {
      id: 26,
      name: "Planteray Original Dark Rum",
      slug: "planteray-original-dark",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "Barbados / Jamaica blend",
      short: "A versatile dark blend with molasses, vanilla, banana, and spice — more personality than gold rum and a natural fit for tropical highballs and punches.",
      two_sentence: "Planteray Original Dark is a friendly, flexible dark rum blend with notes of molasses, vanilla, banana, and light oak. It is deeper than gold rum but approachable enough for tropical highballs and casual dark-rum mixing.",
      description: "Planteray Original Dark is a versatile dark rum blend with notes of molasses, vanilla, banana, spice, and light oak. It is friendly enough for general mixing but has more depth than a basic gold rum. It works well in tropical cocktails, dark rum highballs, punches, and recipes where you need dark rum flavor without jumping straight into overproof territory and making the glass legally interesting.",
      flavor_tags: ["Molasses", "Vanilla", "Banana", "Spice", "Versatile", "Dark blend"],
      best_for: ["Dark rum highball", "Tropical cocktails", "Punches", "Dark & Stormy", "General mixing"]
    },
    {
      id: 27,
      name: "Planteray Mister Fogg Navy Rum",
      slug: "planteray-mister-fogg",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "Multi-Caribbean blend",
      short: "A navy-style blend delivering classic dark rum richness — dark sugar, dried fruit, and spice at navy weight for grogs, punches, and serious tiki builds.",
      two_sentence: "Planteray Mister Fogg is a navy-style rum blend with dark sugar, dried fruit, spice, and enough weight for grogs and tiki cocktails. It sits in the useful zone between a sippable dark blend and a mixing cannon.",
      description: "Planteray Mister Fogg is a navy-style rum blend intended to deliver richness, strength, and classic dark-rum cocktail character. Expect dark sugar, dried fruit, spice, oak, and enough weight to hold up in grogs, punches, and tiki drinks. It sits in the useful zone between 'sippable dark blend' and 'mixing cannon,' which is exactly why it deserves its own space in this category.",
      flavor_tags: ["Navy style", "Dark sugar", "Dried fruit", "Spice", "Oak", "Weighted"],
      best_for: ["Navy Grog", "Tiki builds", "Dark rum punch", "Painkiller", "Rum swizzle"]
    },
    {
      id: 28,
      name: "Cruzan Black Strap Rum",
      slug: "cruzan-black-strap",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "US Virgin Islands",
      short: "Dark, heavy, and aggressively molasses-forward — best used as a measured flavor accent in floats and punches rather than as a primary spirit.",
      two_sentence: "Cruzan Black Strap brings deep blackstrap molasses flavor, dark sweetness, and significant weight. Its best role is as an accent — floats, tropical drinks, or dark punches where you want that blackstrap note in controlled doses.",
      description: "Cruzan Black Strap is dark, sweet, and heavy with molasses-like flavor. It is not a subtle aged rum and should not be treated like one. Its best role is as a flavor accent: floats, tropical drinks, dark punches, and cocktails that specifically want that blackstrap note. Used carefully, it adds dramatic depth; used casually, it can make every drink taste like a molasses factory gained sentience.",
      flavor_tags: ["Blackstrap molasses", "Dark", "Sweet", "Heavy", "Intense", "Modifier"],
      best_for: ["Dark float", "Tropical accent", "Dark punches", "Rum swizzle accent", "Dessert drinks"]
    },
    {
      id: 29,
      name: "Hamilton Beachbum Berry's Lost Voyage Rum",
      slug: "hamilton-lost-voyage",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "Multi-Caribbean blend",
      short: "A tiki-minded dark blend designed for complex tropical drinks needing layered rum character — richness, spice, and fruit depth in one bottle.",
      two_sentence: "Hamilton Lost Voyage is a cocktail-builder bottle designed for tiki drinks that need layered dark rum character. It brings richness, spice, fruit, and depth that one plain rum wouldn't deliver.",
      description: "Hamilton Lost Voyage is a tiki-minded rum blend designed for classic tropical drinks needing layered dark-rum character. It brings a mix of richness, spice, fruit, and depth that makes it useful in punches, grogs, and recipes where one plain rum would feel flat. This is a cocktail-builder bottle, not just a casual sipper, and it exists because tiki drinks apparently require both joy and advanced logistics.",
      flavor_tags: ["Tiki blend", "Rich", "Spice", "Fruit", "Layered", "Cocktail-built"],
      best_for: ["Tiki builds", "Rum punch", "Navy Grog", "Zombie", "Classic tropical cocktails"]
    },
    {
      id: 30,
      name: "Goslings Black Seal Rum",
      slug: "goslings-black-seal",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "Bermuda",
      short: "The classic dark Bermuda rum behind the Dark 'n Stormy — caramel, molasses, and rounded dark sweetness with a natural affinity for ginger beer.",
      two_sentence: "Goslings Black Seal is the Bermuda dark rum famous for the Dark 'n Stormy cocktail. Caramel, molasses, vanilla, and spice make it dependable and approachable — the bottle that correctly says 'put me with ginger.'",
      description: "Goslings Black Seal is the classic dark Bermuda rum best known for the Dark 'n Stormy style of drink. It has caramel, molasses, vanilla, spice, and a rounded dark sweetness that plays extremely well with ginger beer and lime. It is accessible and dependable, not wildly funky or obscure. This is the bottle that quietly says, 'Put me with ginger,' and for once the bottle is correct.",
      flavor_tags: ["Caramel", "Molasses", "Vanilla", "Spice", "Bermuda", "Dark"],
      best_for: ["Dark & Stormy", "Rum & Ginger", "Simple highball", "Tropical drinks", "Easy mixing"]
    },
    {
      id: 31,
      name: "Pusser's Original Admiralty Rum",
      slug: "pussers-admiralty",
      category: "Dark, Navy & Overproof Blends",
      category_slug: "dark-navy-overproof-blends",
      origin: "British navy-style blend",
      short: "A British navy-style rum with full, dark, molasses-forward weight — brown sugar, spice, and oak for painkillers, grogs, and dark rum cocktails.",
      two_sentence: "Pusser's Original Admiralty Rum is a British navy-style rum with a full, dark, molasses-forward profile. Brown sugar, spice, oak, and dried fruit make it ideal for painkillers, grogs, and dark rum cocktails with naval authority.",
      description: "Pusser's Original Admiralty Rum is a British navy-style rum with a full, dark, molasses-forward profile. It brings brown sugar, spice, oak, dried fruit, and a sturdy body that works well in painkillers, grogs, and dark rum cocktails. It has a historic naval identity, but fortunately you can enjoy it without being issued a uniform or being yelled at near a cannon.",
      flavor_tags: ["Navy style", "Brown sugar", "Spice", "Oak", "Dried fruit", "Full-bodied"],
      best_for: ["Painkiller", "Navy Grog", "Dark rum punch", "Rum & Cola", "Dark builds"]
    },

    // ── Cane-Juice Spirits ─────────────────────────────────────────────────

    {
      id: 32,
      name: "Rhum J.M V.S.O.P.",
      slug: "rhum-jm-vsop",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Martinique",
      short: "Barrel-aged Martinique agricole with grassy cane, vanilla, pepper, and dried fruit — drier and more structured than most aged rums, excellent for sipping.",
      two_sentence: "Rhum J.M V.S.O.P. is aged Martinique agricole: fresh sugarcane juice distilled and then given time in barrel for oak, spice, and dried fruit depth. Drier and more structured than most aged rums, it rewards sipping and elegant cocktail work.",
      description: "Rhum J.M V.S.O.P. is aged Martinique rhum agricole, which means it starts from fresh sugarcane juice rather than molasses and then gains oak, spice, and maturity from barrel aging. Expect grassy cane, vanilla, pepper, dried fruit, toasted oak, and a drier structure than many sweet Spanish-style rums. It is excellent for sipping or for cocktails where you want elegant, earthy cane flavor instead of dessert rum comfort.",
      flavor_tags: ["Grassy cane", "Vanilla", "Pepper", "Dried fruit", "Oak", "Agricole"],
      best_for: ["Sipping", "Ti' Punch variation", "Elegant cocktails", "Agricole exploration", "Spirit-forward builds"]
    },
    {
      id: 33,
      name: "Rhum J.M Terroir Volcanique",
      slug: "rhum-jm-terroir-volcanique",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Martinique",
      short: "Martinique agricole that leans into volcanic terroir — dry, mineral, earthy, and expressive for those ready to taste something genuinely different.",
      two_sentence: "Rhum J.M Terroir Volcanique emphasizes the dry, mineral, earthy qualities of its Martinique origin. It is not a sweet rum — it brings cane, spice, oak, and volcanic character in a structured, serious format.",
      description: "Rhum J.M Terroir Volcanique leans into the agricole idea of place: dry cane, mineral edge, spice, oak, and a more rugged Martinique character. It is not a candy-sweet rum, and that is the point. It works when you want something expressive, earthy, and structured. This is the bottle for someone ready to taste cane field, barrel, and volcanic branding all having a serious little meeting in the glass.",
      flavor_tags: ["Mineral", "Earthy", "Dry cane", "Spice", "Volcanic", "Agricole"],
      best_for: ["Sipping", "Terroir exploration", "Spirit-forward builds", "Agricole cocktails", "Neat"]
    },
    {
      id: 34,
      name: "Novo Fogo Silver Cachaça",
      slug: "novo-fogo-silver",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Brazil",
      short: "Unaged Brazilian cachaça at its most direct — bright, grassy, fresh sugarcane character ideal for caipirinhas where raw cane expression leads.",
      two_sentence: "Novo Fogo Silver is unaged Brazilian cachaça: green, herbal, slightly funky, and full of fresh sugarcane energy. The ideal caipirinha base because it lets lime and sugar show off its raw cane snap.",
      description: "Novo Fogo Silver is an unaged Brazilian cachaça with bright, grassy, fresh sugarcane character. It is ideal for caipirinhas, where lime and sugar show off its raw cane snap instead of burying it. Expect green, herbal, slightly funky notes rather than smooth vanilla or caramel. It is lively and direct, like rum's Brazilian cousin who showed up barefoot and somehow made better decisions than everyone else.",
      flavor_tags: ["Grassy", "Fresh cane", "Herbal", "Funky", "Bright", "Cachaça"],
      best_for: ["Caipirinha", "Cane-spirit sour", "Daiquiri variation", "Rum-adjacent mixing", "Brazilian cocktails"]
    },
    {
      id: 35,
      name: "Novo Fogo Barrel-Aged Cachaça",
      slug: "novo-fogo-barrel-aged",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Brazil",
      short: "Barrel-aged Brazilian cachaça that keeps the grassy cane character but adds warmth, vanilla, and polish — useful for richer caipirinhas and sours.",
      two_sentence: "Novo Fogo Barrel-Aged keeps the grassy, herbal energy of cachaça and rounds it with wood influence for warmth, spice, and vanilla. Still tastes like sugarcane — just sugarcane that owns a jacket.",
      description: "Novo Fogo Barrel-Aged takes the fresh cane character of cachaça and rounds it with wood influence. It keeps some grassy, herbal brightness but adds warmth, spice, vanilla, and a softer texture. It is useful in richer caipirinhas, simple sours, or cocktails where you want cachaça personality with a little more polish. It still tastes like cane, just cane that owns a jacket.",
      flavor_tags: ["Grassy", "Vanilla", "Spice", "Herbal", "Warm", "Aged cachaça"],
      best_for: ["Caipirinha", "Rum sour", "Spirit-forward builds", "Aged cachaça cocktails", "Mixing"]
    },
    {
      id: 36,
      name: "Batavia Arrack van Oosten",
      slug: "batavia-arrack",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Indonesia",
      short: "An Indonesian sugarcane-and-rice distillate with earthy, funky, and slightly smoky character — best as a modifier in punches, not a casual mixer.",
      two_sentence: "Batavia Arrack is an Indonesian cane-and-rice distillate with earthy, funky, slightly smoky depth from centuries of punch tradition. Used in small amounts, it adds fascinating complexity; used carelessly, it takes over the whole drink.",
      description: "Batavia Arrack is an Indonesian sugarcane-and-rice distillate with a long history in punches and old-school cocktail recipes. It has a distinctive earthy, funky, slightly smoky character that can be fascinating in small amounts and overwhelming if treated like neutral rum. It is best used as a modifier or in classic punch-style drinks where its unusual depth can add complexity. This is not a casual 'rum and cola' bottle unless chaos is the theme.",
      flavor_tags: ["Earthy", "Funky", "Smoky", "Indonesian", "Unique", "Modifier"],
      best_for: ["Classic punch", "Shrub drinks", "Modifier role", "Experimental cocktails", "Traditional punch recipes"]
    },
    {
      id: 37,
      name: "Uruapan Charanda Blanco",
      slug: "uruapan-charanda",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Michoacán, Mexico",
      short: "A Mexican sugarcane spirit from Michoacán with grassy cane, earth, fruit, and rustic freshness — one of the more unusual and interesting bottles on the shelf.",
      two_sentence: "Uruapan Charanda is a Mexican cane spirit sitting in its own lane between rum, agricole, and regional tradition. Grassy cane, earth, fruit, and mineral notes make it rewarding in sours and experimental builds.",
      description: "Uruapan Charanda is a Mexican sugarcane spirit from Michoacán, and it sits in its own fascinating lane between rum, agricole, and regional cane distillate. It can show grassy cane, earth, fruit, mineral notes, and a rustic freshness. Use it in sours, cane-spirit highballs, or experiments where ordinary rum would be too predictable. It is one of the more interesting bottles on the shelf because it refuses to be sorted neatly, the little menace.",
      flavor_tags: ["Grassy", "Earthy", "Mineral", "Rustic", "Fruity", "Mexican cane"],
      best_for: ["Rum sour", "Cane-spirit highball", "Experimental builds", "Daiquiri variation", "Spirit exploration"]
    },
    {
      id: 38,
      name: "Rhum Clément Agricole Blanc",
      slug: "rhum-clement-agricole-blanc",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Martinique",
      short: "Unaged Martinique agricole at its most direct — fresh-cut cane, grass, pepper, and herbs for ti' punch and daiquiri variations where the cane leads.",
      two_sentence: "Rhum Clément Agricole Blanc is unaged Martinique agricole: alive, green, peppery, and direct. It belongs in ti' punch and daiquiri-style drinks where fresh sugarcane character should be the entire conversation.",
      description: "Rhum Clément Agricole Blanc is unaged Martinique agricole, so expect fresh-cut cane, grass, pepper, herbs, and a dry, lively profile. It is excellent in ti' punch, daiquiri-style drinks, and cocktails where the cane itself should be the main event. This is not meant to taste like vanilla dessert rum. It tastes alive, green, and direct, like someone bottled a sugarcane field and gave it opinions.",
      flavor_tags: ["Fresh cane", "Grassy", "Pepper", "Herbs", "Dry", "Unaged agricole"],
      best_for: ["Ti' Punch", "Daiquiri variation", "Cane-juice cocktails", "Classic agricole", "Neat sipping"]
    },
    {
      id: 39,
      name: "Clairin Communal Haitian Rum",
      slug: "clairin-communal",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Haiti",
      short: "A bold, rustic Haitian cane spirit with brine, herbs, wild fruit, and earthy funk — excellent in simple drinks where its personality can actually be heard.",
      two_sentence: "Clairin Communal is Haitian cane spirit with bold, wild, expressive character: grassy cane, brine, herbs, earth, and a distinctive edge that sets it apart from polished molasses rums. It rewards curiosity and works best in simple drinks where its personality can be the entire point.",
      description: "Clairin Communal is Haitian cane spirit with bold, rustic, expressive flavor. It can bring grassy cane, brine, herbs, fruit, earth, and a wild edge that sets it apart from polished molasses rums. It is excellent in simple drinks where its personality can show, and it can also add a striking accent to tropical cocktails. This is a bottle for flavor curiosity, not for hiding under pineapple juice until it apologizes.",
      flavor_tags: ["Brine", "Herbal", "Wild", "Earthy", "Rustic", "Haitian cane"],
      best_for: ["Simple sours", "Neat exploration", "Tropical accent", "Cane-spirit builds", "Flavor-forward drinks"]
    },
    {
      id: 40,
      name: "Rhum Clément Select Barrel",
      slug: "rhum-clement-select-barrel",
      category: "Cane-Juice Spirits",
      category_slug: "cane-juice-spirits",
      origin: "Martinique",
      short: "Aged Martinique agricole with softer, rounded character — oak, vanilla, and spice over a grassy cane base, approachable for both sipping and cocktails.",
      two_sentence: "Rhum Clément Select Barrel is aged agricole with a softer, more rounded profile than unaged blanc. Oak, vanilla, spice, and light fruit sit over the grassy cane base, making it approachable for sipping and useful in cocktails.",
      description: "Rhum Clément Select Barrel is aged agricole with a softer, rounder profile than unaged blanc, but it still keeps the grassy and herbal Martinique cane identity. Expect oak, vanilla, spice, light fruit, and dry sugarcane underneath. It is approachable enough for sipping and useful in cocktails where you want an aged rum feel with agricole freshness. Think elegant cane spirit wearing shoes, but still ready to walk through a field.",
      flavor_tags: ["Oak", "Vanilla", "Spice", "Grassy", "Aged agricole", "Rounded"],
      best_for: ["Sipping", "Aged agricole cocktails", "Spirit-forward builds", "Ti' Punch variation", "Rum Old Fashioned"]
    },

    // ── Flavored, Spiced & Rum Liqueurs ───────────────────────────────────

    {
      id: 41,
      name: "Captain Morgan Original Spiced Rum",
      slug: "captain-morgan-spiced",
      category: "Flavored, Spiced & Rum Liqueurs",
      category_slug: "flavored-spiced-rum-liqueurs",
      origin: "Caribbean / US",
      short: "The mainstream spiced rum everyone recognizes — vanilla, baking spice, and caramel sweetness for rum and cola, party drinks, and familiar-flavor requests.",
      two_sentence: "Captain Morgan Original Spiced Rum is vanilla, baking spice, and caramel sweetness in a familiar, easy-drinking package. It is built for rum and cola, party highballs, and situations where someone specifically wants spiced rum.",
      description: "Captain Morgan Original Spiced Rum is the mainstream spiced rum most people recognize, with vanilla, baking spice, caramel sweetness, and a soft easy-drinking profile. It is not trying to be a serious aged rum; it is built for rum and cola, party drinks, simple highballs, and situations where the guest wants familiar spiced sweetness. It is useful to keep around because sometimes the correct bar answer is not a lecture, tragically.",
      flavor_tags: ["Vanilla", "Baking spice", "Caramel", "Sweet", "Easy-drinking", "Spiced"],
      best_for: ["Rum & Cola", "Party highball", "Simple mixing", "Spiced rum cocktails", "Casual drinks"]
    },
    {
      id: 42,
      name: "Planteray Stiggins' Fancy Pineapple Rum",
      slug: "planteray-stiggins-pineapple",
      category: "Flavored, Spiced & Rum Liqueurs",
      category_slug: "flavored-spiced-rum-liqueurs",
      origin: "Barbados",
      short: "One of the best flavored rums because it actually tastes like pineapple — ripe, spiced, and caramelized with enough rum backbone for tiki drinks and punches.",
      two_sentence: "Planteray Stiggins' Fancy Pineapple is the flavored rum that makes other flavored rums look like they weren't trying. Ripe pineapple, baking spice, caramelized fruit, and real rum backbone make it genuinely useful in tiki drinks and daiquiri variations.",
      description: "Planteray Stiggins' Fancy Pineapple is one of the better flavored rums because it tastes more like intentional pineapple infusion than cheap tropical syrup cosplay. It brings ripe pineapple, baking spice, caramelized fruit, and enough rum backbone to work beautifully in tiki drinks, daiquiri variations, punches, and split-base cocktails. It is fun, useful, and surprisingly respectable, which is a dangerous combination for any bottle involving pineapple.",
      flavor_tags: ["Pineapple", "Baking spice", "Caramelized fruit", "Backbone", "Fruity", "Tiki-friendly"],
      best_for: ["Tiki builds", "Daiquiri variation", "Rum punch", "Split-base cocktails", "Tropical drinks"]
    },
    {
      id: 43,
      name: "Malibu Original Caribbean Rum",
      slug: "malibu-original",
      category: "Flavored, Spiced & Rum Liqueurs",
      category_slug: "flavored-spiced-rum-liqueurs",
      origin: "Barbados",
      short: "Sweet coconut rum liqueur built for beach drinks, simple mixes, and anyone who specifically wants that coconut-sweet tropical flavor.",
      two_sentence: "Malibu is sweet coconut rum liqueur — coconut, sugar, vanilla, and soft tropical profile for beach drinks and casual party mixes. It knows exactly what it is, which puts it ahead of many things in life.",
      description: "Malibu is sweet coconut rum liqueur, not a dry or serious sipping rum, and it should be understood on those terms. It brings coconut, sugar, vanilla, and a soft tropical profile that works in beach drinks, simple mixes, dessert cocktails, and casual party builds. It is not complex, but it is extremely recognizable and useful when someone specifically wants that coconut-sweet flavor. Civilization contains many mysteries; Malibu's purpose is not one of them.",
      flavor_tags: ["Coconut", "Sweet", "Vanilla", "Tropical", "Liqueur", "Easy"],
      best_for: ["Coconut cocktails", "Beach drinks", "Party mixes", "Dessert cocktails", "Simple tropical builds"]
    },
    {
      id: 44,
      name: "Thistle Finch NecroNomNomRum",
      slug: "thistle-finch-necronomnomrum",
      category: "Flavored, Spiced & Rum Liqueurs",
      category_slug: "flavored-spiced-rum-liqueurs",
      origin: "Lancaster, PA",
      short: "A local Lancaster PA craft spiced rum with the kind of name that suggests it has opinions — baking spice, warmth, and house personality for highballs and experiments.",
      two_sentence: "Thistle Finch NecroNomNomRum is a local Pennsylvania craft spiced rum with a name that strongly implies it is not aiming for corporate respectability. Baking spice, sweetness, and house-style character make it a fun choice for highballs, seasonal drinks, and haunted-snack-themed cocktails.",
      description: "Thistle Finch NecroNomNomRum is a local craft spiced rum entry, and the name alone suggests it is not aiming for quiet corporate respectability. Expect it to live in the flavored/spiced lane with baking spice, sweetness, warmth, and some house-style personality depending on the batch and recipe. It is best treated as a fun local bottle for highballs, seasonal drinks, and experiments rather than as a neutral rum foundation. Also, any bottle named like a haunted snack deserves at least one weird cocktail.",
      flavor_tags: ["Spiced", "Baking spice", "Warm", "Local craft", "PA distillery", "Playful"],
      best_for: ["Rum highball", "Seasonal cocktails", "Experimental builds", "Local showcase", "Party drinks"]
    }

  ]

};
