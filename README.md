# DevOps – Fase 1 (React + EC2)

Descrição do Projeto, Objetivos e Requisitos

Descrição:

O projeto consiste na implementação de um pipeline de automação e na criação de uma infraestrutura em nuvem para uma aplicação frontend de Gerenciamento de Coleção de Carrinhos Hotwheels. A aplicação, desenvolvida em ReactJS, permite ao usuário realizar operações de CRUD. O foco do projeto é a aplicação de práticas DevOps para automatizar o ciclo de vida do software, desde a integração de código até a preparação para o deploy em um ambiente de servidor web.

Objetivos:

Automatizar o Build e Teste: Garantir que cada alteração no código-fonte seja automaticamente validada através de testes e que uma versão de produção (build) seja gerada com sucesso.

Garantir a Qualidade do Código: Integrar ferramentas de análise estática (linting) no pipeline para manter um padrão de código consistente.

Implementar Infraestrutura como Código (IaC): Provisionar um servidor web na AWS de forma automatizada, versionada e replicável usando Terraform.

Estabelecer um Pipeline de CI: Configurar um fluxo de Integração Contínua (CI) no GitHub Actions que valide a integridade da aplicação a cada commit.

Frontend React (CRUD Hotwheels) com:
- CI: GitHub Actions (build, testes e deploy em EC2 via SSH)
- IaC: Terraform (EC2 Ubuntu + Nginx)
- Testes: React Testing Library

## Executar localmente
npm ci
npm start

## Testes
npm test

## Build
npm run build

## Infra (Terraform)
cd infra/terraform
terraform init
terraform plan -var "key_name=SEU_KEYPAIR" -var "allowed_ssh_cidr=0.0.0.0/0"
terraform apply -auto-approve -var "key_name=SEU_KEYPAIR" -var "allowed_ssh_cidr=0.0.0.0/0"

## Deploy automático
Push na branch main → GitHub Actions roda CI e deploya no EC2.
Secrets necessários:
- EC2_PUBLIC_IP
- EC2_SSH_PRIVATE_KEY
