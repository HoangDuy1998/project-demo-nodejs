class HomeController {
  home(req, res) {
    res.render("home");
  }

  contact(req, res) {
    res.render("contact");
  }
}

module.exports = new HomeController();
