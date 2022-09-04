## Usage

[Helm](https://helm.sh) must be installed to use the charts.  Please refer to
Helm's [documentation](https://helm.sh/docs) to get started.

Once Helm has been set up correctly, add the repo as follows:

  helm repo add leonkappes https://leonkappes.github.io/helm-charts

If you had already added this repo earlier, run `helm repo update` to retrieve
the latest versions of the packages.  You can then run `helm search repo
leonkappes` to see the charts.

# [kappes-space](https://github.com/leonkappes/kappes-space) (Homepage)
To install the kappes-space chart:

    helm install my-kappes-space leonkappes/kappes-space

To uninstall the chart:

    helm delete my-kappes-space