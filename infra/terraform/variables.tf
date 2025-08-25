variable "aws_region" {
  description = "Região AWS onde os recursos serão criados"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome do projeto para identificação e tags"
  type        = string
  default     = "aula-devops-hotwheels"
}

variable "enable_public_access" {
  description = "Permite acesso público ao bucket S3"
  type        = bool
  default     = true
}