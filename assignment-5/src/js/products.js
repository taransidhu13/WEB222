/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "The Murder of Roger Ackroyd",
    description: "A classic Hercule Poirot mystery by Agatha Christie.",
    price: 12.99,
    discontinued: true,
    imageUrl: "images/p1.jpg",
    categories: ["c1"]
  },
  {
    id: "P2",
    title: "The Hound of the Baskervilles",
    description: "Sherlock Holmes faces a supernatural mystery on the moors.",
    price: 8.99,
    discontinued: false,
    imageUrl: "images/p2.jpg",
    categories: ["c2"]
  },
  {
    id: "P3",
    title: "Nancy Drew: The Secret of the Old Clock",
    description: "Join Nancy Drew in solving mysteries and uncovering secrets.",
    price: 5.99,
    discontinued: true,
    imageUrl: "images/p3.jpg",
    categories: ["c3"]
  },
  {
    id: "P4",
    title: "Murder on the Orient Express",
    description: "Hercule Poirot investigates a murder on a luxurious train.",
    price: 14.99,
    discontinued: false,
    imageUrl: "images/p4.jpg",
    categories: ["c1"]
  },
  {
    id: "P5",
    title: "The Adventures of Sherlock Holmes",
    description: "A collection of short stories featuring Sherlock Holmes and Dr. Watson.",
    price: 10.99,
    discontinued: true,
    imageUrl: "images/p5.jpg",
    categories: ["c2"]
  },
  {
    id: "P6",
    title: "Nancy Drew: The Mystery at Lilac Inn",
    description: "Nancy Drew tackles a mysterious case at Lilac Inn.",
    price: 6.99,
    discontinued: false,
    imageUrl: "images/p6.jpg",
    categories: ["c3"]
  },
  {
    id: "P7",
    title: "And Then There Were None",
    description: "Ten strangers are lured to an island, only to face a deadly accusation.",
    price: 13.99,
    discontinued: false,
    imageUrl: "images/p7.jpg",
    categories: ["c1"]
  },
  {
    id: "P8",
    title: "The Sign of Four",
    description: "Sherlock Holmes and Dr. Watson unravel a complex mystery involving treasure.",
    price: 9.99,
    discontinued: false,
    imageUrl: "images/p8.jpg",
    categories: ["c2"]
  },
  {
    id: "P9",
    title: "Nancy Drew: The Clue in the Diary",
    description: "Nancy Drew uncovers secrets hidden in an old diary.",
    price: 7.49,
    discontinued: false,
    imageUrl: "images/p9.jpg",
    categories: ["c3"]
  },
  {
    id: "P10",
    title: "Death on the Nile",
    description: "Hercule Poirot investigates a murder during a cruise on the Nile.",
    price: 15.99,
    discontinued: true,
    imageUrl: "images/p10.jpg",
    categories: ["c1"]
  },
  {
    id: "P11",
    title: "The Valley of Fear",
    description: "Sherlock Holmes confronts a secret society in the English countryside.",
    price: 10.99,
    discontinued: false,
    imageUrl: "images/p11.jpg",
    categories: ["c2"]
  },
  {
    id: "P12",
    title: "Nancy Drew: The Ghost of Blackwood Hall",
    description: "Nancy Drew encounters a ghostly mystery at Blackwood Hall.",
    price: 7.99,
    discontinued: false,
    imageUrl: "images/p12.jpg",
    categories: ["c3"]
  },
  {
    id: "P13",
    title: "Evil Under the Sun",
    description: "Hercule Poirot solves a murder mystery at a seaside resort.",
    price: 14.99,
    discontinued: false,
    imageUrl: "images/p13.jpg",
    categories: ["c1"]
  },
  {
    id: "P14",
    title: "The Case-Book of Sherlock Holmes",
    description: "Sherlock Holmes faces new challenges in a collection of cases.",
    price: 11.99,
    discontinued: true,
    imageUrl: "images/p14.jpg",
    categories: ["c2"]
  },
  {
    id: "P15",
    title: "Nancy Drew: The Hidden Staircase",
    description: "Nancy Drew investigates a hidden staircase and a family secret.",
    price: 6.99,
    discontinued: false,
    imageUrl: "images/p15.jpg",
    categories: ["c3"]
  },
  {
    id: "P16",
    title: "Appointment with Death",
    description: "Hercule Poirot must solve a murder mystery during a journey in the Middle East.",
    price: 13.99,
    discontinued: false,
    imageUrl: "images/p16.jpg",
    categories: ["c1"]
  },

  {
    id: "P17",
    title: "Five Little Pigs",
    description: "Hercule Poirot investigates a 16-year-old murder with five suspects.",
    price: 12.99,
    discontinued: false,
    imageUrl: "images/p17.jpg",
    categories: ["c1"]
  },
  {
    id: "P18",
    title: "The Memoirs of Sherlock Holmes",
    description: "Sherlock Holmes recounts his adventures in a collection of memoirs.",
    price: 10.99,
    discontinued: false,
    imageUrl: "images/p18.jpg",
    categories: ["c2"]
  },
  {
    id: "P19",
    title: "Nancy Drew: The Whispering Statue",
    description: "Nancy Drew encounters a mysterious statue with a hidden secret.",
    price: 7.99,
    discontinued: false,
    imageUrl: "images/p19.jpg",
    categories: ["c3"]
  },
  {
    id: "P20",
    title: "Sad Cypress",
    description: "Hercule Poirot solves a murder mystery involving love and betrayal.",
    price: 14.99,
    discontinued: false,
    imageUrl: "images/p20.jpg",
    categories: ["c1"]
  },
  {
    id: "P21",
    title: "The Return of Sherlock Holmes",
    description: "Sherlock Holmes returns to solve new cases after his presumed death.",
    price: 11.99,
    discontinued: false,
    imageUrl: "images/p21.jpg",
    categories: ["c2"]
  },
  {
    id: "P22",
    title: "Nancy Drew: The Scarlet Slipper Mystery",
    description: "Nancy Drew investigates a missing slipper and a dance mystery.",
    price: 8.99,
    discontinued: false,
    imageUrl: "images/p22.jpg",
    categories: ["c3"]
  },
  {
    id: "P23",
    title: "Lord Edgware Dies",
    description: "Hercule Poirot faces a complex murder case involving a famous actress.",
    price: 13.99,
    discontinued: false,
    imageUrl: "images/p23.jpg",
    categories: ["c1"]
  },
  {
    id: "P24",
    title: "The Adventure of the Engineer's Thumb",
    description: "Sherlock Holmes tackles a peculiar case involving a severed thumb.",
    price: 9.99,
    discontinued: false,
    imageUrl: "images/p24.jpg",
    categories: ["c2"]
  },
  {
    id: "P25",
    title: "Nancy Drew: The Clue of the Broken Locket",
    description: "Nancy Drew unravels the mystery behind a broken locket.",
    price: 6.99,
    discontinued: false,
    imageUrl: "images/p25.jpg",
    categories: ["c3"]
  },
  {
    id: "P26",
    title: "Peril at End House",
    description: "Hercule Poirot investigates a series of accidents and murder attempts.",
    price: 15.99,
    discontinued: false,
    imageUrl: "images/p26.jpg",
    categories: ["c1"]
  },
  {
    id: "P27",
    title: "The Case of the Missing Marquess",
    description: "Enola Holmes embarks on her first case to find a missing marquess.",
    price: 8.99,
    discontinued: false,
    imageUrl: "images/p27.jpg",
    categories: ["c2"]
  },
  {
    id: "P28",
    title: "Nancy Drew: The Mystery at the Ski Jump",
    description: "Nancy Drew faces a mystery at the ski jump involving sabotage.",
    price: 7.99,
    discontinued: true,
    imageUrl: "images/p28.jpg",
    categories: ["c3"]
  },
  {
    id: "P29",
    title: "Cards on the Table",
    description: "Hercule Poirot investigates a murder during a card game.",
    price: 12.99,
    discontinued: false,
    imageUrl: "images/p29.jpg",
    categories: ["c1"]
  },
  {
    id: "P30",
    title: "The Boscombe Valley Mystery",
    description: "Sherlock Holmes solves a case involving a tragic murder in Boscombe Valley.",
    price: 10.99,
    discontinued: false,
    imageUrl: "images/p30.jpg",
    categories: ["c2"]
  },
  {
    id: "P31",
    title: "Nancy Drew: The Secret of Shadow Ranch",
    description: "Nancy Drew uncovers secrets at Shadow Ranch involving a phantom horse.",
    price: 8.99,
    discontinued: false,
    imageUrl: "images/p31.jpg",
    categories: ["c3"]
  },
  {
    id: "P32",
    title: "The Murder on the Links",
    description: "Hercule Poirot faces a murder mystery on a golf course.",
    price: 13.99,
    discontinued: false,
    imageUrl: "images/p32.jpg",
    categories: ["c1"]
  },
  {
    id: "P33",
    title: "A Study in Scarlet",
    description: "Sherlock Holmes investigates a mysterious murder with a scarlet thread.",
    price: 11.99,
    discontinued: false,
    imageUrl: "images/p33.jpg",
    categories: ["c2"]
  },
  {
    id: "P34",
    title: "Nancy Drew: The Mystery of the Brass-Bound Trunk",
    description: "Nancy Drew encounters a trunk with a hidden mystery.",
    price: 7.99,
    discontinued: false,
    imageUrl: "images/p34.jpg",
    categories: ["c3"]
  },
  {
    id: "P35",
    title: "Curtain: Poirot's Last Case",
    description: "Hercule Poirot's final case involving old friends and a murder plot.",
    price: 15.99,
    discontinued: false,
    imageUrl: "images/p35.jpg",
    categories: ["c1"]
  }
];
