output "bucket_name" {
  description = "Nome do bucket S3 criado"
  value       = aws_s3_bucket.site.bucket
}

output "website_endpoint" {
  description = "URL pública do site estático hospedado no S3"
  value       = aws_s3_bucket_website_configuration.site_config.website_endpoint
}