const express = require("express");
const router = express.Router();
const student = require("./student");
router.get("/", (req, res) => {
  res.redirect("/students");
});
router.get("/students", (req, res) => {
  student.select((error, students) => {
    if (error) {
      return res.status(500).send("404 Not Found!");
    } else {
      res.render("index.html", {
        title: "首页",
        students,
      });
    }
  });
});
router.get("/students/new", (req, res) => {
  res.render("new.html", {title: '新加'});
});
router.post("/students/new", (req, res) => {
  // console.log(req.body)
  let stu = req.body;
  student.insert(stu, (error) => {
    if (error) {
      return res.status(500).send("404 Not Found!");
    } else {
      res.redirect("/");
    }
  });
});
router.get("/students/edit", (req, res) => {
  let id = req.query.id;
  student.selectStudentById(id, (error, student) => {
    if (error) {
      return res.status(500).send("404 Not Found!");
    } else {
      return res.render("edit.html", {
        title: "编辑",
        student,
      });
    }
  });
});
router.post("/students/edit", (req, res) => {
  student.update(req.body, (error) => {
    if (error) {
      return res.status(500).send("404 Not Found!");
    } else {
      res.redirect("/");
    }
  });
});
router.get("/students/delete", (req, res) => {
  let id = req.query.id;
  student.delete(id, (error) => {
    if (error) {
      return res.status(500).send("404 Not Found!");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
