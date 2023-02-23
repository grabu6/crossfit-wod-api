const Maquines = require("../database/Maquines");

const getAllMaquines = () => {
  try {
    const allMaquines= Maquines.getAllMaquines();
    return allMaquines;
  } catch (error) {
    throw error;
  }
};

const getOneMaquina = (maquinaId) => {
  try {
    const maquina= Maquines.getOneMaquina(maquinaId);
    return maquina;
  } catch (error) {
    throw error;
  }
};

const getAllCalaixosDeMaquina = (maquinaId) => {
  try {
    const allCalaixos= Maquines.getAllCalaixosDeMaquina(maquinaId);
    return allCalaixos;
  } catch (error) {
    throw error;
  }
};

module.exports={
    getAllMaquines,
    getOneMaquina,
    getAllCalaixosDeMaquina
}