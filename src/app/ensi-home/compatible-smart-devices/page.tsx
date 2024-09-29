'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import {
  Antenna,
  Bluetooth,
  ChevronLeft as LucideChevronLeft,
  ChevronRight as LucideChevronRight,
  Cloud,
  Fence,
  GitBranch,
  Globe,
  Hammer,
  Hexagon,
  Lightbulb,
  Music,
  Network,
  Radio,
  Shield,
  Thermometer,
  Tv,
  Video,
  Waves,
  Wifi,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import productsDataRaw from '@/data/compatible-brands-and-devices.json'; // Adjust the path as necessary
import { CompatibleBrand, ProductsData } from '@/data/types'; // Adjust the path as necessary

// Type assertion for JSON data
const productsData: ProductsData = productsDataRaw as ProductsData;

// Extract all brands
const allBrands: CompatibleBrand[] = productsData.categories.flatMap(
  (category) => category.compatible_brands
);

// Extract unique categories
function capitalizeFirstLetter(string: string) {
  if (!string) return ''; // Handle empty or null string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const uniqueCategories = Array.from(
  new Set(
    productsData.categories.map((category) => {
      // return capitalizeFirstLetter(category.category_name);
      return category.category_name;
    })
  )
);

// Extract unique technologies (dummy filter)
const uniqueTechnologies = Array.from(
  new Set(
    allBrands.flatMap((brand) =>
      brand.supported_devices.flatMap((device) => device.technologies)
    )
  )
);

// Create icon mappings for categories
const categoryIconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {};
productsData.categories.forEach((cat) => {
  switch (cat.category_name.toLowerCase()) {
    case 'lighting':
      categoryIconMap[cat.category_name] = Lightbulb;
      break;
    case 'video':
      categoryIconMap[cat.category_name] = Video;
      break;
    case 'music':
      categoryIconMap[cat.category_name] = Music;
      break;
    case 'appliances':
      categoryIconMap[cat.category_name] = Tv;
      break;
    case 'security':
      categoryIconMap[cat.category_name] = Shield;
      break;
    case 'climate':
      categoryIconMap[cat.category_name] = Thermometer;
      break;
    case 'tools':
      categoryIconMap[cat.category_name] = Hammer;
      break;
    case 'internet':
      categoryIconMap[cat.category_name] = Wifi;
      break;
    case 'localization':
      categoryIconMap[cat.category_name] = Globe;
      break;
    case 'energy':
      categoryIconMap[cat.category_name] = Zap;
      break;
    default:
      categoryIconMap[cat.category_name] = Lightbulb; // Default icon
      break;
  }
});

// Create icon mappings for technologies (dummy)
const technologyIconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {};
uniqueTechnologies.forEach((tech) => {
  switch (tech.toLowerCase()) {
    case 'cloud':
      technologyIconMap[tech] = Cloud;
      break;
    case 'ble':
      technologyIconMap[tech] = Bluetooth;
      break;
    case 'z-wave':
      technologyIconMap[tech] = Radio;
      break;
    case 'zigbee':
      technologyIconMap[tech] = Fence;
      break;
    case 'infrared':
      technologyIconMap[tech] = Antenna;
      break;
    case '433 mhz':
      technologyIconMap[tech] = Waves;
      break;
    case 'lan':
      technologyIconMap[tech] = Network;
      break;
    case 'matter':
      technologyIconMap[tech] = Hexagon;
      break;
    case 'thread':
      technologyIconMap[tech] = GitBranch;
      break;
    default:
      technologyIconMap[tech] = Cloud; // Default icon
      break;
  }
});

