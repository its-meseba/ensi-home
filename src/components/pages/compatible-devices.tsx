import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Mock data structure
const products = [
  {
    id: 1,
    name: 'Philips Hue',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'Signify',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Smart lighting solution for your home',
  },
  {
    id: 2,
    name: 'Aqara',
    category: 'Security',
    technology: 'Zigbee',
    manufacturer: 'Lumi United',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Comprehensive smart home and security devices',
  },
  {
    id: 3,
    name: 'IKEA Trådfri',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'IKEA',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Affordable smart lighting options',
  },
  {
    id: 4,
    name: 'Smart Presence',
    category: 'Security',
    technology: 'Cloud',
    manufacturer: 'Community',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Advanced presence detection for smart homes',
  },
  {
    id: 5,
    name: 'Tuya Zigbee',
    category: 'Lighting',
    technology: 'Zigbee',
    manufacturer: 'Tuya',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Versatile smart home ecosystem',
  },
];

const categories = [
  'Lighting',
  'Video',
  'Music',
  'Appliances',
  'Security',
  'Climate',
  'Tools',
  'Internet',
  'Localization',
  'Energy',
];
const technologies = [
  'Cloud',
  'BLE',
  'Z-Wave',
  'Zigbee',
  'Infrared',
  '433 Mhz',
  'LAN',
  'Matter',
  'Thread',
];

export default function EnhancedFilteredProducts() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('name');

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedTechnologies.length === 0 ||
          selectedTechnologies.includes(product.technology)) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'category')
        return a.category.localeCompare(b.category);
      return 0;
    });

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((t) => t !== technology)
        : [...prev, technology]
    );
  };

  const clearCategories = () => setSelectedCategories([]);
  const clearTechnologies = () => setSelectedTechnologies([]);

  const getCategoryCount = (category: string) => {
    return products.filter((product) => product.category === category).length;
  };

  const getTechnologyCount = (technology: string) => {
    return products.filter((product) => product.technology === technology)
      .length;
  };

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="w-64 bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-xl font-semibold">Filters</h2>
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Categories</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCategories}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </Button>
              </div>
              {categories.map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 flex items-center justify-between space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={`category-${category}`} className="text-sm">
                      {category}
                    </label>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({getCategoryCount(category)})
                  </span>
                </motion.div>
              ))}
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Technologies</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearTechnologies}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </Button>
              </div>
              {technologies.map((technology) => (
                <motion.div
                  key={technology}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 flex items-center justify-between space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`technology-${technology}`}
                      checked={selectedTechnologies.includes(technology)}
                      onCheckedChange={() => handleTechnologyChange(technology)}
                    />
                    <label
                      htmlFor={`technology-${technology}`}
                      className="text-sm"
                    >
                      {technology}
                    </label>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({getTechnologyCount(technology)})
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </motion.aside>
      <main className="flex-1 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-2xl font-bold"
        >
          Results
        </motion.h1>
        <div className="mb-4 flex space-x-4">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="category">Sort by Category</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {isLoading
              ? // Skeleton loading
                [...Array(6)].map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg bg-white shadow-md"
                  >
                    <Skeleton className="h-48 w-full" />
                    <div className="p-4">
                      <Skeleton className="mb-2 h-6 w-3/4" />
                      <Skeleton className="mb-2 h-4 w-1/2" />
                      <div className="mt-2 flex items-center space-x-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                ))
              : filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    <Link href={`/product/${product.id}`} className="block">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {product.manufacturer}
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                            {product.category}
                          </span>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                            {product.technology}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
