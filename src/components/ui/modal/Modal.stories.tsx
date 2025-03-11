import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';
import Button from '@/components/ui/button';
import { useModal } from '@/hooks/useModal';
import { FiInfo, FiAlertTriangle, FiCheck, FiStar, FiDollarSign, FiPackage, FiBell } from 'react-icons/fi';

const meta: Meta<typeof Modal> = {
  title: 'Components/ui/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultModalDemo = () => {
  const { isOpen, open, close } = useModal();

  return (
    <div>
      <Button onClick={open}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={close} title="Default Modal">
        <div className="flex items-start gap-4">
          <FiInfo className="w-6 h-6 text-blue-500 mt-1" />
          <div className="flex-1">
            <p className="text-slate-600 dark:text-slate-300">
              This is a default modal with a title and standard size.
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button onClick={close}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const SizesModalDemo = () => {
  const smallModal = useModal();
  const largeModal = useModal();
  const fullscreenModal = useModal();

  return (
    <div className="flex gap-4">
      <Button variant="outline" onClick={smallModal.open}>
        Small Modal
      </Button>
      <Button variant="outline" onClick={largeModal.open}>
        Large Modal
      </Button>
      <Button variant="outline" onClick={fullscreenModal.open}>
        Fullscreen Modal
      </Button>

      <Modal isOpen={smallModal.isOpen} onClose={smallModal.close} size="sm" title="Warning">
        <div className="flex items-start gap-4">
          <FiAlertTriangle className="w-6 h-6 text-amber-500 mt-1" />
          <div className="flex-1">
            <p className="text-slate-600 dark:text-slate-300 font-medium">Are you sure you want to delete this item?</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">This action cannot be undone.</p>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={smallModal.close}>Cancel</Button>
              <Button 
                onClick={smallModal.close}
                className="bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:text-white"
              >
                <FiAlertTriangle className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={largeModal.isOpen} onClose={largeModal.close} size="lg" title="Success">
        <div className="flex items-start gap-4">
          <FiCheck className="w-6 h-6 text-green-500 mt-1" />
          <div className="flex-1">
            <p className="text-slate-600 dark:text-slate-300">Your changes have been successfully saved!</p>
            <div className="mt-6 flex justify-end">
              <Button onClick={largeModal.close}>Continue</Button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={fullscreenModal.isOpen} 
        onClose={fullscreenModal.close} 
        isFullscreen 
        title="Preview"
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-300">Content block {i + 1}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
            <Button variant="outline" onClick={fullscreenModal.close}>Close Preview</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const PositionedModalDemo = () => {
  const centerModal = useModal();
  const topModal = useModal();

  return (
    <div className="flex gap-4">
      <Button onClick={centerModal.open}>
        Centered Modal
      </Button>
      <Button onClick={topModal.open}>
        Top Modal
      </Button>

      <Modal 
        isOpen={centerModal.isOpen} 
        onClose={centerModal.close} 
        position="center"
        title="Notification"
      >
        <div className="flex items-start gap-4">
          <FiInfo className="w-6 h-6 text-blue-500 mt-1" />
          <div className="flex-1">
            <p className="text-slate-600 dark:text-slate-300">Important update available!</p>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={centerModal.close}>Later</Button>
              <Button onClick={centerModal.close}>Update Now</Button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={topModal.isOpen} 
        onClose={topModal.close} 
        position="top"
        title="Quick Action"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
            <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
              <FiInfo className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-slate-100 font-medium">View Details</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">See more information</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={topModal.close}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultModalDemo />
};

export const Sizes: Story = {
  render: () => <SizesModalDemo />
};

export const Positions: Story = {
  render: () => <PositionedModalDemo />
};

const AlertModalsDemo = () => {
  const signOutModal = useModal();
  const deleteAccountModal = useModal();
  const cookiesModal = useModal();
  const upgradeModal = useModal();

  return (
    <div className="flex gap-4 flex-wrap">
      <Button variant="outline" onClick={signOutModal.open}>Sign Out Modal</Button>
      <Button variant="outline" onClick={deleteAccountModal.open}>Delete Account Modal</Button>
      <Button variant="outline" onClick={cookiesModal.open}>Cookies Modal</Button>
      <Button variant="outline" onClick={upgradeModal.open}>Upgrade Modal</Button>

      {/* Sign Out Modal */}
      <Modal isOpen={signOutModal.isOpen} onClose={signOutModal.close} size="sm">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
            <FiAlertTriangle className="h-6 w-6 text-amber-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Sign out</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Are you sure you would like to sign out of your account?
          </p>
          <div className="flex flex-col gap-2 w-full">
            <Button onClick={signOutModal.close}>Sign out</Button>
            <Button variant="outline" onClick={signOutModal.close}>Cancel</Button>
          </div>
        </div>
      </Modal>

      {/* Delete Account Modal */}
      <Modal isOpen={deleteAccountModal.isOpen} onClose={deleteAccountModal.close} size="sm">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <FiAlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Delete Personal Account</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Permanently remove your Personal Account and all of its contents. This action is not reversible, so please continue with caution.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={deleteAccountModal.close}
            >
              Delete personal account
            </Button>
            <Button variant="outline" onClick={deleteAccountModal.close}>Cancel</Button>
          </div>
        </div>
      </Modal>

      {/* Cookies Modal */}
      <Modal isOpen={cookiesModal.isOpen} onClose={cookiesModal.close} size="sm">
        <div className="text-center">
          <div className="mx-auto mb-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto text-slate-900 dark:text-white">
              <path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8.5 8.5v.01" strokeWidth="3" strokeLinecap="round"/>
              <path d="M16 15.5v.01" strokeWidth="3" strokeLinecap="round"/>
              <path d="M12 12.5v.01" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Cookies!</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            This website uses cookies to make your experience better.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <Button onClick={cookiesModal.close}>Got it</Button>
            <Button variant="outline" onClick={cookiesModal.close}>Privacy Policy</Button>
          </div>
        </div>
      </Modal>

      {/* Advanced Features Modal */}
      <Modal isOpen={upgradeModal.isOpen} onClose={upgradeModal.close} size="md">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Advanced features</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-2">
            "Compare to" Price, Bulk Discount Pricing, Inventory Tracking
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-600 mb-6 inline-block">Sign up here</a>
          
          <Button className="w-full mb-6">
            <FiStar className="mr-2" /> Upgrade to get these features
          </Button>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                <FiDollarSign className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">"Compare to" price</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Use this feature when you want to put a product on sale or show savings off suggested retail pricing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-green-50 dark:bg-green-900/20">
                <FiPackage className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Bulk discount pricing</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Encourage higher purchase quantities with volume discounts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/20">
                <FiBell className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Inventory tracking</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Automatically keep track of product availability and receive notifications when inventory levels get low.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-2">
            <Button variant="outline" onClick={upgradeModal.close}>Cancel</Button>
            <Button onClick={upgradeModal.close}>Upgrade now</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Add the new story
export const AlertModals: Story = {
  render: () => <AlertModalsDemo />
};