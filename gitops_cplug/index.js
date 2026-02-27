// ---------------------------------------------------------------------------
// GitOps Plugin — GitOps deployment pipeline management.
// ---------------------------------------------------------------------------

import { definePlugin } from '../../cms/kernel/index.js';
import { GitBranch } from 'lucide-react';

export default definePlugin({
  id: 'gitops_cplug',
  name: 'GitOps',
  type: 'core',
  required: true,
  version: '0.4.0',
  description: 'GitOps pipeline — Flux, Kustomize, and deployment reconciliation.',
  icon: GitBranch,
  category: 'Core',
  tags: ['core-required', 'system_cplug', 'gitops', 'ci-cd'],
  requires: ['system_cplug', 'cluster_cplug'],

  hooks: {
    hook_init({ registerService, getService }) {
      const permission = getService('permission_cplug');

      registerService('gitops', {
        _reconciling: false,
        _lastSync: null,

        reconcile() {
          if (!permission.hasPermission('gitops.deploy')) throw new Error('Permission denied: gitops.deploy required');
          this._reconciling = true; this._lastSync = Date.now();
        },
        getStatus() { return { reconciling: this._reconciling, lastSync: this._lastSync }; },
      });
    },

    hook_permission() {
      return [
        { id: 'gitops.admin', label: 'Administer GitOps', module: 'gitops' },
        { id: 'gitops.deploy', label: 'Trigger deployments', module: 'gitops' },
        { id: 'gitops.view', label: 'View deployment status', module: 'gitops' },
      ];
    },
  },
});
