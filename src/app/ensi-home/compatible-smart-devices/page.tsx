import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react'
import { 
  Lightbulb, Video, Music, Tv, Shield, Thermometer, Tool, Wifi, Globe, Zap,
  Cloud, Bluetooth, Radio, Zigzag, Infrared, Waves, Network, Hexagon, GitBranch
} from 'lucide-react'

// Mock data structure
const products = [
  { id: 1, name: "Philips Hue", category: "Lighting", technology: "Zigbee", manufacturer: "Signify", image: "/placeholder.svg?height=200&width=300", description: "Smart lighting solution for your home" },
  { id: 2, name: "Aqara", category: "Security", technology: "Zigbee", manufacturer: "Lumi United", image: "/placeholder.svg?height=200&width=300", description: "Comprehensive smart home and security devices" },
  { id: 3, name: "IKEA Trådfri", category: "Lighting", technology: "Zigbee", manufacturer: "IKEA", image: "/placeholder.svg?height=200&width=300", description: "Affordable smart lighting options" },
  { id: 4, name: "Smart Presence", category: "Security", technology: "Cloud", manufacturer: "Community", image: "/placeholder.svg?height=200&width=300", description: "Advanced presence detection for smart homes" },
  { id: 5, name: "Tuya Zigbee", category: "Lighting", technology: "Zigbee", manufacturer: "Tuya", image: "/placeholder.svg?height=200&width=300", description: "Versatile smart home ecosystem" },
]

const categories = [
  { name: "Lighting", icon: Lightbulb },
  { name: "Video", icon: Video },
  { name: "Music", icon: Music },
  { name: "Appliances", icon: Tv },
  { name: "Security", icon: Shield },
  { name: "Climate", icon: Thermometer },
  { name: "Tools", icon: Tool },
  { name: "Internet", icon: Wifi },
  { name: "Localization", icon: Globe },
  { name: "Energy", icon: Zap }
]

const technologies = [
  { name: "Cloud", icon: Cloud },
  { name: "BLE", icon: Bluetooth },
  { name: "Z-Wave", icon: Radio },
  { name: "Zigbee", icon: Zigzag },
  { name: "Infrared", icon: Infrared },
  { name: "433 Mhz", icon: Waves },
  { name: "LAN", icon: Network },
  { name: "Matter", icon: Hexagon },
  { name: "Thread", icon: GitBranch }
]

export default function EnhancedFilteredProducts() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState("name")
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(true)
  const [isTechnologyFilterOpen, setIsTechnologyFilterOpen] = useState(true)
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(true)

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (selectedTechnologies.length === 0 || selectedTechnologies.includes(product.technology)) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name)
      if (sortOption === "category") return a.category.localeCompare(b.category)
      return 0
    })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(technology) ? prev.filter(t => t !== technology) : [...prev, technology]
    )
  }

  const clearCategories = () => setSelectedCategories([])
  const clearTechnologies = () => setSelectedTechnologies([])

  const getCategoryCount = (category: string) => {
    return products.filter(product => product.category === category).length
  }

  const getTechnologyCount = (technology: string) => {
    return products.filter(product => product.technology === technology).length
  }

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isFilterSidebarOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-64 bg-white p-6 shadow-md relative"
      >
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-4"
          onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
        >
          {isFilterSidebarOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="space-y-4">
            {/* Categories Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                  onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
                >
                  Categories {isCategoryFilterOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
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
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {categories.map(category => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between space-x-2 mb-2"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category.name}`} 
                            checked={selectedCategories.includes(category.name)}
                            onCheckedChange={() => handleCategoryChange(category.name)}
                          />
                          <label htmlFor={`category-${category.name}`} className="text-sm flex items-center">
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.name}
                          </label>
                        </div>
                        <span className="text-xs text-gray-500">({getCategoryCount(category.name)})</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technologies Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                  onClick={() => setIsTechnologyFilterOpen(!isTechnologyFilterOpen)}
                >
                  Technologies {isTechnologyFilterOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
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
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {technologies.map(technology => (
                      <motion.div
                        key={technology.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between space-x-2 mb-2"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`technology-${technology.name}`} 
                            checked={selectedTechnologies.includes(technology.name)}
                            onCheckedChange={() => handleTechnologyChange(technology.name)}
                          />
                          <label htmlFor={`technology-${technology.name}`} className="text-sm flex items-center">
                            <technology.icon className="w-4 h-4 mr-2" />
                            {technology.name}
                          </label>
                        </div>
                        <span className="text-xs text-gray-500">({getTechnologyCount(technology.name)})</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollArea>
      </motion.aside>

      <main className="flex-1 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Results
        </motion.h1>
        <div className="mb-4 flex flex-wrap gap-4">
          <div className="relative flex-grow max-w-md">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Skeleton className="w-full h-48" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <div className="mt-2 flex items-center space-x-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/ensi-home/compatible-smart/devices/${product.id}`} className="block">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.manufacturer}</p>
                      <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full flex items-center">
                          {categories.find(c => c.name === product.category)?.icon && React.createElement(categories.find(c => c.name === product.category)!.icon, { className: "w-3 h-3 mr-1" })}
                          {product.category}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full flex items-center">
                          {technologies.find(t => t.name === product.technology)?.icon && React.createElement(technologies.find(t => t.name === product.technology)!.icon, { className: "w-3 h-3 mr-1" })}
                          {product.technology}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}
