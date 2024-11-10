import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Settings() {
  const [settings, setSettings] = useState({
    autoPublish: false,
    enableComments: true,
    showLikes: true,
    allowDownloads: false,
    emailNotifications: true,
    pushNotifications: true
  });

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h2 className="text-lg font-medium text-white mb-6">Studio Settings</h2>

      <div className="space-y-6">
        <div className="border-b border-gray-800 pb-6">
          <h3 className="text-white font-medium mb-4">Video Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Auto-publish videos</span>
                <p className="text-sm text-gray-400">Automatically publish videos after upload</p>
              </div>
              <Switch
                checked={settings.autoPublish}
                onChange={(value) => updateSetting('autoPublish', value)}
                className={`${
                  settings.autoPublish ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.autoPublish ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Enable comments</span>
                <p className="text-sm text-gray-400">Allow viewers to comment on your videos</p>
              </div>
              <Switch
                checked={settings.enableComments}
                onChange={(value) => updateSetting('enableComments', value)}
                className={`${
                  settings.enableComments ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.enableComments ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Show likes</span>
                <p className="text-sm text-gray-400">Display like count on videos</p>
              </div>
              <Switch
                checked={settings.showLikes}
                onChange={(value) => updateSetting('showLikes', value)}
                className={`${
                  settings.showLikes ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.showLikes ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Allow downloads</span>
                <p className="text-sm text-gray-400">Let viewers download your videos</p>
              </div>
              <Switch
                checked={settings.allowDownloads}
                onChange={(value) => updateSetting('allowDownloads', value)}
                className={`${
                  settings.allowDownloads ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.allowDownloads ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Email notifications</span>
                <p className="text-sm text-gray-400">Receive updates via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onChange={(value) => updateSetting('emailNotifications', value)}
                className={`${
                  settings.emailNotifications ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-white">Push notifications</span>
                <p className="text-sm text-gray-400">Receive push notifications</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onChange={(value) => updateSetting('pushNotifications', value)}
                className={`${
                  settings.pushNotifications ? 'bg-purple-500' : 'bg-gray-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className={`${
                  settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}