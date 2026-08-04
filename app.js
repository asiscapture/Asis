/* Vera — camera hire catalogue */

/*
  Photos: put files in /images then refresh.
  Filenames are listed in images/README.txt
*/
const CATALOGUE = [
  /* ——— Digital cameras ——— */
  {
    id: "kodak-pixpro-fz55",
    name: "Kodak PIXPRO FZ55",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$39",
    blurb:
      "Early-2000s compact camera feel with crisp, shareable photos. Simple point-and-shoot so you can enjoy the moment.",
    hook: "The digicam that feels like the early 2000s — crisp, shareable photos with zero fuss.",
    audience:
      "Perfect for beginners, guests and anyone who wants that classic compact-camera look without learning settings. Great for parties, weekends, weddings and travel.",
    benefits: [
      "Beginner-friendly point-and-shoot design — just frame and shoot",
      "Crisp digital photos and Full HD video, ready to share",
      "Slim, lightweight body that’s easy to pass around",
      "5× optical zoom and a wide-angle lens for groups, details and everyday moments",
      "Built-in flash for indoor and evening shots",
    ],
    includes: [
      "Kodak PIXPRO FZ55 camera",
      "32GB SD card",
      "Rechargeable battery",
      "Instruction card",
    ],
    features: ["Digicam-style photos & video", "32GB SD card included", "Instruction card included"],
    tone: "cool",
    image: "images/products/kodak-pixpro-fz55/front.png",
    imageHover: "images/products/kodak-pixpro-fz55/hover.png",
    alt: "Kodak PIXPRO FZ55 digital camera for hire in Brisbane",
  },
  {
    id: "kodak-pixpro-c1",
    name: "Kodak PIXPRO C1",
    category: "digital",
    tag: "Digital",
    detail: "32GB SD included",
    price: "$35",
    blurb:
      "Easy digital capture for guests and weekends — point, shoot, and keep the night without fussing over settings.",
    hook: "A compact digicam with a flip screen — made for selfies, group shots and guests who just want to shoot.",
    audience:
      "Perfect for beginners and event guests. Great for parties, weekends and nights when you want shareable photos without film or settings.",
    benefits: [
      "Beginner-friendly point-and-shoot design",
      "Flip screen for selfies and group shots",
      "Retro compact look that feels fun to pass around",
      "Digital photos ready to share — no developing wait",
      "Lightweight and easy for guests to use",
    ],
    includes: [
      "Kodak PIXPRO C1 camera",
      "32GB SD card",
      "Battery",
      "Instruction card",
    ],
    features: ["Point & shoot", "32GB SD card included", "Beginner-friendly"],
    tone: "soft",
    image: "images/products/kodak-pixpro-c1/front.png",
    imageHover: "images/products/kodak-pixpro-c1/hover.png",
    gallery: [
      "images/products/kodak-pixpro-c1/extra-1.png",
      "images/products/kodak-pixpro-c1/extra-2.png"
    ],
    alt: "Kodak PIXPRO C1 compact digital camera hire",
  },

  /* ——— Film cameras ——— */
  {
    id: "kodak-ektar-h35",
    name: "Kodak Ektar H35",
    category: "film",
    tag: "Film",
    detail: "Includes 1 colour roll (36 exposures · up to 72 shots)",
    price: "$45",
    blurb:
      "Nostalgic film with a simple point-and-shoot experience. Half-frame means up to 72 photos on a standard 36-exposure roll.",
    hook: "The perfect half-frame film camera for anyone wanting more nostalgic shots without more fuss.",
    audience:
      "Ideal for people who love the look of film and want plenty of frames. Great for weddings, weekends, travel and parties.",
    benefits: [
      "Beginner-friendly point-and-shoot design",
      "Half-frame format — gives you 72 shots from a 36-exposure roll",
      "Creates authentic film photos with nostalgic colours",
      "Built-in flash for indoor and evening moments",
      "Lightweight and easy to carry all day",
    ],
    includes: [
      "Kodak Ektar H35 camera",
      "1 standard colour film roll (36 exposures · up to 72 half-frame shots)",
      "Battery",
      "Instruction card",
    ],
    features: ["Includes 1 colour roll (36 exposures · up to 72 shots)", "Battery & instruction card included"],
    tone: "warm",
    image: "images/products/kodak-ektar-h35/front.png",
    imageHover: "images/products/kodak-ektar-h35/hover.png",
    alt: "Kodak Ektar H35 half-frame film camera hire Brisbane",
  },
  {
    id: "kodak-m35",
    name: "Kodak M35",
    category: "film",
    tag: "Film",
    detail: "Includes 1 colour roll (36 shots)",
    price: "$39",
    blurb:
      "The nostalgic film look of a disposable — in a reusable, more sustainable design. Up to 36 photos per roll.",
    hook: "The perfect point-and-shoot film camera for anyone wanting effortless, nostalgic memories.",
    audience:
      "Perfect for beginners. Designed for people who love the look of film without the complexity. Great for weddings, birthdays, travel and everyday moments.",
    benefits: [
      "Beginner-friendly point-and-shoot design",
      "Lightweight and easy to carry",
      "Built-in flash for indoor and evening photos",
      "Creates authentic film photos with nostalgic colours",
      "Reusable — a more sustainable alternative to disposable cameras",
    ],
    includes: [
      "Kodak M35 camera",
      "1 standard colour film roll (36 shots)",
      "Battery",
      "Instruction card",
    ],
    features: ["Includes 1 standard colour roll (36 shots)", "Up to 36 photos per roll", "Battery & instruction card included"],
    tone: "soft",
    image: "images/products/kodak-m35/front.png",
    gallery: [
      "images/products/kodak-m35/extra-1.png",
      "images/products/kodak-m35/extra-2.png"
    ],
    alt: "Kodak M35 yellow reusable 35mm film camera for hire",
  },

  /* ——— Instant cameras ——— */
  {
    id: "instax-mini-evo",
    name: "Fujifilm Instax Mini Evo",
    category: "instant",
    tag: "Instant",
    detail: "Includes 1 Mini film pack (10 shots)",
    price: "$55",
    blurb:
      "Instant prints with creative modes — perfect for parties, guestbooks, and sharing on the spot.",
    hook: "A hybrid Instant favourite — preview and select before you print, so there’s no wasted film.",
    audience:
      "Perfect for parties, guest tables and anyone who wants prints during the event. Great for weddings, birthdays and nights out.",
    benefits: [
      "Preview and select photos before printing — no wasted film",
      "Print mini Instax frames in the moment",
      "Creative shooting modes for a playful, personal look",
      "Easy for guests to pick up and use",
      "Ideal for sticking favourites straight into a guestbook or album",
    ],
    includes: [
      "Fujifilm Instax Mini Evo camera",
      "1 Instax Mini film pack (10 shots)",
      "Battery",
      "Instruction card",
    ],
    features: ["Includes 1 Instax Mini pack (10 shots)", "Creative shooting modes", "Event favourite"],
    tone: "soft",
    image: "images/products/instax-mini-evo/front.png",
    imageHover: "images/products/instax-mini-evo/hover.png",
    gallery: [
      "images/products/instax-mini-evo/extra-1.png",
      "images/products/instax-mini-evo/extra-2.png"
    ],
    alt: "Fujifilm Instax Mini Evo instant camera hire",
  },
  {
    id: "instax-mini-12",
    name: "Fujifilm Instax Mini 12",
    category: "instant",
    tag: "Instant",
    detail: "Includes 1 Mini film pack (10 shots)",
    price: "$49",
    blurb:
      "Simple Instant Mini prints for spontaneous days — beginners love how easy it is to shoot and share.",
    hook: "The simplest Instax Mini — twist to turn on, shoot, and print in the moment.",
    audience:
      "Perfect for beginners, guest tables and spontaneous days. Ideal when you want classic Mini prints without creative modes or settings.",
    benefits: [
      "Beginner-friendly — twist the lens to power on and shoot",
      "Classic Instax Mini prints guests can share on the spot",
      "Lightweight and easy to pass around",
      "Automatic exposure for indoor and outdoor moments",
      "A sweet Instant option for weekends, parties and intimate events",
    ],
    includes: [
      "Fujifilm Instax Mini 12 camera",
      "1 Instax Mini film pack (10 shots)",
      "Battery",
      "Instruction card",
    ],
    features: ["Includes 1 Instax Mini pack (10 shots)", "Beginner-friendly", "Classic Mini prints"],
    tone: "warm",
    image: "images/products/instax-mini-12/front.png",
    imageHover: "images/products/instax-mini-12/hover.png",
    gallery: [
      "images/products/instax-mini-12/extra-1.png"
    ],
    alt: "Fujifilm Instax Mini 12 instant camera hire",
  },
  {
    id: "instax-square-sq40",
    name: "Fujifilm Instax Square SQ40",
    category: "instant",
    tag: "Instant",
    detail: "Includes 1 Square film pack (10 shots)",
    price: "$59",
    blurb:
      "Square Instax prints with a classic look — ideal for tables, guestbooks, and keepsake walls.",
    hook: "Square Instant prints with a classic retro look — made for tables, books and keepsake walls.",
    audience:
      "Great for weddings, parties and anyone who wants a larger Instant print than Mini. Perfect when guests will shoot and share during the day.",
    benefits: [
      "Square format with a classic Instant look",
      "Simple controls so anyone can shoot",
      "Ideal for guestbooks, tables and photo walls",
      "Prints in the moment — no waiting for a lab",
      "A polished option for celebrations and milestones",
    ],
    includes: [
      "Fujifilm Instax Square SQ40 camera",
      "1 Instax Square film pack (10 shots)",
      "Battery",
      "Instruction card",
    ],
    features: ["Includes 1 Instax Square pack (10 shots)", "Square Instax format", "Guestbook ready"],
    tone: "cool",
    image: "images/products/instax-square-sq40/front.png",
    imageHover: "images/products/instax-square-sq40/hover.png",
    gallery: [
      "images/products/instax-square-sq40/extra-1.png"
    ],
    alt: "Fujifilm Instax Square SQ40 instant camera for weddings and parties",
  },

  /* ——— Guestbooks ——— */
  {
    id: "vintage-video-guestbook",
    name: "Vintage Video Guestbook",
    category: "guestbooks",
    tag: "Guestbook",
    detail: "4-day hire · $70 refundable bond",
    price: "$199",
    blurb:
      "Guests pick up the handset and leave spoken memories you’ll actually rewatch — a vintage-feel guestbook for weddings and milestones.",
    hook: "A vintage-feel guestbook guests actually use — spoken memories you’ll want to rewatch.",
    audience:
      "Perfect for weddings, anniversaries and milestone parties. Ideal if you want something warmer than a paper guestbook, without asking everyone for a speech.",
    benefits: [
      "Guests leave spoken (and visual) messages on camera",
      "Warmer and more personal than a written guestbook",
      "Easy for guests — pick up the handset and talk",
      "Take the footage home to rewatch later",
      "A favourite for weddings and milestone celebrations",
    ],
    includes: [
      "Vintage Video Guestbook",
      "Setup guidance for your event",
      "Footage to take home after the hire",
    ],
    features: ["Spoken + video messages", "Wedding & event favourite", "Take the footage home"],
    tone: "warm",
    image: "images/products/vintage-video-guestbook/front.png",
    alt: "Vintage Video Guestbook telephone for wedding hire Brisbane",
  },

  /* ——— Keepsakes / photo items ——— */
  {
    id: "keepsake-album",
    name: "Keepsake Album",
    category: "keepsakes",
    tag: "Purchase",
    detail: "Purchase · Yours to keep · 2 colours",
    price: "$85",
    blurb:
      "A linen-cover DIY album with self-adhesive pages — arrange prints, notes and mementos your way, then seal them under clear film.",
    hook: "A linen DIY album made to hold Instant prints, notes and mementos your way.",
    audience:
      "Perfect after weddings, parties and weekends — for anyone who wants a personal album that lives off the phone. Designed for Instant prints, film prints and flat keepsakes.",
    benefits: [
      "Self-adhesive pages hold photos securely — no glue or photo corners",
      "Works with any photo size or orientation",
      "Layer photos, handwritten notes, stickers and flat mementos",
      "Reposition as many times as you like without damaging prints",
      "Linen cover with a photo window on the front — yours to keep",
    ],
    includes: [
      "Keepsake Album (yours to keep)",
      "Self-adhesive pages ready to fill",
      "Your choice of black or white — tell us when you enquire",
    ],
    colours: [
      { name: "Black Linen", swatch: "#1C1A18" },
      { name: "White Linen", swatch: "#F2F0EB" },
    ],
    howItWorks: [
      "Peel back the clear protective film",
      "Arrange your photos, notes and stickers",
      "Reposition until the layout feels right",
      "Press the film down to seal and protect everything in place",
    ],
    features: [
      "Self-adhesive pages hold photos securely — no glue or photo corners",
      "Works with any photo size or orientation",
      "Fully customisable for a personalised DIY keepsake",
    ],
    tone: "soft",
    image: "images/products/keepsake-album/front.png",
    imageHover: "images/products/keepsake-album/hover.png",
    gallery: [
      "images/products/keepsake-album/extra-1.jpg",
      "images/products/keepsake-album/extra-2.jpg"
    ],
    alt: "Keepsake Album linen DIY self-adhesive photo album in black and white",
  },
  {
    id: "film-book",
    name: "Film Strip Album",
    category: "keepsakes",
    tag: "Purchase",
    detail: "Purchase · Yours to keep",
    price: "$19",
    blurb:
      "An accordion film-strip album that folds out into a strip of prints — a display piece guests love to open.",
    hook: "An accordion film-strip album that folds out into a line of Instant prints.",
    audience:
      "Perfect as a gift, table display or small keepsake after an Instant-filled day. Ideal for Instax Mini prints.",
    benefits: [
      "Folds out into a display strip guests love to open",
      "Compact and giftable",
      "Made for Instant prints that deserve to live off the phone",
      "A simple way to keep favourite frames together",
      "Yours to keep after the day",
    ],
    includes: [
      "Film Strip Album (yours to keep)",
    ],
    features: ["Accordion film-strip layout", "Fits Instax Mini", "Yours to keep"],
    tone: "warm",
    image: "images/products/film-book/front.jpg",
    imageHover: "images/products/film-book/hover.jpg",
    gallery: [
      "images/products/film-book/extra-1.jpg",
      "images/products/film-book/extra-2.jpg"
    ],
    lifestyle: true,
    alt: "Film Strip Album accordion keepsake for Instant prints",
  },
  {
    id: "film-photo-booklet",
    name: "Film Wall Album",
    category: "keepsakes",
    tag: "Purchase",
    detail: "Purchase · Yours to keep",
    price: "$38",
    blurb:
      "A compact photo-wall album for favourite prints — small enough for a shelf, made to live off the phone.",
    hook: "A compact photo-wall album for the Instant and film prints you’ll want to keep.",
    audience:
      "Ideal for favourite frames from weddings, weekends and celebrations. Perfect if you want something shelf-friendly that still feels special.",
    benefits: [
      "Compact photo-wall format for Instant and film prints",
      "Small enough for a shelf or side table",
      "A lasting home for the day’s best frames",
      "Pairs naturally with Instant camera hire",
      "Yours to keep after the day",
    ],
    includes: [
      "Film Wall Album (yours to keep)",
    ],
    features: ["Compact photo-wall format", "Holds Instant & film prints", "Yours to keep"],
    tone: "cool",
    image: "images/products/film-photo-booklet/front.jpg",
    imageHover: "images/products/film-photo-booklet/hover.jpg",
    gallery: [
      "images/products/film-photo-booklet/extra-1.jpg"
    ],
    lifestyle: true,
    alt: "Film Wall Album keepsake for printed photos",
  },

  /* ——— Bundles ——— */
  {
    id: "holy-trinity-bundle",
    name: "The Full Mix",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digital + film + Instant",
    detail: "3 cameras · Film & SD included",
    price: "$129",
    blurb:
      "One kit, three formats — digicam shareables, nostalgic film, and square Instant prints.",
    hook: "One kit, three formats — digicam, film and Instant, curated so you don’t have to choose.",
    audience:
      "Perfect when you want variety for mixed guest crowds. Great for weekends, parties and celebrations where one camera style isn’t enough.",
    benefits: [
      "Digital shareables, nostalgic film and Instant prints in one hire",
      "Curated so you skip picking each camera yourself",
      "Film and SD included where it counts",
      "Easy for guests — something for every shooting style",
      "A strong all-rounder for weekends and events",
    ],
    includes: [
      "Kodak PIXPRO FZ55 (32GB SD included)",
      "Kodak Ektar H35 (1 colour roll · 36 exposures / up to 72 shots)",
      "Fujifilm Instax Square SQ40 (1 Square pack · 10 shots)",
    ],
    features: [
      "Kodak PIXPRO FZ55 (32GB SD included)",
      "Kodak Ektar H35 (1 colour roll · 36 exposures / up to 72 shots)",
      "Fujifilm Instax Square SQ40 (1 Square pack · 10 shots)",
    ],
    tone: "cool",
    image: "images/products/holy-trinity-bundle/front.png",
    gallery: [
      "images/products/kodak-pixpro-fz55/front.png",
      "images/products/kodak-ektar-h35/front.png",
      "images/products/instax-square-sq40/front.png"
    ],
    alt: "The Full Mix camera hire bundle — FZ55, Ektar H35 and Instax Square SQ40",
  },
  {
    id: "weekender-bundle",
    name: "The Weekender",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digicam + Instax Mini for a short escape",
    detail: "2 cameras · Film & SD included",
    price: "$75",
    blurb:
      "Light and easy for a short escape — digicam shareables plus Instant Mini prints.",
    hook: "Light and easy for a short escape — digicam shareables plus Instant Mini prints.",
    audience:
      "Perfect for weekends away, date trips and small celebrations. Ideal if you want something simple without a full event kit.",
    benefits: [
      "Two formats that travel light",
      "Digital photos to share plus Mini prints in the moment",
      "Beginner-friendly cameras guests can use",
      "Film and SD included",
      "Curated for short escapes, not big productions",
    ],
    includes: [
      "Kodak PIXPRO C1 (32GB SD included)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
    ],
    features: [
      "Kodak PIXPRO C1 (32GB SD included)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
    ],
    tone: "warm",
    image: "images/products/weekender-bundle/front.png",
    gallery: [
      "images/products/kodak-pixpro-c1/front.png",
      "images/products/instax-mini-12/front.png"
    ],
    alt: "The Weekender camera hire bundle — PIXPRO C1 and Instax Mini 12",
  },
  {
    id: "happily-ever-after-bundle",
    name: "Happily Ever After",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Wedding cameras, video guestbook & albums",
    detail: "3 cameras · Guestbook · Books · Bundle saving",
    price: "$399",
    blurb:
      "Our wedding hero kit — Instant prints for the tables, a video guestbook, and albums to keep forever.",
    hook: "Our wedding hero kit — Instant cameras, a video guestbook and albums to keep forever.",
    audience:
      "Designed for weddings and engagements. Perfect if you want guest shots, spoken memories and keepsakes covered without piecing it together yourself.",
    benefits: [
      "Instant cameras for guest tables and in-the-moment prints",
      "Video guestbook for spoken memories you’ll rewatch",
      "Albums included so the day has a home afterwards",
      "Curated as a complete wedding capture kit",
      "Better value than hiring each piece separately",
    ],
    includes: [
      "Fujifilm Instax Mini Evo (1 Mini pack · 10 shots)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
      "Fujifilm Instax Square SQ40 (1 Square pack · 10 shots)",
      "Vintage Video Guestbook hire",
      "Keepsake Album (yours to keep)",
      "Film Wall Album (yours to keep)",
    ],
    features: [
      "Fujifilm Instax Mini Evo (1 Mini pack · 10 shots)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
      "Fujifilm Instax Square SQ40 (1 Square pack · 10 shots)",
      "Vintage Video Guestbook hire (bundle rate)",
      "Keepsake Album (purchase · yours to keep)",
      "Film Wall Album (purchase · yours to keep)",
      "Save vs hiring each item separately",
    ],
    tone: "warm",
    image: "images/products/happily-ever-after-bundle/front.png",
    gallery: [
      "images/products/instax-mini-evo/front.png",
      "images/products/instax-mini-12/front.png",
      "images/products/instax-square-sq40/front.png",
      "images/products/vintage-video-guestbook/front.png",
      "images/products/keepsake-album/front.png",
      "images/products/film-photo-booklet/front.jpg"
    ],
    alt: "Happily Ever After wedding bundle — instant cameras, video guestbook and photo albums",
  },
  {
    id: "the-baby-bundle",
    name: "Little Moments",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Film, Instant & albums for new arrivals",
    detail: "2 cameras · Books · Prints",
    price: "$169",
    blurb:
      "Soft film and Instant Mini moments for a new arrival — plus books and a print pack to keep.",
    hook: "Soft film and Instant Mini for a new arrival — plus albums and prints to keep.",
    audience:
      "Curated for baby showers, first weeks home and quiet celebrations. Ideal for capturing early days in a way you can hold.",
    benefits: [
      "Gentle film and Instant Mini formats for soft, lasting photos",
      "Albums included so prints have a home",
      "Printed photo pack included",
      "Easy cameras for family and friends to use",
      "A thoughtful kit for new-arrival moments",
    ],
    includes: [
      "Kodak M35 (1 colour roll · 36 shots)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
      "Keepsake Album (yours to keep)",
      "Film Wall Album (yours to keep)",
      "Printed Photo Pack",
    ],
    features: [
      "Kodak M35 (1 colour roll · 36 shots)",
      "Fujifilm Instax Mini 12 (1 Mini pack · 10 shots)",
      "Keepsake Album (purchase · yours to keep)",
      "Film Wall Album (purchase · yours to keep)",
      "Printed Photo Pack included",
    ],
    tone: "soft",
    image: "images/products/the-baby-bundle/front.png",
    gallery: [
      "images/products/kodak-m35/front.png",
      "images/products/instax-mini-12/front.png",
      "images/products/keepsake-album/front.png",
      "images/products/film-photo-booklet/front.jpg"
    ],
    alt: "Little Moments bundle — Kodak M35, Instax Mini 12, keepsake albums and print pack",
  },
  {
    id: "party-bundle",
    name: "Party Camera Kit",
    category: "bundles",
    tag: "Bundle",
    subtitle: "Digicam, film & Instax Mini",
    detail: "3 cameras · Extra Mini film",
    price: "$149",
    blurb:
      "Birthdays, hens and nights out — digicam, film and Instax Mini with extra packs for the crowd.",
    hook: "Built for birthdays, hens and nights out — digicam, film and Instax Mini for the crowd.",
    audience:
      "Perfect for parties where guests will pass cameras around. Ideal when you want energy, variety and enough Instant film to last the night.",
    benefits: [
      "Three formats guests can share throughout the party",
      "Extra Instax Mini packs included for bigger crowds",
      "Easy point-and-shoot cameras — no host managing settings",
      "Digital, film and Instant covered in one kit",
      "Curated for celebrations, not quiet weekends",
    ],
    includes: [
      "Fujifilm Instax Mini Evo (1 Mini pack · 10 shots)",
      "Kodak PIXPRO C1 (32GB SD included)",
      "Kodak M35 (1 colour roll · 36 shots)",
      "+2 extra Instax Mini packs (20 shots)",
    ],
    features: [
      "Fujifilm Instax Mini Evo (1 Mini pack · 10 shots)",
      "Kodak PIXPRO C1 (32GB SD included)",
      "Kodak M35 (1 colour roll · 36 shots)",
      "+2 extra Instax Mini packs (20 shots)",
    ],
    tone: "warm",
    image: "images/products/party-bundle/front.png",
    gallery: [
      "images/products/instax-mini-evo/front.png",
      "images/products/kodak-pixpro-c1/front.png",
      "images/products/kodak-m35/front.png",
      "images/products/addon-film/front.png"
    ],
    alt: "Party Camera Kit — Instax Mini Evo, PIXPRO C1 and Kodak M35",
  },
  {
    id: "wedding-table-pack",
    name: "Wedding Table Pack",
    category: "bundles",
    tag: "Bundle",
    subtitle: "4 Instax Mini cameras for guest tables",
    detail: "4 cameras · Film included · Ask for 6",
    price: "$199",
    blurb:
      "Pass Instant cameras around the tables — enough Mini film for guests to shoot, share and stick in a book.",
    hook: "Four Instant cameras for the guest tables — shoot, share and stick prints in a book.",
    audience:
      "Made for wedding crowds who want prints in the moment. Ideal when you want cameras circulating across tables rather than one central kit.",
    benefits: [
      "Enough cameras to pass around guest tables",
      "Mini film included so guests can shoot and share",
      "Instruction cards with each camera",
      "Perfect for sticking prints into a guestbook or album",
      "Need more for a bigger wedding? Ask for six when you enquire",
    ],
    includes: [
      "4× Fujifilm Instax Mini Evo",
      "4 Instax Mini film packs (40 shots)",
      "Instruction cards for each camera",
    ],
    features: [
      "4× Fujifilm Instax Mini Evo",
      "4 Instax Mini film packs included (40 shots)",
      "Instruction cards for each camera",
      "Ideal for ~40–60 guests at 2–3 shots each",
      "Need 6 cameras? Mention it when you enquire",
    ],
    tone: "warm",
    image: "images/products/wedding-table-pack/front.png",
    gallery: [
      "images/products/instax-mini-evo/front.png",
      "images/products/addon-film/front.png"
    ],
    alt: "Wedding Table Pack — four Instax Mini Evo cameras for guest tables",
  },

  /* ——— Add-ons ——— */
  {
    id: "addon-film",
    name: "Extra Film",
    category: "addons",
    tag: "Add-on",
    detail: "35mm from $22 · Mini $20 · Square $26",
    price: "From $20",
    blurb: "Extra 35mm rolls or instant film packs for longer weekends and bigger guest lists.",
    hook: "Extra film so nobody runs out mid-celebration.",
    audience:
      "Perfect for longer weekends, bigger guest lists and Instant-heavy parties. Add it whenever one roll or pack won’t be enough.",
    features: ["35mm rolls from $22", "Instax Mini packs $20", "Instax Square packs $26"],
    tone: "soft",
    image: "images/products/addon-film/front.png",
    gallery: [
      "images/products/addon-film/extra-1.png"
    ],
    alt: "Extra Kodak colour film roll add-on for camera hire",
  },
  {
    id: "addon-develop-scan",
    name: "Develop & Scan",
    category: "addons",
    tag: "Add-on",
    detail: "Per 35mm colour roll · High res · ~4 business days",
    price: "$29",
    blurb:
      "Once your camera is returned, we’ll organise developing and digital scans so you can see the day again.",
    hook: "We’ll organise developing and digital scans once your film comes home.",
    benefits: [
      "Standard colour (C-41) develop & high-res scans for $29 per roll",
      "Typical turnaround about 4 business days after we receive your film",
      "Max-res scans, rush, B&W and slide available — ask when you enquire",
    ],
    includes: [
      "Film develop (C-41 colour)",
      "High-resolution digital scans of your roll",
    ],
    features: [
      "Colour develop & high-res scan $29 / roll",
      "Max res, rush, B&W & slide on enquiry",
    ],
    tone: "cool",
    image: "images/products/addon-develop-scan/front.jpg",
    lifestyle: true,
    alt: "Film developing and scanning service add-on",
  },
  {
    id: "addon-prints",
    name: "Printed Photo Pack",
    category: "addons",
    tag: "Add-on",
    detail: "Per 35mm roll · Full set of 6×4 lustre prints",
    price: "$24",
    blurb: "A full set of 6×4 lustre prints from your developed roll — memories you can gift, pin up, or pass around.",
    hook: "A full set of 6×4 lustre prints from your roll — memories you can hold and gift.",
    benefits: [      "Full set of 6×4 lustre prints for one 35mm roll",
      "One print per frame from your developed roll",
      "Half-frame (the Ektar H35) needs two print orders",
      "Allow about 2–3 extra business days after develop & scan",
    ],
    includes: [
      "Full set of 6×4 lustre prints for one 35mm roll",
    ],
    features: ["$24 per 35mm roll", "Ektar H35 = two print orders"],
    tone: "warm",
    image: "images/photos.jpg?v=2",
    lifestyle: true,
    alt: "Printed photo pack keepsake from Vera",
  },
]


const CAMERA_CATEGORIES = new Set(["digital", "film", "instant"]);
const CAMERA_PAGE_CATEGORIES = new Set(["digital", "film", "instant", "bundles", "addons"]);
const KEEPSAKE_PAGE_CATEGORIES = new Set(["guestbooks", "keepsakes"]);
const CART_STORAGE_KEY = "vera-enquiry-cart";
const catalogueScope = document.body.dataset.catalogue || "all";

const BROWSE_BY_SCOPE = {
  cameras: "cameras.html",
  keepsakes: "keepsakes.html",
  home: "index.html#discover",
};

const state = {
  cart: new Map(), // id -> quantity
  filter: "all",
  draftQty: new Map(), // id -> qty on product card before add
  productId: null,
  galleryIndex: 0,
  productQty: 1,
};

const catalogueEl = document.getElementById("catalogue");
const selectionBar = document.getElementById("selection-bar");
const selectionCount = document.getElementById("selection-count");
const selectionNames = document.getElementById("selection-names");
const enquireSelection = document.getElementById("enquire-selection");
const selectedItemsField = document.getElementById("selected-items-field");
const form = document.getElementById("enquire-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const yearEl = document.getElementById("year");
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const cartDrawer = document.getElementById("cart-drawer");
const cartBody = document.getElementById("cart-body");
const viewCartBtn = document.getElementById("view-cart-btn");
const cartClose = document.getElementById("cart-close");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartEnquireBtn = document.getElementById("cart-enquire-btn");
const productModal = document.getElementById("product-modal");
const productPanel = document.getElementById("product-panel");
const productBackdrop = document.getElementById("product-backdrop");

if (yearEl) yearEl.textContent = String(new Date().getFullYear());

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([id, qty]) => {
      const n = Number(qty);
      if (getItem(id) && n > 0) state.cart.set(id, Math.min(99, n));
    });
  } catch {
    /* ignore bad storage */
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(Object.fromEntries(state.cart)));
  } catch {
    /* ignore quota errors */
  }
}

