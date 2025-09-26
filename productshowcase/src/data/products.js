import headphone from '../assets/headphone.jpg';
import smartwatch from '../assets/smartwatch.jpg';
import hddrone from '../assets/hddrone.jpg';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-fidelity sound with active noise cancellation.',
    price: '$199',
    img: headphone, // use the variable
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track fitness, sleep, and notifications.',
    price: '$149',
    img: smartwatch,
  },
  {
    id: 3,
    name: '4K Drone',
    description: 'Capture cinematic aerial footage.',
    price: '$899',
    img: hddrone,
  },
];

export default products;