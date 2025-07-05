// src/data/products.js

// ✅ Image Imports
import img01 from '../images/img/01.jpg'; // Men - Desi Formals
import img02 from '../images/img/02.jpg'; // Pooh
import img03 from '../images/img/03.jpg'; // Pooh
import img04 from '../images/img/04.jpg'; // Pooh
import img05 from '../images/img/05.jpg'; // Pooh
import img06 from '../images/img/06.jpg'; // Pooh
import img07 from '../images/img/07.jpg'; // Naina
import img08 from '../images/img/08.jpg'; // Naina
import img09 from '../images/img/09.jpg'; // Geet
import img10 from '../images/img/10.jpg'; // Aisha
import img11 from '../images/img/11.jpg'; // Aisha
// --- The Sanskari Drips (Men) ---
import img51 from '../images/img/51.jpg'; // The Sanskari Drips
import img52 from '../images/img/52.jpg'; // The Sanskari Drips
import img53 from '../images/img/53.jpg'; // The Sanskari Drips
import img54 from '../images/img/54.jpg'; // The Sanskari Drips
import img55 from '../images/img/55.jpg'; // The Sanskari Drips
import img56 from '../images/img/56.jpg'; // The Sanskari Drips
import img57 from '../images/img/57.jpg'; // The Sanskari Drips
import img58 from '../images/img/58.jpg'; // The Sanskari Drips
import img59 from '../images/img/59.jpg'; // The Sanskari Drips
import img60 from '../images/img/60.jpg'; // The Sanskari Drips
import img61 from '../images/img/61.jpg'; // The Sanskari Drips
import img62 from '../images/img/62.jpg'; // The Sanskari Drips
import img63 from '../images/img/63.jpg'; // The Sanskari Drips
import img64 from '../images/img/64.jpg'; // The Sanskari Drips


