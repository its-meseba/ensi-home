import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags: string[];
  category: string;
}

export async function GET() {
  try {
    const fileNames = await fs.readdir(postsDirectory);

    // Filter out non-MDX files
    const mdxFileNames = fileNames.filter((fileName) =>
      fileName.endsWith('.mdx')
    );

    // Map and fetch PostData
    const allPostsData: PostData[] = await Promise.all(
      mdxFileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        // Optional: Validate that all required fields exist
        const data = matterResult.data as Partial<PostData>;
        if (
          !data.title ||
          !data.date ||
          !data.description ||
          !data.tags ||
          !data.category
        ) {
          throw new Error(`Missing required fields in post: ${slug}`);
        }

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          coverImage: data.coverImage,
          tags: data.tags,
          category: data.category,
        };
      })
    );

    // Sort posts by date in descending order
    const sortedPosts = allPostsData.sort((a, b) =>
      new Date(b.date) > new Date(a.date) ? 1 : -1
    );

    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Error fetching blog posts' },
      { status: 500 }
    );
  }
}
