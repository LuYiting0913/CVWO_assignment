# README

- Name: Lu Yiting
- Matric Number: A0239591U

- Database structure

  - Student (name:string, matric:string, gender:string)
  - Subject (code:string, name:string)
  - Grade (code:string, score:string, student_id:string(fk))

- User manual

  - Navigation tab

    - Home
      Display the home page

    - Student
      Display all the student records in a table
      Allow the user to add student record
      Allow the user to perform view, edit, and delete on each record

      - View student record
        Display the details about a student and his/her exam records
        Allow user to add exam results
        Allow user to perform delete on exam results

    - Subject
      Display all subject records in a table
      Allow the user to add student record
      Allow the user to perform edit and delete on each subject

  * Validity checks for inputs
    - Student name: non-empty
    - Student matric: length == 9
    - Subject code: non-empty & no duplicates
    - Subject name: non-empty
    - Grade code: no duplicates