// ✅ All Products
export const allProducts = [
  // --- Women's Pooh Collection ---
  {
    id: 'pooh-1',
    category: 'pooh',
    gender: 'women',
    name: 'Cherry Kurti',
    originalPrice: '₹ 1,999.00',
    salePrice: '₹ 699.00',
    image: img02,
    isSale: true,
  },
  {
    id: 'pooh-2',
    category: 'pooh',
    gender: 'women',
    name: 'Kamli Kurti Black & White',
    originalPrice: '₹ 1,499.00',
    salePrice: '₹ 554.00',
    image: img03,
    isSale: true,
  },
  {
    id: 'pooh-3',
    category: 'pooh',
    gender: 'women',
    name: 'Vrinda - Square neck Kurti',
    originalPrice: '₹ 1,899.00',
    salePrice: '₹ 699.00',
    image: img04,
    isSale: true,
  },
  {
    id: 'pooh-4',
    category: 'pooh',
    gender: 'women',
    name: 'Laal Kurti - V neck Strap',
    originalPrice: '₹ 1,699.00',
    salePrice: '₹ 599.00',
    image: img05,
    isSale: true,
  },
  {
    id: 'pooh-5',
    category: 'pooh',
    gender: 'women',
    name: 'Kalpana - V neck Strap Kurti',
    originalPrice: '₹ 1,799.00',
    salePrice: '₹ 599.00',
    image: img06,
    isSale: true,
  },

  // --- Women's Naina Collection ---
  {
    id: 'naina-1',
    category: 'naina',
    gender: 'women',
    name: 'Naina Floral Dress',
    originalPrice: '₹ 2,100.00',
    salePrice: '₹ 1,200.00',
    image: img07,
    isSale: true,
  },
  {
    id: 'naina-2',
    category: 'naina',
    gender: 'women',
    name: 'Naina Summer Top',
    originalPrice: '₹ 950.00',
    salePrice: '₹ 700.00',
    image: img08,
    isSale: false,
  },

  // --- Women's Geet Collection ---
  {
    id: 'geet-1',
    category: 'geet',
    gender: 'women',
    name: 'Geet Party Wear',
    originalPrice: '₹ 3,500.00',
    salePrice: '₹ 2,800.00',
    image: img09,
    isSale: true,
  },

  // --- Women's Aisha Collection ---
  {
    id: 'aisha-1',
    category: 'aisha',
    gender: 'women',
    name: 'Aisha Day Look',
    originalPrice: '₹ 1,999.00',
    salePrice: '₹ 1,499.00',
    image: img10,
    isSale: true,
  },
  {
    id: 'aisha-2',
    category: 'aisha',
    gender: 'women',
    name: 'Aisha Night Look',
    originalPrice: '₹ 2,300.00',
    salePrice: '₹ 1,900.00',
    image: img11,
    isSale: false,
  },

  {
    id: 'men-sd-1',
    category: 'half-style-street-look',
    gender: 'men',
    name: 'Street Style Shirt',
    originalPrice: '₹ 1,200.00',
    salePrice: '₹ 800.00',
    image: img51,
    isSale: true,
  },
  {
    id: 'men-sd-2',
    category: 'half-style-street-look',
    gender: 'men',
    name: 'Urban Casual T-Shirt',
    originalPrice: '₹ 700.00',
    salePrice: '₹ 550.00',
    image: img52,
    isSale: false,
  },
  {
    id: 'men-sd-3',
    category: 'the-desi-formals',
    gender: 'men',
    name: 'Classic Kurta Set',
    originalPrice: '₹ 4,500.00',
    salePrice: '₹ 3,999.00',
    image: img53,
    isSale: true,
  },
  {
    id: 'men-sd-4',
    category: 'the-desi-formals',
    gender: 'men',
    name: 'Ethnic Jacket & Kurta',
    originalPrice: '₹ 2,999.00',
    salePrice: '₹ 2,299.00',
    image: img54,
    isSale: true,
  },
  {
    id: 'men-sd-5',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Traditional Sherwani',
    originalPrice: '₹ 5,200.00',
    salePrice: '₹ 4,499.00',
    image: img55,
    isSale: true,
  },
  {
    id: 'men-sd-6',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Floral Festive Kurta',
    originalPrice: '₹ 1,799.00',
    salePrice: '₹ 1,299.00',
    image: img56,
    isSale: true,
  },
  {
    id: 'men-sd-7',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Printed Cotton Kurta',
    originalPrice: '₹ 999.00',
    salePrice: '₹ 799.00',
    image: img57,
    isSale: false,
  },
  {
    id: 'men-sd-8',
    category: 'the-desi-formals',
    gender: 'men',
    name: 'Designer Nehru Jacket',
    originalPrice: '₹ 2,199.00',
    salePrice: '₹ 1,799.00',
    image: img58,
    isSale: true,
  },
  {
    id: 'men-sd-9',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Silk Blend Kurta',
    originalPrice: '₹ 2,800.00',
    salePrice: '₹ 2,199.00',
    image: img59,
    isSale: true,
  },
  {
    id: 'men-sd-10',
    category: 'all-rounders',
    gender: 'men',
    name: 'Festive Jodhpuri Suit',
    originalPrice: '₹ 6,999.00',
    salePrice: '₹ 5,499.00',
    image: img60,
    isSale: true,
  },
  {
    id: 'men-sd-11',
    category: 'half-style-street-look',
    gender: 'men',
    name: 'Linen Ethnic Shirt',
    originalPrice: '₹ 1,499.00',
    salePrice: '₹ 1,099.00',
    image: img61,
    isSale: false,
  },
  {
    id: 'men-sd-12',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Festival Wear Kurta',
    originalPrice: '₹ 1,799.00',
    salePrice: '₹ 1,299.00',
    image: img62,
    isSale: true,
  },
  {
    id: 'men-sd-13',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Royal Silk Kurta Set',
    originalPrice: '₹ 3,499.00',
    salePrice: '₹ 2,799.00',
    image: img63,
    isSale: true,
  },
  {
    id: 'men-sd-14',
    category: 'all-rounders',
    gender: 'men',
    name: 'Wedding Jacket Suit',
    originalPrice: '₹ 6,200.00',
    salePrice: '₹ 4,999.00',
    image: img64,
    isSale: true,
  },
];
