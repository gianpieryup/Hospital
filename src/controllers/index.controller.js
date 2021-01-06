const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index',{
    style: 'new.css', // Con esto especificamos el CSS que queremos renderizar con la pagina
  });
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

module.exports = indexCtrl;