module Api
   module V1
      class SubjectsController < ApplicationController
         skip_before_action :verify_authenticity_token
         def index 
            @subject = Subject.all

            render json: @subject
         end

         def show
            @subject = Subject.find(params[:id])

            render json: @subject
         end

         def create 
            @subject = Subject.new(subject_params)

            if @subject.save 
               render json: @subject
            else
               render json: { error: '@subject.errors.messages'}, status: 422
            end
         end

         def update 
            @subject = Subject.find(params[:id])

            if @subject.update(subject_params)
               render json: @subject
            else
               render json: { error: '@subject.errors.messages'}, status: 422
            end
         end
 
         def destroy 
            @subject = Subject.find(params[:id])

            if @subject.destroy
               render json: @subject
            else
               render json: { error: '@subject.errors.messages'}, status: 422
            end
         end


         private
            def subject_params 
               params.require(:subject).permit(:code, :name)
            end
      end
   end
end