Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, ENV['LINKEDIN_APP_ID'], ENV['LINKEDIN_APP_SECRET'], secure_image_url: true
end

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, ENV['FACEBOOK_APP_ID'], ENV['FACEBOOK_APP_SECERT'], secure_image_url: true
end

