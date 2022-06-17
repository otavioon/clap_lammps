Search.setIndex({docnames:["api","autoapi/clap/abstract_provider/index","autoapi/clap/cluster_manager/index","autoapi/clap/configs/index","autoapi/clap/executor/index","autoapi/clap/index","autoapi/clap/node/index","autoapi/clap/node_manager/index","autoapi/clap/repository/index","autoapi/clap/role_manager/index","autoapi/clap/utils/index","configuration","index","introduction","shared_roles","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","autoapi/clap/abstract_provider/index.rst","autoapi/clap/cluster_manager/index.rst","autoapi/clap/configs/index.rst","autoapi/clap/executor/index.rst","autoapi/clap/index.rst","autoapi/clap/node/index.rst","autoapi/clap/node_manager/index.rst","autoapi/clap/repository/index.rst","autoapi/clap/role_manager/index.rst","autoapi/clap/utils/index.rst","configuration.rst","index.rst","introduction.rst","shared_roles.rst","usage.rst"],objects:{"":{clap:[5,0,0,"-"]},"clap.abstract_provider":{AbstractInstanceProvider:[1,1,1,""],InstanceDeploymentError:[1,3,1,""],logger:[1,4,1,""]},"clap.abstract_provider.AbstractInstanceProvider":{pause_instances:[1,2,1,""],resume_instances:[1,2,1,""],start_instances:[1,2,1,""],stop_instances:[1,2,1,""],update_instance_info:[1,2,1,""]},"clap.cluster_manager":{ActionType:[2,4,1,""],ClusterConfig:[2,1,1,""],ClusterConfigDatabase:[2,1,1,""],ClusterConfigFile:[2,1,1,""],ClusterConfigurationError:[2,3,1,""],ClusterDescriptor:[2,1,1,""],ClusterError:[2,3,1,""],ClusterManager:[2,1,1,""],ClusterOptions:[2,1,1,""],ClusterRepositoryController:[2,1,1,""],ClusterSetupError:[2,3,1,""],CommandActionType:[2,1,1,""],InvalidClusterError:[2,3,1,""],InvalidSetupError:[2,3,1,""],NodeConfig:[2,1,1,""],NodeSizeError:[2,3,1,""],PlaybookActionType:[2,1,1,""],RoleActionType:[2,1,1,""],RoleAdd:[2,1,1,""],SetupConfig:[2,1,1,""],_ClusterConfig:[2,1,1,""],_NodeConfig:[2,1,1,""],logger:[2,4,1,""]},"clap.cluster_manager.ClusterConfig":{after:[2,5,1,""],after_all:[2,5,1,""],before:[2,5,1,""],before_all:[2,5,1,""],cluster_config_id:[2,5,1,""],nodes:[2,5,1,""],options:[2,5,1,""]},"clap.cluster_manager.ClusterConfigDatabase":{_load_cluster_and_setups:[2,2,1,""],clusters:[2,5,1,""],load:[2,2,1,""]},"clap.cluster_manager.ClusterConfigFile":{clusters:[2,5,1,""],setups:[2,5,1,""]},"clap.cluster_manager.ClusterDescriptor":{cluster_config:[2,5,1,""],cluster_id:[2,5,1,""],cluster_name:[2,5,1,""],creation_time:[2,5,1,""],is_setup:[2,5,1,""],update_time:[2,5,1,""]},"clap.cluster_manager.ClusterManager":{_run_setup_list:[2,2,1,""],add_cluster_tag:[2,2,1,""],add_existing_nodes_to_cluster:[2,2,1,""],get_all_cluster_nodes:[2,2,1,""],get_all_clusters:[2,2,1,""],get_cluster_by_id:[2,2,1,""],get_cluster_nodes_types:[2,2,1,""],grow:[2,2,1,""],is_alive:[2,2,1,""],pause_cluster:[2,2,1,""],resume_cluster:[2,2,1,""],run_action:[2,2,1,""],run_role_add:[2,2,1,""],run_setup:[2,2,1,""],setup_cluster:[2,2,1,""],start_cluster:[2,2,1,""],start_cluster_node:[2,2,1,""],stop_cluster:[2,2,1,""],upsert_cluster:[2,2,1,""]},"clap.cluster_manager.ClusterOptions":{ssh_to:[2,5,1,""]},"clap.cluster_manager.ClusterRepositoryController":{get_all_clusters:[2,2,1,""],get_cluster_by_id:[2,2,1,""],remove_cluster:[2,2,1,""],upsert_cluster:[2,2,1,""]},"clap.cluster_manager.CommandActionType":{command:[2,5,1,""]},"clap.cluster_manager.NodeConfig":{count:[2,5,1,""],min_count:[2,5,1,""],setups:[2,5,1,""],type:[2,5,1,""]},"clap.cluster_manager.PlaybookActionType":{extra:[2,5,1,""],playbook:[2,5,1,""]},"clap.cluster_manager.RoleActionType":{action:[2,5,1,""],extra:[2,5,1,""],role:[2,5,1,""]},"clap.cluster_manager.RoleAdd":{extra:[2,5,1,""],name:[2,5,1,""]},"clap.cluster_manager.SetupConfig":{actions:[2,5,1,""],roles:[2,5,1,""]},"clap.cluster_manager._ClusterConfig":{after:[2,5,1,""],after_all:[2,5,1,""],before:[2,5,1,""],before_all:[2,5,1,""],nodes:[2,5,1,""],options:[2,5,1,""]},"clap.cluster_manager._NodeConfig":{count:[2,5,1,""],min_count:[2,5,1,""],setups:[2,5,1,""],type:[2,5,1,""]},"clap.configs":{ConfigurationDatabase:[3,1,1,""],ConfigurationError:[3,3,1,""],InstanceConfigAWS:[3,1,1,""],InstanceConfigs:[3,4,1,""],InstanceInfo:[3,1,1,""],InvalidConfigurationError:[3,3,1,""],LoginConfig:[3,1,1,""],LoginConfigs:[3,4,1,""],ProviderConfigAWS:[3,1,1,""],ProviderConfigLocal:[3,1,1,""],ProviderConfigs:[3,4,1,""],logger:[3,4,1,""],provider_handlers:[3,4,1,""]},"clap.configs.ConfigurationDatabase":{_load_instance_configs:[3,2,1,""],_load_login_configs:[3,2,1,""],_load_provider_configs:[3,2,1,""],load_all:[3,2,1,""]},"clap.configs.InstanceConfigAWS":{boot_disk_device:[3,5,1,""],boot_disk_iops:[3,5,1,""],boot_disk_size:[3,5,1,""],boot_disk_snapshot:[3,5,1,""],boot_disk_type:[3,5,1,""],flavor:[3,5,1,""],image_id:[3,5,1,""],instance_config_id:[3,5,1,""],login:[3,5,1,""],network_ids:[3,5,1,""],placement_group:[3,5,1,""],price:[3,5,1,""],provider:[3,5,1,""],security_group:[3,5,1,""],timeout:[3,5,1,""]},"clap.configs.InstanceInfo":{instance:[3,5,1,""],login:[3,5,1,""],provider:[3,5,1,""]},"clap.configs.LoginConfig":{keypair_name:[3,5,1,""],keypair_private_file:[3,5,1,""],keypair_public_file:[3,5,1,""],login_config_id:[3,5,1,""],ssh_port:[3,5,1,""],sudo:[3,5,1,""],sudo_user:[3,5,1,""],user:[3,5,1,""]},"clap.configs.ProviderConfigAWS":{access_keyfile:[3,5,1,""],provider:[3,5,1,""],provider_config_id:[3,5,1,""],region:[3,5,1,""],secret_access_keyfile:[3,5,1,""],url:[3,5,1,""],vpc:[3,5,1,""]},"clap.configs.ProviderConfigLocal":{provider:[3,5,1,""],provider_config_id:[3,5,1,""]},"clap.executor":{AnsiblePlaybookExecutor:[4,1,1,""],Executor:[4,1,1,""],SSHCommandExecutor:[4,1,1,""],ShellInvoker:[4,1,1,""],logger:[4,4,1,""]},"clap.executor.AnsiblePlaybookExecutor":{PlaybookResult:[4,1,1,""],create_extra_vars:[4,2,1,""],create_inventory:[4,2,1,""],run:[4,2,1,""]},"clap.executor.AnsiblePlaybookExecutor.PlaybookResult":{events:[4,5,1,""],hosts:[4,5,1,""],ok:[4,5,1,""],ret_code:[4,5,1,""],vars:[4,5,1,""]},"clap.executor.Executor":{run:[4,2,1,""]},"clap.executor.SSHCommandExecutor":{CommandResult:[4,1,1,""],connect_and_execute:[4,2,1,""],run:[4,2,1,""]},"clap.executor.SSHCommandExecutor.CommandResult":{error:[4,5,1,""],ok:[4,5,1,""],ret_code:[4,5,1,""],stderr_lines:[4,5,1,""],stdout_lines:[4,5,1,""]},"clap.executor.ShellInvoker":{run:[4,2,1,""]},"clap.node":{NodeDescriptor:[6,1,1,""],NodeLifecycle:[6,1,1,""],NodeStatus:[6,1,1,""],NodeType:[6,1,1,""],logger:[6,4,1,""]},"clap.node.NodeDescriptor":{cloud_instance_id:[6,5,1,""],cloud_lifecycle:[6,5,1,""],configuration:[6,5,1,""],creation_time:[6,5,1,""],extra:[6,5,1,""],ip:[6,5,1,""],nickname:[6,5,1,""],node_id:[6,5,1,""],roles:[6,5,1,""],status:[6,5,1,""],tags:[6,5,1,""],type:[6,5,1,""],update_time:[6,5,1,""]},"clap.node.NodeLifecycle":{NORMAL:[6,5,1,""],PREEMPTIBLE:[6,5,1,""]},"clap.node.NodeStatus":{PAUSED:[6,5,1,""],REACHABLE:[6,5,1,""],STARTED:[6,5,1,""],STOPPED:[6,5,1,""],UNKNOWN:[6,5,1,""],UNREACHABLE:[6,5,1,""]},"clap.node.NodeType":{TYPE_CLOUD:[6,5,1,""],TYPE_LOCAL:[6,5,1,""]},"clap.node_manager":{DeploymentError:[7,3,1,""],InvalidNodeError:[7,3,1,""],InvalidProvider:[7,3,1,""],NodeManager:[7,1,1,""],NodeRepositoryController:[7,1,1,""],UnhandledProviderError:[7,3,1,""],logger:[7,4,1,""]},"clap.node_manager.NodeManager":{_group_instances_by_provider:[7,2,1,""],add_tags:[7,2,1,""],get_all_nodes:[7,2,1,""],get_nodes:[7,2,1,""],get_nodes_by_id:[7,2,1,""],get_nodes_with_tag:[7,2,1,""],get_nodes_with_tag_value:[7,2,1,""],get_not_running_nodes:[7,2,1,""],get_reachable_nodes:[7,2,1,""],get_up_nodes:[7,2,1,""],group_nodes_by_provider:[7,2,1,""],is_alive:[7,2,1,""],pause_nodes:[7,2,1,""],remove_node:[7,2,1,""],remove_tags:[7,2,1,""],resume_nodes:[7,2,1,""],start_node:[7,2,1,""],start_nodes:[7,2,1,""],stop_nodes:[7,2,1,""],upsert_node:[7,2,1,""]},"clap.node_manager.NodeRepositoryController":{get_all_nodes:[7,2,1,""],get_nodes_by_id:[7,2,1,""],get_nodes_filter:[7,2,1,""],remove_node:[7,2,1,""],remove_nodes:[7,2,1,""],upsert_node:[7,2,1,""]},"clap.repository":{InvalidEntryError:[8,3,1,""],Repository:[8,1,1,""],RepositoryError:[8,3,1,""],RepositoryFactory:[8,1,1,""],SQLiteRepository:[8,1,1,""]},"clap.repository.Repository":{clear:[8,2,1,""],close:[8,2,1,""],commit:[8,2,1,""],connect:[8,2,1,""],extension:[8,5,1,""],get:[8,2,1,""],get_all:[8,2,1,""],get_multiple:[8,2,1,""],keys:[8,2,1,""],open:[8,2,1,""],remove:[8,2,1,""],remove_multiple:[8,2,1,""],repository_name:[8,5,1,""],update:[8,2,1,""],upsert:[8,2,1,""]},"clap.repository.RepositoryFactory":{get_repository:[8,2,1,""],repositories:[8,5,1,""]},"clap.repository.SQLiteRepository":{__repr__:[8,2,1,""],clear:[8,2,1,""],close:[8,2,1,""],commit:[8,2,1,""],connect:[8,2,1,""],extension:[8,5,1,""],get:[8,2,1,""],get_all:[8,2,1,""],get_multiple:[8,2,1,""],keys:[8,2,1,""],open:[8,2,1,""],remove:[8,2,1,""],remove_multiple:[8,2,1,""],repository_name:[8,5,1,""],update:[8,2,1,""],upsert:[8,2,1,""]},"clap.role_manager":{InvalidActionError:[9,3,1,""],InvalidHostError:[9,3,1,""],InvalidRoleError:[9,3,1,""],MissingActionVariableError:[9,3,1,""],NodeRoleError:[9,3,1,""],Role:[9,1,1,""],RoleActionInfo:[9,1,1,""],RoleAssignmentError:[9,3,1,""],RoleError:[9,3,1,""],RoleManager:[9,1,1,""],RoleVariableInfo:[9,1,1,""],logger:[9,4,1,""]},"clap.role_manager.Role":{actions:[9,5,1,""],hosts:[9,5,1,""]},"clap.role_manager.RoleActionInfo":{description:[9,5,1,""],playbook:[9,5,1,""],vars:[9,5,1,""]},"clap.role_manager.RoleManager":{_check_nodes_role:[9,2,1,""],add_role:[9,2,1,""],get_all_role_nodes:[9,2,1,""],get_all_role_nodes_hosts:[9,2,1,""],get_role_node_hosts:[9,2,1,""],get_role_nodes:[9,2,1,""],load_roles:[9,2,1,""],perform_action:[9,2,1,""],remove_role:[9,2,1,""]},"clap.role_manager.RoleVariableInfo":{description:[9,5,1,""],name:[9,5,1,""],optional:[9,5,1,""]},"clap.utils":{APP_NAME:[10,4,1,""],CLAPFilter:[10,1,1,""],Singleton:[10,1,1,""],defaultdict_to_dict:[10,6,1,""],float_time_to_string:[10,6,1,""],get_logger:[10,6,1,""],get_random_name:[10,6,1,""],get_random_object:[10,6,1,""],path_extend:[10,6,1,""],setup_log:[10,6,1,""],sorted_groupby:[10,6,1,""],str_at_middle:[10,6,1,""],tmpdir:[10,6,1,""],yaml_load:[10,6,1,""]},"clap.utils.CLAPFilter":{filter:[10,2,1,""]},"clap.utils.Singleton":{__call__:[10,2,1,""],_instances:[10,5,1,""]},clap:{abstract_provider:[1,0,0,"-"],cluster_manager:[2,0,0,"-"],configs:[3,0,0,"-"],executor:[4,0,0,"-"],node:[6,0,0,"-"],node_manager:[7,0,0,"-"],repository:[8,0,0,"-"],role_manager:[9,0,0,"-"],utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:data","5":"py:attribute","6":"py:function"},terms:{"0400":13,"0644":14,"0744":14,"07d0cf3af28718ef8":11,"123":14,"123456":11,"154":15,"168":14,"180":[2,7],"192":14,"2018":15,"220":15,"400":11,"455e9c5da5c4417abc757f587a31c105":15,"600":[1,2,7],"744":14,"807":15,"abstract":[1,4,8],"boolean":[2,11,15],"default":[11,13,14,15],"final":[13,15],"float":[2,3,6,10],"int":[1,2,3,4,7,8,10],"new":[2,11,14,15],"public":[11,12,14,15],"return":[1,2,4,7,8,9,10,15],"static":[4,7],"super":11,"true":[2,3,7,8,9,10,11],"try":15,"var":[4,9,15],"while":15,AWS:[12,14],And:15,EFS:14,For:[10,11,13,14,15],Has:15,IDs:[2,11,15],Its:[12,15],One:[14,15],The:[2,10,11,13,14,15],Then:[13,15],There:15,These:[11,15],Use:[14,15],VMs:15,__call__:10,__repr__:8,_check_nodes_rol:9,_clusterconfig:2,_group_instances_by_provid:7,_instanc:10,_load_cluster_and_setup:2,_load_instance_config:3,_load_login_config:3,_load_provider_config:3,_nodeconfig:2,_run_setup_list:2,abc:[1,8],abcdfefxx:11,about:[2,11,13],abov:[11,14,15],absolut:[14,15],abstract_provid:5,abstractinstanceprovid:1,abstractrepositori:8,access:[11,15],access_keyfil:[3,11],accur:[1,2,3,7,8,9],acesss:11,across:15,act:15,action:[2,9,12,13],action_nam:9,actions_dir:9,actiontyp:2,activ:13,add:2,add_cluster_tag:2,add_existing_nodes_to_clust:2,add_rol:9,add_tag:7,added:[2,14,15],adding:[2,11,14,15],addit:[14,15],address:14,affect:2,after:[2,14,15],after_al:[2,15],again:15,akiaiosfodnn7exampl:11,aliv:2,all:[1,2,3,7,8,9,10,11,13,14,15],allow:[10,12,14,15],alreadi:[2,15],also:[2,11,14,15],alwai:[14,15],amazon:11,ami:11,among:[11,14,15],ani:[2,4,6,14,15],anoth:[2,15],another_var:15,ansibl:[12,14,15],ansibleplaybookexecutor:[4,9],anywher:14,api:12,app:14,app_nam:10,append:15,applic:[11,14],appropri:10,apr:15,apt:14,arbitrari:10,architectur:12,arg:[10,14],argument:[2,14,15],assign:15,assum:15,autom:12,automat:15,avail:[11,13,14,15],awar:14,aws:[3,11,15],azur:12,bar:[14,15],base:[1,2,3,4,7,8,9,10,11,13,15],bash:14,bash_logout:15,bashrc:15,basic:12,becom:14,been:15,befor:[2,14,15],before_al:[2,15],begin:[14,15],being:[2,15],bellow:15,belong:[2,14,15],below:[10,11,13,15],besid:15,between:11,bin:[13,14],binari:14,block:11,bool:[2,3,4,7,8,9,10],boot_disk_devic:[3,11],boot_disk_iop:3,boot_disk_s:[3,11],boot_disk_snapshot:3,boot_disk_typ:[3,11],both:15,bpxrficyexamplekei:11,briefli:15,bring:12,build:15,button:11,cach:15,call:[10,11,14,15],callabl:7,can:[2,10,11,13,14,15],care:11,cento:11,certain:10,chang:[14,15],charact:15,characterist:15,check:[2,14,15],children:10,chmod:[11,13],clap:[0,11,12],clapfilt:10,clapp:[13,14,15],clear:8,cli:13,client:[14,15],clone:13,close:8,cloud:[6,13,15],cloud_instance_id:6,cloud_lifecycl:6,cls:10,cluster:[2,11,12,13],cluster_config:2,cluster_config_id:2,cluster_fil:2,cluster_id:[2,15],cluster_manag:5,cluster_nam:2,cluster_repository_control:2,cluster_tag_prefix:2,cluster_templ:15,clusterconfig:2,clusterconfigdatabas:2,clusterconfigfil:2,clusterconfigurationerror:2,clusterdescriptor:2,clustererror:2,clustermanag:2,clusteropt:2,clusterrepositorycontrol:2,clustersetuperror:2,cmd:[14,15],collect:14,colon:15,com:13,comma:[14,15],command:[2,4,11,12,13],commandactiontyp:2,commandresult:4,commit:8,commit_on_clos:8,common:[1,2,3,7,8,9,12,15],common_copi:15,common_fetch:15,common_setup:15,commun:14,comput:[11,12,13],config:[1,2,5,6,7,11,13,15],config_db:2,configur:[2,6,12,13],configurationdatabas:3,configurationerror:3,connect:[8,11,13],connect_and_execut:4,connection_retri:7,connection_timeout:4,consid:[14,15],consist:[11,15],contain:[11,15],cool:[11,15],copi:[11,15],correct:15,correctli:15,correspond:11,could:[11,15],count:[1,2,7,15],creat:[1,2,8,10,11,12,15],create_extra_var:4,create_inventori:4,creation:[12,15],creation_tim:[2,6],current:[11,14,15],custom:15,dataclass:2,date:2,declar:15,deem:10,defaultdict_to_dict:10,defin:[11,12,14,15],delet:14,delimit:10,denot:15,depend:[11,14],deploi:14,deploymenterror:7,describ:[2,13,15],descript:[9,11,12,14],desir:[2,10,14,15],dest:[14,15],destin:[14,15],destroi:[2,15],destroy_on_min_count:2,detail:[11,13,15],determin:[10,15],dev:[11,13],develop:13,devic:11,dict:[2,4,6,7,8,9,10],dictionari:[2,11,15],differ:[11,12,15],dir:10,directori:[2,11,12,14,15],discard:[2,15],discard_invalid:[2,3,9],disk:11,displai:14,divid:15,doc:11,document:[11,14],doe:[14,15],download:11,drwx:15,drwxr:15,dsa:11,each:[11,13,14,15],easi:12,easili:[12,13],east:11,ebcd658b:15,ebcd658bacdf485487543cbcc721d1b3:15,ec2:[11,12,15],ec2_access_kei:11,echo:[2,7,14],effect:15,efs:[12,15],efs_group:14,efs_mount_ip:14,efs_mount_permiss:14,efs_mount_point:14,efs_own:14,elasticlust:12,element:15,els:[14,15],empti:10,enabl:11,enter:13,entir:[13,14],entri:8,env:13,env_var:4,environ:4,equal:15,error:[4,11],establish:15,etc:[10,11,12,13],even:15,event:[4,10],everi:[10,13],exampl:[10,11,15],except:[1,2,3,7,8,9],exclus:15,execut:[2,11,13,14],execution_timeout:4,executor:[5,9],exist:15,exit:[1,2,3,7,8,9,15],extens:8,extra:[2,6,14,15],extra_arg:[4,9],faa4017e10094e698aed56bb1f3369f9:15,facil:15,fail:[2,15],fals:[2,4,9,15],fast:12,featur:[12,15],fetch:[13,15],fetched_fil:14,field:11,file:[2,11,12,13,14],filenam:[10,11],filepath:14,filesystem:[11,14],fill:11,filter:[10,14,15],filter_func:7,final_setup:15,find:15,finish:14,first:[11,13,14,15],firstli:12,flag:13,flavor:[3,11],float_time_to_str:10,flow:15,folder:14,follow:[11,13,14,15],foo:[14,15],format:[11,15],framework:12,friendli:12,from:[2,14,15],from_node_id:[7,9],full:2,gcc:[13,15],gener:[11,15],get:[2,8,14,15],get_al:8,get_all_clust:2,get_all_cluster_nod:2,get_all_nod:7,get_all_role_nod:9,get_all_role_nodes_host:9,get_cluster_by_id:2,get_cluster_nodes_typ:2,get_logg:10,get_multipl:8,get_nod:7,get_nodes_by_id:7,get_nodes_filt:7,get_nodes_with_tag:7,get_nodes_with_tag_valu:7,get_not_running_nod:7,get_random_nam:10,get_random_object:10,get_reachable_nod:7,get_repositori:8,get_role_nod:9,get_role_node_host:9,get_up_nod:7,gib:11,gibibyt:11,git:[13,15],github:13,given:[2,15],gnupg:15,googl:12,gp2:11,green:14,group:[11,12,15],group_nodes_by_provid:7,group_var:13,grow:[2,12],guid:[12,15],hadoop:12,handler:10,has:15,have:[10,11,15],help:[1,2,3,7,8,9,13,15],helper:[1,8],here:14,heterogen:12,hierarchi:10,higher:13,hold:13,home:[13,14,15],host:[4,9,12,15],host_map:9,host_nam:[9,15],host_var:[4,9],hostnam:15,hosts_node_map:[4,9],how:[11,13,15],http:13,iam:11,identifi:[2,14],ids:[2,15],imag:11,image_id:[3,11],image_userdata:11,immedi:15,in_use_nam:10,inbound:14,includ:[11,12,14,15],index:12,indic:[2,14,15],individu:12,inform:[2,11,13,14,15],inherit:[1,8],init:15,initi:[1,2,3,7,8,9,10,15],input:15,insert:11,insid:[11,13,15],inspir:12,instal:[12,15],install_packag:15,instanc:[1,2,3,7,10,12,13,15],instance_config_id:3,instance_count:7,instance_info:2,instanceconfig:3,instanceconfigaw:3,instancedeploymenterror:1,instanceinfo:[1,2,3,6,7],instances_fil:3,instanti:15,instead:11,instruct:13,integ:15,interact:[11,12,15],interfac:[12,13],invalid:[2,11,15],invalidactionerror:9,invalidclustererror:2,invalidconfigurationerror:3,invalidentryerror:8,invalidhosterror:9,invalidnodeerror:7,invalidprovid:7,invalidroleerror:9,invalidsetuperror:2,inventori:[4,15],invok:15,io1:11,iop:11,is_al:[2,7],is_setup:2,iter:10,its:[2,10,11,14,15],itself:13,jinja:15,jm_arg:14,job:15,jobid:14,jobmanag:[14,15],just:[11,13,15],k7mdeng:11,kei:[2,7,8,10,13],key_pair:11,key_us_east_1:11,keyfil:13,keygen:11,keypair:11,keypair_nam:[3,11],keypair_private_fil:[3,11],keypair_public_fil:[3,11],keyword:[14,15],known:14,kwarg:10,larg:[11,15],last:[2,15],latenc:11,launch:[13,15],less:15,lha:15,libc6:13,libffi:13,libssl:13,like:11,line:[12,14],linux:13,list:[1,2,3,4,6,7,8,9,10,13,14],lmcad:13,load:[2,3,9],load_al:3,load_rol:9,local:[3,6],localhost:[14,15],locat:14,log:[10,14],logger:[1,2,3,4,6,7,9,10],logic:15,login:[3,12,13,15],login_config_id:3,loginconfig:3,logins_fil:3,logrecord:10,low:11,machin:[11,13,14],mai:[10,11,15],main:12,manag:[2,12,13,14,15],mani:[11,15],manipul:2,map:11,marjorylang:15,master:15,match:[11,14,15],max_work:[2,4,7],maximum:10,mean:14,mechan:15,medium:11,menu:11,mess:11,messag:15,metadata:[13,15],method:2,metric:14,micro:11,microsoft:12,min_count:[2,15],minim:13,minimum:[2,15],missingactionvariableerror:9,mnt:15,model:14,modifi:10,modul:[12,13],modular:15,more:[2,11,13,14,15],most:15,mount:15,mount_path:15,mpi:12,mst:2,much:15,multipl:[11,12,13,14,15],must:[2,11,13,14,15],mutual:15,name:[2,3,8,9,10,11,14,15],necessari:15,need:[11,13,14,15],network:[11,14],network_id:[3,11],newli:2,next:15,nfs:[14,15],nicknam:[6,15],node:[1,2,4,5,7,9,11,12,13],node_id:[2,6,7,9,15],node_manag:[2,5],node_repository_control:[7,9],node_typ:[2,15],node_var:[4,9],nodeconfig:2,nodedescriptor:[1,4,6,7,9],nodelifecycl:6,nodemanag:7,noderepositorycontrol:7,noderoleerror:9,nodes_being_ad:2,nodes_to_check:1,nodes_to_paus:1,nodes_to_resum:1,nodes_to_stop:1,nodesizeerror:2,nodestatu:6,nodetyp:6,non:[1,2,3,7,8,9],none:[2,4,7,9,10,14],nonzero:10,normal:6,note:14,now:[2,14,15],num:15,number:[2,15],obj:8,obtain:[2,11,15],offer:15,omit:15,onc:[2,13,15],one:[11,14,15],ones:15,onli:[2,10,11,14,15],open:8,openmpi:14,oper:15,option:[2,3,4,6,9,10,11,14],order:[2,11],other:[11,14],otherwis:[2,15],outbound:14,output:[14,15],output_dir:4,outputdir:14,over:15,owner:14,packag:[13,15],page:12,pair:11,parallel:2,paramet:[1,2,4,7,8,9,10,14],pars:2,part:11,parti:11,particular:15,pass:[10,14,15],password:[11,13],past:11,path:[2,11,14,15],path_extend:10,path_to_key_pair:11,paus:[2,6],pause_clust:2,pause_inst:1,pause_nod:7,pem:11,perform:[2,10,11,12,13,14,15],perform_act:9,period:[13,15],permiss:[11,13,14],phase:2,pip:13,pipelin:15,place:[10,11,13,14,15],placement:11,placement_group:[3,11],plai:15,platform:15,playbook:[2,9,12],playbook_fil:4,playbookactiontyp:2,playbookresult:[4,9],playboook:2,plug:15,point:[10,13,14],port:14,posit:15,possibl:15,pre:15,preced:15,preemptibl:6,prefix:[2,10],present:15,previou:2,price:3,privat:[2,11,13],private_access:11,private_dir:[2,7,9],private_path:4,process:[2,15],profil:15,program:[12,14],project:12,properli:15,properti:11,provid:[1,3,7,8,13,14,15],provider_config_id:3,provider_handl:3,providerconfig:3,providerconfigaw:3,providerconfigloc:3,providers_fil:3,provis:11,pub:11,purpos:11,put:[14,15],pypit:14,pypits_path:14,python3:13,python:[12,13,15],queri:14,quickli:[12,14],quiet:[4,9],rais:[2,11],random:14,reach:2,reachabl:[6,15],read:[11,14,15],readi:15,reboot:15,recogn:14,record:10,recurs:14,refer:[2,11,12,13,15],referenc:11,region:[3,11],rel:[14,15],remain:15,remot:[14,15],remov:[2,8,10],remove_clust:2,remove_multipl:8,remove_nod:7,remove_rol:9,remove_tag:7,replac:15,repositori:[2,5,7,13],repository_nam:8,repository_path:8,repositoryerror:8,repositoryfactori:8,repr:8,repres:[2,15],requir:[11,13,15],resiz:[12,15],resourc:11,respect:15,respons:2,result:[14,15],resum:2,resume_clust:2,resume_inst:1,resume_nod:7,ret_cod:4,retri:[2,7,10],retriev:2,retry_timeout:7,role:[2,6,9,12,13],role_dir:9,role_host_nam:15,role_manag:[2,5],role_nam:9,roleactioninfo:9,roleactiontyp:2,roleadd:2,roleassignmenterror:9,roleerror:9,rolemanag:9,rolevariableinfo:9,root:[3,11,13,15],row:[14,15],rsa:11,rule:14,run:[2,4,11,12,13,15],run_act:2,run_role_add:2,run_setup:2,runtim:14,said:15,same:[11,12,14,15],save:11,script:[11,13,15],sda1:11,search:[12,14,15],secgroup:11,second:[14,15],secret:[11,13],secret_access_keyfil:[3,11],section:[11,13],secur:[11,14],security_group:[3,11],see:[1,2,3,7,8,9,11,14,15],segment:15,select:[14,15],self:[1,2,3,4,7,8,9,10],separ:[14,15],sequenti:15,seri:15,session:15,set:[2,11,12,13,14,15],setup:[2,12],setup_clust:2,setup_log:10,setup_nam:2,setupconfig:2,sever:[13,14,15],share:[12,15],shebang:14,shell:[11,13,14,15],shellinvok:4,shh:15,should:13,show:[11,13,15],shown:[11,13,15],shrink:12,signatur:[1,2,3,7,8,9],similar:[14,15],simpl:15,simpli:15,singl:[10,13,15],singleton:10,size:11,skip:15,slave:15,small:15,some:[11,13,14,15],sorted_groupbi:10,sourc:[1,2,3,4,6,7,8,9,10,13,15],space:11,spark:12,special:15,specif:[11,15],specifi:[2,10,11,14,15],spit:[12,15],spits_arg:14,spits_binari:14,spits_job_path:14,sqlite:8,sqliterepositori:8,src:[14,15],ssd:11,ssh:[2,4,11,12,15],ssh_binari:4,ssh_port:3,ssh_to:[2,15],sshcommandexecutor:4,stage:[2,13,15],stand:13,standard:[1,8,11],start:[2,6,11,13],start_at_stag:2,start_clust:2,start_cluster_nod:2,start_inst:1,start_nod:7,start_timeout:[2,7],statu:[6,15],stderr_lin:4,stdout:15,stdout_lin:4,step:15,stop:[2,6,12],stop_clust:2,stop_inst:1,stop_nod:7,storag:[11,13],store:[2,11,13,15],str:[2,3,4,6,7,8,9,10],str_at_middl:10,string:[10,11,14,15],structur:13,style:12,submodul:0,subnet:11,subsect:15,subset:15,successfulli:[2,15],sucessfuli:2,sucessfulli:2,sudo:[3,11],sudo_us:[3,11],suffix:10,suppli:15,support:14,suppos:[2,15],syntax:15,system:[2,11,12,13,14],t2small:11,tab:11,tabl:[11,15],table_nam:8,tag:[2,6,7],take:15,task:[14,15],taskmanag:[14,15],tcp:14,tell:15,templat:[12,13],temporari:2,termin:[2,15],test:[2,13,15],test_command:[2,7],text:[10,15],than:15,them:[2,11,12,15],thi:[2,11,13,14,15],thing:15,third:[11,14],thread:2,three:15,through:10,thu:[14,15],time:[2,12,15],timeout:[1,2,3,7,15],timespec:10,tm_arg:14,tmp:14,tmpdir:10,togeth:10,tool:12,transfer:14,transpar:[12,15],tupl:7,two:[11,14,15],type:[1,2,3,4,6,7,8,9,10,11,14,15],type_cloud:6,type_loc:6,ubuntu:[11,14,15],unhandledprovidererror:7,unicamp:13,union:[4,9],uniqu:[11,14,15],unix:14,unknown:6,unmount:[14,15],unreach:[6,15],updat:[2,8,13],update_instance_info:1,update_obj:8,update_tim:[2,6],update_timeout:[2,7],upsert:[2,8],upsert_clust:2,upsert_nod:7,url:3,usag:[12,14],use:[2,10,11,12,13,14,15],used:[2,10,11,12,13,14,15],useful:15,user:[3,12,13,14],uses:11,using:[1,8,11,13,14,15],usual:13,util:5,val:15,validate_nodes_in_rol:9,valu:[2,7,14],var1:15,variabl:15,verbos:[4,8],verbosity_level:10,via:[11,12,13,14,15],virtual:[11,13],virtualenv:13,volum:11,vpc:[3,11],wai:[1,8,15],wait:14,wait_timeout:[2,7],want:[11,14,15],well:[12,13],were:[2,15],when:[2,11,14,15],where:[2,11,13,14,15],which:[10,15],whole:11,whose:15,within:2,without:[2,11,15],wjalrxutnfemi:11,work:15,workdir:14,write:[13,14,15],written:[13,15],wwith:15,xxx:[11,14],yaml:[2,11,12,13,15],yaml_load:10,yes:10,yml:[13,15],you:[11,13,14,15],your:[11,14,15],zone:11},titles:["Programming Reference","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.abstract_provider</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.cluster_manager</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.configs</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.executor</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.node</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.node_manager</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.repository</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.role_manager</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">clap.utils</span></code>","Basic Configuration Setup","Welcome to CLoud Application Provider Documentation!","Introduction","Roles shared with CLAP","Basic Usage"],titleterms:{"class":[1,2,3,4,6,7,8,9,10],"function":10,AWS:11,abstract_provid:1,action:[14,15],add:[14,15],aliv:15,applic:12,architectur:13,attribut:[1,2,3,4,6,7,9,10],basic:[11,15],block:15,clap:[1,2,3,4,5,6,7,8,9,10,13,14,15],cloud:[11,12],cluster:15,cluster_manag:2,code:15,command:[14,15],common:14,config:3,configur:[11,15],connect:15,content:[1,2,3,4,6,7,8,9,10,12],control:15,copi:14,creat:14,descript:[13,15],directori:13,document:12,ec2:14,efs:14,exampl:14,execut:15,executor:4,fetch:14,file:15,group:14,grow:15,guid:13,host:14,indic:12,instal:[13,14],instanc:11,introduct:[12,13],job:14,kei:[11,15],list:15,login:11,modul:[1,2,3,4,6,7,8,9,10,15],mount:14,node:[6,14,15],node_manag:7,none:15,note:11,option:15,order:15,other:15,packag:14,paramet:15,paus:15,phase:15,playbook:15,program:0,provid:[11,12],quickli:13,reboot:14,refer:0,remov:15,repositori:8,requir:14,resum:15,role:[14,15],role_manag:9,run:14,script:14,section:15,setup:[11,14,15],share:14,spit:14,start:[14,15],statu:14,stop:15,submodul:5,tabl:12,tag:15,templat:[11,15],typic:14,umount:14,updat:[14,15],usag:[13,15],user:11,util:10,valid:[11,15],valu:[11,15],variabl:14,welcom:12,workflow:14}})