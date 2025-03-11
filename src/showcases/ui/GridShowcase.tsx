import { Grid } from '@/components/ui/grid';

const GridItem = ({ children, height = 'h-24' }: { children: React.ReactNode; height?: string }) => (
  <div className={`${height} w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-lg shadow-sm flex items-center justify-center`}>
    <div className="text-center space-y-2">
      <div className="font-medium text-slate-900 dark:text-white">{children}</div>
    </div>
  </div>
);

export default function GridShowcase() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-white">Responsive Grid</h2>
        <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={6}>
          {Array.from({ length: 6 }, (_, i) => (
            <GridItem key={i}>Grid Item {i + 1}</GridItem>
          ))}
        </Grid>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-white">Grid with Rows</h2>
        <div className="w-full">
          <Grid cols={3} rows={2} gap={{ x: 4, y: 6 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <GridItem key={i}>Item {i + 1}</GridItem>
            ))}
          </Grid>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-white">Auto-fit Grid</h2>
        <div className="w-full">
          <Grid autoFit minChildWidth="200px" gap={4}>
            {Array.from({ length: 5 }, (_, i) => (
              <GridItem key={i}>Auto-fit Item {i + 1}</GridItem>
            ))}
          </Grid>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-slate-900 dark:text-white">Dense Flow Grid</h2>
        <div className="w-full">
          <Grid cols={3} autoFlow="dense" gap={4}>
            {Array.from({ length: 8 }, (_, i) => (
              <GridItem key={i} height={i % 3 === 0 ? 'h-48' : 'h-24'}>
                Dense Item {i + 1}
              </GridItem>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
}