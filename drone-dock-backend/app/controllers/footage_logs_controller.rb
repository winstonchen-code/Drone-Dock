class FootageLogsController < ApplicationController
    def index
        render json: FootageLog.all.to_json({
            include: {
            videos: {except: [:created_at, :updated_at]},
        },
            except: [:created_at, :updated_at]
        })
    end

    def show
        footage_log = FootageLog.find(params[:id])
        render json: footage_log.to_json({
            include: {
            videos: {except: [:created_at, :updated_at]},
        },
            except: [:created_at, :updated_at]
        })
    end 

    def create 
        footage_log = FootageLog.create(footage_logs_params)
        if footage_log 
            render json: footage_log 
        else 
            render json: {error: "Not enough information"}
        end 
    end

    # def edit
    #     footage_log = FootageLog.find(params[:id])
    # end

    # def update
    #     footage_log = FootageLog.find(params[:id])
    #     footage_log.update(footage_logs_params)
    # end

    def destroy
        footage_log = FootageLog.find_by(id: params[:id])
        # footage_log = FootageLog.find(params[:id])
        footage_log.destroy
    end

    private
    def footage_logs_params
        params.required(:footage_log).permit(:id, :name, :image, :location, :date, :user_id)
    end
end
