variable "aws_region" {
  description = "Região AWS onde os recursos serão criados"
  type        = string
  default     = "us-east-1"
}

variable "account_id" {
  description = "ID da conta AWS (AWS Academy)"
  type        = string
}

variable "project_name" {
  description = "Nome do projeto para identificação e tags"
  type        = string
  default     = "aula-devops-hotwheels"
}

variable "subnet_ids" {
  description = "Lista de subnets para o ECS Service"
  type        = list(string)
}

variable "security_group_ids" {
  description = "Lista de security groups para o ECS Service"
  type        = list(string)
}

variable "cpu" {
  description = "CPU para a task ECS"
  type        = string
  default     = "1024" # 1 vCPU
}

variable "memory" {
  description = "Memória para a task ECS"
  type        = string
  default     = "512"
}

variable "desired_count" {
  description = "Número de tasks no ECS Service"
  type        = number
  default     = 1
}