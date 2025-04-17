# Requires in .ssh/config:
#
# Host 145.14.153.58
#     ProxyCommand ssh -o 'ForwardAgent yes' root@drawk.cab 'ssh-add && nc %h %p'

ssh -p 65002 u112729377@145.14.153.58
