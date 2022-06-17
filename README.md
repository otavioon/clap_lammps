# Trabalho MO833

## Objetivo

O objetivo deste trabalho é buscar por um conjunto de máquinas que resulte em um melhor custo/benefício para uma carga de trabalho de uma aplicação de HPC.

## Descrição

Neste trabalho você deve utilizar a API do [CLAP](https://github.com/lmcad-unicamp/CLAP) para levantar diferentes aglomerados computacionais e executar a aplicação [LAMMPS](https://github.com/lmcad-unicamp/lammps). 
A estimativa de desempenho deve ser realizada através de um *proxy* que executa uma versão simplificada da aplicação com o uso de *Paramount Iterations*.
Ao final, deve-se determinar qual o melhor aglomerado (em relação ao custo/benefício) para executar esta aplicação e então, executar ela por completo (*i.e.* sem *proxy*), coletando seu resultado.


## Infraestrutura para execução do CLAP

Esta seção descreve a infraestrutura disponibilizada e sua forma de uso.
Utilizaremos o termo "máquina local" para designar a máquina que será utilizada para realização da atividade e execução do Ansible e o termo "máquina remota" para designar a máquina virtual na nuvem computacional em que a aplicação será executada. 

### Requisitos

Para execução da atividade, você precisará:
- Possuir seu identificador da chave de acesso e identificador da chave de acesso secreta (`Access Key ID` e `Secret access key`, respectivamente) consigo. 
Estes foram enviados por e-mail;
- Possuir um par de chaves (pública e privada) registrados na AWS, bem como o nome deste par de chaves (`KEYPAIR_NAME`). Este par de chaves é o mesmo utilizado para acessar uma máquina virtual por SSH.
- Possuir a aplicação Docker instalada na máquina local para execução do CLAP.


### Infraestrutura

O presente repositório deve ser clonado e executado apenas na máquina local. 
O clone deve ser realizado com o comando abaixo:

```
git clone --recurse-submodules https://github.com/otavioon/mo833-trabalho.git
```

Este diretório conta com a seguinte estrutura principal:
- ``trabalho.ipynb``: *Jupyter notebook* onde este trabalho deve ser realizado.
- ``build_docker.sh``: *Script* para gerar a imagem Docker, que contém o CLAP. A imagem gerada é chamada `mo833-clap`. Este arquivo não deve ser alterado;
- ``Dockerfile.dev``: Arquivo de descrição da imagem Docker, utilizado pelo *script* `build_docker.sh`. Este arquivo não deve ser alterado;
- ``run_jupyter.sh``: *Script* para executar o jupyter-lab. Ao executar o script um servidor jupyer-lab estará executando e escutando na porta 8888 (que pode ser alterada no arquivo `vars.sh`, caso deseja) e poderá ser acessado a partir do endereço `localhost:8888`.
- ``vars.sh``: *Script* contendo variáveis globais de ambiente utilizadas para diversas finalidades. Nota: as alterações neste *script* **NÃO** devem ser submetidas ao git;
- ``CLAP/``: diretório contendo a implementação do CLAP; e
- ``clap_config``: Diretório contendo os arquivos de configuração do CLAP (equivalente ao `~/.clap`)

Quatro *templates* de aglomerados são disponibilizados: `cluster-config-1`, `cluster-config-2`, `cluster-config-3` e `cluster-config-4`. Estes estão definidos no arquivo `clap_config/config/clusters/cluster.yml`. Novos aglomerados podem ser arbitrariamente definidos, sempre iniciando com o prefixo `cluster-config`. Seu código deve executar em todos os aglomerados com o prefixo `cluster-config`.

### Preparação do ambiente para execução

Para preparação do ambiente, os seguintes passos devem ser realizados:

1. Instale o Docker na máquina local e gere a imagem Docker executando o *script* `build_docker.sh`. Este passo pode ser realizado apenas uma vez.

2. Escreva o seu `Access Key ID` em um arquivo denominado `ec2_access_key.pub` e o seu `Secret access key` em um arquivo chamado `ec2_access_key.pem`. Estes arquivos devem ser salvos no diretório `clap_config/private/`.

3. Copie sua chave privada, utilizada para acessar as máquinas da AWS, para o diretorio `clap_config/private` e renomei-a para `key.pem`. Copie também sua chave pública para o diretorio `clap_config/private` e renomei-a para `key.pub`. Vale ressaltar que a chave pública pode ser gerada a partir da chave privada, utilizando o seguinte comando: `ssh-keygen -y -f key.pem > key.pub`. Além disso, o campo `keypair_name` do arquivo `clap_config/config/logins.yaml` deve ser alterado para o respectivoe seu `KEYPAIR_NAME`.

4. Execute o *script* `run_jupyter.sh` que irá iniciar um servidor jupyter-lab na máquina local. Este pode ser acessado através do endereço `localhost:8888` por um navegador de sua preferência.

5. Uma vez iniciado, o notebook `trabalho.ipynb` pode ser utilizado.

Vale ressaltar que o jupyter-lab também permite a instanciação de um terminal, ao clicar no icone `+`, no canto superior esquerdo e selecionando a opção `terminal`. 
Os comandos do CLAP podem ser executados em linha de comando diretamente por este terminal. 
Por exemplo, para listar os *templates* de aglomerados, o comando `clapp cluster list-templates` pode ser executado. Este exibe a seguinte informação.

```
cluster name: npb-cluster
    node types: npb-type-t2.medium

cluster name: cluster-config-1
    node types: cluster-t2.medium

cluster name: cluster-config-2
    node types: cluster-t2.large

cluster name: cluster-config-3
    node types: cluster-c5.large

cluster name: cluster-config-4
    node types: cluster-c5.large, cluster-t2.large

Listed 5 templates
```

### Implementação do Trabalho

Para este trabalho você deve criar o papel `lammps`. Neste papel devem existir pelo menos quatro ações:
- `setup`: que configura as máquinas para execução do [LAMMPS](https://github.com/lmcad-unicamp/lammps). 
- `run-proxy`: que executa o *proxy* da aplicação [LAMMPS](https://github.com/lmcad-unicamp/lammps).
- `run`: que executa a aplicação [LAMMPS](https://github.com/lmcad-unicamp/lammps), por completo, sem *proxy*.
- `results`: que coleta os resultados da execução aplicação [LAMMPS](https://github.com/lmcad-unicamp/lammps) para um diretório indicado por uma variável chamada `results_dir` (váriavel da ação `results` do papel `lammps`).

Você pode implementar mais ações caso julgue ser necesário para o trabalho (todas no papel `lammps`). 

### Condução de Experimentos

Para este trabalho, você deve utilizar o *notebook* `trabalho.ipynb`. Um laço sobre as configurações de aglomerado com o prefixo `cluster-config-` deve ser implementado e para cada configuração: (a) um aglomerado deve ser instanciado; (b) a aplicação de *proxy* deve ser executada e as devidas informações de desempenho calculadas; e (c) o algomerado deve ser destruido.

Você deve utilizar o método `start_cluster` e `stop_cluster` do objeto `cluster_manager` da classe `ClusterManager` para instanciar e destruir os aglomerados, respectivamente.

O custo/beneficio deve ser calculado para cada um dos aglomerados e a configuração de aglomerado que apresente o melhor desemepenho (em relação ao custo benefício) deve ser impressa e salva em uma váriavel `best_cluster_config`. Note que esta váriavel não deve ser preenchida estáticamente, uma vez que as configurações de aglomerado podem ser alteradas!

Por fim, um aglomerado deve ser instanciado para a configuração de aglomerado da váriavel `best_cluster_config` e a aplicação deve ser executada até o fim. Por fim, os resultados devem ser coletados, através da ação `results` do papel `lampps`.
 

## Entrega e Avaliação

Para entrega, você deve colocar seu código em uma `branch` do git.
A submissão deve ser realizada até o dia XXX às 13h59min, horário de Brasilia.

## Dicas e Observações
- Todas as *tasks* devem ser nomeadas.

- Você pode ir montando e executando seu *playbook* gradualmente e testar, sempre que possível.

- Você pode, paralelamente, efetuar *login* na máquina remota para observar os efeitos realizados pelas *tasks* executadas.

- Você pode utilizar qualquer módulo embutido na instalação do Ansible, mas não deve instalar nenhum módulo adicional.

- Antes de instalar pacotes, lembre-se de atualizar a lista de pacotes (veja a opção `update_cache` do módulo `apt`).

- A chave `become` com valor `true` (*e.g.* `become: true`) pode ser adicionada a uma *task* (ou *play*) para que ela seja executada como super usuário (*e.g.* *root*). 
Isto é util para *tasks* que necessitam de permissões elevadas (como instalação de pacotes, por exemplo).

- A chave `run_once` com valor `true` (*e.g.* `run_once: true`) pode ser adicionada a uma *task* para ela seja executada apenas um único *host* qualquer.

- Para longas tarefas (execução da aplicação ou construção da imagem Docker, por exemplo), o Ansible fornece as chaves [`pool`](https://docs.ansible.com/ansible/latest/user_guide/playbooks_async.html#asynchronous-playbook-tasks) e [`async`](https://docs.ansible.com/ansible/latest/user_guide/playbooks_async.html#asynchronous-playbook-tasks) para evitar desconexões SSH ao executar as tarefas. Valores como `pool: 30` e `async: 1200` podem ser razoáveis para as tarefas de execução daaplicação e criação da imagem Docker, caso necessite.

- Mais exemplos sobre o uso da API e da linha de comando podem ser encontrados no diretório `examples` do CLAP.
