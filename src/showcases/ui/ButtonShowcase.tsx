import {Button} from '@/components/ui/button';
import {  FiArrowRight, FiDownload, FiPlus, FiTrash, FiEdit, FiSave } from 'react-icons/fi';
import {Loader} from '@/components/ui/loader';

const ButtonShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Buttons</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="sm" variant="outline">Small Outline</Button>
          <Button size="md" variant="outline">Medium Outline</Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button startIcon={<FiPlus />}>Add New</Button>
          <Button endIcon={<FiArrowRight />}>Next Step</Button>
          <Button startIcon={<FiSave />} variant="outline">Save Changes</Button>
          <Button startIcon={<FiEdit />} variant="ghost">Edit</Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Icon Only</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" startIcon={<FiTrash />} aria-label="Delete item" />
          <Button variant="outline" startIcon={<FiEdit />} aria-label="Edit item" />
          <Button variant="primary" startIcon={<FiPlus />} aria-label="Add item" />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="ghost" disabled>Disabled Ghost</Button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            <Loader variant="circular" className="h-4 w-4 mr-2" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <Loader variant="pulse" className="h-4 w-4 mr-2" />
            Processing...
          </Button>
          <Button variant="ghost" disabled>
            <Loader variant="circular" className="h-4 w-4 mr-2" />
            Please wait...
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Loading Variations</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>
            <Loader variant="circular" className="h-4 w-4" />
            <span className="sr-only">Loading</span>
          </Button>
          <Button variant="outline" disabled>
            <Loader variant="pulse" className="h-4 w-16" />
          </Button>
          <Button variant="ghost" disabled startIcon={<Loader variant="circular" className="h-4 w-4" />}>
            Fetching Data
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">As Links</h3>
        <div className="flex flex-wrap gap-4">
          <Button tag="a" href="#" endIcon={<FiArrowRight />}>
            Visit Documentation
          </Button>
          <Button tag="a" href="#" variant="outline" endIcon={<FiDownload />}>
            Download Guide
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Button Groups</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-1">
            <Button variant="outline" startIcon={<FiPlus />}>Add</Button>
            <Button variant="primary">Save</Button>
            <Button variant="ghost" startIcon={<FiTrash />}>Delete</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonShowcase;