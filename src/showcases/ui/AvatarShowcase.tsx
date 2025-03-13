import {Avatar} from '@/components/ui/avatar';

const AvatarShowcase = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Avatars</h2>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            size="md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Fallback</h3>
        <div className="flex items-center gap-4">
          <Avatar fallback="John Doe" />
          <Avatar fallback="Jane Smith" />
          <Avatar fallback="No Name" />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Status</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            status="online"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            status="offline"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            status="busy"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            status="away"
          />
        </div>
      </div>
    </section>
  );
};

export default AvatarShowcase;