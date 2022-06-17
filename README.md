# CLAP Chapter 4 Experiments

To reproduce:

1. Clone this repository ans submodules, using `git clone --recurse-submodules https://github.com/otavioon/clap_lammps.git`
2. Build docker image, using `build_docker.sh` script
3. Copy your private SSH key to `clap_config/private` directory and rename it to `key.pem`. Also copy your public SSH key to `clap_config/private` directory and rename it to `key.pub`. Note that, the public key can be generated using `ssh-keygen -y -f key.pem > key.pub`. Besides that, the `keypair_name` in the `clap_config/config/logins.yaml` must be filled with your `KEYPAIR_NAME` (name of keypair at AWS).
4. Write you `Access Key ID` in the `clap_config/private/ec2_access_key.pub` file and the `Secret access key` to `clap_config/private/ec2_access_key.pem` file.
5. Execute `run_jupyter.sh` script to launch a jupyter-lab server.

The `lammps_run.ipynb` notebook run create clusters and run the experiments and save the LAMMPS results to a `results` directory.

The `lammps_analyse.ipynb` notebook analyse and generate graphs from the results.