function scopedCatalogue() {
  if (catalogueScope === "cameras") {
    return CATALOGUE.filter((item) => CAMERA_PAGE_CATEGORIES.has(item.category));
  }
  if (catalogueScope === "keepsakes") {
    return CATALOGUE.filter((item) => KEEPSAKE_PAGE_CATEGORIES.has(item.category));
  }
  if (catalogueScope === "home") {
    return [];
  }
  return CATALOGUE;
}

function browseHref() {
  return BROWSE_BY_SCOPE[catalogueScope] || "index.html#discover";
}

function getItem(id) {
  return CATALOGUE.find((item) => item.id === id);
}

function cartEntries() {
  return [...state.cart.entries()]
    .map(([id, qty]) => ({ item: getItem(id), qty }))
    .filter((entry) => entry.item && entry.qty > 0);
}

function cartUnitCount() {
  return cartEntries().reduce((sum, entry) => sum + entry.qty, 0);
}

function getDraftQty(id) {
  return state.draftQty.get(id) ?? 1;
}

function setDraftQty(id, qty) {
  state.draftQty.set(id, Math.max(1, Math.min(99, qty)));
}

function setCartQty(id, qty) {
  const next = Math.max(0, Math.min(99, qty));
  if (next <= 0) state.cart.delete(id);
  else state.cart.set(id, next);
  saveCart();
}

