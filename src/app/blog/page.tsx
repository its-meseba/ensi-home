// src/app/blog/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, getAllTags, getAllCategories } from '@/lib/posts';
import Head from 'next/head';
import { Button } from '@/components/ui/button';

const BlogPage = async () => {
  const allPostsData = await getSortedPostsData();
  const allTags = await getAllTags();
  const allCategories = await getAllCategories();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Our Blog</title>
        <meta
          name="description"
          content="Discover the latest insights, trends, and stories from our team of experts."
        />
      </Head>

      {/* Header Section */}
      <header className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-50">
              Welcome to Our Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover the latest insights, trends, and stories from our team of
              experts.
            </p>
            <div className="mt-8">
              <Link href="#posts" passHref>
                <Button variant="default">Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: Blog Posts */}
      <main>
        <section id="posts" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPostsData.map(
                ({ slug, date, title, description, coverImage }) => (
                  <article
                    key={slug}
                    className="rounded-lg bg-white shadow-sm dark:bg-gray-800"
                  >
                    <Link href={`/blog/${slug}`} passHref>
                      <span>
                        <Image
                          src={coverImage || '/placeholder.svg'}
                          alt={title}
                          width={400}
                          height={200}
                          className="h-48 w-full rounded-t-lg object-cover"
                          style={{
                            aspectRatio: '400 / 200',
                            objectFit: 'cover',
                          }}
                        />
                      </span>
                    </Link>
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                        <Link href={`/blog/${slug}`} passHref>
                          <span className="hover:underline">{title}</span>
                        </Link>
                      </h2>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {new Date(date).toLocaleDateString()}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Aside Section: Dynamic Popular Tags, Categories, Newsletter */}
      <aside className="bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Popular Tags */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Popular Tags
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    passHref
                  >
                    <span className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Popular Categories
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <Link
                    key={category}
                    href={`/categories/${encodeURIComponent(category)}`}
                    passHref
                  >
                    <span className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600">
                      {category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                Subscribe to our Newsletter
              </h3>
              {/* <div className="mt-4">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle newsletter subscription logic here
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
                    required
                  />
                  <Button type="submit" variant="default">
                    Subscribe
                  </Button>
                </form>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Stay up-to-date with the latest blog posts and insights.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
