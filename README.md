# GitOps Pipeline

> GitOps pipeline — Flux, Kustomize, and deployment reconciliation

| | |
|---|---|
| **Version** | 1.0.0 |
| **Type** | Sovereign Package |
| **Plugin** | ✅ Panel UI |
| **K8s** | — (planned) |
| **Docker** | — |

## Install

```bash
# Via sovctl (preferred)
sovctl package install gitops

# Manual — Kubernetes
kubectl apply -k k8s/

# Manual — Docker Compose
docker compose -f docker-compose.yaml -f packages/gitops/docker/compose.yaml up -d
```

## Contents

```
gitops/
├── sovpak.json     # Package manifest
├── README.md
├── plugin/                    # Panel UI plugin
│   ├── index.js
│   └── *.jsx





└── config/                    # Default configuration
```

## Package Standard

This package follows the [Sovereign Package Manifest Specification](../../specs/PACKAGE_MANIFEST.md).

All deployment manifests are bundled — no external pulls needed at install time.
