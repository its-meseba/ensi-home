// data/types.ts

export interface SupportedDevice {
  data_driver_id: string;
  data_platforms: string;
  device_name: string;
  technologies: string[];
  image_url: string;
  local_image_url: string;
}

export interface CompatibleBrand {
  name: string;
  description: string | null;
  company: string | null;
  summary_image_url: string | null;
  local_summary_image_url: string | null;
  summary_description: string | null;
  supported_devices: SupportedDevice[];
}

export interface Category {
  category_name: string;
  compatible_brands: CompatibleBrand[];
}

export interface ProductsData {
  categories: Category[];
}

/**
 * Type Guard for SupportedDevice
 */
export function isSupportedDevice(
  obj: SupportedDevice
): obj is SupportedDevice {
  return (
    typeof obj.data_driver_id === 'string' &&
    typeof obj.data_platforms === 'string' &&
    typeof obj.device_name === 'string' &&
    Array.isArray(obj.technologies) &&
    obj.technologies.every((tech: string) => typeof tech === 'string') &&
    typeof obj.image_url === 'string' &&
    typeof obj.local_image_url === 'string'
  );
}

/**
 * Type Guard for CompatibleBrand
 */
export function isCompatibleBrand(
  obj: CompatibleBrand
): obj is CompatibleBrand {
  return (
    typeof obj.name === 'string' &&
    (typeof obj.description === 'string' || obj.description === null) &&
    (typeof obj.company === 'string' || obj.company === null) &&
    (typeof obj.summary_image_url === 'string' ||
      obj.summary_image_url === null) &&
    (typeof obj.local_summary_image_url === 'string' ||
      obj.local_summary_image_url === null) &&
    (typeof obj.summary_description === 'string' ||
      obj.summary_description === null) &&
    Array.isArray(obj.supported_devices) &&
    obj.supported_devices.every(isSupportedDevice)
  );
}
