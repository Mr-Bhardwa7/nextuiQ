import { ResponsiveImage } from '@/components/ui/responsive-image';
import { Grid } from '@/components/ui/grid';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Landscape photo',
    aspectRatio: '16/9',
  },
  {
    src: 'https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0',
    alt: 'Portrait photo',
    aspectRatio: '9/16',
  },
  {
    src: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931',
    alt: 'Square photo',
    aspectRatio: '1/1',
  },
];

const errorStates = [
  {
    src: 'https://invalid-image-url.com/not-found.jpg',
    alt: 'Missing image',
    fallback: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"%3E%3Crect width="400" height="225" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="16" fill="%2394a3b8"%3EImage not found%3C/text%3E%3C/svg%3E',
    label: 'Missing Image',
  },
  {
    src: 'https://broken-link.com/image.jpg',
    alt: 'Broken image',
    fallback: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"%3E%3Crect width="400" height="225" fill="%23fef2f2"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="16" fill="%23ef4444"%3EError loading image%3C/text%3E%3C/svg%3E',
    label: 'Error State',
  },
];

export default function ResponsiveImageShowcase() {
  return (
    <div className="space-y-8">
      <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
        {images.map((image, index) => (
          <div key={index} className="space-y-4">
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              aspectRatio={image.aspectRatio}
              className="rounded-lg"
              containerClassName="w-full shadow-lg"
            />
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <p>Aspect Ratio: {image.aspectRatio}</p>
            </div>
          </div>
        ))}
      </Grid>

      <Grid cols={{ sm: 1, md: 2 }} gap={6}>
        <div className="space-y-4">
          <ResponsiveImage
            src={images[0].src}
            alt="Object-fit: contain example"
            aspectRatio="16/9"
            objectFit="contain"
            className="rounded-lg"
            containerClassName="w-full bg-slate-100 dark:bg-slate-800 shadow-lg"
          />
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <p>Object-fit: contain</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">Error States</h3>
          <Grid cols={2} gap={6}>
            {errorStates.map((error, index) => (
              <div key={index} className="space-y-4">
                <ResponsiveImage
                  src={error.src}
                  alt={error.alt}
                  fallback={error.fallback}
                  aspectRatio="16/9"
                  className="rounded-lg"
                  containerClassName="w-full shadow-lg"
                />
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  <p>{error.label}</p>
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
}