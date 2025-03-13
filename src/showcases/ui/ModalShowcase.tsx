import {Modal} from '@/components/ui/modal';
import {Button} from '@/components/ui/button';
import { useModal } from '@/hooks/useModal';
import { FiInfo, FiAlertTriangle, FiStar, FiDollarSign, FiPackage, FiBell } from 'react-icons/fi';

const ModalShowcase = () => {
  const basicModal = useModal();
  const signOutModal = useModal();
  const deleteAccountModal = useModal();
  const cookiesModal = useModal();
  const upgradeModal = useModal();

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Modals</h2>
      
      {/* Basic Modal */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Basic Modal</h3>
        <div className="flex gap-4">
          <Button onClick={basicModal.open}>Open Basic Modal</Button>
          <Modal isOpen={basicModal.isOpen} onClose={basicModal.close} title="Basic Modal">
            <div className="flex items-start gap-4">
              <FiInfo className="w-6 h-6 text-blue-500 mt-1" />
              <div className="flex-1">
                <p className="text-slate-600 dark:text-slate-300">
                  This is a basic modal with standard configuration.
                </p>
                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="outline" onClick={basicModal.close}>Cancel</Button>
                  <Button onClick={basicModal.close}>Confirm</Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* Alert Modals */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Alert Modals</h3>
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
      </div>
    </section>
  );
};

export default ModalShowcase;