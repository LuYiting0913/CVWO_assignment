module Api
   module V1
      class GradesController < ApplicationController
         skip_before_action :verify_authenticity_token
         def index
            @student = Student.find(params[:student_id])
            @grade = @student.grade

            render json: @grade
         end
         
         def show
            @grade = Grade.find(params[:id])

            render json: @grade
         end

         def create
            @grade = Grade.new(grade_params)

            if @grade.save
               render json: @grade
            else
               render json: { error: '@grade.errors.messages'}, status: 422
            end
         end

         def update
            @grade = Grade.find(params{:id})

            if @grade.update(grade_params)
               render json: @grade
            else
               render json: { error: '@grade.errors.messages'}, status: 422
            end
         end

         def destroy
            @grade = Grade.find(params[:id])

            if @grade.destroy
               render json: @grade
            else
               render json: { error: '@grade.errors.messages'}, status: 422
            end
         end

         private

            def student
               @student ||= Student.find(params[:student_id])
            end

            def grade_params
               params.require(:grade).permit(:code, :score, :student_id) 
            end

      end
   end
end