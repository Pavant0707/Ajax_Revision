using Microsoft.AspNetCore.Mvc;
using Student_Ajax.Context;
using Student_Ajax.Entity;

namespace Student_Ajax.Controllers
{
    public class StudentController1 : Controller
    {
        private readonly StudentContext Context;

        public StudentController1(StudentContext Context)
        {
            this.Context = Context;
        }

        public IActionResult Index()
        {
            return View();
        }
        public JsonResult StudentList()
        {
            var a = Context.Studentdb.ToList();
            return new JsonResult(a);
        }


        public JsonResult AddStudent(Student entity)
        {

            var enntity = new Student()
            {
                Name = entity.Name,
                School = entity.School,
                Email = entity.Email,
            };
            Context.Studentdb.Add(enntity);
            Context.SaveChanges();
            return new JsonResult("Data inserted");
        }
        public JsonResult Edit(int Id)
        {
            var data = Context.Studentdb.Where(stu => stu.Id == Id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult Update(Student student)
        {
            Context.Studentdb.Update(student);
            Context.SaveChanges();
            return new JsonResult("Record updated");
        }

        public JsonResult Delete(int id)
        {
            var data = Context.Studentdb.Where(stu => stu.Id == id).SingleOrDefault();
            this.Context.Studentdb.Remove(data);
            Context.SaveChanges();
            return new JsonResult("Data Deleted");
        }
        public JsonResult GetById(int id)
        {
            var data = Context.Studentdb.Where(stu => stu.Id == id).SingleOrDefault();
            return new JsonResult(data);
           // Context.SaveChanges();
            //return new JsonResult("Data Deleted");
        }
    }
}
