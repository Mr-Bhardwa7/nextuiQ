import {AvatarText} from '@/components/ui/avatar-text';

const AvatarTextShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Avatar with Text</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex flex-col gap-4">
          <AvatarText
            size="sm"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            title="John Smith"
            subtitle="Software Engineer"
          />
          <AvatarText
            size="md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            title="John Smith"
            subtitle="Software Engineer"
          />
          <AvatarText
            size="lg"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            title="John Smith"
            subtitle="Software Engineer"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">With Status</h3>
        <div className="flex flex-col gap-4">
          <AvatarText
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            title="John Smith"
            subtitle="Online"
            status="online"
          />
          <AvatarText
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            title="Jane Doe"
            subtitle="Offline"
            status="offline"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">With Fallback</h3>
        <div className="flex flex-col gap-4">
          <AvatarText
            fallback="John Smith"
            title="John Smith"
            subtitle="Product Manager"
          />
          <AvatarText
            fallback="Jane Doe"
            title="Jane Doe"
            subtitle="UX Designer"
          />
        </div>
      </div>
    </section>
  );
};

export default AvatarTextShowcase;