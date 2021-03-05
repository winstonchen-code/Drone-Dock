class UsersController < ApplicationController
    before_action :authenticate, only: [:me, :update]
    def login 
        # user = User.first
        
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: user.to_json({include: [:footage_logs => {:include => [:videos]}], except: [:created_at, :updated_at]})
        else 
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end 
    end

    def signup
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def me 
        # user = User.first

        # render json: user.to_json({
        #     include: {
        #     footage_logs: {except: [:created_at, :updated_at]},
        # },
        #     except: [:created_at, :updated_at]
        # })

        render json: @current_user.to_json({include: [:footage_logs => {:include => [:videos]}], except: [:created_at, :updated_at]})
    end

    def update 
        # user = User.first
        @current_user.update(user_params)
        render json: @current_user
    end

    private
    def user_params
        # params.required(:user).permit(:name, :image, :bio, :email)
        params.permit(:name, :image, :bio, :email)
    end
end
