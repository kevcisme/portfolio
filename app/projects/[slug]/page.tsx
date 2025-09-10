import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getAllPages,
  getPage,
  getProjectCoverImage,
  getProjectShotImages,
  type ProjectMetadata
} from '@/lib/mdx';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import Header from './header';

type ProjectPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
};

export const generateStaticParams = (): Array<ProjectPageProps['params']> => {
  return getAllPages<ProjectMetadata>('projects').map((project) => ({
    slug: project.slug
  }));
};

export const generateMetadata = async (
  props: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props;

  const project = getPage<ProjectMetadata>(`projects/${params.slug}`);

  if (!project) {
    return {};
  }

  const {
    metadata: { name, description }
  } = project;
  const previousTwitter = (await parent)?.twitter ?? {};
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  const projectShotImages = getProjectShotImages(params.slug);
  const firstProjectShot = projectShotImages[0];

  return {
    title: name,
    description: description,
    alternates: {
      canonical: `/projects/${params.slug}`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `/projects/${params.slug}`,
      title: name,
      description: description,
      images: firstProjectShot
        ? [
            {
              url: firstProjectShot,
              width: 1280,
              height: 832,
              alt: description,
              type: firstProjectShot.endsWith('.png')
                ? 'image/png'
                : 'image/jpeg'
            }
          ]
        : []
    },
    twitter: {
      ...previousTwitter,
      title: name,
      description: description,
      images: firstProjectShot
        ? [
            {
              url: firstProjectShot,
              width: 1280,
              height: 832,
              alt: description
            }
          ]
        : []
    }
  };
};

const ProjectPage = (props: ProjectPageProps) => {
  const {
    params: { slug }
  } = props;

  const project = getPage<ProjectMetadata>(`projects/${slug}`);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const projectShotImages = getProjectShotImages(slug);

  // Create cards from project shot images
  const cards = projectShotImages.map((imagePath, index) => {
    const cardData = {
      category: metadata.name,
      title: `Screenshot ${index + 1}`,
      src: imagePath,
      content: (
        <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
          <p className="mx-auto mb-8 max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {metadata.name}
            </span>{' '}
            - Project Screenshot {index + 1}
          </p>
          <div className="relative max-h-[60vh] w-full overflow-hidden rounded-lg">
            <Image
              src={imagePath}
              alt={`${metadata.name} - Screenshot ${index + 1}`}
              width={1280}
              height={832}
              className="mx-auto h-auto max-h-[60vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )
    };

    return <Card key={index} card={cardData} index={index} />;
  });

  return (
    <div className="container mx-auto">
      <Header metadata={metadata} />

      {/* Tech Stack Section */}
      {metadata.techstack && metadata.techstack.length > 0 && (
        <div className="my-12 px-4">
          <h2 className="mb-6 text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {metadata.techstack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {tech.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {projectShotImages.length > 0 && (
        <div className="my-12">
          <h2 className="mx-auto mb-8 max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
            Project Screenshots
          </h2>
          <Carousel items={cards} />
        </div>
      )}
      <div className="my-12">{content}</div>
    </div>
  );
};

export default ProjectPage;
