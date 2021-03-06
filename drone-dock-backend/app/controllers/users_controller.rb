class UsersController < ApplicationController
    before_action :authenticate, only: [:me, :update]
    def login 
        # user = User.first
        
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            token = JWT.encode({ user_id: user.id }, 'my_secret', 'HS256')
            # render json: user.to_json({include: [:footage_logs => {:include => [:videos]}], except: [:created_at, :updated_at]})
            render json: { user: UserSerializer.new(user), token: token }

        else 
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end 
    end

    def signup
        user = User.create(user_params)
        if user.valid?
            # render json: user, status: :created
            token = JWT.encode({ user_id: user.id }, 'my_secret', 'HS256')
            render json: { user: UserSerializer.new(user), token: token }
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

    def index
        render json: User.all.to_json
    end

    def show
        user = User.find(params[:id])
        render json: user.to_json
    end 

    def update 
        # user = User.first
        @current_user.update(user_params)
        render json: @current_user
    end

    def destroy
        user = User.find_by(id: params[:id])
        # footage_log = FootageLog.find(params[:id])
        user.destroy
    end

    private
    def user_params
        # params.required(:user).permit(:name, :password, :image, :bio, :email)
        params.permit(:id, :name, :password, :image, :bio, :email)
    end
end
