class VideosController < ApplicationController
    def show
        video_log = Video.find(params[:id])
        render json: video_log.to_json({
            except: [:created_at, :updated_at]
        })
    end 

    def destroy
        video_log = Video.find_by(id: params[:id])
        video_log.destroy
    end

    private
    def video_logs_params
        params.required(:video_log).permit(:id, :title, :description, :location, :url)
    end
end
