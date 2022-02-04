let defaultPlants = require("./data");

let createdPlants = defaultPlants.length;

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
  ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
  : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
}

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
 return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.find((plant) => plant.id === Number(id));
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== id);
  
};

const needsSun = (plant) => {
  return !!plant.needsSun;
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === id;
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id == plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  
  return mappedPlant;
};

module.exports = {
  createdPlants,
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant,
  createNewPlant,
}
