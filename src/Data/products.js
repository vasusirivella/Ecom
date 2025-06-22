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
import img51 from '../images/img/51.jpg'; // The Sanskari Drips
import img52 from '../images/img/52.jpg'; // The Sanskari Drips
import img53 from '../images/img/53.jpg'; // The Sanskari Drips
import img54 from '../images/img/54.jpg'; // The Sanskari Drips

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

  // --- Men's The Sanskari Drips Collection ---
  {
    id: 'men-sd-1',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Street Style Shirt',
    originalPrice: '₹ 1,200.00',
    salePrice: '₹ 800.00',
    image: img51,
    isSale: true,
  },
  {
    id: 'men-sd-2',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Urban Casual T-Shirt',
    originalPrice: '₹ 700.00',
    salePrice: '₹ 550.00',
    image: img52,
    isSale: false,
  },
  {
    id: 'men-sd-3',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Classic Kurta Set',
    originalPrice: '₹ 4,500.00',
    salePrice: '₹ 3,999.00',
    image: img53,
    isSale: true,
  },
  {
    id: 'men-sd-4',
    category: 'the-sanskari-drips',
    gender: 'men',
    name: 'Ethnic Jacket & Kurta',
    originalPrice: '₹ 2,999.00',
    salePrice: '₹ 2,299.00',
    image: img54,
    isSale: true,
  },
];
