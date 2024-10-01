import { notFound } from 'next/navigation';
import { getPostData, getMdxContent } from '@/lib/posts';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { CalendarIcon } from 'lucide-react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import MdxRenderer from '@/components/pages/blog/MdxRenderer';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  let source;
  try {
    const { content } = await getMdxContent(slug);
    source = await serialize(content, { parseFrontmatter: true });
  } catch (error) {
    console.error(error);
    notFound();
  }

  // const readingTime = Math.ceil(postData.content.split(/\s+/).length / 200);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src={postData.coverImage || '/placeholder.svg'}
              alt={postData.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              {postData.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 size-4" />
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {/* <span className="flex items-center">
                <ClockIcon className="mr-1 h-4 w-4" />
                {readingTime} min read
              </span> */}
            </div>
            <Separator className="my-6" />
            {/* <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={postData.author.avatar} alt={postData.author.name} />
                <AvatarFallback>{postData.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{postData.author.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{postData.author.role}</p>
              </div>
            </div> */}
            <Separator className="my-6" />
            <div className="prose prose-lg dark:prose-invert prose-img:rounded-md prose-a:text-blue-600 hover:prose-a:text-blue-500">
              <MdxRenderer source={source} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
