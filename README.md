# DevOps – Fase 1: Configuração e Automação Inicial

## Descrição

Este repositório é utilizado na Fase 1 do projeto **DevOps – Na Prática**. O objetivo é demonstrar um fluxo completo de automação com GitHub Actions e Terraform, provisionando infraestrutura como código e publicando um site estático simples no Amazon S3.

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

O workflow em `.github/workflows/ci-cd.yml` é dividido em quatro etapas:

1. **build-static**
   Valida a presença do `index.html` na pasta `site/` e publica os arquivos como artefato.

2. **terraform-validate**
   Inicializa o Terraform, verifica formatação, valida sintaxe e gera o plano de execução (`plan.tfplan`).
   **terraform-validate**
    - Checkout do repositório
    - Instalação do Terraform
    - `terraform init -input=false`
    - `terraform fmt -check`
    - `terraform validate`
    - `terraform plan -out=plan.tfplan -var="bucket_name=${{ secrets.S3_BUCKET_NAME }}"`
    - Upload do plano como artefato

3. **terraform-apply**
   Executa o `terraform apply` somente em push para a branch `main`, aplicando o plano gerado e capturando os outputs (`bucket_name`, `website_endpoint`).
    - Download do plano (`plan.tfplan`)
    - `terraform apply -auto-approve plan.tfplan`
    - Captura de outputs (`bucket_name`, `website_endpoint`)

4. **deploy**
   Baixa os arquivos estáticos e sincroniza com o bucket S3 provisionado, tornando o site acessível publicamente.
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
├── build/
│   └── index.html
├── .github/workflows/
│   └── ci-cd.yml
└── README.md
```

## Execução Manual (opcional)

1. Acesse o diretório `infra/terraform`

   ```bash
   cd infra/terraform
    ```

2. Execute:

    ```bash
    terraform init
    terraform apply -var="project_name=hotwheels-frontend" -var="environment=dev"
    ```

3. Acesse o endpoint retornado em `website_endpoint` no navegador
