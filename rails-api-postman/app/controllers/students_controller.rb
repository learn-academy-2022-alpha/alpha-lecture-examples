class StudentsController < ApplicationController

  def index
    all_the_students = Student.all
    render json: all_the_students
  end

  def show
    just_one_student = Student.find(params[:id])
    render json: just_one_student
  end

  def create
    new_student = Student.create(student_params)
    if new_student.valid?
      render json: new_student
    else
      render json: new_student.errors
    end
  end

  def update
    just_one_student = Student.find(params[:id])
    just_one_student.update(student_params)
    if just_one_student.valid?
      render json: just_one_student
    else
      render json: just_one_student.errors
    end
  end

  def destroy
    just_one_student = Student.find(params[:id])
    if just_one_student.destroy
      render json: just_one_student
    else
      render json: just_one_student.errors
    end
  end

  private
  def student_params
    params.require(:student).permit(:name, :cohort)
  end

end
