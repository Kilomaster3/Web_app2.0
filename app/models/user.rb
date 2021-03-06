class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         authentication_keys: [:username, :email]

  devise :omniauthable, omniauth_providers: [:facebook, :linkedin]
  validates :email, uniqueness: true
  validates :username, uniqueness: true

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session['devise.facebook_data'] && session['devise.facebook_data']['extra']['raw_info']
        user.email = data['email'] if user.email.blank?
      end
    end
   end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
      user.image = auth.info.image
    end
  end
end

def self.connect_to_linkedin(auth, _signed_in_resource = nil)
  user = User.where(provider: auth.provider, uid: auth.uid).first
  if user
    user
  else
    registered_user = User.where(email: auth.info.email).first
    registered_user || user = User.create(name: auth.info.first_name, provider: auth.provider, uid: auth.uid, email: auth.info.email, password: Devise.friendly_token[0, 20])
 end
  def email_required?
    false
   end

  def email_changed?
    false
  end
end
