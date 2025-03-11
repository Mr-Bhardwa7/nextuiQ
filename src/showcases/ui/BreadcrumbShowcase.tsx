import Breadcrumb from '@/components/ui/breadcrumb';

const BreadcrumbShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Breadcrumb</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Default Breadcrumb</h3>
        <div className="space-y-4">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Categories' },
            ]}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Two-Level Breadcrumb</h3>
        <div className="space-y-4">
          <Breadcrumb
            items={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Settings' },
            ]}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Single Item</h3>
        <div className="space-y-4">
          <Breadcrumb
            items={[
              { label: 'Profile' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbShowcase;