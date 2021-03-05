class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :image, :email, :footage_logs
end
