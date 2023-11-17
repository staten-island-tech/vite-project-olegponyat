const foodArray = [
  {name: "Pizza", price: 12.99, img: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Salad", price: 6.99, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Side", microwaveable: false},
  {name: "Sushi", price: 15.99, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: false},
  {name: "Soup", price: 4.99, img: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Burger", price: 8.99, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Fries", price: 3.99, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Side", microwaveable: true},
  {name: "Ice cream", price: 2.99, img: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dessert", type: "Main", microwaveable: false},
  {name: "Cake", price: 4.99, img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dessert", type: "Main", microwaveable: false},
  {name: "Coffee", price: 1.99, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Drink", microwaveable: true},
  {name: "Pancakes", price: 5.99, img: 'https://plus.unsplash.com/premium_photo-1672846027109-e2c91500afef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ', meal: "Breakfast", type: "Main", microwaveable: true},
  {name: "Nachos", price: 7.99, img: 'https://images.unsplash.com/photo-1589656613566-eab25964fb6b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Appetizer", microwaveable: true},
  {name: "Guacamole", price: 3.99, img: 'https://images.unsplash.com/photo-1595016111459-799a195e7452?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Dip", microwaveable: false},
  {name: "Pad thai", price: 9.99, img: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Spring rolls", price: 4.99, img: 'https://images.unsplash.com/photo-1560162071-da4c4a91077a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Tea", price: 1.99, img: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Drink", microwaveable: true},
  {name: "Muffin", price: 2.99, img: 'https://images.unsplash.com/photo-1578632398050-cccbc1461ab9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Main", microwaveable: true},
  {name: "Sandwich", price: 6.99, img: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Chips", price: 2.99, img: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Side", microwaveable: false},
  {name: "Hummus", price: 3.99, img: 'https://images.unsplash.com/photo-1604085804781-04a7d1adba36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Dip", microwaveable: false},
  {name: "Curry", price: 10.99, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Samosa", price: 4.99, img: 'https://images.unsplash.com/photo-1566222499048-9538f86d4675?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Juice", price: 2.99, img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Drink", microwaveable: false},
  {name: "Omelet", price: 5.99, img: 'https://images.unsplash.com/photo-1666681605236-cf4b935e4548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Main", microwaveable: true},
  {name: "Salmon", price: 14.99, img: 'https://images.unsplash.com/photo-1614627293113-e7e68163d958?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Asparagus", price: 4.99, img: 'https://images.unsplash.com/photo-1606791510628-fc86850630bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Side", microwaveable: true},
  {name: "Smoothie", price: 3.99, img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Drink", microwaveable: false},
  {name: "Granola", price: 4.99, img: 'https://plus.unsplash.com/premium_photo-1666275004005-df5e34e5ffe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Main", microwaveable: false},
  {name: "Taco", price: 7.99, img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Salsa", price: 2.99, img: 'https://images.unsplash.com/photo-1535567952412-219226693102?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Lasagna", price: 11.99, img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Garlic bread", price: 3.99, img: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Side", microwaveable: true},
  {name: "Soda", price: 1.99, img: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Drink", microwaveable: false},
  {name: "Hot dog", price: 4.99, img: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Popcorn", price: 2.99, img: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Side", microwaveable: true},
  {name: "Cheese", price: 3.99, img: 'https://images.unsplash.com/photo-1517093602195-b40af9688b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Snack", type: "Dip", microwaveable: false},
  {name: "Paella", price: 12.99, img: 'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Croquettes", price: 5.99, img: 'https://images.unsplash.com/photo-1637487880059-51537f1a2afc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Sangria", price: 4.99, img: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Waffles", price: 6.99, img: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Main", microwaveable: true},
  {name: "Bacon", price: 3.99, img: 'https://images.unsplash.com/photo-1603038124597-2c5c207edf47?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Side", microwaveable: true},
  {name: "Milk", price: 1.99, img: 'https://images.unsplash.com/photo-1603038124597-2c5c207edf47?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Drink", microwaveable: true},
  {name: "Wrap", price: 7.99, img: 'https://plus.unsplash.com/premium_photo-1667114974801-72ee59a33c2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Fruit salad", price: 4.99, img: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Side", microwaveable: false},
  {name: "Yogurt", price: 2.99, img: 'https://images.unsplash.com/photo-1552320764-9fc870798a3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Ramen", price: 8.99, img: 'https://images.unsplash.com/photo-1617421753170-46511a8d73fc?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Dumplings", price: 6.99, img: 'https://images.unsplash.com/photo-1589047133481-02b4a5327d89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Sake", price: 5.99, img: 'https://images.unsplash.com/photo-1607866290513-fe24ef89186a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Dinner", type: "Drink", microwaveable: true},
  {name: "Bagel", price: 3.99, img: 'https://images.unsplash.com/photo-1601585099780-6b176dc702af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Main", microwaveable: true},
  {name: "Cream cheese", price: 2.99, img: 'https://images.unsplash.com/photo-1597238006267-111f6ac8793a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Breakfast", type: "Dip", microwaveable: false},
  {name: "Pasta", price: 9.99, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Pesto", price: 3.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Steak", price: 16.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Mashed potatoes", price: 4.99, img: '', meal: "Dinner", type: "Side", microwaveable: true},
  {name: "Wine", price: 6.99, img: '', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Cereal", price: 3.99, img: '', meal: "Breakfast", type: "Main", microwaveable: false},
  {name: "Toast", price: 2.99, img: '', meal: "Breakfast", type: "Side", microwaveable: true},
  {name: "Jam", price: 2.99, img: '', meal: "Breakfast", type: "Dip", microwaveable: false},
  {name: "Burrito", price: 8.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Coleslaw", price: 3.99, img: '', meal: "Lunch", type: "Side", microwaveable: false},
  {name: "Lemonade", price: 2.99, img: '', meal: "Lunch", type: "Drink", microwaveable: false},
  {name: "Falafel", price: 7.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Tabbouleh", price: 4.99, img: '', meal: "Dinner", type: "Side", microwaveable: false},
  {name: "Kimchi", price: 5.99, img: '', meal: "Lunch", type: "Side", microwaveable: false},
  {name: "Bibimbap", price: 10.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Soju", price: 4.99, img: '', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Gochujang", price: 3.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Pho", price: 8.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Spring rolls", price: 4.99, img: '', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Banh mi", price: 6.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Nuoc cham", price: 2.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Couscous", price: 7.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Tagine", price: 12.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Mint tea", price: 2.99, img: '', meal: "Dinner", type: "Drink", microwaveable: true},
  {name: "Hummus", price: 3.99, img: '', meal: "Snack", type: "Dip", microwaveable: false},
  {name: "Sushi", price: 15.99, img: '', meal: "Dinner", type: "Main", microwaveable: false},
  {name: "Tempura", price: 9.99, img: '', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Ramen", price: 8.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Sake", price: 5.99, img: '', meal: "Dinner", type: "Drink", microwaveable: true},
  {name: "Wasabi", price: 2.99, img: '', meal: "Dinner", type: "Dip", microwaveable: false},
  {name: "Tacos", price: 7.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Guacamole", price: 3.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Churros", price: 4.99, img: '', meal: "Dessert", type: "Main", microwaveable: true},
  {name: "Sangria", price: 4.99, img: '', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Salsa", price: 2.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Paella", price: 12.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Croquettes", price: 5.99, img: '', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Gazpacho", price: 4.99, img: '', meal: "Lunch", type: "Appetizer", microwaveable: false},
  {name: "Pad thai", price: 9.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Tom yum", price: 7.99, img: '', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Mango sticky rice", price: 6.99, img: '', meal: "Dessert", type: "Main", microwaveable: true},
  {name: "Thai iced tea", price: 3.99, img: '', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Peanut sauce", price: 2.99, img: '', meal: "Dinner", type: "Dip", microwaveable: false},
  {name: "Pizza", price: 12.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Gelato", price: 4.99, img: '', meal: "Dessert", type: "Main", microwaveable: false},
  {name: "Espresso", price: 2.99, img: '', meal: "Breakfast", type: "Drink", microwaveable: true},
  {name: "Pasta", price: 9.99, img: '', meal: "Lunch", type: "Main", microwaveable: true},
  {name: "Pesto", price: 3.99, img: '', meal: "Lunch", type: "Dip", microwaveable: false},
  {name: "Lasagna", price: 11.99, img: '', meal: "Dinner", type: "Main", microwaveable: true},
  {name: "Bruschetta", price: 4.99, img: '', meal: "Dinner", type: "Appetizer", microwaveable: true},
  {name: "Tiramisu", price: 6.99, img: '', meal: "Dessert", type: "Main", microwaveable: false},
  {name: "Wine", price: 6.99, img: '', meal: "Dinner", type: "Drink", microwaveable: false},
  {name: "Cheese", price: 3.99, img: '', meal: "Snack", type: "Dip", microwaveable: false}
];
export {foodArray};