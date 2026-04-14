# helm-charts

Helm chart repository for personal projects, published via GitHub Pages.

**Repository URL:** `https://leonkappes.github.io/helm-charts`

## Charts

| Chart | Description | Source |
|---|---|---|
| [kappes-space](https://github.com/leonkappes/kappes-space) | Personal homepage | [kappes.space](https://kappes.space) |

## Usage

[Helm](https://helm.sh) must be installed. Refer to the [Helm documentation](https://helm.sh/docs) for installation instructions.

Add the repository:

```bash
helm repo add leonkappes https://leonkappes.github.io/helm-charts
```

Update the local cache:

```bash
helm repo update
```

List available charts:

```bash
helm search repo leonkappes
```

### kappes-space

Install the chart:

```bash
helm install website leonkappes/kappes-space
```

Uninstall the chart:

```bash
helm delete website
```

## Repository Structure

```
helm-charts/
├── charts/
│   └── project-folders/     # Chart source (templates, Chart.yaml, values.yaml)
├── scripts/              # Helper scripts (e.g. chart packaging)
├── .github/workflows/    # GitHub Actions for linting, packaging, and publishing
└── renovate.json         # Automated dependency updates via Renovate
```

## CI/CD

GitHub Actions handles chart linting, packaging, and publishing to the GitHub Pages branch on each push to `master`.

## Dependency Updates

[Renovate](https://docs.renovatebot.com/) is configured to automatically track Docker image updates. It reads the `appVersion` field in each `Chart.yaml` and opens pull requests when a new image version is available.

## Related Repositories

- [kappes-space](https://github.com/leonkappes/kappes-space) — Source code of the application deployed by the kappes-space chart
- [Kubernetes-Flux](https://github.com/leonkappes/Kubernetes-Flux) — GitOps configuration that references these charts for cluster deployment
