class UsersController < ApplicationController
    def login 
        user = User.first
        render json: user
    end

    def me 
        user = User.first
        render json: user.to_json({
            include: {
            footage_logs: {except: [:created_at, :updated_at]},
        },
            except: [:created_at, :updated_at]
        })
    end

    def update 
        user = User.first
        user.update(bio: params[:bio])
        render json: user
    end
end
