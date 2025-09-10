import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

export type ProjectMetadata = {
  name: string;
  description: string;
  website: string;
  github: string;
  techstack: Array<{ label: string }>;
  selected: boolean;
  slug: string;
};

export type BlogMetadata = {
  title: string;
  date: string;
  modifiedTime: string;
  summary: string;
  slug: string;
};

export type PageMetadata = {
  slug: string;
};

const mdxFilesRootDirectory = path.join(process.cwd(), 'content');

const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf8');
};

const readMDXFile = <T>(filePath: string) => {
  const rawContent = readFile(filePath);
  const { content, data } = matter(rawContent);

  return {
    content,
    metadata: data as T
  };
};

type GetAllPostsOptions = {
  limit?: number;
};

export const getPage = <T>(filePath: string) => {
  const fullPath = path.join(mdxFilesRootDirectory, `${filePath}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { content, metadata } = readMDXFile<T>(fullPath);

  return {
    content,
    metadata: {
      ...metadata,
      slug: filePath.split('/').pop()
    } as T
  };
};

export const getAllPages = <T>(
  directoryPath: string,
  options: GetAllPostsOptions = {}
) => {
  const { limit } = options;

  const pagesDirectory = path.join(mdxFilesRootDirectory, directoryPath);

  const fileNames = fs.readdirSync(pagesDirectory);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(pagesDirectory, fileName);
      const { metadata } = readMDXFile<T>(fullPath);

      return {
        ...metadata,
        slug
      } as T;
    })
    .slice(0, limit);
};

/**
 * Finds the cover image for a project, checking for both .jpg and .png formats
 * This function runs server-side only and should not be imported in client components
 * @param slug - The project slug
 * @returns The path to the cover image or null if not found
 */
export function getProjectCoverImage(slug: string): string | null {
  const publicDir = path.join(process.cwd(), 'public');
  const projectDir = path.join(publicDir, 'images', 'projects', slug);

  // Check for cover.jpg first, then cover.png
  const jpgPath = path.join(projectDir, 'cover.jpg');
  const pngPath = path.join(projectDir, 'cover.png');

  if (fs.existsSync(jpgPath)) {
    return `/images/projects/${slug}/cover.jpg`;
  }

  if (fs.existsSync(pngPath)) {
    return `/images/projects/${slug}/cover.png`;
  }

  return null;
}

/**
 * Finds all project-shot images for a project (project-shot-1.png, project-shot-2.jpg, etc.)
 * This function runs server-side only and should not be imported in client components
 * @param slug - The project slug
 * @returns Array of paths to project-shot images, sorted by number
 */
export function getProjectShotImages(slug: string): string[] {
  const publicDir = path.join(process.cwd(), 'public');
  const projectDir = path.join(publicDir, 'images', 'projects', slug);

  if (!fs.existsSync(projectDir)) {
    return [];
  }

  const files = fs.readdirSync(projectDir);
  const projectShotImages: Array<{ path: string; number: number }> = [];

  // Find all files matching project-shot-N.(jpg|png) pattern
  const projectShotRegex = /^project-shot-(\d+)\.(jpg|png)$/i;

  files.forEach((file) => {
    const match = file.match(projectShotRegex);
    if (match) {
      const number = parseInt(match[1], 10);
      projectShotImages.push({
        path: `/images/projects/${slug}/${file}`,
        number
      });
    }
  });

  // Sort by number and return just the paths
  return projectShotImages
    .sort((a, b) => a.number - b.number)
    .map((item) => item.path);
}
