#!/bin/bash
#---------------------------------------------------------------------------------------------------
# executes unit tests
#
# prepares a staging directory with the requirements
set -e
script_dir=$(cd $(dirname $0) && pwd)

# prepare staging directory
staging=$(mktemp -d)
mkdir -p ${staging}
cd ${staging}

# copy src and overlay with test
cp ${script_dir}/../../lambda/queue/queue_backlog_calculator.py $PWD
cp ${script_dir}/test_index.py $PWD
cp ${script_dir}/Dockerfile $PWD

pip3 install boto3
python3 test_index.py
#docker build .