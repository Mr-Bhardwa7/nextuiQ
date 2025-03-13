import { Alert } from '@/components/ui/alert';

const AlertShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Alerts</h2>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Variants</h3>
          <div className="flex flex-col gap-4">
            <Alert
              variant="success"
              title="Success Message"
              message="Your changes have been saved successfully."
            />
            <Alert
              variant="error"
              title="Error Message"
              message="There was an error processing your request."
            />
            <Alert
              variant="warning"
              title="Warning Message"
              message="Please be cautious when performing this action."
            />
            <Alert
              variant="info"
              title="Information"
              message="A new version is available for download."
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">With Link</h3>
          <Alert
            variant="info"
            title="New Feature Available"
            message="We've added new features to improve your experience."
            showLink={true}
            linkText="Learn more"
            linkHref="#"
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Dismissible</h3>
          <Alert
            variant="success"
            title="Action Completed"
            message="Your action has been completed successfully."
            onClose={() => console.log('Alert closed')}
          />
        </div>
      </div>
    </section>
  );
};

export default AlertShowcase;