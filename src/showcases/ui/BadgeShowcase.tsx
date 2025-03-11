import Badge from '@/components/ui/badge';
import { FiCheck, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi';

const BadgeShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Badges</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="solid">Solid</Badge>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Colors</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary">Primary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="error">Error</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="light">Light</Badge>
          <Badge color="dark">Dark</Badge>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="success" startIcon={<FiCheck />}>Success</Badge>
          <Badge color="error" endIcon={<FiX />}>Error</Badge>
          <Badge color="warning" startIcon={<FiAlertCircle />}>Warning</Badge>
          <Badge color="info" startIcon={<FiInfo />}>Info</Badge>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Solid Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Badge variant="solid" color="primary">Primary</Badge>
          <Badge variant="solid" color="success">Success</Badge>
          <Badge variant="solid" color="error">Error</Badge>
          <Badge variant="solid" color="warning">Warning</Badge>
          <Badge variant="solid" color="info">Info</Badge>
          <Badge variant="solid" color="light">Light</Badge>
          <Badge variant="solid" color="dark">Dark</Badge>
        </div>
      </div>
    </section>
  );
};

export default BadgeShowcase;