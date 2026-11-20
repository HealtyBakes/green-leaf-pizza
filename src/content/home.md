---
# ─────────────────────────────────────────────────────────────
# Green Leaf Pizza — all website copy lives in this file.
# Edit the text between quotes. Keep the indentation as it is.
# Photos: put files in public/images/ and change the image paths.
# The story paragraphs are the plain text below the closing ---
# ─────────────────────────────────────────────────────────────

site:
  name: "Green Leaf Pizza"
  title: "Green Leaf Pizza — Nothing missing."
  description: "Proper pizza for the whole table. 100% eggless and mushroom-free, with a dedicated Jain range and vegan options. Hand-made in Harrow by Healthy Bakes."
  tagline: "Nothing missing"
  descriptor: "100% eggless · Jain, vegan & vegetarian"
  place: "Harrow, London"
  parent: "A Healthy Bakes kitchen"
  orderUrl: "https://wa.me/447440338373?text=Hi%20Green%20Leaf%20Pizza%2C%20I%27d%20like%20to%20order."
  orderLabel: "WhatsApp +44 7440 338373"
  copyright: "Healthy Bakes"
  logoAlt: "green leaf pizza"
  skipLink: "Skip to content"

nav:
  links:
    - label: "Menu"
      href: "/#menu"
    - label: "Our story"
      href: "/#story"
    - label: "What's on the table"
      href: "/#table"
  order: "Order"

hero:
  eyebrow: "Artisan pizza & desserts · Harrow, London"
  lede: "Proper pizza for the whole table. Crisp edge, soft middle, real flavour, and every single person can eat it."
  primaryButton: "Order on WhatsApp"
  secondaryButton: "See the menu"
  image: "/images/hero.jpg"
  imageAlt: "A Green Leaf pizza with sweetcorn, peppers, olives and jalapeños, with tomato sauce and mozzarella on the side"

# The moving strip under the hero
ticker: ["100% eggless", "Mushroom-free", "Dedicated Jain range", "Vegan options", "Hand-made in Harrow", "Nothing missing"]

gap:
  eyebrow: "Why we exist"
  title: "London has thousands of pizzas. Almost none for our table."
  items:
    - q: "Vegan pizzeria?"
      a: "Still onion. Still garlic."
    - q: "Big chain?"
      a: "Pick it off and hope."
    - q: "Indian kitchen?"
      a: "Perfect food. No pizza."
  verdict: "So we made the pizza we couldn't find."

menu:
  eyebrow: "On the menu"
  title: "Something for every plate."
  note: "Everything is 100% eggless and mushroom-free. Pizzas come in 9\" and 12\". Message us on WhatsApp to order."
  sizes: "9\" / 12\""
  order: "Order"
  veganTag: "Vegan"
  # {item} is replaced with the pizza name
  orderMessage: "Hi Green Leaf Pizza, I'd like to order: {item}."
  pizzas:
    - title: "Dedicated Jain pizzas"
      note: "No onion, no garlic, no root vegetables"
      items:
        - name: "Jain Classic Margherita"
          desc: "Jain herb tomato sauce, mozzarella, fresh basil, olive oil"
          price: "£8.49 / £11.99"
        - name: "Jain Garden Fiesta"
          desc: "Jain tomato sauce, mozzarella, green & red peppers, sweetcorn, black olives, tomatoes"
          price: "£9.49 / £13.49"
        - name: "Jain Paneer Tikka"
          desc: "Jain tomato sauce, mozzarella, marinated paneer, mixed peppers, sweetcorn, coriander"
          price: "£10.49 / £14.49"
        - name: "Jain Chilli & Olive Kick"
          desc: "Jain tomato sauce, mozzarella, jalapeños, green chillies, black olives, sweetcorn, oregano"
          price: "£9.49 / £13.49"
        - name: "Jain Vegan Supreme"
          desc: "Jain tomato sauce, vegan mozzarella, mixed peppers, sweetcorn, cherry tomatoes, olives, rocket"
          price: "£9.99 / £13.99"
          vegan: true
    - title: "Vegetarian & vegan pizzas"
      note: "Made with onion and garlic"
      items:
        - name: "Classic Garlic Margherita"
          desc: "Roasted garlic herb tomato sauce, mozzarella, fresh basil"
          price: "£8.49 / £11.99"
        - name: "Farmhouse Garden Feast"
          desc: "Garlic tomato sauce, mozzarella, red onions, peppers, sweetcorn, olives, cherry tomatoes"
          price: "£9.49 / £13.49"
        - name: "Tandoori Paneer & Red Onion"
          desc: "Tikka sauce, mozzarella, tandoori paneer, red onions, green peppers, jalapeños, coriander"
          price: "£10.49 / £14.49"
        - name: "Spicy Mexican Heat"
          desc: "Garlic tomato sauce, mozzarella, red onions, jalapeños, green chillies, sweetcorn, chilli flakes"
          price: "£9.49 / £13.49"
        - name: "Plant-Based Mediterranean"
          desc: "Garlic tomato sauce, vegan mozzarella, courgettes, red onions, sun-dried tomatoes, olives, basil"
          price: "£9.99 / £13.99"
          vegan: true
        - name: "Vegan Spicy Veggie"
          desc: "Garlic tomato sauce, vegan mozzarella, red onions, jalapeños, sweetcorn, peppers, chilli flakes"
          price: "£9.99 / £13.99"
          vegan: true
  extras:
    - title: "Eggless desserts"
      items:
        - name: "Gourmet Truffle Box (3 pcs)"
          desc: "Matcha Nutty, Dubai Kunafa & White Sesame chocolate truffles"
          price: "£5.49"
        - name: "100% Eggless Chocolate Brownie"
          desc: "Rich, fudgy dark chocolate brownie, baked egg-free"
          price: "£3.99"
        - name: "Warm Brownie with Hot Chocolate Sauce"
          desc: "Warm eggless brownie with glossy hot chocolate fudge sauce"
          price: "£4.99"
    - title: "Meal deals"
      items:
        - name: "Solo Pizza & Drink"
          desc: "Any 9\" pizza + 1 can"
          price: "£9.49"
        - name: "Sweet Night In"
          desc: "Any 12\" pizza + choice of dessert"
          price: "£15.99"
        - name: "Jain Family Feast"
          desc: "Any two 12\" Jain pizzas + 2 cans"
          price: "£24.99"
    - title: "Soft drinks (330ml)"
      items:
        - name: "Coca-Cola, Coke Zero, Sprite, Fanta, Water"
          price: "£1.50"

