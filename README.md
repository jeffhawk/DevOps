# DevOps – Fase 1: Configuração e Automação Inicial

## Descrição

Este repositório implementa a Fase 1 do projeto **DevOps – Na Prática**. O objetivo é demonstrar um fluxo completo de automação com GitHub Actions e Terraform, provisionando infraestrutura como código e publicando um site estático simples no Amazon S3.

## Tecnologias e Ferramentas

- **Terraform** (v1.9.5)
- **AWS CLI**
- **GitHub Actions**
- **Amazon S3**

## Infraestrutura

- Bucket S3 configurado como site estático
  - `index_document`: `index.html`
  - `error_document`: `index.html`
  - Versionamento habilitado
  - Política pública de leitura (`s3:GetObject` em `arn:aws:s3:::${bucket_name}/*`)
- Variáveis definidas em `infra/terraform/variables.tf`:
  - `bucket_name`
  - `aws_region`
  - `environment`
  - `project_name`
- Permissões AWS (GitHub Secrets):
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`
  - `S3_BUCKET_NAME`

## Pipeline CI/CD

O workflow em `.github/workflows/ci-cd.yml` executa três jobs:

1. **terraform-validate**
    - Checkout do repositório
    - Instalação do Terraform
    - `terraform init -input=false`
    - `terraform fmt -check`
    - `terraform validate`
    - `terraform plan -out=plan.tfplan -var="bucket_name=${{ secrets.S3_BUCKET_NAME }}"`
    - Upload do plano como artefato

2. **terraform-apply** (executa apenas em push para `main`)
    - Download do plano (`plan.tfplan`)
    - `terraform apply -auto-approve plan.tfplan`
    - Captura de outputs (`bucket_name`, `website_endpoint`)

3. **deploy**
    - Configuração das credenciais AWS via `aws-actions/configure-aws-credentials@v4`
    - `aws s3 sync site/ s3://${{ needs.terraform-apply.outputs.bucket_name }} --delete --acl public-read --cache-control "max-age=300, public"`
    - Exibição da URL pública do site no log

## Estrutura de Pastas

```
DevOps/
├── infra/terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── site/
│   └── index.html
├── .github/workflows/
│   └── ci-cd.yml
└── README.md
```

## Execução Manual

1. Acesse o diretório `infra/terraform`
2. Execute:
    ```sh
    terraform init
    terraform apply -var="bucket_name=SEU_BUCKET"
    ```
3. Acesse o endpoint retornado em `website_endpoint` no navegador