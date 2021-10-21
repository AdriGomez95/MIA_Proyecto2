var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

const service = require("./connection.js");
const cors = require("cors");

router.use(cors({ origin: true, optionsSuccessStatus: 200 }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

router.post("/login", async function (req, res, next) {
  const { color, id_prueba } = req.body;

  let response = await service.connect(
    `SELECT * from PRUEBA WHERE COLOR = '${color}' AND ID_PRUEBA='${id_prueba}'`
  );
 
  if (response.status == 400) {
    res.status(400).json({ message: response.message });
  } else {
    if (response.data.length == 0) {
      res.status(400).json({ message: "Credenciales incorrectas" });
    } else {
      res
        .status(200)
        .json({ message: "Credenciales correctas", data: response.data[0] });
    }
  }
});

router.post("/crear_usuario", async function (req, res, next) {
  const { color, id_prueba} = req.body;

  let response = await service.connect(
    `BEGIN INSERT INTO PRUEBA VALUES('${color}','${id_prueba}'); COMMIT; END;`
  );
  
  if (response.status == 400) {
    res.status(400).json({ message: response.message });
  } else {
      res
        .status(200)
        .json({ message: "Usuario creado correctamente"});
  }
});


router.put("/modificar_usuario", async function (req, res, next) {
  const { color, id_prueba } = req.body;

  let response = await service.connect(
    `BEGIN UPDATE PRUEBA SET COLOR = '${color}', ID_PRUEBA = '${id_prueba}' WHERE COLOR = '${color}'; COMMIT; END;`
  );
  
  if (response.status == 400) {
    res.status(400).json({ message: response.message });
  } else {
      res
        .status(200)
        .json({ message: "Usuario modificado correctamente"});
  }
});




module.exports = router;