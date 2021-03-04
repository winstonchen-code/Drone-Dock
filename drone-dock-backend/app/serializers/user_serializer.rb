class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image, :email
end