export default function EnhancedFilteredProducts() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'name' | 'category'>('name');
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(true);
  const [isTechnologyFilterOpen, setIsTechnologyFilterOpen] = useState(true);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(true);

  // Filtered Brands based on selected categories
  const filteredBrands = allBrands
    .filter((brand) => {
      if (selectedCategories.length === 0) return true;
      const brandCategory = productsData.categories.find((cat) =>
        cat.compatible_brands.includes(brand)
      );
      return brandCategory
        ? selectedCategories.includes(brandCategory.category_name)
        : false;
    })
    .filter((brand) => {
      if (searchQuery.trim() === '') return true;
      const brandDescription = brand.description || '';
      return (
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brandDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'category') {
        const categoryA =
          productsData.categories.find((cat) =>
            cat.compatible_brands.includes(a)
          )?.category_name || '';
        const categoryB =
          productsData.categories.find((cat) =>
            cat.compatible_brands.includes(b)
          )?.category_name || '';
        return categoryA.localeCompare(categoryB);
      }
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
    return allBrands.filter((brand) => {
      const brandCategory = productsData.categories.find((cat) =>
        cat.compatible_brands.includes(brand)
      );
      return brandCategory ? brandCategory.category_name === category : false;
    }).length;
  };

  // Technologies filter is dummy and does not affect brands

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const ChevronLeftIcon = () => <LucideChevronLeft className="size-4" />;

  const ChevronRightIcon = () => <LucideChevronRight className="size-4" />;
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Filter Sidebar */}
      <motion.aside
        animate={{
          width: isFilterSidebarOpen ? 256 : 64, // Tailwind's w-64 is 16rem (256px), w-16 is 4rem (64px)
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative flex flex-col bg-white p-4 shadow-md"
      >
        {/* Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute -right-4 top-4 ${isFilterSidebarOpen ? '' : 'rotate-180'}`}
          onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
        >
          {isFilterSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Button>

        {/* Header */}
        <div
          className={`mb-4 transition-opacity duration-300 ${isFilterSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>

        {/* Scrollable Content */}
        <AnimatePresence>
          {isFilterSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-auto"
            >
              <div className="space-y-4">
                {/* Categories Filter */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center font-medium"
                      onClick={() =>
                        setIsCategoryFilterOpen(!isCategoryFilterOpen)
                      }
                    >
                      Categories
                      {isCategoryFilterOpen ? (
                        <ChevronUp className="ml-2 size-4" />
                      ) : (
                        <ChevronDown className="ml-2 size-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCategories}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </Button>
                  </div>
                  <AnimatePresence>
                    {isCategoryFilterOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {uniqueCategories.map((category) => (
                          <motion.div
                            key={category}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-between space-x-2"
                          >
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() =>
                                  handleCategoryChange(category)
                                }
                              />
                              <label
                                htmlFor={`category-${category}`}
                                className="flex items-center text-sm"
                              >
                                {categoryIconMap[category] &&
                                  React.createElement(
                                    categoryIconMap[category],
                                    { className: 'w-4 h-4 mr-2' }
                                  )}
                                {capitalizeFirstLetter(category)}
                              </label>
                            </div>
                            <span className="text-xs text-gray-500">
                              ({getCategoryCount(category)})
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Technologies Filter (Dummy) */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center font-medium"
                      onClick={() =>
                        setIsTechnologyFilterOpen(!isTechnologyFilterOpen)
                      }
                    >
                      Technologies
                      {isTechnologyFilterOpen ? (
                        <ChevronUp className="ml-2 size-4" />
                      ) : (
                        <ChevronDown className="ml-2 size-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearTechnologies}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </Button>
                  </div>
                  <AnimatePresence>
                    {isTechnologyFilterOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {uniqueTechnologies.map((technology) => (
                          <motion.div
                            key={technology}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-between space-x-2"
                          >
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`technology-${technology}`}
                                checked={selectedTechnologies.includes(
                                  technology
                                )}
                                onCheckedChange={() =>
                                  handleTechnologyChange(technology)
                                }
                              />
                              <label
                                htmlFor={`technology-${technology}`}
                                className="flex items-center text-sm"
                              >
                                {technologyIconMap[technology] &&
                                  React.createElement(
                                    technologyIconMap[technology],
                                    { className: 'w-4 h-4 mr-2' }
                                  )}
                                {technology}
                              </label>
                            </div>
                            <span className="text-xs text-gray-500">(0)</span>{' '}
                            {/* Dummy count */}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-2xl font-bold"
        >
          Compatible Brands
        </motion.h1>
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="relative max-w-md grow">
            <Input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setSearchQuery('')}
              >
                <X className="size-4" />
              </Button>
            )}
          </div>
          <Select
            value={sortOption}
            onValueChange={(value) =>
              setSortOption(value as 'name' | 'category')
            }
          >
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
            {isLoading ? (
              // Skeleton loading
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
            ) : filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => {
                console.log(brand.name.toLowerCase().replace(/\s+/g, '-'));
                // const brandName = brand.name.toLowerCase().replace(/\s+/g, '-');

                return (
                  <motion.div
                    key={brand.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    <Link
                      href={`/ensi-home/compatible-smart-devices/1`}
                      className="block"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={brand.summary_image_url || '/placeholder.svg'}
                          alt={brand.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="/placeholder.svg" // Ensure this image exists in your public directory
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">
                          {brand.name}
                        </h3>
                        <p className="mb-2 text-sm text-gray-600">
                          {brand.company || 'Unknown Company'}
                        </p>
                        <p className="mb-4 text-sm text-gray-500">
                          {brand.description || 'No description available.'}
                        </p>
                        <div className="flex items-center space-x-2">
                          {/* Category Tag */}
                          <span className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                            {categoryIconMap[
                              productsData.categories.find((cat) =>
                                cat.compatible_brands.includes(brand)
                              )?.category_name || 'Unknown'
                            ] &&
                              React.createElement(
                                categoryIconMap[
                                  productsData.categories.find((cat) =>
                                    cat.compatible_brands.includes(brand)
                                  )?.category_name || 'Unknown'
                                ],
                                { className: 'w-3 h-3 mr-1' }
                              )}
                            {capitalizeFirstLetter(
                              productsData.categories.find((cat) =>
                                cat.compatible_brands.includes(brand)
                              )?.category_name || 'Unknown'
                            )}
                          </span>
                          {/* Technology Tag (Dummy) */}
                          <span className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                            Technologies
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <p className="text-gray-500">No brands match your filters.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

/**
 * Custom Chevron Icons for Sidebar Toggle
 * Using ChevronLeft and ChevronRight instead of ChevronUp and ChevronDown
 * to better represent the collapse/expand direction.
 */