numbers:
  eyebrow: "The table is bigger than you think"
  items:
    - big: "No. 1"
      text: "Harrow has the largest Jain community in England and Wales."
      source: 1
    - big: "1 in 4"
      text: "Harrow residents is Hindu: 67,392 people, out of 261,208."
      source: 2
    - big: "7.7m"
      text: "people in the UK avoided meat at the end of 2025, about 14% of the population."
      source: 3

story:
  eyebrow: "Our story"
  title: "Two years in a Harrow kitchen."
  quote: "Nothing taken away from the taste. Nobody left out of the table."
  video: "/images/fresh.mp4"
  poster: "/images/fresh-poster.jpg"
  videoLabel: "A fresh Green Leaf pizza, straight out of the oven"

table:
  image: "/images/table.jpg"
  imageAlt: "A Green Leaf pizza topped with sweetcorn, peppers, olives, jalapeños and fresh coriander"
  line: "Pizza night, the whole family in."

quality:
  eyebrow: "Our ingredients"
  line: "Best quality ingredients."
  sub: "Never compromise on the quality of what you eat."

mark:
  imageAlt: "The Green Leaf Pizza symbol: a leaf shaped like a pizza peel, cut into six slices"
  eyebrow: "The mark"
  title: "One shape. Three reads."
  text: "A leaf for what it's made of. A peel for how it's made. Six cuts for the moment the box opens."

promises:
  eyebrow: "What's on the table"
  title: "Everyone eats. Nobody asks."
  intro: "Clear promises, so you can order for the whole family without reading the small print."
  # tone sets the tile colour: forest, basil, semolina or tomato
  items:
    - label: "Eggless"
      tone: forest
      text: "100% eggless. Every pizza, every dessert."
    - label: "Jain"
      tone: semolina
      text: "A dedicated Jain range: no onion, no garlic, no root vegetables. Suits a Satvik diet too."
    - label: "Vegan"
      tone: basil
      text: "Vegan pizzas made with vegan mozzarella, marked on the menu."
    - label: "No mushroom"
      tone: tomato
      text: "Mushroom-free, across the whole menu."

community:
  line: "Pure taste. Proper pizza"
  sub: "Hand-made in Harrow, for the whole table."

order:
  title: "Hungry yet?"
  text: "Made fresh in Harrow, serving Harrow and nearby. Message us and we'll take it from there."
  button: "Order on WhatsApp"

footer:
  orderPrefix: "Order:"
  sourcesTitle: "Sources"
  sourceLabel: "Source"
  sources:
    - "Brent Council, 2021 Census factsheet: Religion in Brent (ONS Census 2021, TS030) — Brent has the 2nd largest Jain population in England & Wales after Harrow."
    - "ONS Census 2021, TS031 Religion (detailed), Harrow: 67,392 Hindu residents of 261,208."
    - "Finder UK diet trends survey, December 2025 (2,000 adults): 14% meat-free, about 7.7 million people."

notFound:
  title: "Not found — Green Leaf Pizza"
  heading: "This slice is missing."
  button: "Back to the whole pizza"
---

Green Leaf Pizza comes from Healthy Bakes, the eggless, free-from bakery Rituja started at home in Harrow.

She spent two years developing natural, free-from recipes, because every alternative she tried asked you to accept less flavour. She refused to. Healthy food doesn't have to taste bad; it just has to be made properly.

Pizza was the obvious next question. Could the same care make a pizza with a crisp, blistered edge and a rich tomato heart, with no egg anywhere, and a Jain range with no onion, no garlic and no root vegetables? It could.