function addToCart(id, qty = 1) {
  const current = state.cart.get(id) || 0;
  setCartQty(id, current + qty);
}

function getProductGallery(item) {
  const shots = [];
  const seen = new Set();

  const push = (src, alt) => {
    if (!src || seen.has(src)) return;
    seen.add(src);
    const lifestyle = !!item.lifestyle || /\.(jpe?g)$/i.test(src);
    shots.push({ src, alt, lifestyle });
  };

  push(item.image, item.alt || item.name);
  push(item.imageHover, `${item.name} — alternate angle`);
  (item.gallery || []).forEach((src, i) => {
    push(src, `${item.name} — photo ${i + 2}`);
  });

  return shots;
}

function openProduct(id) {
  const item = getItem(id);
  if (!item || !productModal || !productPanel) return;
  state.productId = id;
  state.galleryIndex = 0;
  state.productQty = getDraftQty(id) || 1;
  renderProductModal();
  productModal.hidden = false;
  document.body.classList.add("product-open");
  productPanel.querySelector(".product-close")?.focus();
}

function closeProduct() {
  if (!productModal) return;
  productModal.hidden = true;
  document.body.classList.remove("product-open");
  state.productId = null;
}

function renderProductModal() {
  const item = getItem(state.productId);
  if (!item || !productPanel) return;

  const gallery = getProductGallery(item);
  const active = gallery[state.galleryIndex] || gallery[0];
  const inCart = state.cart.get(item.id) || 0;
  const hasRichCopy = Boolean(item.hook || item.audience || item.benefits || item.includes || item.specs);
  const features = (item.features || []).map((f) => `<li>${f}</li>`).join("");
  const featureHeading = item.featureHeading || "What’s included";
  const description = item.description || item.blurb;
  const isPurchase = /purchase/i.test(item.tag || "") || /purchase/i.test(item.detail || "");
  const isAddon = item.category === "addons" || /add-?on/i.test(item.tag || "");

  const colours = (item.colours || [])
    .map(
      (c) => `
      <li class="product-colour">
        <span class="product-colour-swatch" style="--swatch:${c.swatch}" aria-hidden="true"></span>
        <span>${c.name}</span>
      </li>`
    )
    .join("");

  const howItWorks = (item.howItWorks || [])
    .map((step, i) => `<li><span class="product-step-num">${i + 1}</span><span>${step}</span></li>`)
    .join("");

  const benefits = (item.benefits || []).map((f) => `<li>${f}</li>`).join("");
  const includes = (item.includes || []).map((f) => `<li>${f}</li>`).join("");
  const specs = (item.specs || [])
    .map((s) => {
      if (typeof s === "string") return `<div class="product-spec"><span>${s}</span></div>`;
      return `<div class="product-spec"><dt>${s.label}</dt><dd>${s.value}</dd></div>`;
    })
    .join("");

  const richCopy = hasRichCopy
    ? `
        ${item.hook ? `<p class="product-hook">${item.hook}</p>` : ""}
        ${item.audience ? `<p class="product-audience">${item.audience}</p>` : ""}
        ${
          benefits
            ? `<h3 class="product-subhead">Why you’ll love it</h3><ul class="product-features">${benefits}</ul>`
            : ""
        }
        ${
          includes
            ? `<h3 class="product-subhead">What’s included</h3><ul class="product-features">${includes}</ul>`
            : ""
        }
        ${
          specs
            ? `<h3 class="product-subhead">Specifications</h3><dl class="product-specs">${specs}</dl>`
            : ""
        }
      `
    : `
        <p class="product-blurb">${item.blurb}</p>
        ${item.description ? `<p class="product-desc">${description}</p>` : ""}
        ${
          features
            ? `<h3 class="product-subhead">${featureHeading}</h3><ul class="product-features">${features}</ul>`
            : ""
        }
      `;

  productPanel.innerHTML = `
    <button type="button" class="product-close" aria-label="Close product">Close</button>
    <div class="product-layout">
      <div class="product-gallery">
        <div class="product-stage${active?.lifestyle ? " is-lifestyle" : ""}">
          ${
            active
              ? `<img src="${active.src}" alt="${active.alt}" id="product-main-image" />`
              : `<div class="photo-slot">Photo coming soon</div>`
          }
        </div>
        ${
          gallery.length > 1
            ? `<div class="product-thumbs">
                ${gallery
                  .map(
                    (shot, i) => `
                  <button
                    type="button"
                    class="product-thumb${i === state.galleryIndex ? " is-active" : ""}${shot.lifestyle ? " is-lifestyle" : ""}"
                    data-gallery-index="${i}"
                    aria-label="View photo ${i + 1}"
                  >
                    <img src="${shot.src}" alt="" />
                  </button>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div class="product-info">
        <p class="aside-label">${item.tag}</p>
        <h2 id="product-title">${item.name}</h2>
        ${item.subtitle ? `<p class="product-subtitle">${item.subtitle}</p>` : ""}
        <p class="product-price">${item.price}</p>
        <p class="product-price-note">${item.detail}</p>
        ${richCopy}
        ${
          colours
            ? `<h3 class="product-subhead">Available colours</h3><ul class="product-colours">${colours}</ul>`
            : ""
        }
        ${
          howItWorks
            ? `<h3 class="product-subhead">How it works</h3><ol class="product-steps">${howItWorks}</ol>`
            : ""
        }
        ${
          isPurchase
            ? `<p class="product-note">Purchase · yours to keep · mention your preferred colour in the enquiry.</p>`
            : isAddon
              ? ""
              : `<p class="product-note">Flexible 4-day hire · $70 refundable bond per camera (guestbook $70) · Brisbane pickup or local delivery from $18 (confirmed on enquiry).</p>`
        }
        <div class="product-actions">
          ${qtyControlsMarkup(item.id, state.productQty, "product")}
          <button type="button" class="btn btn-add" data-product-add="${item.id}">
            Add to enquiry
          </button>
        </div>
        ${inCart ? `<p class="in-cart-note">${inCart} already in cart</p>` : ""}
        <button type="button" class="text-link product-back" data-close-product>Back to catalogue</button>
      </div>
    </div>
  `;
}

function mediaMarkup(item) {
  if (!item.image) {
    return `<div class="photo-slot">Photo coming soon</div>`;
  }

  const filename = item.image.replace(/^images\//, "");
  const alt = item.alt || `${item.name} for hire`;
  const hoverSrc = item.imageHover || "";
  const total = 1 + (item.imageHover ? 1 : 0) + (item.gallery?.length || 0);
  const count = total > 1 ? `<span class="photo-count">${total} photos</span>` : "";

  const primary = `<img class="item-photo item-photo-primary" src="${item.image}" alt="${alt}" loading="lazy" data-fallback="${filename}" />`;

  if (!hoverSrc) {
    return `${primary}${count}`;
  }

  return `
    ${primary}
    <img class="item-photo item-photo-hover" src="${hoverSrc}" alt="" loading="lazy" aria-hidden="true" />
    ${count}
  `;
}

function qtyControlsMarkup(id, qty, scope) {
  return `
    <div class="qty" data-qty-scope="${scope}" data-id="${id}">
      <button type="button" class="qty-btn" data-qty-action="dec" aria-label="Decrease quantity">−</button>
      <span class="qty-value" aria-live="polite">${qty}</span>
      <button type="button" class="qty-btn" data-qty-action="inc" aria-label="Increase quantity">+</button>
    </div>
  `;
}

function matchesFilter(item, filter) {
  if (filter === "all") return true;
  if (filter === "cameras") return CAMERA_CATEGORIES.has(item.category);
  return item.category === filter;
}

function catalogueSortRank(item) {
  const order = {
    bundles: 0,
    digital: 1,
    film: 2,
    instant: 3,
    addons: 4,
    guestbooks: 0,
    keepsakes: 1,
  };
  return order[item.category] ?? 9;
}

function renderCatalogue() {
  if (!catalogueEl) return;
  catalogueEl.innerHTML = "";

  let visible = scopedCatalogue().filter((item) => matchesFilter(item, state.filter));

  if (
    (catalogueScope === "cameras" || catalogueScope === "keepsakes") &&
    state.filter === "all"
  ) {
    visible = [...visible].sort((a, b) => catalogueSortRank(a) - catalogueSortRank(b));
  }

  visible.forEach((item, index) => {
    const draft = getDraftQty(item.id);
    const inCart = state.cart.get(item.id) || 0;

    const article = document.createElement("article");
    article.className = "item";
    article.dataset.category = item.category;
    article.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 70}ms`);

    article.innerHTML = `
      <button type="button" class="item-open" data-open-product="${item.id}" aria-label="View ${item.name}">
        <div class="item-media${item.image ? " has-photo" : ""}${item.lifestyle ? " is-lifestyle" : ""}${item.imageHover ? " has-hover" : ""}" data-tone="${item.tone}">
          ${mediaMarkup(item)}
        </div>
        <div class="item-body-preview">
          <div class="item-meta">
            <span>${item.tag}</span>
          </div>
          <h3>${item.name}</h3>
          ${item.subtitle ? `<p class="item-subtitle">${item.subtitle}</p>` : ""}
          <p class="item-price">${item.price}</p>
          <p class="item-price-note">${item.detail}</p>
          <p>${item.blurb}</p>
          <span class="item-view-link">View details →</span>
        </div>
      </button>
      <div class="item-actions">
        ${qtyControlsMarkup(item.id, draft, "draft")}
        <button type="button" class="btn btn-add" data-add="${item.id}">
          Add to enquiry
        </button>
      </div>
      ${inCart ? `<p class="in-cart-note">${inCart} in cart</p>` : ""}
    `;

    catalogueEl.appendChild(article);
  });

  catalogueEl.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const parent = img.parentElement;
      if (!parent) return;
      parent.classList.remove("has-photo");
      img.replaceWith(
        Object.assign(document.createElement("div"), {
          className: "photo-slot",
          textContent: `Drop ${img.dataset.fallback}`,
        })
      );
    });
  });

  if (typeof refreshItemReveal === "function") {
    refreshItemReveal();
  }
}

function cartLineMarkup(entry) {
  const { item, qty } = entry;
  return `
    <div class="cart-line" data-id="${item.id}">
      <div class="cart-line-info">
        <strong>${item.name}</strong>
        <span>${item.tag}${item.price ? ` · ${item.price}` : ""}</span>
      </div>
      ${qtyControlsMarkup(item.id, qty, "cart")}
      <button type="button" class="cart-remove" data-remove="${item.id}">Remove</button>
    </div>
  `;
}

function updateCartUI() {
  const entries = cartEntries();
  const units = cartUnitCount();
  const lines = entries.length;
  const browse = browseHref();

  if (selectionBar) selectionBar.hidden = units === 0;
  if (selectionCount) selectionCount.textContent = units === 1 ? "1 item" : `${units} items`;
  if (selectionNames) {
    selectionNames.textContent = lines
      ? entries.map(({ item, qty }) => (qty > 1 ? `${item.name} ×${qty}` : item.name)).join(", ")
      : "Cart is empty";
  }

  if (selectedItemsField) {
    selectedItemsField.value = entries
      .map(
        ({ item, qty }) =>
          `${item.name} ×${qty} (${item.tag}${item.price ? ` · ${item.price}` : ""})`
      )
      .join("; ");
  }

  if (cartBody) {
    if (!units) {
      cartBody.innerHTML = `<p class="cart-empty">Your cart is empty. <a href="${browse}">Browse products</a></p>`;
    } else {
      cartBody.innerHTML = entries.map(cartLineMarkup).join("");
    }
  }

  if (enquireSelection) {
    if (!units) {
      enquireSelection.innerHTML = `
        <p class="enquire-empty">Cart is empty — <a href="${browse}">browse products</a>.</p>
      `;
    } else {
      enquireSelection.innerHTML = `
        <div class="selected-chips">
          ${entries.map(cartLineMarkup).join("")}
        </div>
      `;
    }
  }

  if (catalogueEl) {
    catalogueEl.querySelectorAll(".item").forEach((article) => {
      const addBtn = article.querySelector("[data-add]");
      if (!addBtn) return;
      const id = addBtn.dataset.add;
      const inCart = state.cart.get(id) || 0;
      let note = article.querySelector(".in-cart-note");
      if (inCart) {
        if (!note) {
          note = document.createElement("p");
          note.className = "in-cart-note";
          article.appendChild(note);
        }
        note.textContent = `${inCart} in cart`;
      } else if (note) {
        note.remove();
      }
    });
  }
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.hidden = false;
  document.body.classList.add("cart-open");
  cartClose?.focus();
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.hidden = true;
  document.body.classList.remove("cart-open");
}

catalogueEl?.addEventListener("click", (event) => {
  const qtyBtn = event.target.closest("[data-qty-action]");
  if (qtyBtn) {
    const wrap = qtyBtn.closest(".qty");
    if (!wrap || wrap.dataset.qtyScope !== "draft") return;
    const id = wrap.dataset.id;
    const current = getDraftQty(id);
    const next = qtyBtn.dataset.qtyAction === "inc" ? current + 1 : current - 1;
    setDraftQty(id, next);
    wrap.querySelector(".qty-value").textContent = String(getDraftQty(id));
    return;
  }

  const addBtn = event.target.closest("[data-add]");
  if (addBtn) {
    const id = addBtn.dataset.add;
    addToCart(id, getDraftQty(id));
    setDraftQty(id, 1);
    const wrap = addBtn.closest(".item")?.querySelector('.qty[data-qty-scope="draft"]');
    if (wrap) wrap.querySelector(".qty-value").textContent = "1";
    updateCartUI();
    addBtn.classList.add("just-added");
    addBtn.textContent = "Added";
    window.setTimeout(() => {
      addBtn.classList.remove("just-added");
      addBtn.textContent = "Add to enquiry";
    }, 900);
    return;
  }

  const openBtn = event.target.closest("[data-open-product]");
  if (openBtn) {
    event.preventDefault();
    openProduct(openBtn.dataset.openProduct);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".catalogue")) return;
  const openBtn = event.target.closest("[data-open-product]");
  if (!openBtn) return;
  event.preventDefault();
  openProduct(openBtn.dataset.openProduct);
});

if (productPanel) {
  productPanel.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-product]") || event.target.closest(".product-close")) {
      closeProduct();
      return;
    }

    const thumb = event.target.closest("[data-gallery-index]");
    if (thumb) {
      state.galleryIndex = Number(thumb.dataset.galleryIndex);
      renderProductModal();
      return;
    }

    const qtyBtn = event.target.closest("[data-qty-action]");
    if (qtyBtn) {
      const wrap = qtyBtn.closest(".qty");
      if (!wrap || wrap.dataset.qtyScope !== "product") return;
      const next =
        qtyBtn.dataset.qtyAction === "inc" ? state.productQty + 1 : state.productQty - 1;
      state.productQty = Math.max(1, Math.min(99, next));
      wrap.querySelector(".qty-value").textContent = String(state.productQty);
      return;
    }

    const addBtn = event.target.closest("[data-product-add]");
    if (addBtn) {
      const id = addBtn.dataset.productAdd;
      addToCart(id, state.productQty);
      state.productQty = 1;
      updateCartUI();
      renderProductModal();
      addBtn.textContent = "Added";
      window.setTimeout(() => {
        if (addBtn.isConnected) addBtn.textContent = "Add to enquiry";
      }, 900);
    }
  });
}

productBackdrop?.addEventListener("click", closeProduct);

function handleCartQtyClick(event) {
  const removeBtn = event.target.closest("[data-remove]");
  if (removeBtn) {
    state.cart.delete(removeBtn.dataset.remove);
    updateCartUI();
    return;
  }

  const qtyBtn = event.target.closest("[data-qty-action]");
  if (!qtyBtn) return;
  const wrap = qtyBtn.closest(".qty");
  if (!wrap || wrap.dataset.qtyScope !== "cart") return;
  const id = wrap.dataset.id;
  const current = state.cart.get(id) || 0;
  const next = qtyBtn.dataset.qtyAction === "inc" ? current + 1 : current - 1;
  setCartQty(id, next);
  updateCartUI();
}

cartBody?.addEventListener("click", handleCartQtyClick);
enquireSelection?.addEventListener("click", handleCartQtyClick);

viewCartBtn?.addEventListener("click", openCart);
cartClose?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);
cartEnquireBtn?.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (productModal && !productModal.hidden) closeProduct();
  else if (cartDrawer && !cartDrawer.hidden) closeCart();
});

document.querySelectorAll(".filter").forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    setCatalogueFilter(filterBtn.dataset.filter);
  });
});

function setCatalogueFilter(filter) {
  const btn = document.querySelector(`.filter[data-filter="${filter}"]`);
  if (!btn) return;
  state.filter = filter;
  document.querySelectorAll(".filter").forEach((el) => {
    const active = el === btn;
    el.classList.toggle("is-active", active);
    el.setAttribute("aria-selected", String(active));
  });
  renderCatalogue();
  updateCartUI();
}

function applyFilterFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  if (filter) setCatalogueFilter(filter);
}

function applyProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  if (!productId || !getItem(productId)) return;
  // Open after catalogue is ready so focus/modal markup is available
  requestAnimationFrame(() => openProduct(productId));
}

navToggle?.addEventListener("click", () => {
  if (!nav) return;
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});


form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!formStatus || !submitBtn || !selectedItemsField) return;
  formStatus.textContent = "";
  formStatus.classList.remove("is-error");

  const accessKey = form.querySelector('[name="access_key"]').value.trim();
  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    formStatus.textContent =
      "Almost there — add your Web3Forms access key in index.html so enquiries reach asis.capture@gmail.com.";
    formStatus.classList.add("is-error");
    return;
  }

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const eventType = (data.get("event_type") || "").toString().trim();
  const hireStart = (data.get("hire_start") || "").toString().trim();
  const hireEnd = (data.get("hire_end") || "").toString().trim();

  if (!name) {
    formStatus.textContent = "Please enter your name.";
    formStatus.classList.add("is-error");
    form.querySelector('[name="name"]')?.focus();
    return;
  }

  if (hireStart && hireEnd && hireEnd < hireStart) {
    formStatus.textContent = "Hire end date needs to be on or after the start date.";
    formStatus.classList.add("is-error");
    return;
  }

  data.set("name", name);
  data.set(
    "message",
    `${data.get("message") || ""}\n\nEnquiry cart: ${selectedItemsField.value || "None"}\nHire start: ${hireStart || "—"}\nHire end: ${hireEnd || "—"}\nEvent type: ${eventType || "—"}`
  );

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Something went wrong");
    }

    form.reset();
    state.cart.clear();
    saveCart();
    updateCartUI();
    renderCatalogue();
    const hireStartEl = document.getElementById("hire-start");
    const hireEndEl = document.getElementById("hire-end");
    if (hireStartEl && hireEndEl) hireEndEl.min = hireStartEl.min;
    formStatus.textContent = "Enquiry sent — we’ll aim to reply within one business day.";
  } catch (error) {
    formStatus.textContent =
      "Couldn’t send just now. Please try again, or email asis.capture@gmail.com.";
    formStatus.classList.add("is-error");
    console.error(error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send enquiry";
  }
});

function setupHireDates() {
  const startEl = document.getElementById("hire-start");
  const endEl = document.getElementById("hire-end");
  if (!startEl || !endEl) return;

  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const min = `${y}-${m}-${day}`;
  startEl.min = min;
  endEl.min = min;

  startEl.addEventListener("change", () => {
    if (!startEl.value) return;
    endEl.min = startEl.value;
    if (endEl.value && endEl.value < startEl.value) endEl.value = startEl.value;
  });
}

setupHireDates();

function setupReveal() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nodes = [
    ...document.querySelectorAll(".trust-list li"),
    ...document.querySelectorAll(".discover-head"),
    ...document.querySelectorAll(".discover-item"),
    ...document.querySelectorAll(".featured-card"),
    ...document.querySelectorAll(".how .section-head"),
    ...document.querySelectorAll(".steps li"),
    ...document.querySelectorAll(".proof-item"),
    ...document.querySelectorAll(".story-copy, .story-aside"),
    ...document.querySelectorAll(".faq .section-head"),
    ...document.querySelectorAll(".faq-list details"),
    ...document.querySelectorAll(".enquire-intro, .enquire-form"),
    ...document.querySelectorAll(".section-head"),
    ...document.querySelectorAll(".filters"),
    ...document.querySelectorAll(".item"),
  ];

  const unique = [...new Set(nodes)];

  unique.forEach((node) => {
    if (!node.classList.contains("item")) {
      node.classList.add("reveal");
    }
    if (node.matches(".proof-item, .story-aside")) {
      node.classList.add("reveal--media");
    }
    if (node.matches(".featured-card, .story-copy, .discover-head")) {
      node.classList.add("reveal--lift");
    }
  });

  document.querySelectorAll(".trust-list, .discover-grid--four, .discover-grid--bundles, .steps, .catalogue").forEach((group) => {
    [...group.children].forEach((child, index) => {
      if (!child.classList.contains("reveal") && !child.classList.contains("item")) return;
      child.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 85}ms`);
    });
  });

  document.querySelectorAll("#discover .discover-item, .proof-item").forEach((child) => {
    child.style.setProperty("--reveal-delay", "0ms");
  });

  if (reduced || !("IntersectionObserver" in window)) {
    unique.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  unique.forEach((node) => {
    if (node.classList.contains("is-visible")) return;
    observer.observe(node);
  });

  window.__veraRevealObserver = observer;
}

