class LinksController < ApplicationController
    def index
        @links = Link.find(:all, :offset => 0, :limit => 10);
        render :json => {:links => @links}
    end

    def get

        @link = Link.find(params[:id])
        render :json => {:link => @link}
    end
end
