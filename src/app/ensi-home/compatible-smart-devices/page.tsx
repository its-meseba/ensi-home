'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, X, Filter } from 'lucide-react';
import {
  Antenna,
  Bluetooth,
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import productsDataRaw from '@/data/compatible-brands-and-devices.json';
import { CompatibleBrand, ProductsData } from '@/data/types';

const productsData: ProductsData = productsDataRaw as ProductsData;
const allBrands: CompatibleBrand[] = productsData.categories.flatMap(
  (category) => category.compatible_brands
);

function capitalizeFirstLetter(string: string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const uniqueCategories = Array.from(
  new Set(productsData.categories.map((category) => category.category_name))
);

const uniqueTechnologies = Array.from(
  new Set(
    allBrands.flatMap((brand) =>
      brand.supported_devices.flatMap((device) => device.technologies)
    )
  )
);

const categoryIconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  lighting: Lightbulb,
  video: Video,
  music: Music,
  appliances: Tv,
  security: Shield,
  climate: Thermometer,
  tools: Hammer,
  internet: Wifi,
  localization: Globe,
  energy: Zap,
};

const technologyIconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  cloud: Cloud,
  ble: Bluetooth,
  'z-wave': Radio,
  zigbee: Fence,
  infrared: Antenna,
  '433 mhz': Waves,
  lan: Network,
  matter: Hexagon,
  thread: GitBranch,
};

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
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const FilterSidebar = () => (
    <div className="flex flex-col space-y-4">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center font-medium"
            onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
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
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="flex items-center text-sm"
                    >
                      {categoryIconMap[category] &&
                        React.createElement(categoryIconMap[category], {
                          className: 'mr-2 h-4 w-4',
                        })}
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

      <div>
        <div className="mb-2 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center font-medium"
            onClick={() => setIsTechnologyFilterOpen(!isTechnologyFilterOpen)}
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
                      checked={selectedTechnologies.includes(technology)}
                      onCheckedChange={() => handleTechnologyChange(technology)}
                    />
                    <label
                      htmlFor={`technology-${technology}`}
                      className="flex items-center text-sm"
                    >
                      {technologyIconMap[technology] &&
                        React.createElement(technologyIconMap[technology], {
                          className: 'mr-2 h-4 w-4',
                        })}
                      {technology}
                    </label>
                  </div>
                  <span className="text-xs text-gray-500">(0)</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 bg-white p-6 shadow-md lg:block">
          <h2 className="mb-4 text-xl font-semibold">Filters</h2>
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="mb-4 text-2xl font-bold">Compatible Brands</h1>
          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="relative grow">
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
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence>
              {isLoading ? (
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
                  const brandn = brand.name.toLowerCase().replace(/\s+/g, '-');
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
                        href={`/ensi-home/compatible-smart-devices/${brandn}`}
                        className="block"
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={brand.summary_image_url || '/placeholder.jpg'}
                            alt={brand.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL="/placeholder.jpg"
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
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="flex items-center"
                            >
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
                                  { className: 'mr-1 h-3 w-3' }
                                )}
                              {capitalizeFirstLetter(
                                productsData.categories.find((cat) =>
                                  cat.compatible_brands.includes(brand)
                                )?.category_name || 'Unknown'
                              )}
                            </Badge>
                            <Badge variant="outline">Technologies</Badge>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No brands match your filters.
                </p>
              )}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      {/* Floating Filter Button for Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
        <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2 rounded-full px-6 py-3 shadow-lg"
            >
              <Filter className="size-5" />

              {(selectedCategories.length > 0 ||
                selectedTechnologies.length > 0) && (
                <Badge variant="secondary" className="ml-2">
                  {selectedCategories.length + selectedTechnologies.length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl">
            <h2 className="mb-4 text-lg font-semibold">Filters</h2>
            <FilterSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

// Purpose: To inform about the range of devices compatible with Ensi Home systems.

// Components:

// Introduction:

// Emphasize flexibility and wide compatibility.
// Brands Section:

// Logos and brief descriptions of compatible brands.
// Each brand links to a dedicated page (/[brandn]/page.tsx) with more details.
// Device Categories:

// Lighting, Security, Climate Control, Appliances, etc.
// Images and brief descriptions.
// Integration Benefits:

// Ease of adding preferred devices.
// Future-proofing projects.
// Call to Action:

// CTA Button: "Discuss Device Integration" - links to /contact/
