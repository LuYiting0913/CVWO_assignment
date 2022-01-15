class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :matric, :gender

  
end
