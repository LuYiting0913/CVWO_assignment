module Api
    module V1
        class StudentsController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index
               @student = Student.all
              
                render json: @student
            end
        
            def show
                @student = Student.find(params[:id])

                render json: @student
            end
        
            def create
                @student = Student.new(student_params)
        
                if @student.save
                    render json: @student
                else
                    render json: { error: '@student.errors.messages'}, status: 422
                end
            end
        
            def update
                @student = Student.find(params[:id])
        
                if @student.update(student_params)
                    render json: @student
                else
                    render json: { error: @student.errors.messages}, status: 422
                end
            end
        
            def destroy 
                @student = Student.find(params[:id])

                if @student.destroy
                    render json: @student
                else
                    render json: { error: @student.errors.messages}, status: 422
                end
            end

            
        
            private
                def student_params
                    params.require(:student).permit(:name, :matric, :gender)
                end
        
               
        end
    end
end        