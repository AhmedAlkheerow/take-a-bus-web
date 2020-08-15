import React from 'react';
import SuggestionItem from './SuggestionItem';
import { motion } from 'framer-motion';

const suggestions = [
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
    fastest: true,
    path: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [44.01165962219238, 36.20376737643796],
              [44.0167236328125, 36.20279774967046],
              [44.023332595825195, 36.19909227958814],
              [44.0262508392334, 36.19161154389828],
              [44.026336669921875, 36.18496140107185],
              [44.023933410644524, 36.18056229840559],
              [44.01852607727051, 36.17619759021374],
              [44.00299072265625, 36.174188357098366],
              [43.99960041046142, 36.17605902406675],
            ],
          },
        },
      ],
    },
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
    path: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [44.01165962219238, 36.20376737643796],
              [44.0167236328125, 36.20279774967046],
              [44.023332595825195, 36.19909227958814],
              [44.0262508392334, 36.19161154389828],
              [44.026336669921875, 36.18496140107185],
              [44.023933410644524, 36.18056229840559],
              [44.01852607727051, 36.17619759021374],
              [44.00299072265625, 36.174188357098366],
              [43.99960041046142, 36.17605902406675],
            ],
          },
        },
      ],
    },
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
    path: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [44.01165962219238, 36.20376737643796],
              [44.0167236328125, 36.20279774967046],
              [44.023332595825195, 36.19909227958814],
              [44.0262508392334, 36.19161154389828],
              [44.026336669921875, 36.18496140107185],
              [44.023933410644524, 36.18056229840559],
              [44.01852607727051, 36.17619759021374],
              [44.00299072265625, 36.174188357098366],
              [43.99960041046142, 36.17605902406675],
            ],
          },
        },
      ],
    },
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
    path: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [44.01165962219238, 36.20376737643796],
              [44.0167236328125, 36.20279774967046],
              [44.023332595825195, 36.19909227958814],
              [44.0262508392334, 36.19161154389828],
              [44.026336669921875, 36.18496140107185],
              [44.023933410644524, 36.18056229840559],
              [44.01852607727051, 36.17619759021374],
              [44.00299072265625, 36.174188357098366],
              [43.99960041046142, 36.17605902406675],
            ],
          },
        },
      ],
    },
  },
];

export default function SuggestionContainer() {
  let count = 0;
  return (
    <div className="">
      {suggestions.map((s, idx) => {
        count += 0.1;
        return (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.2,
              delay: count,
              type: 'spring',
              damping: 300,
            }}
            key={idx}
          >
            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 1 }}>
              <SuggestionItem {...s} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
