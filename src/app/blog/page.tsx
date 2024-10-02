import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, getAllTags, getAllCategories } from '@/lib/posts';
import { Button } from '@/components/ui/button';
import { BackgroundLines } from '@/components/ui/background-lines';

const BlogPage = async () => {
  const allPostsData = await getSortedPostsData();
  const allTags = await getAllTags();
  const allCategories = await getAllCategories();

  return (
    <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        {/* Header Section */}
        <header className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl dark:from-neutral-100 dark:to-neutral-400">
                Welcome to Our Blog
              </h1>
              <p className="relative z-20 mt-4 text-lg text-gray-600 dark:text-gray-400">
                Discover the latest insights, trends, and stories from our team
                of experts.
              </p>
              <div className="relative z-20 mt-8">
                <Link href="#posts">
                  <Button variant="default">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content: Blog Posts */}
        <main className="relative z-20">
          <section id="posts" className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allPostsData.map(
                  ({ slug, date, title, description, coverImage }) => (
                    <article
                      key={slug}
                      className="rounded-lg bg-white shadow-sm dark:bg-gray-800"
                    >
                      <Link href={`/blog/${slug}`}>
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
                      </Link>
                      <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                          <Link
                            href={`/blog/${slug}`}
                            className="hover:underline"
                          >
                            {title}
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
        <aside className="relative z-20 bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
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
                      className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600"
                    >
                      {tag}
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
                      className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-600"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                  Subscribe to our Newsletter
                </h3>
                {/* Newsletter form implementation */}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </BackgroundLines>
  );
};

export default BlogPage;