function refreshItemReveal() {
  const observer = window.__veraRevealObserver;
  const items = document.querySelectorAll(".item:not(.is-visible)");
  if (!observer) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  items.forEach((item) => observer.observe(item));
}

function setupHeroParallax() {
  const media = document.querySelector(".hero-media img");
  if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (y > window.innerHeight * 1.2) return;
    media.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(1.08)`;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

loadCart();
applyFilterFromUrl();
setupReveal();
setupHeroParallax();
renderCatalogue();
updateCartUI();
applyProductFromUrl();

function setupFilmGuide() {
  const guestsEl = document.getElementById("guest-count");
  const shotsEl = document.getElementById("shots-per-guest");
  const out = document.getElementById("film-guide-result");
  const guide = document.getElementById("film-guide");
  if (!guestsEl || !shotsEl || !out) return;

  const isParty = guide?.dataset.variant === "party";

  const update = () => {
    const guests = Math.max(1, Number(guestsEl.value) || 0);
    const per = Number(shotsEl.value) || 2.5;
    const shots = Math.ceil(guests * per);
    const packs = Math.ceil(shots / 10);
    let tip = `About <strong>${shots} shots</strong> → <strong>${packs} Instax Mini packs</strong> (10 shots each).`;

    if (isParty) {
      if (shots <= 20) {
        tip += ` The <strong>Weekender</strong> (1 Mini pack included) plus an extra pack usually covers a smaller night.`;
      } else if (shots <= 30) {
        tip += ` The <strong>Party Camera Kit</strong> already includes 3 Mini packs (30 shots) — a strong match for this count.`;
      } else if (shots <= 50) {
        tip += ` Start with the <strong>Party Camera Kit</strong> and add <strong>extra Mini packs</strong> so guests don’t run out.`;
      } else {
        tip += ` Add plenty of <strong>extra Mini film</strong>, or ask us to build a bigger Instant kit for the crowd.`;
      }
    } else {
      const fit4 = shots <= 40;
      const fit6 = shots <= 60;
      if (fit4) {
        tip += ` A <strong>Wedding Table Pack (4 cameras / 40 shots)</strong> covers this guest count at your chosen pace.`;
      } else if (fit6) {
        tip += ` Ask for the <strong>6-camera table pack</strong> on enquiry, or add extra Mini packs.`;
      } else {
        tip += ` Pair a table pack with <strong>extra Mini film</strong> add-ons so guests don’t run out.`;
      }
    }

    out.innerHTML = tip;
  };

  guestsEl.addEventListener("input", update);
  shotsEl.addEventListener("change", update);
  update();
}

setupFilmGuide();
