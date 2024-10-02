// src/lib/posts.ts

import matter from 'gray-matter';
import { promises as fs } from 'fs';
import path from 'path';

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags: string[];
  category: string;
  // contentHtml is excluded as we are not rendering content here
}

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'posts');

/**
 * Fetches and sorts posts data.
 * @returns A Promise resolving to an array of posts sorted by date in descending order.
 */
export async function getSortedPostsData(): Promise<
  Omit<PostData, 'contentHtml'>[]
> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData: Omit<PostData, 'contentHtml'>[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.mdx')) {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      allPostsData.push({
        slug,
        ...(matterResult.data as {
          title: string;
          date: string;
          description: string;
          coverImage?: string;
          tags: string[];
          category: string;
        }),
      });
    }
  }

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Retrieves all post slugs.
 * @returns A Promise resolving to an array of slugs.
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * Fetches and parses a single post's data.
 * @param slug - The slug of the post.
 * @returns A Promise resolving to the post data.
 */
export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    ...(matterResult.data as {
      title: string;
      date: string;
      description: string;
      coverImage?: string;
      tags: string[];
      category: string;
    }),
  };
}

/**
 * Retrieves all unique tags from the posts.
 * @returns A Promise resolving to an array of unique tags.
 */
export async function getAllTags(): Promise<string[]> {
  const allPostsData = await getSortedPostsData();
  const tagsSet = new Set<string>();

  allPostsData.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet);
}

/**
 * Retrieves all unique categories from the posts.
 * @returns A Promise resolving to an array of unique categories.
 */
export async function getAllCategories(): Promise<string[]> {
  const allPostsData = await getSortedPostsData();
  const categoriesSet = new Set<string>();

  allPostsData.forEach((post) => {
    categoriesSet.add(post.category);
  });

  return Array.from(categoriesSet);
}

interface MdxContent {
  content: string;
}

export async function getMdxContent(slug: string): Promise<MdxContent> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  // Check if the file exists
  try {
    await fs.access(fullPath);
  } catch (error) {
    throw new Error(
      `Error ${error}. MDX file for slug "${slug}" not found at path: ${fullPath}`
    );
  }

  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return { content: matterResult.content };
}
