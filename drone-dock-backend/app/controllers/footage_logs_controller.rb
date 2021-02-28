class FootageLogsController < ApplicationController
    def index
        render json: FootageLog.all.to_json({
            include: {
            videos: {except: [:created_at, :updated_at]},
        },
            except: [:created_at, :updated_at]
        })
    end
end
